import React from 'react'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'

export default function Nav() {
  return (
    <header className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <nav>
            <ul>
                <div className='absolute top-[2px] left-[20px] font-semibold text-[23px] p-[10px] flex *:m-[6px] *:cursor-pointer'>
                    <li><a href="#">John Die.</a></li>
                </div>
                <div className='flex items-center justify-between w-[400px] absolute top-[6px] left-[35%]  h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Proyectos</a></li>
                </div>  
                <div className='absolute top-[6px] right-[20px] p-[10px] flex *:m-[6px] *:cursor-pointer'>
                    <li><a href="#"><img src={Instagram} alt="" /></a></li>
                    <li><a href="#"><img src={Facebook} alt="" /></a></li>
                </div>
            </ul>
        </nav>
    </header>
  )
}
