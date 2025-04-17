using ContactAPI.Models;
using ContactAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IEmailService _emailService;
    private readonly ILogger<ContactController> _logger;

    public ContactController(IEmailService emailService, ILogger<ContactController> logger)
    {
        _emailService = emailService;
        _logger = logger;
    }

    [HttpPost]
    public async Task<ActionResult<ContactResponse>> SubmitContact([FromBody] ContactRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(new ContactResponse
            {
                Success = false,
                Message = "Invalid form data"
            });
        }

        _logger.LogInformation("Processing contact form submission from {Name} ({Email})", request.Name, request.Email);

        try
        {
            // Send email to admin
            var adminEmailSuccess = await _emailService.SendContactEmailAsync(request);
            
            if (!adminEmailSuccess)
            {
                _logger.LogWarning("Failed to send contact notification email to admin");
            }

            // Send confirmation email to user
            var userEmailSuccess = await _emailService.SendConfirmationEmailAsync(request);
            
            if (!userEmailSuccess)
            {
                _logger.LogWarning("Failed to send confirmation email to user {Email}", request.Email);
            }

            // If either email was sent successfully, consider it a success
            if (adminEmailSuccess || userEmailSuccess)
            {
                return Ok(new ContactResponse
                {
                    Success = true,
                    Message = "Thank you for your message. We will get back to you soon."
                });
            }
            else
            {
                // Both emails failed
                return StatusCode(500, new ContactResponse
                {
                    Success = false,
                    Message = "We encountered a problem sending your message. Please try again later."
                });
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing contact form submission");
            
            return StatusCode(500, new ContactResponse
            {
                Success = false,
                Message = "An unexpected error occurred. Please try again later."
            });
        }
    }
} 