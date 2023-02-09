import React from "react";
import classes from './Navbar.module.css';

const Navbar = (props) =>(

<nav className={`${classes.Navbar} navbar navbar-expand-lg`}>

  <div className="container">
  <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarItems">
        <div className="col-md-5">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className={`${classes.NavItems} nav-link navbar-brand h3`} href="/">Accueil</a>
                </li>
                <li className="nav-item">
                <a className={`${classes.NavItems} nav-link navbar-brand h3`} href="/add">Ajouter</a>
                </li>
                <li className="nav-item">
                <a className={`${classes.NavItems} nav-link navbar-brand h3`} href="#">Mes rendez-vous</a>
                </li>
            </ul>
        </div>
        <div className="d-flex align-items-right col-md-4">
            <form className="d-flex input-group w-auto">
                <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                </span>
            </form>
        </div>

        <div className="d-flex align-items-right col-md-3">
            <a href="/signin" className={`${classes.NavItems} nav-link navbar-brand h3`}>
            Login
            </a>
            <a href="/signup" className={`${classes.NavItems} nav-link navbar-brand h3`}>
            Sign up
            </a>
            <a className="navbar-brand me-2" href="">
            <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                height="16"
                alt="MDB Logo"
                loading="lazy"
                className={`${classes.Img}`}
            />
        </a>
        </div>
        
    </div>
            

  </div>

</nav>


    
    );

export default Navbar;