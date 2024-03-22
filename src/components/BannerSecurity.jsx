import React from 'react'
import encryption from '../assets/encryption.webm'
import LockMain from '../assets/LockMain.png'
import LockTop from '../assets/LockTop.png'

export default function BannerSecurity() {
  return (
    <div className='flex justify-center items-center h-[100vh] text-center'>
      <video src={encryption} loop muted autoPlay className='w-[100%] h-full -z-40 absolute translate-y-[100px]'></video>
      <h1 className='text-[50px]'>Rendimiento <span className='from-[#995ef4] to-[#0eb1d6] font-semibold bg-gradient-to-r bg-clip-text text-transparent'>y</span> Seguridad</h1>
    </div>
  )
}
