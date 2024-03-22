import React from 'react'
import Star from '../assets/stars.png'

export default function BackgroundStars() {
  return (
    <div className='fixed top-0 w-[100%] h-[100%] left-0 -z-20 animate-pulse'>
      <img src={Star} alt="" />
    </div>
  )
}
