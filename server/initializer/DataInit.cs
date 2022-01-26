using entities;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace initializer;

public class DataInit : IHostedService
{
    private readonly IServiceScopeFactory _scopeFactory;
    
    public DataInit(IServiceScopeFactory scopeFactory)
    {
        _scopeFactory = scopeFactory;
    }

    public async Task StartAsync(CancellationToken stoppingToken)
    {
        
        using (var scope = _scopeFactory.CreateScope())
        {
            SocialContext _socialContext = scope.ServiceProvider.GetRequiredService<SocialContext>();
            _socialContext.Users.AddRange(UserData.Seed());
            await _socialContext.SaveChangesAsync();
        }

        
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
       return Task.CompletedTask;
        //Cleanup logic here
    }
}