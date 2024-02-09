import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import GAME from "./GAME.jsx";

// Correct the file extension and casing

const rootElement = document.getElementById("root");

function App() {
  return (
    <div>
      <GAME cache={2} />
    </div>
  );
}

const root = createRoot(rootElement); // Use createRoot from react-dom/client
root.render(<App />);

console.warn(
  "Note: The 'GAME.jsx' file name is using incorrect casing. It should be PascalCase (e.g., 'Game.jsx')"
);
