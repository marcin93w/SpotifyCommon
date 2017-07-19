using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyBackend.Entities
{
    public class User : IEntity
    {
        public string SpotifyId { get; set; }
        public string SpotifyName { get; set; }
    }
}
