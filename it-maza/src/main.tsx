import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
const newCreateRoot = createRoot(rootElement!);

newCreateRoot.render(<App />);
