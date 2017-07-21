using System.Collections.Generic;

namespace SpotifyBackend.Entities
{
    public class TrackEntity : IEntity
    {
        public string Id { get; set; }
        public List<Rate> Rates { get; set; }
    }
}
