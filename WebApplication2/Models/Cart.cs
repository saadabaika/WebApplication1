namespace WebApplication2.Models
{
    public class Cart
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public int Quantity { get; set; }
        public ICollection<Product> Products { get; set; }  
    }
}
