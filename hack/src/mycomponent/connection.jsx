import { useEffect, useState } from "react"
import { Avatar } from "@mui/material"
import Chat from "./chatroom"
import axios from "axios"
import Button from '@mui/material/Button'
import { Link } from "react-router-dom"
export default function Connection() {

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
    ]
    const [notes, setNotes] = useState([])
    useEffect(() => {

         axios.post("http://localhost:8080/Legal/self",{email:localStorage.getItem('user')}).then(res=>{
            console.log(res);
            setNotes(res.data.connection)
        })
        
    }, [])
    return <>
        <div>
            <p style={{ fontWeight: "semi-bold", fontSize: "30px" }}>Messages</p>
        </div>
        {notes.length !== 0 ? notes.map((note) => (
            <div key={note} className='pt-35 mb-15 p-15'>
               
                <div className="bg-white mt-10 p-15 mb-10 rounded-10">
                <div className="flex justify-end">
                                <Chat user1={localStorage.getItem('user')} user2={note} />
                             <Link exact to="/payindex">   <Button variant="contained" type='submit'>Pay</Button></Link>
                                </div>
                    <div className="flex mb-10">
                        <Avatar>{note.charAt(0) }</Avatar>
                        <div className="ml-10">

                            <span>
                                <p className="text-gray-500 text-xs">{note}</p>
                                <input type="hidden" name="hiddenValue" value={note} />

                            </span>
                       
                        </div>
                        
                    </div>
                    
                </div>


            </div>
        )) : <></>}
    </>
}