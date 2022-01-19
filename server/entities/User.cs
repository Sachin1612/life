namespace entities;

public class User
{   
    public long Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public double Mobile { get; set; }
    public DateTime? Dob { get; set; }
    public string Email { get; set; }
}