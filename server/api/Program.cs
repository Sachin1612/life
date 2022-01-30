using Microsoft.EntityFrameworkCore;
using services.concretes;
using services.interfaces;
using entities;
using initializer;

const string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(option => {
    option.AddPolicy(name: MyAllowSpecificOrigins,
    builder => {
        builder.WithOrigins("http://localhost:3000", "http://localhost:5298", "https://localhost:7178");
    });
});

// Depedencies
builder.Services.AddDbContext<SocialContext>(opt => opt.UseInMemoryDatabase("InMemoryDb"));
builder.Services.AddControllers();

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IPostService, PostService>();
builder.Services.AddHostedService<DataInit>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);
app.UseAuthorization();
app.MapControllers();
app.Run();
