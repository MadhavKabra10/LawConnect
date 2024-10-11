import React from 'react';
import { Button } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import Header from ".././header/header";
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
    axios.post('https://springworks-latest.onrender.com/Legal/login', { password: password, email: email, }, { headers: { 'Content-Type': 'application/json', }, })
      .then(response => {
      //  console.log('Response:', response.data);
        
          localStorage.setItem('jwt',response.data.token);
          localStorage.setItem('user',email);
          localStorage.setItem('role',response.token);
          localStorage.setItem('dateNow',new Date().getTime);
          navigate('/')
          console.log("done", response);


      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (

    <>
        <div className="fixed top-0 left-0 w-full z-50">
        <Header disable={1}/>
      </div>
      <div className='flex-1'>

        <div className="flex items-center justify-center h-screen ">
          <div style={{ padding: "30px" }}>
            <h1 className=" text-center text-2xl font-bold  text-black-300 my-4 rounded-md" style={{fontSize:"50px"}}>Log-In</h1>
            <form onSubmit={handleSubmit} className="text-center  px-5 py-8 rounded-md" >

              <div >
                <span style={{fontSize:"20px"}} >Email address </span>
                <br />
                <input className="text-black" type="text" id="email" name="email" value={email} onChange={handleEmailChange} style={{ backgroundColor: "#eee", width:"400px", height:"33px" }} />
              </div>
              <br />
              <div className='mt-1'>
                <span htmlFor="password" style={{fontSize:"20px"}}>Password</span>
                <br />
                <input className="text-black" type="password" id="password" name="password" value={password} onChange={handlePasswordChange} style={{ backgroundColor: "#eee", width:"400px", height:"33px" }} />
              </div>

              <Button style={{backgroundColor:"#0277B5"}} type="submit" id="subbtn" variant="primary" className="mt-4 px-4 py-2   rounded-md">Login</Button>


            </form>
          </div>
        </div>
      </div >
    </>
  );

}
export default LoginProf