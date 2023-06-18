import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <h1><span className='online'>ONLINE</span><span className='store'>STORE</span></h1>
            <p>¡Gracias por elegirnos! Nuestra tienda online está lista para sorprenderte.</p>
        </div>
    )
}
export default Header;