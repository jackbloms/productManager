// import React, {useState} from 'react'
// import axios from 'axios'

// const UpdateForm = (props) => {
//     // const [title, setTitle] = useState("")
//     // const [price, setPrice] = useState(0)
//     // const [desc, setDesc] = useState("")

//     const handleSubmit =(e)=>{
//         e.preventDefault()
//         axios.post('http://localhost:8000/api/products/edit/:id'), {title, price, desc} 
//             .then(res=>props.updateList(res.data))
//             .catch(err=>console.log(err))
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <p>
//                 <label>Title</label>
//                 <input type="text" onChange={e=>setTitle(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Price</label>
//                 <input type="text" onChange={e=>setPrice(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Description</label>
//                 <input type="text" onChange={e=>setDesc(e.target.value)}/>
//             </p>
//             <input type="submit"/>
//         </form>
//         // <fieldset>
//         //     <legend>Update</legend>
//         // </fieldset>
//     )
// }

// export default UpdateForm
