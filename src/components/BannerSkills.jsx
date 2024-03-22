import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVASCRIPT from '../assets/js.png'
import REACT from '../assets/react.png'
import NEXT from '../assets/next.png'
import TAILWIND from '../assets/tailwind.png'
import REDUX from '../assets/redux.png'
import TYPESCRIPT from '../assets/ts.png'
import NODE from '../assets/node-js.png'
import MONGODB from '../assets/mongodb.png'
import EXPRESS from '../assets/express.png'
import GO from '../assets/go.png'
import TAURI from '../assets/tauri.svg'
import FIGMA from '../assets/figma.png'
import GRAPHQL from '../assets/graphql.png'
import cardsVideo from '../assets/cards-video.webm'

export default function BannerSkills() {
  return (
    <div className='text-center'>
      <h1 className='text-[40px] p-[6px] font-semibold'>Creando Apps con tecnologias modernas</h1>
      <div class="w-full h-full absolute">
        <div class="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
        <video class="w-full h-auto" autoPlay loop muted src={cardsVideo}>
      </video>
      </div>
    </div>
      <div className='*:inline-block *:w-[80px] text-center *:m-[20px] z-40'>
        <img src={HTML} alt="" />
        <img src={CSS} alt="" />
        <img src={JAVASCRIPT} alt="" />
        <img src={REACT} alt="" />
        <img src={NEXT} alt="" />
        <img src={REDUX} alt="" />
        <br />
        <img src={TAURI} alt="" />
        <img src={FIGMA} alt="" />
        <img src={GO} alt="" />
        <img src={EXPRESS} alt="" />
        <br />
        <img src={NODE} alt="" />
        <img src={MONGODB} alt="" />
        <img src={TAILWIND} alt="" />
        <br />
        <img src={GRAPHQL} alt="" />
        <img src={TYPESCRIPT} alt="" />
      </div>
      
    </div>
  )
}
