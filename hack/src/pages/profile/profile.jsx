import React from "react";
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
                  alt="Johnatan Smith"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 100, height: 100, marginBottom: "1rem" }}
                />
                <h5 className="font-bold">Johnatan Smith</h5>
                <p className="mb-1">Full Stack Developer</p>
                <p className="mb-4">Bay Area, San Francisco, CA</p>
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
                      Johnatan Smith
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
                      example@example.com
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
                      (097) 234-5678
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr style={{ width: "100%" }} />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      (098) 765-4321
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
                      Bay Area, San Francisco, CA
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
