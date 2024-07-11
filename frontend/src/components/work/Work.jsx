import React from 'react';
import Title from '../title/Title';
import Card from '../card/Card'
import porfolio from '../../assets/porfolio.jpg'
import telegramBot from '../../assets/telegramBot.jpg';
import webApp from '../../assets/webApp.jpg';
import ecommerce from '../../assets/ecommerce.jpg'

const Work = () => {
  return (
    <div id="work" className='md:w-screen md:h-screen h-full w-full'>
      <Title title='work'/>
      <div className="flex flex-col items-center gap-12 h-full justify-center">
      <p className="text-white text-center align-middle w-2/3 md:text-base text-sm">
      Below are some of the personal and collaborative projects I've undertaken.
        </p>
        <div className='flex md:flex-row flex-col'>
            <Card img={porfolio} title='Personal Porfolio' link=''/>
            <Card img={telegramBot} title='Trading Telegram Bot' link='https://t.me/GtradarCopyTradingBot'/>
            <Card img={webApp} title='Trading Web App' link='https://t.me/GtradarCopyTradingBot'/>
            <Card img={ecommerce} title='Fashion Ecommerce' link=''/>
        </div>
      </div>
    </div>
  )
}

export default Work
