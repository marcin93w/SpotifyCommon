using System.Collections.Generic;
using System.Linq;
using SpotifyBackend.Entities;
using SpotifyBackend.Models.SpotifyModels.Generated;

namespace SpotifyBackend.Helpers
{
    public static class CustomMappers
    {
        public static List<TrackEntity> ExtractTracksFromResponse(TracksResponse response)
        {
            var responseItems = response.Items;
            
            var trackList = responseItems.Select(trackItem => trackItem.Track.Id)
                .Select(id => new TrackEntity
                {
                    SpotifyId = id,
                    Rates = new List<Rate>()
                })
                .ToList();

            return trackList;
        }
    }
}
