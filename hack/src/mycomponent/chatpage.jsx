import Header from "./header/header";
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ChatFile from "./chatfile";

function ChatPage() {
  const navigate=useNavigate();
  const dummyData = [
    {
      FirstName: "John",
      LastName: "Doe",
      email: "john@example.com",
      password: "password123",
      PhoneNo: 1234567890,
      Gender: "Male",
      City: "New York",
      Profession: "Engineer",
      Role: "Admin"
    },
    {
      FirstName: "Jane",
      LastName: "Smith",
      email: "jane@example.com",
      password: "password456",
      PhoneNo: 9876543210,
      Gender: "Female",
      City: "Los Angeles",
      Profession: "Doctor",
      Role: "User"
    }
    // Add more objects as needed
  ];
  const [search, setSearch] = useState('');
  const [filterData, setfilterData] = useState([]);


  function searchsubmit(e) {
    e.preventDefault()
    // for (let i = 0; i < filterData.length; i++) {
    //   console.log(filterData[i].City, 'death', search, filterData[i].City.includes(search))
    // }/
    let filter = filterData.filter(item =>
      item.City.includes(search)
    );

    setfilterData(filter);

  }
  useEffect(() => {
    if(localStorage.getItem('role')=="user"){
    axios.get("http://localhost:8080/Legal/search",
      {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json' 
      }
  }
    ).then(res=>{
      //console.log(res);
      axios.post("http://localhost:8080/Legal/self",{email:localStorage.getItem('user')},
      {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json' 
      }
  }
    ).then(self=>{
        console.log(self.data.connection,self.data.pending,res.data);

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
      {/* <form onSubmit={searchsubmit} className="max-w-md mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative" style={{ padding: "10px" }}>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" style={{ margin: "45px" }}>
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" style={{}}>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" value={search} onChange={(e) => { setSear  ch(e.target.value) }} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="      Search" style={{ margin: "36px", alignItems: "center" }} required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form> */}

      <form onSubmit={searchsubmit} className="max-w-md mx-auto flex items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-2" style={{ margin: "20px", padding: "10px" }}>
        <label htmlFor="default-search" className="sr-only">Search</label>
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
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
        <button type="submit" className="p-2 text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" style={{ height: "20px" }}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </button>
      </form>


      <ChatFile props={filterData} setter={setfilterData} />
      {
/*
<div className="bg-white p-15 mb-10 rounded-10">
          <div className="flex mb-10">
            <Avatar>{nm}</Avatar>
            <div className="ml-10">
              <h2>{name}</h2>
              <p className="text-gray-500 text-xs">{Job}</p>
            </div>
     </div>
</div> */}


    </>
  );
}
export default ChatPage;