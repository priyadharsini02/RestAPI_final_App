import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    let navigate=useNavigate();
  const [user, setUser] = useState({
    username:'',
    email: '',
    password: '',
    userRole:'',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/signup', user);

      console.log('Registration successful:');
      navigate("/login");

      setUser({
        username:'',
        email: '',
        password: '',
        userRole:'',
      });
      setError('');
    } catch (err) {
      // Handle errors, such as duplicate email or invalid data
      setError(err.response?.data?.message || 'An error occurred during registration');
    }
  };

  return (
    <div className='signup'>
    <div className='signupborder'>
      <h2 className='signupheading'>SIGNUP</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <input
          className='row mx-1 my-2'
            type="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
          className='row mx-1 my-2'
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
          className='row mx-1 my-2'
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label for="userRole" className='row my-2 mx-1'>Select Role:</label>
          <select id="userRole" 
          name="userRole" 
          onChange={handleChange} 
          value={user.userRole}
          required
          className='row mx-1 my-1'>
            <option value="ADMIN">Admin</option>
            <option value="CUSTOMER">Customer</option>
          </select>
        </div>
        <button type="submit" className='buton mx-5 my-3'>Sign Up</button>
        <Link type="login" to={'/login'} className='row mx-1'>Already have an Account?</Link>
      </form>
      {error && <div className="alert">{error}</div>}
      </div>
    </div>
  );
};

export default Signup;
