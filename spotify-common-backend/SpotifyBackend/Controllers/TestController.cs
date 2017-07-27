using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SpotifyBackend.Helpers;
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
