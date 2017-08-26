using System.Diagnostics;
using MongoDB.Bson.Serialization.Attributes;

namespace SpotifyBackend.Entities
{
    [DebuggerDisplay("{Value} from user {UserId}")]
    public class Rate : IEntity
    {
        [BsonElement("UserId")]
        public int UserId { get; set; }

        [BsonElement("Value")]
        public int Value { get; set; }
    }
}
