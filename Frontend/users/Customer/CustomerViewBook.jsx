import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import './CustomerViewbook.css'

export default function CustomerViewBook() {
  const [book,setBook]=useState({
    bookName:"",
    bookDescription:"",
    price:"",
    quantity:""
  })

  const {id}=useParams();

  
  useEffect(()=>{
    loadBook()
  },[]);

  const loadBook = async ()=>{
    const result=await axios.get(`http://localhost:8081/book/${id}`)
    setBook(result.data);
  }


  return (
    <div className='container'>
    <div className='cvb'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
    <h2 className='text-center m-4 text-light'>Book Details</h2>

    <div className='card'>
    <div className='card-header'>
    Details of Book id : {book.id}
    <ul className="list-group list-group-flush">

    <li className='list-group-item'>
    <b>Name: </b>
    {book.bookName}
    </li>

    <li className='list-group-item'>
    <b>Description </b>
    {book.bookDescription}    
    </li>

    <li className='list-group-item'>
    <b>Price </b>
    {book.price}
    </li>

    <li className='list-group-item'>
    <b>Quantity </b>
    {book.quantity}
    </li>
    
    </ul>
    </div>
    </div>
    <Link className='btn btn-primary my-2' to={"/customer_home"}>
    Back to Home
    </Link>
    
    </div>
    </div>
    </div>
  )
}
