import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header className='flex flex-col md:flex-row items-center gap-4 justify-between px-10 py-4 w-full mb-4 border-b-2 bg-blue-100'>
        <Link to={'/'} className='flex items-center gap-4 transition-colors hover:text-blue-500 '>
        <img width="32" height="32" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-sport-back-to-school-wanicon-lineal-color-wanicon.png" alt="external-sport-back-to-school-wanicon-lineal-color-wanicon"/>
        <h1 className='font-bold text-2xl text-blue-500'>SportWin</h1>
        </Link>
        <nav>
            <ul className='flex items-center justify-center gap-8'>
                <li className='font-semibold text-base transition-colors hover:text-blue-500'><Link to={'/'} >Deportes</Link></li>
                <li className='font-semibold text-base transition-colors hover:text-blue-500'><Link to={'/create'}>Agregar deporte</Link></li>
            </ul>
        </nav>
    </header>
  )
}
