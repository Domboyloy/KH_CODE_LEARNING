import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./nabar.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand  text-white" href="#">

            <img  src="https://i.pinimg.com/736x/96/71/87/9671871b39fbaf71c4f65cefbbf8da3a.jpg" alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link text-white active" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="/about">About</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Dropdown
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>


          </ul>

          
<form className="d-flex m-3">
           <button className="btn bg-success text-white m-1" type="submit">
              Sign in
            </button>
            <button className="btn  text-white" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}