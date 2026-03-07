import { useRef, useState } from "react";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      src: "/song.mp3",
      cover: "/images/blindinglights.jpg"
    },
    {
      title: "IF",
      artist: "Davido",
      src: "/if.mp3",
      cover: "/images/if.jpg"
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      src: "/levitating.mp3",
      cover: "/images/levitating.jpg"
    }
  ];

  const [currentSong, setCurrentSong] = useState(songs[0]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app">

      {/* TITLE */}
      <h1 className="title">WavePlayer</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search for songs..."
        className="search"
      />

      {/* SONG LIST */}
      <div className="song-list">
        {songs.map((song, index) => (
          <div
            className={`song ${
              song.title === currentSong.title ? "active" : ""
            }`}
            key={index}
            onClick={() => {
              setCurrentSong(song);
              audioRef.current.src = song.src;
              audioRef.current.play();
              setIsPlaying(true);
            }}
          >
            <div
              className="album-art"
              style={{
                backgroundImage: `url(${song.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            ></div>

            <div className="song-info">
              <p className="song-title">{song.title}</p>
              <p className="song-artist">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {/* AUDIO */}
      <audio ref={audioRef} src={currentSong.src}></audio>

      {/* MINI PLAYER */}
      <div className="mini-player">
        <div className="mini-left">
          <div
            className="mini-album"
            style={{
              backgroundImage: `url(${currentSong.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>

          <div className="mini-info">
            <p className="mini-title">{currentSong.title}</p>
            <p className="mini-artist">{currentSong.artist}</p>
          </div>
        </div>

        <button className="play-btn" onClick={togglePlay}>
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>

    </div>
  );
}

export default App;