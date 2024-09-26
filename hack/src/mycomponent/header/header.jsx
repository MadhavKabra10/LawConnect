import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Notification from "../notifications/notification";
const Header = (props) => {
  let disable=props.disable
  const [notifications, setNotifications] = useState([]);
  const addNotification = (message, type) => {
    const newNotification = { id: Date.now(), message, type };
    setNotifications([...notifications, newNotification]);
    setTimeout(() => {
      setNotifications(
        notifications.filter((note) => note.id !== newNotification.id)
      );
    }, 3000);
  };

  function loginCheck() {
    let stored = localStorage.getItem("jwt");
    let date = localStorage.getItem("dateNow");
    if (stored) {
      const storedTime = new Date(date).getTime();
      const currentTime = new Date().getTime();
      const differenceInHours = (currentTime - storedTime) / (1000 * 60 * 60);
      if (differenceInHours > 8) {
        localStorage.removeItem("dateNow");
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        return 0;
      } else {
        return 1;
      }
    }
    return 0;
  }
  const navigate = useNavigate();
  
  useEffect(()=>{
  if(disable!=1&&loginCheck()===0)
    {

      navigate('/');
      addNotification("Please login", "success")
    }
  },[])
  
  const [nav, setNav] = useState(false);
  const handleNav=()=>{setNav(!nav);};
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Profile", link: "/law" },
    { id: 3, text: "News", link: "/news" },
    { id: 4, text: "InfoBot", link: "/info" },
    { id: 5, text: "Chat", link: "/chat" },
    { id: 6, text: "About", link: "/about" },
    { id: 7 ,text:`${loginCheck()==0?"login":"logout"}`,link:`${loginCheck()==0?"/login":"/logout"}`}
    
  ];
  return (
    <div>
      <div className="w-full  border-b-[2px] flex justify-between bg-white items-center h-20 text-black text-xl">
        <h1 className="w-full text-3xl font-bold text-gray-600 ml-[10vw]">
                <Link exact to={"./"} style={{color:"Black", textDecoration:"none"}}>
                    LawConnect
                </Link></h1>
        <ul className="flex mr-[5vw]">
          {navItems.map((item) => (
            <Link exact to={item.link} key={item.id}
            style={{ textDecoration: "none"  }}>
              <li key={item.id} className="h-[40px] w-[80px] m-2 text-gray-600 cursor-pointer pt-[10px]  hover:font-bold">{item.text}</li>
            </Link>
          ))}
        </ul>
        <div onClick={handleNav} className="block md:hidden">{nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}</div> 
      </div>

      {notifications.map((note) => (<Notification key={note.id} message={note.message} type={note.type}/>))}
    </div>
  );
};

export default Header;
