using ContactAPI.Models;

namespace ContactAPI.Services;

public interface IEmailService
{
    Task<bool> SendContactEmailAsync(ContactRequest request);
    Task<bool> SendConfirmationEmailAsync(ContactRequest request);
} 