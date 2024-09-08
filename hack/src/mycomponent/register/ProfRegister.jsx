import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from ".././header/header";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function ProfRegister() {
  let navigate=useNavigate()
  // initial state
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setgender] = useState("");
  const [email, setEmail] = useState("");
  const [prof, setProf] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [register, setRegister] = useState(false);

  async function handleSubmit(e) {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    
    const res = await axios.post("http://localhost:8080/Legal/register",
      {
  "fname":fname,
  "lname":lname,
  "email": email,
  "password":password,
  "gender":gender,
  "profession":prof,
  "city":city,
  "phone":pin,
  "connection":[],
  "pending":[],
  "role":"USER"
      }
  )
console.log("89",res.token);
  localStorage.setItem('jwt',res.data.token);
  localStorage.setItem('user',email);
  localStorage.setItem('role',prof);
  localStorage.setItem('dateNow',new Date().getTime);
  navigate('/')
  console.log("done", res);

    // make the API call
    
  };

  const hadleGender = (gender) => {
    setgender(gender);
  }

  return (

    <>
    
    </>
  );
}