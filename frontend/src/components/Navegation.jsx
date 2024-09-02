import React from 'react';
import { Link } from 'react-router-dom';

const Navegation = () => {
  const total = 25000;
  const token = false; // Puedes cambiar este valor para simular si el usuario está autenticado o no.

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mía</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">🍕 Home</Link>
          </li>
          <li className="nav-item">
            {token ? <Link className="nav-link" to="/profile">🔓 Profile</Link> : <Link className="nav-link" to="/login">🔐 Login</Link>}
          </li>
          <li className="nav-item">
            {token ? <Link className="nav-link" to="/logout">🔒 Logout</Link> : <Link className="nav-link" to="/register">🔐 Register</Link>}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">🛒 Total: {total.toLocaleString()}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">🙋‍♂️ Perfil</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navegation;
