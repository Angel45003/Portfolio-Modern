import videoBlack from '../assets/blackhole.webm'
import React from 'react'
import mainIconsdark from '../assets/mainIconsdark.svg'

export default function BannerMain() {
  return (
    <>
    
    <div className='flex items-center justify-center h-[100vh]'>
    <video className='-z-30 w-[100%] h-[300px] translate-y-[-400px] absolute' loop muted autoPlay src={videoBlack}></video>
      <div className='max-w-[700px]'>
        <div className='w-[150px] text-center p-[6px] rounded-lg border-2 border-[#140d2b] bg-gradient-to-t from-[#140d2b] to-[#03001417]'>
            <span>Dev Front-End</span>
        </div>
        <h1 className='text-[60px] max-w-[500px] p-[6px] font-semibold'>Volviendo <span className='from-[#995ef4] to-[#0eb1d6] font-semibold bg-gradient-to-r bg-clip-text text-transparent'>Ideas</span> en Proyectos</h1>
        <p className='text-slate-400 p-[6px]'>Hola, soy un Desarollador FrontEnd Developer. Tengo experiencia en Sitios Webs,
            Mobiles y Aplicaciones de Desktop. Cada vez aprendiendo más
        </p>
        <button className='bg-[#140d2b]  p-[6px] border-2 border-[#140d2b] rounded-lg cursor-pointer m-[6px] w-[100px]'>
            Leer Más
        </button>
      </div>
      <div>
        <img src={mainIconsdark} />
      </div>
    </div>
    </>
    
  )
}
