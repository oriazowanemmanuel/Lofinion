/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from 'react';
import './App.css';

import VideoPlayer from './VideoPlayer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reading Companion - Lofi Music & Calm Videos</h1>
      </header>

    <main>
        <div className="player-container">
      
          <VideoPlayer />
        </div>
        <p>Enjoy your reading with relaxing lofi music and calm videos.</p>
      </main>


    </div>
  );
}

export default App;