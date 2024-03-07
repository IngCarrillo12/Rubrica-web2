
import { useContext } from 'react'
import './App.css'
import { Header } from './components/Header'
import DeporteContext from './Context/DeporteContext'
import { FilterForCategory } from './components/FilterForCategory'
import { Route, Routes } from 'react-router-dom'
import { PageCreate } from './Pages/PageCreate'
import { Footer } from './components/Footer'
function App() {
  const {deportes} = useContext(DeporteContext)
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<FilterForCategory deportes={deportes}/>}/>
        <Route path='/create' element={<PageCreate/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
