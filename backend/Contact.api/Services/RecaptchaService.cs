using Contact.api.Models;
using Microsoft.Extensions.Options;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Contact.api.Services
{
    public class RecaptchaService
    {
        private readonly HttpClient _httpClient;
        private readonly RecaptchaSettings _settings; // Changed to use settings class

        public RecaptchaService(HttpClient httpClient, IOptions<RecaptchaSettings> settings)
        {
            _httpClient = httpClient;
            _settings = settings.Value; // Get the configured settings
        }

        public async Task<bool> VerifyToken(string token)
        {
            if (string.IsNullOrEmpty(token))
                return false;

            try
            {
                // Send credentials in POST body, not URL
                var content = new FormUrlEncodedContent(new Dictionary<string, string>
                {
                    { "secret", _settings.SecretKey },
                    { "response", token }
                });

                var response = await _httpClient.PostAsync(
                    "https://www.google.com/recaptcha/api/siteverify",
                    content);

                if (!response.IsSuccessStatusCode)
                    return false;

                var json = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<RecaptchaResponse>(json);
                return result?.Success == true && result.Score >= _settings.MinimumScore;
            }
            catch
            {
                return false;
            }
        }

        private class RecaptchaResponse
        {
            [JsonPropertyName("success")]
            public bool Success { get; set; }

            [JsonPropertyName("score")]
            public double Score { get; set; }
        }
    }
}
