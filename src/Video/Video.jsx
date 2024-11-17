import preview from '../preview.png'
import { useState } from 'react'
import './Video.css'

const Video = (props) => {
    const {title, chanel, like, imgVideo} = props
    const [countLike, setCountLike] = useState(like)
    const incrementByOne = ()=>{
        setCountLike(countLike+1)
    }
    return(
    <div className='video'>
        <img src={imgVideo} alt="" className='imgVideo'/>
        <h2>{title}</h2>
        <h3>Канал: {chanel}</h3>
        <div className="like">
          <p>Лайк : {countLike}</p>
          <button onClick={incrementByOne}>Лайк</button>
        </div>
      </div>
    )
  
}
export default Video