import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
<Link className="navbar-brand" to="/">Books
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
<Link className="nav-link active"  to="/">Add Books
</Link>
        </li>
        <li className="nav-item">
<Link className="nav-link" to="/search">Search Book
</Link>
        </li>
        <li className="nav-item">
<Link className="nav-link" to="/view">View Book
</Link>
        </li>
        

      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navigation