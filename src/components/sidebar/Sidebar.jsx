import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='shop'>Shop</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

      