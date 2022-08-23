import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const UpdateForm2 = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                const product = res.data
                setTitle(product.title)
                setPrice(product.price)
                setDesc(product.desc)
            })
            .catch(err=>console.log(err))
    }, [])

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/edit/${id}`, {title, price, desc})
            .then(res=>navigate("/"))
            .catch(err=>console.log(err))
    }


    return (
        <form onSubmit={handleSubmit}>
        <p>
            <label>Title</label>
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title}/>
        </p>
        <p>
            <label>Price</label>
            <input type="text" onChange={e=>setPrice(e.target.value)} value={price}/>
        </p>
        <p>
            <label>Description</label>
            <input type="text" onChange={e=>setDesc(e.target.value)} value={desc}/>
        </p>
        <input type="submit"/>
    </form>
    )
}

export default UpdateForm2