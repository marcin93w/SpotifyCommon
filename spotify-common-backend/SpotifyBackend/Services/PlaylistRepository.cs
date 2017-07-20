using System;
using System.Net.Http;
using AutoMapper;
using MongoDB.Driver;
using SpotifyBackend.Entities;
using SpotifyBackend.Helpers;
using SpotifyBackend.Models;

namespace SpotifyBackend.Services
{
    public class PlaylistRepository : IPlaylistRepository
    {
        public static string ConnectionString { get; set; }
        public static string DatabaseName { get; set; }
        public static bool IsSSL { get; set; }

        private IMongoDatabase _database;

        public PlaylistRepository()
        {
            try
            {
                var settings = MongoClientSettings.FromUrl(new MongoUrl(ConnectionString));

                var mongoClient = new MongoClient(settings);
                _database = mongoClient.GetDatabase(DatabaseName);
            }
            catch (Exception ex)
            {
                throw new Exception("Can not access to db server.", ex);
            }
        }

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

        private Track GetTrackById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
