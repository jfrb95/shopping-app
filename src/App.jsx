import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  

  return (
    <div id='app'>
      <Sidebar />

      <div id="outlet-container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
