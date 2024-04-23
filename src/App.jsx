
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

function App() {
 

  return (
    <div className='max-w-screen-lg mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
