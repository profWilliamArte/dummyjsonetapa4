import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
const API='https://dummyjson.com/products/category/';

const Categorias = () => {
  const params = useParams()
  const [datos, setDatos] = useState([])

  const getDatos = async () =>{
    let URI=API+params.id
      try {

        const response = await fetch(URI);
        const data = await response.json();
        //console.log(data)
        setDatos(data.products);
      } catch (error) {
        console.error(error)
      }
    };


    useEffect(()=>{
      getDatos();
    },[params.id]);


  return (
    <>
    <div className="container">
    <h3 className="text-center py-3 text-black-50">{params.id} ({datos.length})</h3>
        <div className="row">
            {datos && datos.map((productos)=>(
              <Card key={productos.id} producto={productos}/>
            ))}
        </div>
    </div>

</>
  )
}

export default Categorias