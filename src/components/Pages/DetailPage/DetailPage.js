import React from 'react'
import {useState, useEffect} from "react";
import CardUser from "../../../components/CardWidget/CarUser";
import { useParams} from 'react-router-dom';

const DetailPage = () => {
  const [char, setChar] = useState({});

  let { id } = useParams();

    console.log(char);

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setChar(json))

}, [id])

  return (
    <div className='detail'> {char.id? <CardUser char={char}/> : null}</div>
  )
}

export default DetailPage