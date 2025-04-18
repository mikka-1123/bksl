using Contact.api.Models;

namespace Contact.api.Services
{
    public interface IEmailService
    {
        Task<bool> SendContactEmailAsync(ContactRequest request);
        Task<bool> SendConfirmationEmailAsync(ContactRequest request);
    }
}
