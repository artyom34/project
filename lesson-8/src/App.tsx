// const tracks = null;

// const tracks = [];

const tracks = [
  {
    id: 1,
    title: "Vocal track",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    id: 2,
    title: "Instrumental track",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
  },
];

const trackSelectedId = 1;

function App() {
  if (tracks === null) {
    return (
      <div>
        <h1>Musicfun</h1>
        <span>Loading...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Musicfun</h1>
        <span>No tracks</span>
      </div>
    );
  }

  return (
    <div>
      <h1>Musicfun</h1>
      <ul>
        {tracks.map((track) => {
          return (
            <li
              key={track.id}
              style={{ border: track.id === trackSelectedId ? "2px solid black" : "none" }}
            >
              <div>{track.title}</div>
              <audio controls src={track.url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
