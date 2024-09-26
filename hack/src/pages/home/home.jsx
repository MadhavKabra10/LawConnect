import { Link ,NavLink} from "react-router-dom";
import Header from "../../mycomponent/header/header";
import React from "react";

import image from "../../asset/img/lawyer.png";
import image1 from "../../asset/img/mediator.png";
import Footer from "../../mycomponent/footer/footer";
function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="pt-16 w-[100%]">
        <div className="relative flex justify-center items-center h-[450px] bg-white ">
          <div className="text-center">
            <div
              className="space-x-4 pl-5 p-3 flex flex-col justify-center items-center"
              style={{
                marginTop: "85px",
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
                <Link exact to="/profregister" style={{ textDecoration: "none" }}>
                  <div className="w-[150px] border-1 bg-white text-black flex border-gray-600 rounded-md h-[50px] ml-[50px] items-center hover:cursor-pointer ">
                    <img
                      className="h-6 w-6 rounded-3xl ml-6"
                      src={image}
                      alt=""
                    />
                    <h6 className="ml-4">Lawyer</h6>
                  </div>
                </Link>
                <br />
                <Link exact to="/userregister" style={{ textDecoration: "none" }}>
                  <div className="w-[150px] border-1 bg-white flex text-black border-gray-400 rounded-md h-[50px] ml-[50px] items-center hover:cursor-pointer">
                    <img
                      className="h-6 w-6 rounded-3xl ml-6"
                      src={image1}
                      alt=""
                    />
                    <h6 className="ml-4">User</h6>
                  </div>
                </Link>
              </div>
              <h3
                className="mt-4"
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
        <div className="w-full h-[400px] bg-slate-100 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Connect with Over 6000+ Verified Lawyers Nationwide
          </h2>
          <p className="text-lg w-[70%] text-gray-600 mb-6">
            Our platform brings you access to experienced and specialized
            lawyers across multiple legal fields. Whether you need help with
            corporate law, family law, or criminal defense, we have you covered.
          </p>
          <div className="flex space-x-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Family Law</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Criminal Defense</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Corporate Law</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Intellectual Property</p>
            </div>
          </div>
          <Link exact to={'/chat'}> 
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Find a Lawyer
          </button>
          </Link>
        </div>
        <div className="w-full h-[400px] bg-slate-50 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Chat with Our Legal Bot for Instant Assistance
          </h2>
          <p className="text-lg w-[70%] text-gray-600 mb-6">
            Need quick legal advice? Our AI-powered chatbot is available 24/7 to
            answer your questions, guide you through legal processes, and help
            you find the right resources.
          </p>
          <div className="flex space-x-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Quick Legal Help</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">24/7 Availability</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Legal Resources</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">AI-Powered Guidance</p>
            </div>
          </div>
           <Link exact to={'/info'}>   <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-purple-700 transition">
            Start Chat
          </button> </Link>
        </div>
        <div className="w-full h-[400px] bg-slate-200 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with the Latest Legal News
          </h2>
          <p className="text-lg w-[70%] text-gray-600 mb-6">
            Explore the latest updates, trends, and in-depth analyses of legal
            cases and regulations. Stay informed with our curated news tailored
            for legal professionals and clients.
          </p>
          <div className="flex space-x-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Legal Trends</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Court Decisions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Expert Insights</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mb-2"></div>
              <p className="text-sm text-gray-600">Legal Reforms</p>
            </div>
          </div>
          <Link exact to={'/news'} ><button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-red-700 transition">
            Go to News Page
          </button> </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
