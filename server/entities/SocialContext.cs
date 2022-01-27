using Microsoft.EntityFrameworkCore;

namespace entities;

public class SocialContext : DbContext
{
    public SocialContext(DbContextOptions<SocialContext> options): base(options)
    {
    }

    public DbSet<User> Users { get; set; } = null!;
    public DbSet<Post> Posts { get; set; } = null!;
}
