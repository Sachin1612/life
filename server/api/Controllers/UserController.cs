using Microsoft.AspNetCore.Mvc;
using services.interfaces;
namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private IUserService _userService;
    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<dynamic> GetUsers()
    {
       return await _userService.GetUsers();
    }
}