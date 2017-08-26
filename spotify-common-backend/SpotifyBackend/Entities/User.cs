namespace SpotifyBackend.Entities
{
    public class User : IEntity
    {
        public string SpotifyId { get; set; }
        public string SpotifyName { get; set; }
    }
}
