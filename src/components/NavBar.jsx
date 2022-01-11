import React, { Fragment } from 'react';

class NavBar extends React.Component {
    render () {
        const customStyle = {
            backgroundColor: "blue",
            color: "green",
            textDecoration: "none",
            listStyle: "none"
        }
        return(
            <Fragment>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="../assets/icon/logo.png" alt="logo"/>Music Store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i>Carrito</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
            </Fragment>  
        )
    }    
}

export default NavBar;