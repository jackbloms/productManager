import React, {useState} from 'react'
import UpdateForm from './UpdateForm'

const Container2 = () => {
    const [productList, setProductList] = useState([])
    
    const refreshList = (newProduct) =>{
        setProductList=([...productList, newProduct])
    }

    return (
        <UpdateForm updateList={refreshList}/>
    )
}

export default Container2