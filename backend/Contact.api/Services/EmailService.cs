using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using Contact.api.Models;

namespace Contact.api.Services
{
    public class EmailService : IEmailService
    {
        private readonly EmailSettings _emailSettings;
        private readonly ILogger<EmailService> _logger;

        public EmailService(IOptions<EmailSettings> emailSettings, ILogger<EmailService> logger)
        {
            _emailSettings = emailSettings.Value;
            _logger = logger;
        }

        public async Task<bool> SendContactEmailAsync(ContactRequest request)
        {
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(_emailSettings.FromName, _emailSettings.FromEmail));

                // Use ToEmail from the request if provided, otherwise fall back to the settings
                string recipientEmail = !string.IsNullOrEmpty(request.Email)
                    ? request.Email
                    : _emailSettings.ToEmail;

                message.To.Add(new MailboxAddress("", recipientEmail));
                message.Subject = $"New Contact Form Submission: {request.Subject}";

                var builder = new BodyBuilder
                {
                    HtmlBody = $@"
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> {request.Name}</p>
                    <p><strong>Email:</strong> {request.Email}</p>
                    <p><strong>Subject:</strong> {request.Subject}</p>
                    <p><strong>Message:</strong><br>{request.Message}</p>
                "
                };

                message.Body = builder.ToMessageBody();

                return await SendEmailAsync(message);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error sending contact email");
                return false;
            }
        }

        public async Task<bool> SendConfirmationEmailAsync(ContactRequest request)
        {
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(_emailSettings.FromName, _emailSettings.FromEmail));
                message.To.Add(new MailboxAddress(request.Name, request.Email));
                message.Subject = "Thank you for contacting us";

                var builder = new BodyBuilder
                {
                    HtmlBody = $@"
                    <h2>Thank you for contacting us!</h2>
                    <p>Dear {request.Name},</p>
                    <p>We have received your message regarding <strong>'{request.Subject}'</strong> and will respond as soon as possible.</p>
                    <p>For your reference, here's a copy of your message:</p>
                    <p><em>{request.Message}</em></p>
                    <p>Best regards,<br>Our Team</p>
                "
                };

                message.Body = builder.ToMessageBody();

                return await SendEmailAsync(message);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error sending confirmation email");
                return false;
            }
        }

        private async Task<bool> SendEmailAsync(MimeMessage message)
        {
            try
            {
                using var client = new SmtpClient();

                await client.ConnectAsync(
                    _emailSettings.SmtpServer,
                    _emailSettings.SmtpPort,
                    _emailSettings.EnableSsl ? SecureSocketOptions.StartTls : SecureSocketOptions.None);

                if (!string.IsNullOrEmpty(_emailSettings.SmtpUsername) && !string.IsNullOrEmpty(_emailSettings.SmtpPassword))
                {
                    await client.AuthenticateAsync(_emailSettings.SmtpUsername, _emailSettings.SmtpPassword);
                }

                await client.SendAsync(message);
                await client.DisconnectAsync(true);

                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to send email");
                return false;
            }
        } 
    }
}
