using System.Collections.Generic;
using SpotifyBackend.Models;

namespace SpotifyBackend.Services
{
    public interface IPlaylistRepository
    {
        bool FeedDatabaseFromPlaylist(string token, string userId, string playlistId);
        List<TrackForReturnDto> GetAllTracks();
        bool RateTrack(string id, int rate, int userId);
        bool TrackExist(string id);
    }
}
