using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace entities;

public class Post
{   
    [Key]
    public long Id { get; set; }
    public int SenderId { get; set; }
    public int Likes { get; set; }
    public string Body { get; set; } = "";
    
    [NotMapped]
    public IEnumerable<string> Attachments { get; set; } = new List<string>();
    public string Sender { get; set; } = null!;
}