using Microsoft.AspNetCore.Mvc;
using services.interfaces;
namespace api.Controllers;

[ApiController]
[Route("api/posts")]
public class PostController : ControllerBase
{
    private IPostService _postService;
    public PostController(IPostService postService)
    {
        _postService = postService;
    }

    [HttpGet]
    public async Task<dynamic> GetPosts()
    {
       return await _postService.GetPosts();
    }
}