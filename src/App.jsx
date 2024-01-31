import { Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Layout from './components/Layout.jsx'
import Perfil from './components/Perfil.jsx'
import MainContent from './components/MainContent.jsx'
import './App.css'
import Page404 from './components/Page404.jsx'
import Cars from './components/Cars.jsx'
import Car from './components/Car.jsx'

function App () {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<MainContent />} />
        <Route path='/perfil' element={<Perfil />} />
      </Route>
      <Route path='/cars' element={<Layout />}>
        <Route index element={<Cars />} />
        <Route path=':carId' element={<Car />} />
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App
