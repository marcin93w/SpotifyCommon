using System;
using System.Collections.Generic;
using System.IO;
using Xunit;
using Newtonsoft.Json;
using SpotifyBackend;
using SpotifyBackend.Entities;
using SpotifyBackend.Services;

namespace SpotifyBackend.Test
{
    public class RepositoryMethodsTests
    {
        private IPlaylistRepository _repo;

        public RepositoryMethodsTests()
        {
            _repo = new PlaylistRepository();
        }

        [Fact]
        public void GetAllTracksShouldReturnAnyTrack()
        {
            var tracksList = _repo.GetAllTracks();

            Assert.NotEmpty(tracksList);
        }
    }
}
