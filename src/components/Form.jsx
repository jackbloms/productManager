import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = ()=>{
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', {
            title: title,
            price: price,
            description: desc
        })
            .then((res)=>console.log(res))
            .catch((err)=> console.log(err))
    }


    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label>Title</label>
                <input type="text" onChange={e=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <input type="text" onChange={e=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange={e=>setDesc(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;