# Contact Form SPA

A modern Single Page Application (SPA) built with **React** (Frontend) and **ASP.NET Core Web API** (Backend). The application uses **Google reCAPTCHA** to prevent spam submissions and **MailKit SMTP** to send emails after successful verification.

---

# Project Structure

```
Project
│
├── Frontend (React + TypeScript)
└── Backend (ASP.NET Core Web API)
```

---

# Frontend Configuration

Before running or deploying the frontend, update the following files.

---

## 1. Configure Backend API URL

**File**

```
src/api/api.ts
```

Update the `API_BASE_URL`.

### Local Development

```ts
const API_BASE_URL = "https://localhost:7232";
```

### Production

```ts
const API_BASE_URL = "https://your-api-domain.com";
```

---

## 2. Configure Query Client URL

**File**

```
src/queryClient.ts
```

Locate:

```ts
const url = "...";
```

Update it with the same URL used in `api.ts`.

> **Important**
>
> Both `api.ts` and `queryClient.ts` should always point to the same backend environment.

---

## 3. Configure Google reCAPTCHA Site Key

**File**

```
src/main.ts
```

Replace the existing Site Key with your own Google reCAPTCHA Site Key.

Example:

```ts
siteKey: "YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
```

---

# Backend Configuration

The backend configuration is primarily managed through the `appsettings` files.

Update the following files according to your deployment environment.

```
appsettings.json

appsettings.Development.json

appsettings.Production.json
```

---

## Example appsettings.json

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
    "FromName": "<enter-name>",
    "EnableSsl": true
  },

  "Recaptcha": {
    "MinimumScore": 0.5
  }
}
```

---

## Email Settings

Update the EmailSettings section with your SMTP credentials.

Example:

```json
"EmailSettings": {
  "SmtpServer": "",
  "SmtpPort": "",
  "SmtpUsername": "",
  "SmtpPassword": "",
  "FromEmail": "",
  "FromName": "",
  "ToEmail": "",
  "EnableSsl": true
}
```

---

## Google reCAPTCHA Settings

Configure your Google reCAPTCHA settings.

Example:

```json
"Recaptcha": {
  "SiteKey": "",
  "SecretKey": "",
  "MinimumScore": 0.5
}
```

---

## Important Configuration Notes

### Configuration Binding

The section names inside `appsettings.json` **must exactly match** the corresponding C# configuration model names.

For example:

```json
"EmailSettings"
```

must bind to

```csharp
EmailSettings
```

Likewise,

```json
"Recaptcha"
```

must bind to

```csharp
Recaptcha
```

If the names do not match, ASP.NET Core will not bind the configuration correctly.

---

## Allowed Hosts

```
AllowedHosts = "*"
```

allows requests from any host.

For production deployments, consider restricting this to your actual domain(s).

---

# Secret Management (Development)

Sensitive values such as SMTP credentials and Google reCAPTCHA secrets should **not** be committed to source control.

For local development, use the **.NET Secret Manager**.

---

## Initialize Secret Manager

```bash
dotnet user-secrets init
```

---

## Store Email Secrets

```bash
dotnet user-secrets set "EmailSettings:SmtpServer" "<smtp-server>"
dotnet user-secrets set "EmailSettings:SmtpPort" "<smtp-port>"
dotnet user-secrets set "EmailSettings:SmtpUsername" "<username>"
dotnet user-secrets set "EmailSettings:SmtpPassword" "<password>"
dotnet user-secrets set "EmailSettings:FromEmail" "<from-email>"
dotnet user-secrets set "EmailSettings:FromName" "<from-name>"
dotnet user-secrets set "EmailSettings:ToEmail" "<to-email>"
dotnet user-secrets set "EmailSettings:EnableSsl" "true"
```

---

## Store Google reCAPTCHA Secret

```bash
dotnet user-secrets set "Recaptcha:SecretKey" "<your-secret-key>"
```

> **Note**
>
> .NET Secret Manager is intended **only for development**.
>
> For production deployments, use secure secret management solutions such as:
>
> - Azure Key Vault
> - AWS Secrets Manager
> - Google Secret Manager

---

# Environment Variables (.env)

The project supports `.env` files only when deployed to cloud environments that provide environment variable support.

> **Important**
>
> `.env` files do **NOT** work on **Plesk Hosting**.
>
> If hosting on Plesk, configure all required settings directly inside the appropriate `appsettings.json` file.

---

# Google reCAPTCHA Flow

The application validates every contact request before sending an email.

```
User submits form
        │
        ▼
React loads Google reCAPTCHA
        │
        ▼
Google generates a Token
        │
        ▼
Frontend sends Token to ASP.NET Core API
        │
        ▼
Backend sends Token + SecretKey to Google
        │
        ▼
Google validates request
        │
    ┌───┴──────────┐
    │              │
 Invalid        Valid
    │              │
Return Error   Send Email
                   │
                   ▼
          Return Success Response
```

---

# Understanding Google reCAPTCHA

A common source of confusion is the difference between the **Site Key**, **Secret Key**, and **Token**.

---

## Site Key

- Public key
- Configured in the React frontend
- Used to render Google reCAPTCHA
- Safe to expose publicly

Example:

```ts
siteKey: "6Lxxxxxxxxxxxxxxxx"
```

---

## Secret Key

- Stored only in the backend
- Never exposed to the frontend
- Used to verify requests with Google

---

## Token

The **Token is NOT the Site Key.**

Every time a user successfully completes the reCAPTCHA challenge, Google generates a unique, short-lived **Token**.

The frontend sends this token to the backend.

The backend then verifies it with Google.

Example verification request:

```
POST

https://www.google.com/recaptcha/api/siteverify

secret=YOUR_SECRET_KEY

response=TOKEN_GENERATED_BY_FRONTEND
```

Where:

- `secret` = Backend Secret Key
- `response` = Token generated by Google

These are two completely different values.

---

# CORS Configuration

CORS is configured in `Program.cs`.

Example:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", policy =>
    {
        policy.WithOrigins(
                "https://example.com",
                "https://another-domain.com")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

app.UseCors("AllowSpecificOrigins");
```

Replace the example URLs with the frontend domains that should be allowed to access the API.

> **Important**
>
> Never use unrestricted CORS in production unless absolutely necessary.

---

# Deployment Checklist

## Frontend

- [ ] Update `API_BASE_URL` in `src/api/api.ts`
- [ ] Update backend URL in `src/queryClient.ts`
- [ ] Configure Google reCAPTCHA Site Key in `src/main.ts`

---

## Backend

- [ ] Update all `appsettings` files
- [ ] Configure `EmailSettings`
- [ ] Configure `Recaptcha`
- [ ] Verify configuration section names match C# models
- [ ] Configure CORS for production frontend URLs
- [ ] Store secrets securely
- [ ] Verify Secret Key is never exposed

---

# Additional Notes

- Email is sent **only after** successful Google reCAPTCHA verification.
- Every form submission generates a new reCAPTCHA Token.
- Backend validates every token with Google's verification endpoint before processing the request.
- Always keep the Secret Key confidential.
- Test your configuration thoroughly before deploying to production.

---

# Technologies Used

- React
- TypeScript
- ASP.NET Core Web API
- Google reCAPTCHA
- MailKit
- SMTP
- REST API
- .NET Secret Manager