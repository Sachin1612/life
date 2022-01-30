using services.interfaces;
using entities;
using Microsoft.EntityFrameworkCore;

namespace services.concretes;

public class PostService : IPostService
{
    private readonly SocialContext _db;
    public PostService(SocialContext db)
    {
        _db = db;
    }
    public async Task<IEnumerable<Post>> GetPosts()
    {
        return await _db.Posts.ToListAsync();
    }
}