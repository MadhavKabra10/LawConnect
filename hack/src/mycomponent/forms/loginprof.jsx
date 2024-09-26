import React from 'react';

import { Link } from 'react-router-dom';
import  { useState } from 'react';
import axios from 'axios';
function LoginProf() {
  const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const handleEmailChange = (event) => {
  setEmail(event.target.value);
};
const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};
const handleSubmit = (event) => {
  // Prevent default form submission
  event.preventDefault();
  axios.post('https://localhost8080/login', {password: password,email: email,}, {headers: {'Content-Type': 'application/json',},})
  .then(response => {console.log('Response:', response.data);
  
  })
  .catch(error => {console.error('Error:', error);
  });
  
  console.log('password:', password);
  console.log('Email:', email);
};
  return (
    
    <>
      {/* <Header /> */}
      <div className='flex-1 bg-gray-600'>

        <div className="flex items-center justify-center h-screen ">
          <div >
            <h1 className='text-center text-white'>Sign-In</h1>
            <form onSubmit={handleSubmit} className="text-center  px-5 py-8  bg-blue-500 text-white rounded-md">

              <div >
                <span >Email address </span>
                <br />
                <input className="bg-white text-black" type="text" id="email" name="email" value={email} onChange={handleEmailChange}/>
              </div>
              <div className='mt-1'>
                <span htmlFor="password">Password</span>
                <br />
                <input className="bg-white text-black" type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
              </div>
              <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">Login</button>
            </form>
            <Link to="profregister" className='text-white'>new Signup!</Link>
          </div>
        </div>
      </div>
    </>
  );

}
export default LoginProf