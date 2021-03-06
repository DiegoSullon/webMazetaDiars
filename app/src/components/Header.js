import React from 'react'
import '../css/Header.css';
import $ from 'jquery';
import { Link, NavLink } from 'react-router-dom'
import Seeker from './Seeker';



const Header = ({ cookies }) => {
    const userLogged = cookies.get('token')
    const show=()=>{
        $("#navbarDropdown").toggleClass("show");
    }
    const removeToken = () => {
        cookies.remove('token')
        window.location = "/login"
        window.location.reload();
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="https://image.ibb.co/dnxi3L/logo.png" alt="logo" width="30" height="24" />
                </NavLink>
                <button className="navbar-toggler" type="button" onClick={e => {
                    e.preventDefault();
                    $("#navbarSupportedContent").toggleClass("collapse");
                }} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse display-right" id="navbarSupportedContent">
                    <Seeker />
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" exact to="/">Inicio</NavLink></li>
                        <li className="nav-item dropdown" data-toggle="dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/productos/suplementos" id=""  onMouseOver={show} onClick={show}>
                                Productos
                            </NavLink>
                            <div class="dropdown-menu" id="navbarDropdown" onMouseLeave={show} onClick={show}>
                                <Link class="dropdown-item" to="/productos/suplementos">Suplementos</Link>
                                {/* <div class="dropdown-divider"></div> */}
                            </div>
                        </li>
                        <li className="nav-item"><NavLink className="nav-link" to="/contacto">Contactanos</NavLink></li>
                        {
                            userLogged ?
                            <li className="nav-item"><NavLink className="nav-link" to="/ordencompra">Orden de compra</NavLink></li>
                            :<></>
                        }
                        
                        {userLogged ?
                            <li className="nav-item"><Link className="nav-link" onClick={() => removeToken()} exact to="/">Cerrar sesión</Link></li>
                            :
                            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                        }
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header