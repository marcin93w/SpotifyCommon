using System.Collections.Generic;
using MongoDB.Bson;

namespace SpotifyBackend.Entities
{
    public class TrackEntity : IEntity
    {
        public ObjectId _id {get;set;}
        public string SpotifyId { get; set; }
        public List<Rate> Rates { get; set; }
    }
}
