import React from 'react';
import { Link } from 'react-scroll';
import avatar from '../../assets/avatar.png';
import BubbleText from '../../components/bubbleText/BubbleText'

const Home = () => {
  return (
    <div id="home" className='grid grid-cols-8 justify-center items-center mt-2 w-screen h-creen'>
      <div className="leftHome col-start-1 col-span-4 flex flex-col items-center move-left-to-right">
        <h2 className='text-white text-md md:text-3xl'>Hello, I’m Thy Thy,</h2>
        <BubbleText/>
        <Link to='contact' href="" className='text-white border-b  border-white text-base md:text-xl'>Contact me</Link>
      </div>
      <div className="rightHome col-end-9 col-span-4 flex flex-col items-center move-right-to-left">
        <img src={avatar} alt="" className='w-2/3'/>
      </div>
    </div>
  )
}

export default Home
