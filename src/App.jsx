import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Page/Shared/Navbar/Navbar'

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
