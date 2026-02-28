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
  <div className="song">
    <p><strong>Blinding Lights</strong></p>
    <small>The Weeknd</small>
  </div>

  <div className="song">
    <p><strong>IF</strong></p>
    <small>Davido</small>
  </div>
</div>
    </div>
  );
}

export default App;