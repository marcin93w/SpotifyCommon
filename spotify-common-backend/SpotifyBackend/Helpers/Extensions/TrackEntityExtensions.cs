using System.Collections.Generic;
using System.Linq;
using SpotifyBackend.Entities;

namespace SpotifyBackend.Helpers.Extensions
{
    public static class TrackEntityExtensions
    {
        public static double AverageOrZero(this IReadOnlyCollection<Rate> rates)
        {
            return !rates.Any() ?
                0 :
                rates.Average(item => item.Value);
        }
    }
}
