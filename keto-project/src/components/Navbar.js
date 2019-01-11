import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper green darken-3">
      <div className="container">
        <a className="brand-logo">Keto Plan</a>
        <ul className="right">
        <li><Link to="/">Home<Link></li>
        <li><Link to="/about">About<Link></li>
        <li><Link to="/contact">Contact<Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;