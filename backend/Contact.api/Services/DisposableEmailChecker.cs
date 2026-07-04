using System.Text.Json;

namespace Contact.api.Services
{
    public class DisposableEmailChecker
    {
        private readonly HashSet<string> _blockedDomains;

        public DisposableEmailChecker(string jsonFilePath)
        {
            var json = File.ReadAllText(jsonFilePath);
            var domains = JsonSerializer.Deserialize<List<string>>(json) ?? new();
            _blockedDomains = new HashSet<string>(domains, StringComparer.OrdinalIgnoreCase);
        }

        public bool IsDisposable(string domain) => _blockedDomains.Contains(domain);
    }
}