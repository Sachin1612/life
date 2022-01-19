using services.interfaces;
using entities;

namespace services.concretes;

public class UserService : IUserService
{
    private readonly SocialContext _db;
    public UserService(SocialContext db)
    {
        _db = db;
    }

    public async Task GetUsers ()
    {
        _db.Users
    }
}