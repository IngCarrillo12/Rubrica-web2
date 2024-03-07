import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const FilterForCategory = ({deportes}) => {
  const [filteredForCategory, setFilteredCategory] = useState([])
  const [selectedCategory, setSelectCategory] = useState('todos')
  const handleSportChange = (e)=>{
    setSelectCategory(e.target.value)
  }
  const loadingSportForCategory = ()=>{
    if(selectedCategory!=='todos'){
      setFilteredCategory(deportes.filter(deporte=>deporte.category===selectedCategory))
    }else{
      setFilteredCategory(deportes)
    }
  }
  useEffect(() => {
    loadingSportForCategory()
  }, [selectedCategory, deportes])
  const uniqueCategory = Array.from(new Set(deportes.map(deporte=>deporte.category)))
  return (
    <div className='flex flex-col justify-center w-full gap-2 py-8'>
      <div className='flex justify-between mx-12 w-1/1 border-b-2 border-blue-500 pb-2 '>
      <h1 className=' text-2xl font-bold text-blue-500 md:text-4xl  '>Deportes:</h1>
      <select className='h-8 pl-4  border rounded-md focus:outline-none border-blue-300 focus:border-2 transition-colors focus:border-blue-500 mb-1'  value={selectedCategory} onChange={handleSportChange}>
      <option value='todos'>Todos</option>
        {
          uniqueCategory.map(categoria=><option key={categoria} value={categoria}>{categoria}</option>)
        }
  </select>
  </div>
    <div className='flex flex-wrap justify-around items-center gap-8'>
    {
            filteredForCategory.map(deporte=><Card key={deporte.id} title={deporte.title} category={deporte.category} image={deporte.image} link={deporte.link} description={deporte.description}/>)
        }
    </div>
</div>
  )
}
