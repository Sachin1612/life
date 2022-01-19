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

    public async Task Init()
    {
        _db.Users.AddRange(
            new List<User> {
                new User
                {
                    Id=1,
                    FirstName="Jay",
                    LastName="test",
                    Email="t@"
                },
                new User
                {
                    Id=2,
                    FirstName="Sac",
                    LastName="test",
                    Email="t2@"
                }
            }
            );
            await _db.SaveChangesAsync();
    }
    public async Task<dynamic> GetUsers()
    {
        return await _db.Users.ToListAsync();
    }
}