using services.interfaces;
using entities;
using Microsoft.EntityFrameworkCore;

namespace services.concretes;

public class UserService : IUserService
{
    private readonly SocialContext _db;
    public UserService(SocialContext db)
    {
        _db = db;
    }

    public async Task<dynamic> GetUsers()
    {
        return await _db.Users.ToListAsync();
    }
}