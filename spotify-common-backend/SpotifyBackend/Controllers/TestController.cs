using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SpotifyBackend.Services;

namespace SpotifyBackend.Controllers
{
    [Route("api/test")]
    public class TestController : Controller
    {
        private IPlaylistRepository _playlistRepository;

        public TestController(IPlaylistRepository playlistRepository,
            IConfiguration configuration)
        {
            _playlistRepository = playlistRepository;
        }

        [HttpGet]
        public IActionResult Test()
        {
            var result = _playlistRepository.GetAllTracks();

            return Ok(result);
        }
    }
}
