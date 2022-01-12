using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class SocialContext : DbContext
    {
        public SocialContext(DbContextOptions<SocialContext> options): base(options)
        {
        }

        public DbSet<User> Users { get; set; } = null!;
    }
}