namespace Contact.api.Models
{
    public class RecaptchaSettings
    {
        public string SecretKey { get; set; } = string.Empty;
        public double MinimumScore { get; set; } = 0.5;
    }
}
