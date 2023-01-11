import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import SecondPlayer from "./components/MusicPlayer/SecondPlayer";
import ThirdPlayer from "./components/MusicPlayer/ThirdPlayer";
function App() {
  return (
    <div className="container">
      <MusicPlayer />
      <div className="anotherTypes">
        <SecondPlayer />
        <ThirdPlayer />
      </div>
    </div>
  );
}

export default App;
