import { Link } from "react-router-dom";
import Header from "../../mycomponent/header/header";
import React from "react";
import image from "../../asset/img/lawyer.png";
import image1 from "../../asset/img/mediator.png";
function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="pt-16">
        <div className="relative flex justify-center items-center h-[450px] bg-white ">
          <div className="text-center px-4 py-2">
            <div
              className="space-x-4 pl-5 p-3 flex flex-col justify-center items-center"
              style={{
                marginTop:"85px",
                height: "60vh",
                width: "100vw",
                backgroundColor: "#0277B5",
              }}
            >
              <h3
                style={{ color: "white", fontSize: "60px", paddingTop: "3rem" }}
                className="font-bold"
              >
                Free Legal Advice online
              </h3>
              <h3
                style={{ color: "white", fontSize: "60px" }}
                className="font-bold"
              >
                From Top Rated Lawyers
              </h3>
              <br />
              <div className="w-full flex flex-row justify-center">
                <Link to="/profregister" style={{ textDecoration: "none"  }}>
                  <div className="w-[150px] border-1 bg-white text-black flex border-gray-600 rounded-md h-[50px] ml-[50px] items-center hover:cursor-pointer ">
                    <img className="h-6 w-6 rounded-3xl ml-6" src={image} alt=""/>
                    <h6 className="ml-4">Lawyer</h6>
                  </div>
                </Link>
                <br />
                <Link to="/userregister" style={{ textDecoration: "none"  }}>
                  <div className="w-[150px] border-1 bg-white flex text-black border-gray-400 rounded-md h-[50px] ml-[50px] items-center hover:cursor-pointer">
                    <img className="h-6 w-6 rounded-3xl ml-6" src={image1} alt=""/>
                    <h6 className="ml-4">User</h6>
                  </div>
                </Link>
              </div>
              <h3 className="mt-4"
                style={{
                  color: "white",
                  fontSize: "30px",
                  paddingBottom: "3rem",
                }}
              >
                Select above for you.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
