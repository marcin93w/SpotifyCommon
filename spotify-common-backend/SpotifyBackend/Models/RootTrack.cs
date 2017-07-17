using Newtonsoft.Json;

namespace SpotifyBackend.Models
{
    public class RootTrack
    {
        [JsonProperty("id")]
        public string Id { get; set; }
    }
}
