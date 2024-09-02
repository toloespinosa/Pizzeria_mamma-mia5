import React from 'react'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"> <link></link>
            <a className="nav-link">🍕 Home</a>
          </li>
          <li className="nav-item">
            {token ? <a className="nav-link" href="#">🔓 Profile</a> : <a className="nav-link" href="#">🔐 Login</a>}
          </li>
          <li className="nav-item">
            {token ? <a className="nav-link" href="#">🔒 Logout</a> : <a className="nav-link" href="#">🔐 Register</a>}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">🛒 Total: {total.toLocaleString()}</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
