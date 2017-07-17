namespace SpotifyBackend.Entities
{
    public class Track : IEntity
    {
        public string Id { get; set; }
        public double Rating { get; set; }
    }
}
