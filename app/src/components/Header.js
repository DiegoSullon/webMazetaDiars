import React from 'react'
import '../css/Header.css';
import $ from 'jquery';
import { NavLink } from 'react-router-dom'

const removeToken = () => {
    localStorage.removeItem('token')
    window.location = "/login"
    window.location.reload();
}

const Header = ({cookies}) => {
    const userLogged = cookies.get('token')
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="https://image.ibb.co/dnxi3L/logo.png" alt="logo" width="30" height="24" />
                </NavLink>
                <button className="navbar-toggler" type="button" onClick={e=>{
                    e.preventDefault();
                    $("#navbarSupportedContent").toggleClass("collapse");
                }} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse display-right" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" exact to="/">Inicio</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/productos">Productos</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/ordencompra">Orden de compra</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                        {userLogged ?
                            <li className="nav-item"><NavLink className="nav-link" onClick={() => removeToken()} exact to="/">Cerrar sesión</NavLink></li>
                            :
                            <li className="nav-item"></li>
                        }
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header