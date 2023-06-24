import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        
        <nav className='navegacion'>
            <ul className = "bar"> 
            <Link to = "/"><h2 className='shop'>Shop<span className='smarth'>Smart</span></h2></Link>

                    <Link className="home" to="/">Home</Link>

                    <li className="categorias">
                        Categorias
                        <ul className="subcategoria">
                            
                            <Link className='lis' to="/category/men's clothing/">MensClothing</Link>
                            <Link className='lis' to="/category/women's clothing">WomensClothing</Link>
                            <Link className='lis' to="/category/jewelery">jewelery</Link>
                            <Link className='lis' to="/category/electronics">electronics</Link>
                        </ul>
                    </li>
                        <li className="categorias">
                        Servicios
                        <ul className="subcategoria">
                            <Link className='lis' to ="/Orders">Orders</Link>
                            <Link className='lis' to = "/HomeDelivery">HomeDelivery</Link>
                            
                        </ul>
                    </li>
                        
                        <CardWidget />
                    
            </ul>     
                
            
        </nav>
    );
};

export default NavBar;
