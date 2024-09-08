
import Header from '../header/header';
import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function UserRegister() {
    let navigate=useNavigate()
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pin, setPin] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await axios.post("http://localhost:8080/Legal/register",
            {
        "fname":fname,
        "lname":lname,
        "email": email,
        "password":password,
        "gender":"male",
        "profession":"user",
        "city":city,
        "phone":pin,
        "connection":[],
        "pending":[],
        "role":"USER"
            }
        )
        console.log("89",res.token);
        localStorage.setItem('jwt',res.data.token);
        localStorage.setItem('user',email);
        localStorage.setItem('role','user');
        localStorage.setItem('dateNow',new Date().getTime);
        navigate('/')
        console.log("done", res);
        
    }


    return (
        <>
            <div className='h-screen w-screen' style={{ margin: "7rem 0 0 8rem" }}>

                <form className="w-full max-w-lg m-10" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
                            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name" >
                                Last Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                                Email
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Enter Gmail" value={email} onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        {/* <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                City
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Enter City" />

                        </div> */}
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Password
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />

                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
                                City
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="text" placeholder="Pune" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="state">
                                State
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="state" type="text" placeholder="Maharashtra" value={state} onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="pincode">
                                Pincode
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pincode" type="text" placeholder="411041" value={pin} onChange={(e) => setPin(e.target.value)} />
                        </div>
                    </div>

                    <Button
                        id="subbtn"
                        variant="primary"
                        type="submit"
                        style={{ margin: "10px 0 10px 83%" }}
                        onClick={(e) => handleSubmit(e)}
                    >
                        Register
                    </Button>
                </form>
            </div>
        </>
    );
}
export default UserRegister;