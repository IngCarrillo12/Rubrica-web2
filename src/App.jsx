import './App.css'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { PageCreate } from './Pages/PageCreate'
import { Footer } from './components/Footer'
import { PageContent } from './Pages/PageContent'
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<PageContent/>}/>
        <Route path='/create' element={<PageCreate/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
