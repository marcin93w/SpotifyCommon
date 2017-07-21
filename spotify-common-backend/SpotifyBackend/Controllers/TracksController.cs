using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SpotifyBackend.Services;

namespace SpotifyBackend.Controllers
{
    [Route("api/tracks")]
    public class TracksController : Controller
    {
        private IPlaylistRepository _playlistRepository;

        public TracksController(IPlaylistRepository playlistRepository,
            IConfiguration configuration)
        {
            _playlistRepository = playlistRepository;
        }



        [HttpGet]
        public IActionResult Get([FromHeader(Name = "Authorization")] string token, string userId, string playlistId)
        {
            var response = _playlistRepository.GetAllTracks(token, userId, playlistId);

            return Ok(response);
        }

        [HttpPost]
        [Route("{id}")]
        public IActionResult Rate(int id, int rating)
        {


            return Ok("Not implemented");
        }
    }
}
