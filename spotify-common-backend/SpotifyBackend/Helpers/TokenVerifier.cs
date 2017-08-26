using System;

namespace SpotifyBackend.Helpers
{
    public static class TokenVerifier
    {
        public static bool IsValid(this string token)
        {
            return 
                !String.IsNullOrWhiteSpace(token) && 
                token.ToLowerInvariant().StartsWith("bearer");
        }

    }
}
