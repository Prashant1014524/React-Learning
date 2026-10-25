import { NavLink } from 'react-router-dom'
import "../App.css"

function Nav() {
  return (
    <nav>
      <h1>LOGO</h1>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav