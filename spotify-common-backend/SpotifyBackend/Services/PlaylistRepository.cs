using System;
using System.Net.Http;
using SpotifyBackend.Helpers;

namespace SpotifyBackend.Services
{
    public class PlaylistRepository : IPlaylistRepository
    {
        public string GetAllTracks(string token, string userId, string playlistId)
        {
            var jsonResponse = GetTracksJson(token, userId, playlistId);

            var deserializedResponse = Deserializer.DeserializeTrack(jsonResponse);

            throw new NotImplementedException();
        }

        public bool RateTrack(int id, int rate)
        {
            throw new NotImplementedException();
        }

        private static string GetTracksJson(string token, string userId, string playlistId)
        {
            string jsonResponse;

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Add("Authorization", token);
                client.DefaultRequestHeaders.Add("Connection", "keep-alive");
                client.DefaultRequestHeaders.Add("Accept-Language", "pl-PL,pl;q=0.8,en-US;q=0.6,en;q=0.4");

                var stringTask = client.GetAsync($"https://api.spotify.com/v1/users/{userId}/playlists/{playlistId}/tracks").Result.Content;

                jsonResponse = stringTask.ReadAsStringAsync().Result;
            }

            return jsonResponse;
        }
    }
}
