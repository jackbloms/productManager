import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const Main = () => {
    const [productList, setProductList] = useState([])
    const [refresh, setRefresh] = useState(true)
    // const {title, price, desc} = useParams()

    const refreshList =()=>{
        setRefresh(!refresh)
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/`)
            .then(res=>setProductList(res.data))
            .catch(err=>console.log(err))
    }, [refresh])

    return (
        <fieldset>
            <ul>
            {   
                productList.map((item, i)=>
                {
                    return <li><Link to={`/products/${item._id}`} key={i}>Title: {item.title}
                    | <Link to={`products/edit/${item._id}`}>Edit</Link>
                    <button to={`products/delete/${item._id}`}>Delete</button></Link></li>
                })
                //turn button into onClick
            }
            </ul>
        </fieldset>
    )
}

export default Main