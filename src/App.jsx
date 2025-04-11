import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div id="sidebar">
        <h1>the Shop</h1>
        <form id="search" role="search">
          <input
            id="search-input"
            placeholder="Search..."
          />
          <button type="submit">Find</button>
        </form>
        <nav>
          <ul>
            <li>
              <Link to>Home</Link>
            </li>
            <li>
              <Link to>Shop</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
