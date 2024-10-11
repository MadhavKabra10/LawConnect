import Header from "../../mycomponent/header/header";
import Footer from "../../mycomponent/footer/footer";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChatFile from "./chatfile";

function ChatPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterData, setfilterData] = useState([]);

  function searchsubmit(e){
    e.preventDefault();
    let filter = filterData.filter((item) => item.email.startsWith(search));
    setfilterData(filter);
  }
    useEffect(() => {
      if(localStorage.getItem('role')=="user"){
      axios.get("https://springworks-latest.onrender.com/Legal/search",
        {
          headers: {
          'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
          'Content-Type': 'application/json'
        }
    }
      ).then(res=>{
        axios.post("https://springworks-latest.onrender.com/Legal/self",{email:localStorage.getItem('user')},
        {
          headers: {
          'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
          'Content-Type': 'application/json'
        }
    }
      ).then(self=>{
         let f= res.data.filter(data=>!self.data.connection.includes(data.email)&&!self.data.pending.includes(data.email));
         setfilterData(f);
        })
    })
  }
    else{
      navigate('/');
    }

  }, [])

  return (
    <>
      <Header />
      <form
        onSubmit={searchsubmit}
        className="max-w-md mx-auto flex items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-2"
        style={{ margin: "20px", padding: "10px" }}
      >
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="default-search"
            className="block w-full py-2 pl-10 pr-3 text-sm text-gray-900 bg-gray-50 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by location"
            style={{ margin: "5px" }}
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            style={{ height: "20px" }}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </form>

      <ChatFile props={filterData} setter={setfilterData} />
      <Footer/>
    </>
  );
}
export default ChatPage;
