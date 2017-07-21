using System;
using Newtonsoft.Json;
using SpotifyBackend.Models.SpotifyModels.Generated;
using Track = SpotifyBackend.Entities.Track;

namespace SpotifyBackend.Helpers
{
    public static class Deserializer
    {
        public static Track DeserializeTrack(string jsonResponse)
        {
            var serializer = new Newtonsoft.Json.JsonSerializer();

            var obj = JsonConvert.DeserializeObject<TracksResponse>(jsonResponse);

            throw new NotImplementedException();
        }
    }
}
