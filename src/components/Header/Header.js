import React from 'react';
import './Header.css'
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className='Header'>
           <Link to = "/"> <h1><span className='online'>ONLINE</span><span className='store'>STORE</span></h1> </Link>
            <p>¡Gracias por elegirnos! Nuestra tienda online está lista para sorprenderte.</p>
        </div>
    )
}
export default Header;