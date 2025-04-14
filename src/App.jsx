import { Link, Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'

function App() {

  const url = "https://fakestoreapi.com/products"

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request to ${response.url} failed: HTTP ${response.status} : ${response.statusText}`);
      };
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });

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
