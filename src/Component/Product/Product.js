import "./Product.css"
import { useState , useEffect } from "react";
import axios from "axios";
//hello
const Product = () => {
    const [loading , setLoading] = useState(false)
    const [data,setData] = useState([])
    useEffect(() =>{
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
        <div>Product</div>
    )
}
  
export default Product;  
