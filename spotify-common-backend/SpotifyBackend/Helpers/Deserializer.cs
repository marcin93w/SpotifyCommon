using System.Collections.Generic;
using Newtonsoft.Json;
using SpotifyBackend.Entities;
using SpotifyBackend.Models.SpotifyModels.Generated;

namespace SpotifyBackend.Helpers
{
    public static class Deserializer
    {
        public static IEnumerable<TrackEntity> DeserializeTracks(string jsonResponse)
        {
            var deserializedObject = JsonConvert.DeserializeObject<TracksResponse>(jsonResponse);

            return CustomMappers.ExtractTracksFromResponse(deserializedObject);

        }
    }
}
