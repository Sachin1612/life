using entities;

namespace services.interfaces;

public interface IPostService
{
    Task<IEnumerable<Post>> GetPosts();
}
