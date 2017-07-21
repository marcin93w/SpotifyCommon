using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyBackend.Models.SpotifyModels.Generated
{
    public class TracksResponse
    {
        public string Href { get; set; }
        public IList<Item> Items { get; set; }
        public int Limit { get; set; }
        public object Next { get; set; }
        public int Offset { get; set; }
        public object Previous { get; set; }
        public int Total { get; set; }
    }

    public class ExternalUrls
    {
        public string Spotify { get; set; }
    }

    public class AddedBy
    {
        public ExternalUrls ExternalUrls { get; set; }
        public string Href { get; set; }
        public string Id { get; set; }
        public string Type { get; set; }
        public string Uri { get; set; }
    }

    public class Artist
    {
        public ExternalUrls ExternalUrls { get; set; }
        public string Href { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Uri { get; set; }
    }

    public class Image
    {
        public int Height { get; set; }
        public string Url { get; set; }
        public int Width { get; set; }
    }

    public class Album
    {
        public string AlbumType { get; set; }
        public IList<Artist> Artists { get; set; }
        public IList<string> AvailableMarkets { get; set; }
        public ExternalUrls ExternalUrls { get; set; }
        public string Href { get; set; }
        public string Id { get; set; }
        public IList<Image> Images { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Uri { get; set; }
    }

    public class ExternalIds
    {
        public string Isrc { get; set; }
    }

    public class Track
    {
        public Album Album { get; set; }
        public IList<Artist> Artists { get; set; }
        public IList<string> AvailableMarkets { get; set; }
        public int DiscNumber { get; set; }
        public int DurationMs { get; set; }
        public bool Explicit { get; set; }
        public ExternalIds ExternalIds { get; set; }
        public ExternalUrls ExternalUrls { get; set; }
        public string Href { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
        public int Popularity { get; set; }
        public string PreviewUrl { get; set; }
        public int TrackNumber { get; set; }
        public string Type { get; set; }
        public string Uri { get; set; }
    }

    public class Item
    {
        public DateTime AddedAt { get; set; }
        public AddedBy AddedBy { get; set; }
        public bool IsLocal { get; set; }
        public Track Track { get; set; }
    }


}
