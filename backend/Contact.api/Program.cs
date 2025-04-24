using Contact.api.Models;
using Contact.api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add HttpClient for reCAPTCHA verification
builder.Services.AddHttpClient<RecaptchaService>();

// Register RecaptchaService
builder.Services.AddScoped<RecaptchaService>();

// Add configuration
builder.Services.Configure<RecaptchaSettings>(builder.Configuration.GetSection("Recaptcha"));


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(
                "http://localhost:3000",  // Default React port (CRA)
                "http://localhost:5173"   // Default Vite port
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});


// Register email service and configuration
builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
builder.Services.AddScoped<IEmailService, EmailService>();

var app = builder.Build();

app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    c.RoutePrefix = string.Empty; // Serve Swagger UI at root (e.g., /)
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
