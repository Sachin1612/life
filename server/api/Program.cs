using Microsoft.EntityFrameworkCore;
using services.concretes;
using services.interfaces;
using entities;

var builder = WebApplication.CreateBuilder(args);
var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// Add services to the container.

builder.Services.AddCors(option => {
    option.AddPolicy(name: MyAllowSpecificOrigins,
    builder => {
        builder.WithOrigins("http://localhost:5298", "https://localhost:7178");
    });
});
// Depedencies
builder.Services.AddControllers();
builder.Services.AddDbContext<SocialContext>(opt => opt.UseInMemoryDatabase("mydb"));
builder.Services.AddScoped<IUserService, UserService>();


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
