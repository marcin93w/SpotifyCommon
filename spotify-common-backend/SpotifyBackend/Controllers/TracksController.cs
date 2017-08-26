using Microsoft.AspNetCore.Http;
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
        public IActionResult Get()
        {
            var response = _playlistRepository.GetAllTracks();

            return Ok(response);
        }

        [HttpPost]
        [Route("{spotifyId}")]
        public IActionResult Rate(string spotifyId, int rating, int userId)
        {
            if (string.IsNullOrWhiteSpace(spotifyId))
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest();

            if (!_playlistRepository.TrackExist(spotifyId))
                return NotFound();

            var rateResult = _playlistRepository.RateTrack(spotifyId, rating, userId);

            return rateResult ? 
                NoContent() : 
                StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}
