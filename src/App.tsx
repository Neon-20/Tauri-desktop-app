import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Pranav's desktop App</h1>
      <h2>Visit Pranav's PortFolio For more Info about him. 🚀</h2>

      <div className="row">
        <a href="https://www.pranavrajveer.co🚀m" target="_blank">
          <img src="/pranav.png" className="logo pranav" alt="Pranav Logo" />
        </a>
        {/* <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a> */}
        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>

      <p className=""> Share your Email/Name and say Hi to ME.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name or an email..."
        />
        <button type="submit">Greet</button>
      </form>
    
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
