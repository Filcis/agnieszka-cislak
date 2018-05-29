import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo_ac.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '250px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-end">
      <Link className="navbar-item" to="/about">
        O mnie
      </Link>
      <Link className="navbar-item" to="/products">
        Kontakt
      </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
