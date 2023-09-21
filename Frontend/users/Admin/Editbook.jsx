import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Editbook.css'

export default function Editbook() {
    let navigate=useNavigate();

    const {id}=useParams();


const [book,setBook]=useState({
    bookName:"",
    bookDescription:"",
    price:"",
    quantity:""
});


const{bookName,bookDescription,price,quantity}=book;
const onInputChange=(e)=>{
setBook({...book,[e.target.name]: e.target.value});
};

useEffect(()=>{
    loadbook();
},[]);

const onSubmit=async(e)=>{
e.preventDefault();
await axios.put(`http://localhost:8081/book/${id}`,book);
navigate("/admin_home");
};

const loadbook = async ()=>{
    const result=await axios.get(`http://localhost:8081/book/${id}`);
    setBook(result.data);
}


  return (
    <div className='container'>
    <div className='edb'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
    <div className='eb'><h2 className='text-center m-4'>Edit Book</h2></div>

    <form onSubmit={(e)=>onSubmit(e)}>

    <div className='mb-3'>
    <label htmlFor='bookName' className='form-label'>
    Book Name
    </label>
    <input
    type={"text"}
    className='form-control'
    placeholder='Enter book name'
    name='bookName'
    value={bookName}
    onChange={(e)=>onInputChange(e)}/>
    </div>

    <div className='mb-3'>
    <label htmlFor='bookDescription' className='form-label'>
    Description
    </label>
    <input
    type={"text"}
    className='form-control'
    placeholder='Enter your Description'
    name='bookDescription'
    value={bookDescription}
    onChange={(e)=>onInputChange(e)}/>
    </div>

    <div className='mb-3'>
    <label htmlFor='price' className='form-label'>
    Price
    </label>
    <input
    type={"text"}
    className='form-control'
    placeholder='Enter price'
    name='price'
    value={price}
    onChange={(e)=>onInputChange(e)}/>
    </div>

    <div className='mb-3'>
    <label htmlFor='quantity' className='form-label'>
    Quantity
    </label>
    <input
    type={"text"}
    className='form-control'
    placeholder='Enter quantity'
    name='quantity'
    value={quantity}
    onChange={(e)=>onInputChange(e)}/>
    </div>

    <center>
    <button type='submit' className='btn btn-primary'>Submit</button>
    <Link className='btn btn-danger mx-2' to='/admin_home'>Cancel</Link>
    </center>
    </form>
    </div>
    </div>
    </div>
  )
}
