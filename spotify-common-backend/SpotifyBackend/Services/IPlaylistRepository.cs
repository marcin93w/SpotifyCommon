using System.Collections.Generic;
using SpotifyBackend.Entities;
using SpotifyBackend.Models;

namespace SpotifyBackend.Services
{
    public interface IPlaylistRepository
    {
        bool FeedDatabaseFromPlaylist(string token, string userId, string playlistId);
        List<TrackForReturnDto> GetAllTracks(string token, string userId, string playlistId);
        bool RateTrack(string id, int rate);
    }
}
