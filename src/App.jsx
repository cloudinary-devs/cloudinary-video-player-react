import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  return (
    <>
      <h2>Basic Example</h2>
      <VideoPlayer id="player1" publicId="glide-over-coastal-beach" />
      <h2>Props Example</h2>
      <VideoPlayer
        id="player2"
        publicId="glide-over-coastal-beach"
        playerConfig={{
          muted: true,
          posterOptions: {
            transformation: { effect: 'blur' },
          },
        }}
        sourceConfig={{
          info: { title: 'Glide Over Coastal Beach' },
        }}
      />
    </>
  );
}

export default App;
