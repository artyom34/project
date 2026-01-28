import { useState } from "react";

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
  const [trackSelectedId, setTrackSelectedId] = useState(null); // useState<number | null>(null);

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
      <button onClick={() => setTrackSelectedId(null)}>reset selected</button>
      <ul>
        {tracks.map((track) => {
          return (
            <li
              key={track.id}
              style={{
                border:
                  track.id === trackSelectedId ? "1px solid black" : "none",
              }}
            >
              <div
                onClick={() => {
                  setTrackSelectedId(track.id);
                }}
              >
                {track.title}
              </div>
              <audio controls src={track.url}></audio>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
