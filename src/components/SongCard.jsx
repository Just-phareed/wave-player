const SongCard = ({ song, onPlay }) => {
  return (
    <div className="song-card">

      {/* Album Cover */}
      <img
        className="album-art"
        src={song.album.cover_medium}
        alt={song.title}
      />

      {/* Song Info */}
      <div className="song-info">
        <p className="song-title">{song.title}</p>
        <p className="song-artist">{song.artist.name}</p>
      </div>

      {/* Play Button */}
      <button
        className="play-btn"
        onClick={() => onPlay(song.preview)}
      >
        ▶
      </button>

    </div>
  );
};

export default SongCard;