using System.ComponentModel.DataAnnotations;

namespace entities;

public class User
{   
    [Key]
    public long Id { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public double Mobile { get; set; }
    public DateTime? Dob { get; set; }
    public string Email { get; set; } = null!;
    public string Profile { get; set; } = null!;
}