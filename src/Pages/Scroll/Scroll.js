import React, { useState } from 'react'
import './Scroll.css'

export default function Scroll() {

    const [num, setNum] = useState(0);
    const [scroll, setScroll] = useState([]);  
    const [img, setImg] = useState('https://source.unsplash.com/random/');
    const [filterArr, setFilterArr] = useState([]);


    const getScrollHeight = () => {
      let getScrollHeight = document.documentElement.scrollHeight; 
      const getClientHeight = document.documentElement.clientHeight;
      const getScrollTop = document.documentElement.scrollTop;
      const scrollPClient = getClientHeight + getScrollTop; 
      console.log(img);

      if (scrollPClient >= getScrollHeight) {
        setScroll(current=>[...current, img])
        setNum(num + 1);
        setImg(`https://source.unsplash.com/random/?${num}`); 
        setFilterArr([...new Set(scroll)])
      }
    }
    
    document.addEventListener('scroll', getScrollHeight); 
  return (
    <div className='testScrollDiv'>
      {filterArr.map((item, index)=><a href='https://unsplash.com/'><img src={item} alt='randomImage' key={index} className='img'/></a>)}
    </div>
  )
}
