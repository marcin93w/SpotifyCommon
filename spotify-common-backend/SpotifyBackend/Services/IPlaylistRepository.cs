namespace SpotifyBackend.Services
{
    public interface IPlaylistRepository
    {
        string GetAllTracks(string token, string userId, string playlistId);
        bool RateTrack(int id, int rate);
    }
}
