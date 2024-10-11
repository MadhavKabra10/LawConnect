import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Avatar } from "@mui/material";
import Chat from "../chat/chatroom";
import "./profile.css";

export default function ProfilePage(props) {

  const [email,setEmail] =useState("")
  const [phone,setPhone]=useState("")
  const [gender,setGender]=useState("")
  const [city,setCity]=useState("")
  const [profession,setProfession]=useState("")
  const [fname,setFname]=useState("")
  const [lname,setLname]=useState("")

  useEffect( ()=>{
   async function solve(){
   const res= await axios.post("https://springworks-latest.onrender.com/Legal/self",{email:localStorage.getItem('user')},
     {
         headers: {
         'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
         'Content-Type': 'application/json' 
       }
   }

      )
      setEmail(res.data.email);
     setPhone(res.data.phone);
     setGender(res.data.gender);
     setCity(res.data.city);
     setProfession(res.data.profession);
     setFname(res.data.fname);
     setLname(res.data.lname);
    }
    solve()
     
   },[])
  const disable = props.disable;
  return (
    <section style={{ backgroundColor: "#f4f5f7" }}>
      <MDBContainer className="py-5">
        <MDBRow>

          <MDBCol lg="4" >
            <MDBCard
              className="mb-4 shadow-3"
              style={{ border: "none", borderRadius: "15px" ,backgroundColor: "#0277B5",color:"white" ,height:"313px"}}
            >
              <MDBCardBody
                className="d-flex flex-column align-items-center"
                style={{ padding: "2rem" }}
              >
                <Avatar
                  alt={fname}
                  sx={{ width: 100, height: 100, marginBottom: "1rem" }}
                />
                <h5 className="font-bold">{fname+" "+lname}</h5>
                <p className="mb-1">{profession}</p>
                <p className="mb-4">{city}</p>
                {disable === 1 ? (
                  <></>
                ) : (
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn color="primary" className="me-2">
                      Follow
                    </MDBBtn>
                    <MDBBtn color="secondary">Message</MDBBtn>
                  </div>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard
              className="mb-4 shadow-3"
              style={{ border: "none", borderRadius: "15px" }}
            >
              <MDBCardBody style={{ padding: "2rem" }}>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                    {fname+" "+lname}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr style={{ width: "100%" }} />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr style={{ width: "100%" }} />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                    {phone}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr style={{ width: "100%" }} />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {city}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
