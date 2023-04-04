import "./Product.css"
import { useState , useEffect } from "react";
import axios from "axios";
import LinearProgress from '@mui/material/LinearProgress';
const Product = () => {
    const [loading , setLoading] = useState(false)
    const [data,setData] = useState([])
    useEffect(() =>{
        setLoading(true)
        axios({
            method:"GET",
            url:"https://fakestoreapi.com/products"
        }).then( res =>{
            console.log(res.data)
            setData(res.data)
        }).catch(e => console.log(e))
        .finally(()=> setLoading(false))
    },[])
    return (  
        <div className="container">
            {loading && <div><div className="progress">
            <LinearProgress color="primary" />
            </div> </div>}

            {data.map((product) =>{
                return <div key={product.id} className="card">
                    <div><img src={product.image} alt="#"/></div>
                    <div className="card-description">
                        <h6>{product.title}</h6>
                        <h6>{`price : ${product.price}`}</h6>
                        <h6>{`category : ${product.category}`}</h6>
                    </div>    
                </div>
            })}
        </div>
    )
}
  
export default Product;  
