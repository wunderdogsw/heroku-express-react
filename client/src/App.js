import React, { useState } from 'react';
import './App.css';

function App() {
  const [helloWorld, sethelloWorld] = useState(undefined)

  const getHelloWorld = async () => {
    const response = await fetch('api/hello-world')
    const responseText = await response.json()
    sethelloWorld(responseText)
  }

  return (
    <div className="App">
      {helloWorld &&
      <h1>{helloWorld}</h1>}
      <button
        onClick={getHelloWorld}
      >
        Get Hello World
      </button>
    </div>
  );
}

export default App;
