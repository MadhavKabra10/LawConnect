import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function LoginProf() {
  let navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault();
    axios.post('http://localhost:8080/Legal/login', { password: password, email: email, }, { headers: { 'Content-Type': 'application/json', }, })
      .then(response => {
      //  console.log('Response:', response.data);
        if(response.token!==""){
          localStorage.setItem('jwt','ok');
          localStorage.setItem('user',email);
          localStorage.setItem('role',response.token);
          localStorage.setItem('dateNow',new Date().getTime);
          navigate('/')
          console.log("done", response);
          }

      })
      .catch(error => {
        console.error('Error:', error);
      });
      
    console.log('password:', password);
    console.log('Email:', email);
  };
  return (

    <>
      {/* <Header /> */}
      <div className='flex-1'>

        <div className="flex items-center justify-center h-screen ">
          <div style={{ boxShadow: "4px 4px 4px 5px #E5F5F9", padding: "30px" }}>
            <h1 className=" text-center text-2xl font-bold  text-black-300 my-4 rounded-md">Sign-In</h1>
            <form onSubmit={handleSubmit} className="text-center  px-5 py-8 rounded-md" >

              <div >
                <span >Email address </span>
                <br />
                <input className="text-black" type="text" id="email" name="email" value={email} onChange={handleEmailChange} style={{ backgroundColor: "#eee" }} />
              </div>
              <br />
              <div className='mt-1'>
                <span htmlFor="password">Password</span>
                <br />
                <input className="text-black" type="password" id="password" name="password" value={password} onChange={handlePasswordChange} style={{ backgroundColor: "#eee" }} />
              </div>

              <Button type="submit" id="subbtn" variant="primary" className="mt-4 px-4 py-2   rounded-md">Login</Button>
            </form>



            <Link to="profregister" className='text-white'>new Signup!</Link>

          </div>
        </div>
      </div >
    </>
  );

}
export default LoginProf