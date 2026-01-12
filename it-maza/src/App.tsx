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

function App() {
  return (
    <div>
      <h1>Music player</h1>
      <ul>
        {tracks.map((track) => {
          return (
            <li key={track.id}>
              <div>{track.title}</div>
              <audio controls src={track.url}></audio>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
