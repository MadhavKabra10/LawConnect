import { useEffect, useState } from "react"
import { Avatar } from "@mui/material"
import axios from "axios"
import Button from '@mui/material/Button'
export default function Pending() {
   async function handleSubmit(e){
    e.preventDefault();

    const val =e.target.take.value;
    const res=await axios.post("http://localhost:8080/Legal/connection",{sender:localStorage.getItem('user'),receiver:val,role:'non_user'},
    {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json' 
      }
  }
)
        
         setNotes(old=>old.filter(p=>p!=val));
        
    
   }
  
    const [notes, setNotes] = useState([])
    useEffect(() => {
        axios.post("http://localhost:8080/Legal/self",{email:localStorage.getItem('user')},
        {
            headers: {
            'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
            'Content-Type': 'application/json' 
          }
      }
    ).then(res=>{
             setNotes(res.data.pending)
        })
        
    }, [])
    return <>

        <div>
            <p style={{ fontWeight: "semi-bold", fontSize: "30px" }}>Requests</p>
        </div>
        {notes.length !== 0 ? notes.map((note) => (
            <div key={note} className='pt-35 mb-15 p-15'  >

                <form onSubmit={handleSubmit} className="bg-white mt-10 p-15 mb-10 rounded-10">
                    <div className="flex mb-10">
                        <Avatar>{note.charAt(0) }</Avatar>
                        <div className="ml-10">

                            <span>
                                <p className="text-gray-500 text-xs"  >{note}</p>
                                <input type="hidden" name="take" value={note} />

                                <p className="text-gray-500 text-xs"   >Pending</p>

                            </span>
                            { localStorage.getItem('role')!='user' ?<Button variant="contained" type='submit'>Connect</Button>:<></>}
                        </div>
                    </div>
                </form>


            </div>
        )) : <></>}
    </>
}