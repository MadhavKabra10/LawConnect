import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { Avatar } from "@mui/material";
import Notification from './notification';
import axios from 'axios';



const ChatFile = (objectlist) => {
  
  const [user,setUser]=useState([]);
  const [notifications, setNotifications] = useState([]);
  const addNotification = (message, type) => {
    const newNotification = { id: Date.now(), message, type };
    setNotifications([...notifications, newNotification]);

    // Remove the notification after 3 seconds
    setTimeout(() => {
      setNotifications(notifications.filter(note => note.id !== newNotification.id));
    }, 3000);
  };

  const { props } = objectlist
  function notify(event) {
    event.preventDefault();
    const value = event.target.hiddenValue.value;
    let val=JSON.parse(value)
    console.log({sender:localStorage.getItem('user'),receiver:val.email,role:'user'},value,val)
    axios.post("http://localhost:8080/Legal/connection",{sender:localStorage.getItem('user'),receiver:val.email,role:'user'}).then(
      res=>{
        objectlist.setter(old=>old.filter(p=>p.email!=val.email));
      }
    )
    addNotification("connect sent", "success")

  }
  return <>
    {notifications.map(note => (
      <Notification key={note.id} message={note.message} type={note.type} />
    ))}

    {console.log(props)}
    {props && props.length > 0 ? props.map(prop => (
      <div key={prop.email} className='pt-35 mb-15 p-15' style={{ margin: "0 2rem 0 2rem", border: "none" }}>
        <form onSubmit={notify} className='border-2 border-black-500 p-2' style={{ border: "none" }}>
          <div className="bg-white mt-10 p-15 mb-10 rounded-10" >
            <div className="flex mb-10">
              <Avatar>{prop.fname.charAt(0) + prop.lname.charAt(0)}</Avatar>
              <div className="ml-10">
                <h2>{prop.fname + prop.lname}</h2>
                <span>
                  <p className="text-gray-500 text-xs">{prop.email}</p>
                  <input type="hidden" name="hiddenValue" value={JSON.stringify(prop)} />
                  <br />
                  <Button variant="contained" type='submit'>Connect</Button>
                </span>
              </div>
            </div>
          </div>

        </form>

        <hr />
        <br />
      </div>
    )) : <></>}
  </>
}

export default ChatFile