import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import AdminNavbar from '../layout/AdminNavbar';
import "./AdminHome.css" 

export default function AdminHome() {
const [books,setBooks]=useState([]);

const {id}=useParams;

useEffect(()  => {
loadBooks();
},[]);

const loadBooks =async () => {
  const result =await axios.get("http://localhost:8081/books");
  setBooks(result.data);
};

const deleteBook = async(id)=>{
  await axios.delete(`http://localhost:8081/book/${id}`);
  loadBooks();
};

  return (
    <div className='ahome '>
    <AdminNavbar/>
    <div className='container py-4'>
    <div className='py-3 px-5'>
    <table className="table border shadow">
  <thead className='table-secondary'>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope='col'></th>
    </tr>
  </thead>
  <tbody>
{
  books.map((book,index)=>(
    <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{book.bookName}</td>
      <td>{book.bookDescription} </td>
      <td>{book.price} </td>
      <td>{book.quantity} </td>
      <td>
      <Link className='btn btn-primary mx-2 mb-2' 
      to={`/viewbook/${book.id}`}
      >View</Link>
      <Link className='btn btn-outline-primary mx-2 mb-2'
      to={`/editbook/${book.id}`}
      >Edit</Link>
      <button className='btn btn-danger mx-2 mb-2'
      onClick={()=>deleteBook(book.id)}
      >Delete</button>
      </td>
    </tr>
  ))
}
  </tbody>
</table>
    </div>
    </div>
    </div>
  )
}
