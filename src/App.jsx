import { useState } from 'react'
import Video from './Video/Video'
import './App.css'
import './Card.css'
import { VIDEOS } from './videos'

import preview from './preview.png'

function App() {
  const [count, setCount] = useState(0)
  const incrementByOne = () => {
    setCount(count + 1)
  }
  console.log(preview)
  console.log(VIDEOS.map((video) => console.log(video.imgVideo)))
  return (
    <>
    <div className="videos">
    {
      VIDEOS.map((video) => (
        
        <Video title={video.title} chanel={video.chanel} like={video.like} imgVideo={video.imgVideo} key={video.id} />
      ))
    }
    </div>

  
    </>
  )
}

export default App
