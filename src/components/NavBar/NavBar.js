import React from 'react';
import CardWidget from '../CardWidget/CardWidget';

const NavBar = () => {
    return (
        
        <nav className='navegacion'>
            <ul className = "bar"> 
            <h2 className='shop'>Shop<span className='smarth'>Smart</span></h2>
                    <li>Inicio</li>
                    <li className="categorias">
                        Categorias
                        <ul className="subcategoria">
                            <li>Laptops</li>
                            <li>Monitores</li>
                            <li>Teclados</li>
                        </ul>
                    </li>

                        <li className="categorias">
                        Servicios
                        <ul className="subcategoria">
                            <li>Entregas a Domicilio</li>
                            <li>Soporte técnico</li>
                            
                        </ul>
                    </li>
                        
                        <CardWidget />
                    
            </ul>     
                
            
        </nav>
    );
};

export default NavBar;
