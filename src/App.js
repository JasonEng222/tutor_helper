import './App.css';
import VideoJS from './videoPlayer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="video-player">
          <VideoJS></VideoJS>
          {/* <video controls>
            <source src="https://www.youtube.com/watch?v=CglNRNrMFGM"></source>
          </video> */}
          
        </div>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
