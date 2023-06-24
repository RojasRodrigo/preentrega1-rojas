import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import CardUser from "../../CardWidget/CarUser";




const Category = () => {
    const [chars, setChars] = useState([]);
    let { categoryId } = useParams();

    console.log(categoryId);
    console.log(chars);
    
    let filteredCharacters = chars.filter((char) => {
        return char.category === categoryId;
    });


    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(json=>setChars(json))
}, [])
  return (
    <div className="Cards-List">
            
    {filteredCharacters.map((char) => { 
        return (
        <div className="Style-Card" key={char.id}>
      
            <CardUser char={char}/>
     
        </div>
        );
    })}
</div> 
); 
};

export default Category