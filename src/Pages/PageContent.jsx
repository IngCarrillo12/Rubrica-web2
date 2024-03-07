import React from 'react'
import { FilterForCategory } from '../components/FilterForCategory'
import DeporteContext from '../Context/DeporteContext'
import { useContext } from 'react'

export const PageContent = () => {
    const {deportes} = useContext(DeporteContext)
  return (
    <>

     <FilterForCategory deportes={deportes}/>
    </>
  )
}
