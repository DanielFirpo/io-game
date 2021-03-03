import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Game from './components/pages/Game';
import socketIOClient from "socket.io-client";


function App() {

  const [response, setResponse] = useState("Connecting...");

  useEffect(() => {
    console.log("connecting to " + process.env.REACT_APP_BACKEND_URL)
    const socket = socketIOClient(process.env.REACT_APP_BACKEND_URL);
    socket.on("ConnectSuccess", data => {
      setResponse(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>{response}</h1>
      <Game></Game>
    </div>
  );
}

export default App;
