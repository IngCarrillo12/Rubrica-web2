import React from 'react'
import { FilterForCategory } from '../components/FilterForCategory'
import DeporteContext from '../Context/DeporteContext'
import { useContext } from 'react'
import bg from '../assets/bg.png'
export const PageContent = () => {
    const {deportes} = useContext(DeporteContext)
  return (
    <>
  <div className='flex flex-col  items-center justify-around w-full md:flex-row md:h-[450px]'> 
    <div className='flex flex-col gap-4 w-full px-8 md:w-1/2'>
    <h2 className='font-bold text-3xl  md:text-5xl text-blue-500'>SportWin</h2>
    <p className='font-base text-sm md:text-base'>Explora tu pasión por el deporte en nuestra Web
Descubre un universo de emociones y adrenalina en nuestra Web dedicada al deporte. Sumérgete en un espacio diseñado para los amantes de la actividad física, donde encontrarás información detallada sobre una amplia variedad de disciplinas.</p>
    <button className='border-2 w-4/5 md:w-1/2 h-12 border-blue-500  text-blue-500 rounded-md text-base transition-all hover:font-bold hover:text-white hover:bg-blue-500'>Colaborar en agregar un deporte</button>
    </div>
    <div className='flex items-center justify-center w-full px-8 md:w-1/2 '>
      <img src={bg} alt="Imagen deportes" />
    </div>
  </div>
     <FilterForCategory deportes={deportes}/>
    </>
  )
}
