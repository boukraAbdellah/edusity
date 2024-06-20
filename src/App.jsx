
import { useState } from 'react';
import { About, Footer, Gallery, Hero, Navbar, Programs, Testimonials } from './components'
import Contact from './components/Contact'
import VideoPlayer from './components/VideoPlayer'

function App() {
  const [playerState, setPlayerState] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <About setPlayerState={setPlayerState} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <VideoPlayer playerState={playerState} setPlayerState={setPlayerState} />
      
    </div>
  );
}

export default App
