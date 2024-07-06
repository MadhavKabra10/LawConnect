import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import Notification from '../notification';
const Header = () => {
  const [notifications, setNotifications] = useState([]);
  const addNotification = (message, type) => {
    const newNotification = { id: Date.now(), message, type };
    setNotifications([...notifications, newNotification]);

    // Remove the notification after 3 seconds
    setTimeout(() => {
      setNotifications(notifications.filter(note => note.id !== newNotification.id));
    }, 3000);
  };
  function loginCheck(){
    let stored=localStorage.getItem('jwt');
  let date=localStorage.getItem('dateNow');

  if(stored){
    const storedTime = new Date(date).getTime();
  const currentTime = new Date().getTime();
  const differenceInHours = (currentTime - storedTime) / (1000 * 60 * 60);
  if(differenceInHours>8)
    {
      localStorage.removeItem('dateNow');
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      return 0;
    }
    else{
      return 1;
    }
  }
  return 0;
}
const navigate=useNavigate();
useEffect(()=>{
if(loginCheck()===0)
  {
    navigate('/');
    addNotification("Please login", "success")
  }
},[])
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [

    { id: 1, text: 'Home',link:'/' },
    { id: 2, text: 'Profile',link:'/law' },
    { id: 3, text: 'News',link:'/news' },
    {id: 4,text:'InfoBot', link:'/info'},
    {id :5 ,text:'Chat',link:'/chat'},
    { id: 6, text: 'About',link:'/about' },
    { id: 7, text: loginCheck()===1?'Logout':'Login',link: loginCheck()===1?'/logout':'/login' },

  ];

  return (<div>
    <div className='bg-[#adc3dc] w-full flex justify-between items-center h-20 text-black font-bold'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-black ml-4'>Law & Order</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex  flex-grow'>
        {navItems.map(item => (

            <NavLink exact  to= {item.link} >
          <li key={item.id}className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>

        {item.text} 


          </li>
          </NavLink>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-full h-full bg-[#000300] ease-in-out duration-500 z-50'
            : 'ease-in-out w-full duration-500 fixed top-0 bottom-0 left-[-100%] z-50'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 text-center'>REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
         
          <li
            key={item.id}
            
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
          <Link  to="/about">  {item.text}</Link>
          </li>
          
        ))}
      </ul>
      </div>
      {notifications.map(note => (
      <Notification key={note.id} message={note.message} type={note.type} />
    ))}
    </div>
  );
};

export default Header;
