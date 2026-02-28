function App() {
  return (
    <div className="app">
      <h1 className="title">WavePlayer</h1>

      <input
        type="text"
        placeholder="Search for songs..."
        className="search"
      />

      <div className="song-list">
       <div className="song-list">
  <div className="song">
    <div className="album-art"></div>
    
    <div className="song-info">
      <p className="song-title">Blinding Lights</p>
      <p className="song-artist">The Weeknd</p>
    </div>
  </div>

  <div className="song">
    <div className="album-art"></div>

    <div className="song-info">
      <p className="song-title">IF</p>
      <p className="song-artist">Davido</p>
    </div>
  </div>

  <div className="song">
    <div className="album-art"></div>

    <div className="song-info">
      <p className="song-title">Levitating</p>
      <p className="song-artist">Dua Lipa</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default App;