import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='flex justify-around items-center px-8 mt-4 py-4 flex-wrap md:flex-nowrap border-t-2 bg-blue-100'>  
        <div className='w-full md:w-1/3 flex flex-col items-center justify-center gap-2'>
            <div className='flex gap-4'>
            <img width="32" height="32" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-sport-back-to-school-wanicon-lineal-color-wanicon.png" alt="external-sport-back-to-school-wanicon-lineal-color-wanicon"/>
            <h2 className='font-bold text-2xl '>SportWin</h2>
            </div>
            <ul className='flex flex-col gap-1 items-center justify-center'>
                <li className='font-base text-base transition-colors hover:text-blue-500'>
                    <Link to={'/'}>Deportes</Link>
                </li>
                <li className='font-base text-base transition-colors hover:text-blue-500'>
                    <Link to={'/create'}>Agregar Deporte</Link>
                </li>
            </ul>
        </div>
        <div className='flex flex-col items-center justify-center gap-1 w-full md:w-1/3'>
            <h2 className='font-bold text-xl'> Redes Sociales:</h2>
            <ul className='flex justify-around items-center gap-8'>
                <li>
                    <Link><img className='transition-transform hover:w-[50px]' width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></Link>
                </li>
                <li>
                    <Link><img className='transition-transform hover:w-[50px]'  width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/></Link>
                </li>
                <li>
                    <Link><img className='transition-transform hover:w-[50px]'  width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></Link>
                </li>
            </ul>
        </div>
        <div className='w-full md:w-1/3 flex flex-col items-center justify-center gap-2 '>
            <h2 className='font-bold text-xl'>Soporte</h2>
            <p className='font-base text-base text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, itaque vitae? Totam ducimus repudiandae optio ratione animi, eum sapiente voluptate ipsam iusto sint dolorem blanditiis, quidem facilis voluptatibus ab. Fugit.</p>
        </div>
    </footer>
  )
}
