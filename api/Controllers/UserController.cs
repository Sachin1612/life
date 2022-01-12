using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    public List<string> GetUsers()
    {
        return new List<string> 
        {
            "test",
            "test2",
            "Test3"
        };
    }
}