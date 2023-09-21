import React from 'react'
import { Link } from 'react-router-dom'
import './AdminNavbar.css'

export default function AdminNavbar() {
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <div className='nav'><a className="navbar-brand" >E-Bookopolis</a></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className='bottom-right'>
    <Link className='btn btn-outline-light mx-2' to="/addbook">Add Book</Link>
    <Link className='btn btn-outline-light' to="/login">Logout</Link>
    </div>
  </div>
</nav>
    
    
    </div>
  )
}
