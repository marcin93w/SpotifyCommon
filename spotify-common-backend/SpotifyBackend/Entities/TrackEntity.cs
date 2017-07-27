using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SpotifyBackend.Entities
{
    public class TrackEntity : IEntity
    {
        [BsonElement("_id")]
        public ObjectId _id {get;set;}

        [BsonElement("SpotifyId")]
        public string SpotifyId { get; set; }

        [BsonElement("Rates")]
        public List<Rate> Rates { get; set; }
    }
}
