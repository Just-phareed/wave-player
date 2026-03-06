const SongCard = ({ song, onPlay }) => {
  return (
    <div className="song-card">
      <img src={song.album.cover_medium} alt={song.title} />
      <h3>{song.title}</h3>
      <p>{song.artist.name}</p>

      <button onClick={() => onPlay(song.preview)}>
        Play
      </button>
    </div>
  );
};

export default SongCard;