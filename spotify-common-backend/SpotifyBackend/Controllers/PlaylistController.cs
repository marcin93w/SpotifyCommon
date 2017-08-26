using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SpotifyBackend.Helpers;
using SpotifyBackend.Services;

namespace SpotifyBackend.Controllers
{
    [Route("api/playlist")]
    public class PlaylistController : Controller
    {
        private IPlaylistRepository _playlistRepository;

        public PlaylistController(IPlaylistRepository playlistRepository,
            IConfiguration configuration)
        {
            _playlistRepository = playlistRepository;
        }

        [HttpPost("{playlistId}")]
        public IActionResult SetPlaylistForDatabase([FromHeader(Name = "Authorization")] string token, string userId, string playlistId)
        {
            if (!token.IsValid())
                return Unauthorized();

            if (String.IsNullOrWhiteSpace(userId) || String.IsNullOrWhiteSpace(playlistId))
                return BadRequest();

            var feedResult =_playlistRepository.FeedDatabaseFromPlaylist(token, userId, playlistId);

            return feedResult ? 
                NoContent() : 
                StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}
