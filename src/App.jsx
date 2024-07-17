import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <>
      <h2>Basic Example</h2>
      <VideoPlayer id="player1" publicId="glide-over-coastal-beach" />
      <h2>Props Example</h2>
      <VideoPlayer
        id="player2"
        data-cld-source='{"publicId": "glide-over-coastal-beach", "info": {"title": "Glide Over Coastal Beach"}}'
        data-cld-transformation='{"effect": "blur"}'
        data-cld-poster-options='{"transformation": {"effect": "blur"}}'
      />
    </>
  );
}

export default App;
