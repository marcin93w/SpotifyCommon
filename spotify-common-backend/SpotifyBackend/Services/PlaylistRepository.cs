using System;
using System.Collections.Generic;
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
                var settings = MongoClientSettings.FromUrl(new MongoUrl(@"mongodb://localhost:27017"));

                var mongoClient = new MongoClient(settings);
                _database = mongoClient.GetDatabase(@"spotify-common");
            }
            catch (Exception ex)
            {
                throw new Exception("Can not access to db server.", ex);
            }
        }

        public bool FeedDatabaseFromPlaylist(string token, string userId, string playlistId)
        {
            var jsonFromSpotify = GetTracksJson(token, userId, playlistId);

            var tracksToInsert = Deserializer.DeserializeTracks(jsonFromSpotify);

            //TODO: Insert to DB

            throw new NotImplementedException();
        }

        public List<TrackForReturnDto> GetAllTracks(string token, string userId, string playlistId)
        {
            var tracksFromDb = new List<TrackEntity>();

            var tracksToReturn = Mapper.Map<List<TrackForReturnDto>>(tracksFromDb);

            return tracksToReturn;
        }

        public bool RateTrack(string id, int rate)
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
