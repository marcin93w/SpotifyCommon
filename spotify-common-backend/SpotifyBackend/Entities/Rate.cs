﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyBackend.Entities
{
    public class Rate : IEntity
    {
        public string UserId { get; set; }
        public int Value { get; set; }
    }
}
