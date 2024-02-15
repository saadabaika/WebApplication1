using Microsoft.AspNetCore.Identity;

namespace WebApplication2.Models
{
    public class User : IdentityUser
    {
        public Cart Cart { get; set; }
    }
}
