const tracks = [
  {
    title: "Vocal tracks",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    title: "Instrumental tracks",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
  },
];

const rootElement = document.getElementById("root");
const titleElement = document.createElement("h1");
titleElement.append("Music player");

rootElement.append(titleElement);

const listElements = document.createElement("ul");

tracks.forEach((track) => {
  const trackElements = document.createElement("li");
  const trackTitleElement = document.createElement("div");
  trackTitleElement.append(track.title);

  trackElements.append(trackTitleElement);

  const audioElement = document.createElement("audio");
  audioElement.controls = true;
  audioElement.src = track.url;
  trackElements.append(audioElement);

  listElements.append(trackElements);
});

rootElement.append(listElements);
