using System.ComponentModel.DataAnnotations;

namespace entities;

public class Post
{   
    [Key]
    public long Id { get; set; }
    public int SenderId { get; set; }
    public int Likes { get; set; }
    public string Body { get; set; } = "";
    public IList<string> Attachments { get; set; } = new List<string>();
    public string Sender { get; set; } = null!;
}