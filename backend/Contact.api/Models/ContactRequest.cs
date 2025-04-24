﻿using System.ComponentModel.DataAnnotations;

namespace Contact.api.Models
{
    public class ContactRequest
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Subject { get; set; } = string.Empty;

        [Required]
        public string Message { get; set; } = string.Empty;

        public string RecaptchaToken { get; set; } // Add this
    }
}
