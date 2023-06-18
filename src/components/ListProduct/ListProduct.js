import React, { useState, useEffect } from "react";
//import axios from "axios";
import CardUser from "../CardWidget/CarUser";
import "./ListProduct.css";
import {Link} from "react-router-dom"



const ListProduct = () => {
    const [chars, setChars] = useState([]);

    

useEffect(() => {

            fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(json=>setChars(json))



    /*axios("https://rickandmortyapi.com/api/character").then((json) => 
    setChars (json.data.results)
    );*/

}, [])

    return (
        <div className="Cards-List">
            
            {chars.map((char) => { 
                return (
                <div className="Style-Card" key={char.id}>
                    <Link to= {`Detail/${char.id}`}>
                    <CardUser char={char}/>
                    </Link>
                </div>
                );
            })}
        </div> 
    ); 
};

export default ListProduct;