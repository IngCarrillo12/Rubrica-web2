import React, { useContext, useState } from 'react'
import DeporteContext from '../Context/DeporteContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { v4 as uuid } from 'uuid';

export const CreateSport = () => {
    const {deportes, setDeportes} = useContext(DeporteContext)
    const [sport, setSport] = useState({id:uuid(),title:'', image:'', link:'', description:'', category:'none'})
    const handleChange = (e)=>{
        const {name, value} = e.target
        setSport(()=>({
            ...sport,
            [name]:value,
        })
        )

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!tituloRegex.test(sport.title)){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error en el title debe tener 3-20 caracteres!!",
              });
            return
        }else if(sport.category==='none'){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Elige una categoria",
              });
            return
        }else if(!linkRegex.test(sport.link)){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error en el link debe tener 10-50 caracteres!!",
              });
            return
        }else if(!linkRegex.test(sport.image)){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error en el link image debe tener 10-50 caracteres!!",
              });
            return
        }else if(!descripcionRegex.test(sport.description)){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error en la description debe tener 50-200 caracteres!!",
              });
            return
        }
        setDeportes([...deportes,sport])
        setSport({title:'', image:'', link:'', description:'', category:''})
        navigate('/')
    }
    const navigate = useNavigate()
    const uniqueCategory = Array.from(new Set(deportes.map(deporte=>deporte.category)))
    const tituloRegex = /^.{3,20}$/;
    const descripcionRegex = /^.{50,200}$/;
    const linkRegex = /^.{10,50}$/;

  return (
    <div className='flex w-full items-center justify-center'>
    <div className='flex flex-col w-10/12 md:w-1/2 border rounded-r-md'>
    <div className="flex items-center space-x-2 p-4">
        <img
          alt="Image"
          className="rounded-lg"
          height="64"
          src="https://img.icons8.com/external-fauzidea-outline-color-fauzidea/64/000000/external-sport-back-to-school-fauzidea-outline-color-fauzidea.png"
          style={{
            aspectRatio: "64/64",
            objectFit: "cover",
          }}
          width="64"
        />
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Add Sport</h2>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Sport ID: {sport.id}</p>
        </div>
      </div>
    <form action="#" onSubmit={handleSubmit}  className="flex flex-col gap-6 p-6">
        <div className='flex items-center justify-around gap-2 '>
        <div className='flex flex-col w-1/2 gap-2'>
            <label className='font-semibold text-base' htmlFor="title">Title:</label>
            <input placeholder='Ej: Futbol' className='h-8 pl-4 border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500' type="text" name='title' value={sport.title} onChange={handleChange} required />
        </div>
        <div className='flex flex-col w-1/2 gap-2' >
            <label className='font-semibold text-base' htmlFor="">Category:</label>
            <select name='category' className='h-8 pl-4 border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500'  onChange={handleChange} required>
                <option value="none">Elige</option>
                 {
                     uniqueCategory.map(categoria=><option  key={categoria} value={categoria}>{categoria}</option>)
                }
  </select> 
        </div>
        </div>
        <div className='flex items-center justify-around gap-2 '>
        <div className='flex flex-col w-1/2 gap-2'>
            <label className='font-semibold text-base' htmlFor="">Link Image:</label>
            <input type="url" className='h-8 pl-4 border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500' placeholder='Eje: wwww.Img....' name='image' value={sport.image} onChange={handleChange} required />
        </div>
        <div className='flex flex-col w-1/2 gap-2'>
            <label className='font-semibold text-base' htmlFor="">Link Equipo:</label>
            <input type="url" className='h-8 pl-4 border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500' placeholder='Eje: wwww.Img....' name='link' value={sport.link} onChange={handleChange} required />
        </div>
        </div>
        <div className='flex flex-col  gap-2'>
            <label className='font-semibold text-base' htmlFor="">Description:</label>
            <textarea type="text" className='border rounded-md focus:outline-none focus:border-2 transition-colors focus:border-blue-500 resize-none' rows={4} placeholder='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, praesentium incidunt ab consequuntur, voluptatem delectus quaerat, soluta consequatur obcaecati fuga iusto quis sunt velit doloribus cum aperiam aut modi. Incidunt?' name='description' value={sport.description} onChange={handleChange} required />
        </div>
        <div className="flex w-full items-center">
            <button type="submit" className="ml-auto border w-32 border-blue-500 rounded-md text-lg font-semibold text-blue-500 transition-colors hover:border-2 hover:font-bold">Create</button>
        </div>
        
    </form>
    </div>
    </div>
  )
}
