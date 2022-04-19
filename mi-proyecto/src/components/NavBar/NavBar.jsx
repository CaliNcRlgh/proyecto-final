/*
En el directorio de tu proyecto, crea una carpeta dentro de un src llamada "components", que contenga a NavBar.js
para crear una barra de menu simple

Aspectos:
- Brand(titulo/nombre de la tienda)
- Un listado de categorias clickeables
- Incorpora alguna libreria de estilos con bootstrap/materialize u otro de tu preferencia (opcional)
*/

import React from 'react';
import './NavBar.css'

function NavBar(props) {
    return (
        <div className='box'>

            <h1>Cod Store</h1>

            <ul className='nav'>
                <li><a href='#'>Assault Rifles</a></li>
                <li><a href='#'>Submachine guns</a></li>
                <li><a href='#'>Sniper Rifles</a></li>
                <li><a href='#'>Light machine guns</a></li>
                <li><a href='#'>Shotguns</a></li>
            </ul>
        </div>
    );
}

export default NavBar;