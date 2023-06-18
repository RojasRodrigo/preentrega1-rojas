import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        
        <nav className='navegacion'>
            <ul className = "bar"> 
            <h2 className='shop'>Shop<span className='smarth'>Smart</span></h2>

                    <Link className="home" to="/">Home</Link>

                    <li className="categorias">
                        Categorias
                        <ul className="subcategoria">
                            
                            <Link className='lis' to="/MensClothing">MensClothing</Link>
                            <Link className='lis' to="/WomensClothing">WomensClothing</Link>
                            <Link className='lis' to="/Jawelery">Jawelery</Link>
                            <Link className='lis' to="/Electronic">Electronica</Link>
                        </ul>
                    </li>

                        <li className="categorias">
                        Servicios
                        <ul className="subcategoria">
                            <li>Pedidos</li>
                            <li>Entregas a Domicilio</li>
                            
                        </ul>
                    </li>
                        
                        <CardWidget />
                    
            </ul>     
                
            
        </nav>
    );
};

export default NavBar;
