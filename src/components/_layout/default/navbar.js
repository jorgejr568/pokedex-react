import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar sticky-top navbar-light bg-danger">
    <div className="container">
      <Link
        className="navbar-brand text-white text-uppercase font-weight-bold"
        to="/"
      >
        Pokedex
      </Link>
    </div>
  </nav>
)
