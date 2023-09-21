import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    let navigate=useNavigate();
  const [user, setUser] = useState({
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
      const response = await axios.post('http://localhost:8081/api/login', user);

      console.log('Login successful:', response.data);
      // navigate('/home')

      localStorage.setItem("userRole", response.data.userRole);
      navigate("/confirmation");

      // Clear the form and any previous errors
      setUser({
        email: '',
        password: '',
      });
      setError('');
    } catch (err) {
      // Handle errors, such as incorrect credentials
      setError('Invalid email or password');
    }
  };

  return (
    <div className='login'>
    <div className='border'>
      <h2 className='heading'>LOGIN</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className='btn btn-dark my-2 mx-5'>Log In</button>
        <Link to={'/'} className='row mx-1'>Don't have an account?</Link>
      </form>
      {error && <div className="alert">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
