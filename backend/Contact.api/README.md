
# Project Configuration Guide

This guide outlines the configuration steps for setting up the `appsettings.json` file, managing secrets using the .NET Secret Manager, and configuring CORS for the application.

## 1. Configure `appsettings.json`

The `appsettings.json` file contains configuration settings for logging, allowed hosts, email, and Google reCAPTCHA. Below is the structure of the file:

```json
{
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft.AspNetCore": "Warning"
        }
    },
    "AllowedHosts": "*",
    "EmailSettings": {
        "FromName": "<enter name here>",
        "EnableSsl": true
    },
    "Recaptcha": {
        "MinimumScore": 0.5
    }
}
```

### Key Sections:
- **Logging**: Configures log levels for the application. Default logs are set to `Information`, while `Microsoft.AspNetCore` logs are set to `Warning`.
- **AllowedHosts**: Set to `*` to allow all hosts. Modify this for production to restrict to specific domains.
- **EmailSettings**: Contains email-related settings, such as the sender's name and SSL enablement.
- **Recaptcha**: Specifies the minimum score for Google reCAPTCHA validation (default: `0.5`).

## 2. Manage Secrets with .NET Secret Manager

For development environments (local machine), sensitive configuration data such as email credentials and reCAPTCHA secrets should be stored using the .NET Secret Manager.

### Initialize Secret Manager
Run the following command to initialize the secret manager for your project:

```bash
dotnet user-secrets init
```

### Set Email Secrets
Add the following email-related secrets:

```bash
dotnet user-secrets set "EmailSettings:SmtpServer" "<smtp-server>"
dotnet user-secrets set "EmailSettings:SmtpPort" "<smtp-port>"
dotnet user-secrets set "EmailSettings:SmtpUsername" "<username>"
dotnet user-secrets set "EmailSettings:SmtpPassword" "<password>"
dotnet user-secrets set "EmailSettings:FromEmail" "<from-email>"
dotnet user-secrets set "EmailSettings:FromName" "<from-name>"
dotnet user-secrets set "EmailSettings:ToEmail" "<to-email>"
dotnet user-secrets set "EmailSettings:EnableSsl" "<true-or-false>"
```

### Set Google reCAPTCHA Secrets
Add the reCAPTCHA secret key:

```bash
dotnet user-secrets set "Recaptcha:SecretKey" "<secret-key>"
```

> **Note**: The Secret Manager is intended for development purposes only. For production, use a secure vault solution like Azure Key Vault or AWS Secrets Manager.

## 3. Configure CORS (Cross-Origin Resource Sharing)

CORS is configured in the `Program.cs` file to allow specific origins to access the API. To enable CORS for specific URLs:

1. Open `Program.cs`.
2. Add the valid origins (URLs) to the CORS policy configuration.

Example:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", builder =>
    {
        builder.WithOrigins("https://example.com", "https://another-domain.com")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

app.UseCors("AllowSpecificOrigins");
```

Replace `"https://example.com"` and `"https://another-domain.com"` with the actual URLs that should be allowed to access the API.

> **Important**: Restrict CORS origins in production to trusted domains only to enhance security.

## Additional Notes
- Ensure all placeholders (e.g., `<smtp-server>`, `<secret-key>`) are replaced with actual values.
- Test the configuration in a development environment before deploying to production.
- For production deployments, consider using environment-specific configuration files (e.g., `appsettings.Production.json`) and secure secret management.
```
