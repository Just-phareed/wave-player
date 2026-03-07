<div className="controls">

  {/* PREVIOUS BUTTON */}
  <button
    onClick={() => {
      const currentIndex = songs.findIndex(
        (song) => song.title === currentSong.title
      );

      const prevIndex = (currentIndex - 1 + songs.length) % songs.length;

      setCurrentSong(songs[prevIndex]);
      audioRef.current.src = songs[prevIndex].src;
      audioRef.current.play();
      setIsPlaying(true);
    }}
  >
    ⏮
  </button>


  {/* PLAY / PAUSE BUTTON */}
  <button onClick={togglePlay}>
    {isPlaying ? "⏸" : "▶"}
  </button>


  {/* NEXT BUTTON */}
  <button
    onClick={() => {
      const currentIndex = songs.findIndex(
        (song) => song.title === currentSong.title
      );

      const nextIndex = (currentIndex + 1) % songs.length;

      setCurrentSong(songs[nextIndex]);
      audioRef.current.src = songs[nextIndex].src;
      audioRef.current.play();
      setIsPlaying(true);
    }}
  >
    ⏭
  </button>

</div>