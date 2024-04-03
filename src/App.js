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
      <iframe 
      width="1120" 
      height="630" 
      src="https://www.youtube.com/embed/4ROrW727q_s?si=GUuooLbWU-dFde_l" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
        
      </iframe>
      
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