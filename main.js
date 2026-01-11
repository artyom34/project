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

const listElements = document.createElement("ul");

const trackElement1 = document.createElement("li");
const trackTitleElement1 = document.createElement("div");
trackTitleElement1.append(tracks[0].title);

const audioElement1 = document.createElement("audio");
audioElement1.controls = true;
audioElement1.src = tracks[0].url;

trackElement1.append(trackTitleElement1);
trackElement1.append(audioElement1);

listElements.append(trackElement1);

const trackElement2 = document.createElement("li");
const trackTitleElement2 = document.createElement("div");
trackTitleElement2.append(tracks[1].title);

const audioElement2 = document.createElement("audio");
audioElement2.controls = true;
audioElement2.src = tracks[1].url;

trackElement2.append(trackTitleElement2);
trackElement2.append(audioElement2);

listElements.append(trackElement2);

rootElement.append(titleElement);
rootElement.append(listElements);
