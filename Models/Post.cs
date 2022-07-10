using System.ComponentModel.DataAnnotations.Schema;

namespace me.Models
{
    public class Post
    {

        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime CreatedDate { get; set; }
        
        public string UserName { get; set; }
    }
}
