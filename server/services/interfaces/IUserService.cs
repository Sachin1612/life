namespace services.interfaces;

public interface IUserService
{
    Task Init();
    Task<dynamic> GetUsers();
}
