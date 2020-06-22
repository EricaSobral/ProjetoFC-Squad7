import React from 'react';
import {
    BrowserRouter as
        Link,
        Switch,
        Route
} from "react-router-dom";
import logo from '../../assets/img/LogoAtualizada.PNG';
import '../../assets/css/reset.css';
import '../../assets/css/header.css';




function Header() {
    return (
        <div>
            <header>
                <div className="menu-header-home container-fluid">
                    <div className="logo-header">
                        <a href="#"><img src={logo} alt="bfriend" /></a>
                    </div>

                    <nav className="btn-header-home">
                        <Link to="/cadastro">
                            <button className="btn-cadastro-header" >Cadastre-se</button>
                        </Link>
                        <Link to="/login">
                        <button className="btn-entrar-header">Entrar</button>
                        </Link>
                        
                    </nav>

                </div>
            </header>
        </div>
    );
}



export default Header