import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
  "pending":[]
      }
  )
  if(res.data=="ok"){
  localStorage.setItem('jwt',res.data);
  localStorage.setItem('user',email);
  localStorage.setItem('role',prof);
  localStorage.setItem('dateNow',new Date().getTime);
  navigate('/')
  console.log("done", res);
  }
    // make the API call
    
  };

  const hadleGender = (gender) => {
    setgender(gender);
  }

  return (

    <>

      <div className="regsign-div" style={{ boxShadow: "4px 4px 6px 5px #d4f4fa", border: "", borderRadius: "9px", padding: "11px", margin: '4rem 25rem 0 25rem' }}>
        <div className="heading" style={{ textAlign: "center", fontWeight: "bolder", fontSize: '23px' }}>Register</div>
        <br />
        <Form className="reg-form" onSubmit={(e) => handleSubmit(e)}>

          {/* Name */}
          <Form.Group controlId="formBasicName" id="form-name" style={{ padding: "10px" }}>
            <div className="form-inputs" >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Form.Label >First Name</Form.Label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  id="name-ip"
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Enter First name"

                />
                {/* </div>

              <div> */}

                <Form.Label >Last Name</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  id="name-ip"
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Enter Last name"

                />
              </div>
            </div>
          </Form.Group>

          {/* Gender */}
          <Form.Group controlId="formBasicEmail" id="form-gender" style={{ padding: "10px" }}>
            <Form.Label>Gender </Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input
              type="radio"
              id="male"
              checked={gender === "male"}
              onChange={() => { hadleGender("male") }}
            />
            <label htmlFor="male">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input
              type="radio"
              id="female"
              checked={gender === "female"}
              onChange={() => { hadleGender("female") }}
            />
            <label htmlFor="female">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input
              type="radio"
              id="other"
              checked={gender === "other"}
              onChange={() => { hadleGender("other") }}
            />
            <label htmlFor="other">Other</label>&nbsp;&nbsp;&nbsp;
          </Form.Group>

          {/* email */}
          <Form.Group controlId="formBasicEmail" id="form-email" style={{ padding: "10px" }}>
            <Form.Label>Email address</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={{ width: "350px" }}
            />
          </Form.Group>

          {/* Profession details */}
          <Form.Group controlId="formBasicProfession" id="form-prof" style={{ padding: "10px" }}>
            <div className="form-inputs">
              <div style={{ paddingBottom: "10px" }}>
                <Form.Label>Profession</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  id="name-ip"
                  type="text"
                  name="prof"
                  value={prof}
                  onChange={(e) => setProf(e.target.value)}
                  placeholder="Enter profession"
                />
                {/* </div>

              <div> */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Form.Label>Role</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  id="name-ip"
                  type="text"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Enter Your role"

                />
              </div>
            </div>
          </Form.Group>

          {/* City */}
          <Form.Group controlId="formBasicProfession" id="form-city" style={{ padding: "10px" }}>
            <div className="form-inputs">
              <div style={{ paddingBottom: "10px" }}>
                <Form.Label>City</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  id="name-ip"
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter Your city"

                />
                {/* </div>
              <div> */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Form.Label>PinCode</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;
                <input
                  id="name-ip"
                  type="number"
                  name="pin"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter City Pin code"

                />
              </div>
            </div>
          </Form.Group>

          {/* password */}
          <Form.Group controlId="formBasicPassword" id="form-password" style={{ padding: "10px" }}>
            <Form.Label>Password</Form.Label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>


          {/* submit button */}
          <Button
            id="subbtn"
            variant="primary"
            type="submit"
            style={{ margin: "10px 0 10px 80%" }}
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </Button>

          {/* display success message */}
          {register ? (
            <p className="text-success">You Are Registered Successfully</p>
          ) : (
            <p className="text-danger">You Are Not Registered</p>
          )}
        </Form>
      </div>
    </>
  );
}