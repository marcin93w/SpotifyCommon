using SpotifyBackend.Services;
using Xunit;

namespace SpotifyBackend.Test.RepositoryTests
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
