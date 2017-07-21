using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
                    Id = id,
                    Rates = new List<Rate>()
                })
                .ToList();

            return trackList;
        }
    }
}
