namespace serviceapp.models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public int UserID { get; set; }
        public bool isComplete {get;set;}
        public DateTime ExpiresAt { get; set; }
        public int Priority { get; set; }
    }
}
