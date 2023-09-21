import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillCartFill} from "react-icons/bs";
import './CustomerNavbar.css'

export default function CustomerNavbar() {
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg navbar-dark my-1">
  <div className="container-fluid">
    <div className='brand'><a className="navbar-brand">E-Bookopolis</a></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className='bottom-right'>
    <Link className='btn btn-dark mx-2' to={"/scart"}><BsFillCartFill/></Link>
    <Link className='btn btn-outline-light' to="/login">Logout</Link>
    </div>
  </div>
</nav>
    
    
    </div>
  )
}
