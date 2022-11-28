import { faArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import './Scroll.css'

export default function Scroll() {

    const [num, setNum] = useState(0);
    const [scroll, setScroll] = useState([]);  
    const [img, setImg] = useState('https://picsum.photos/seed/picsum/400');
    const [filterArr, setFilterArr] = useState([]);
    const [scrollHeight, setScrollHeight] = useState(document.documentElement.scrollHeight);
    const [getClientHeight, setGetClientHeight] = useState(document.documentElement.clientHeight);
    const [getScrollTop, setGetScrollTop] = useState(document.documentElement.scrollTop);
    const [scrollPClient, setScrollPClient] = useState(0);
    const [arrowDisplay, setArrowDisplay] = useState(false); 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getScrollHeight = () => {
      setScrollHeight(document.documentElement.scrollHeight); 
      setGetClientHeight(document.documentElement.clientHeight);
      setGetScrollTop(document.documentElement.scrollTop);
      setScrollPClient(getClientHeight + getScrollTop); 
    }

    useEffect(()=>{
      if (scrollPClient >= (scrollHeight - 50)) {
        setNum(num + 1);
        setImg(`https://picsum.photos/seed/${num}/400`); 
        setScroll(current=>[...current, img]);
        setFilterArr([...new Set(scroll)]); 
      }
    }, [num, img, scroll, filterArr, scrollHeight, scrollPClient]) 

    const scrollToTop = () => {
      window.scrollTo(0,0); 
    }

    useEffect(()=>{
      if(document.documentElement.scrollTop > 400){
        setArrowDisplay(true)
      } else {
        setArrowDisplay(false)
      }
    }, [getScrollHeight])
    
    document.addEventListener('scroll', getScrollHeight);

  return (   
    <div>
      <div>
        <div className='headDiv'>
          <FontAwesomeIcon icon={faArrowDown} size='2x' className='App-logo'/> <h1 className='header'>Scroll down forever!</h1> <FontAwesomeIcon icon={faArrowDown} size='2x' className='App-logo'/>
        </div>
        <div className='headImgDiv'>
          <a href='https://picsum.photos/seed/holiday/400'><img src='https://picsum.photos/seed/holiday/400' alt='randomImage' className='img' /></a>
          <a href='https://picsum.photos/seed/outside/400'><img src='https://picsum.photos/seed/outside/400' alt='randomImage' className='img' /></a>
          <a href='https://picsum.photos/seed/inside/400'><img src='https://picsum.photos/seed/inside/400' alt='randomImage' className='img' /></a>
        </div>
      </div>
      <div className='testScrollDiv'> 
        {
          filterArr.map((item, index)=><a href={item}><img src={item} alt='randomImage' key={index} className='img'/></a>)
        }
      </div>
      <FontAwesomeIcon icon={faCircleArrowUp} className={(arrowDisplay)?'arrowUp':'arrowOffScreen'} size='3x' onClick={scrollToTop}/>
    </div>
  )
}
