import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const IndividualView = () => {
    const [product, setProduct] = useState({
        "title": "",
        "price": 0,
        "description": ""
    })
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>setProduct(res.data))
            .catch(err=>console.log(err))
    }, [id])

    return (
        <div>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default IndividualView