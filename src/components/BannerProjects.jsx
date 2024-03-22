import React from 'react'
import Project1 from '../assets/project2.png'
import Project2 from '../assets/NextWebsite.png'
import Project3 from '../assets/profiol3.png'

export default function BannerProjects() {
  return (
    <div className='text-center'>
      <h1 className='text-[50px] p-[10px] from-[#995ef4] to-[#0eb1d6] font-semibold bg-gradient-to-r bg-clip-text text-transparent'>Mis Proyectos</h1>
      <div>
        <div className='w-[400px] cursor-pointer border-2 border-[#2a0e61] m-0 m-auto inline-block mt-[30px]'>
            <img className='h-[230px] opacity-100 w-[100%] m-0 m-auto' src={Project1} alt="" />
            <h1>Red Social</h1>
            <p className='p-[6px]'>Esta es una Red Social Creada Con REACT,MONGODB Y NextJS</p>
        </div>

        <div className='w-[400px] cursor-pointer border-2 border-[#2a0e61] m-0 m-auto inline-block ml-[40px] mr-[40px] mt-[30px]'>
            <img className='h-[250px] opacity-100 w-[100%] m-0 m-auto' src={Project2} alt="" />
            <h1>Portafolio 1</h1>
            <p className='p-[6px]'>Esta es un Portafolio Creada Con NextJS</p>
        </div>


        <div className='w-[400px] cursor-pointer border-2 border-[#2a0e61] m-0 m-auto inline-block mt-[30px]'>
            <img className='h-[250px] opacity-100 w-[100%] m-0 m-auto' src={Project3} alt="" />
            <h1>Portafolio Space</h1>
            <p className='p-[6px]'>Esta es un Portafolio Creada Con NextJS</p>
        </div>
      </div>
    </div>
  )
}
