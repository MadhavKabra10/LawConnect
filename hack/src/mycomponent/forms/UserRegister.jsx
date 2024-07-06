import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import './Register.css';
function UserRegister() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [pin, setPin] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "https://nodejs-mongodb-auth-app.herokuapp.com/register",
            data: {
                email,
                password,
            },
        };
        axios(configuration)
            .then((result) => {
                setRegister(true);
            })
            .catch((error) => {
                error = new Error();
            });
    };

    const hadleGender = (gender) => {
        setGender(gender);
    }
    return (
        <div className="user-body">
            {/* <Header /> */}
            <div className="regsign-div">
                <div className="heading">Register</div>
                <Form className="reg-form" onSubmit={(e) => handleSubmit(e)}>

                    {/* Name */}
                    <Form.Group controlId="formBasicName" id="form-name">
                        <div className="form-inputs">
                            <div>
                                <Form.Label >First Name</Form.Label>
                                <input
                                    id="name-ip"
                                    type="text"
                                    name="fname"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    placeholder="Enter First name"
                                />
                            </div>
                            <div>
                                <Form.Label >Last Name</Form.Label>
                                <input
                                    id="name-ip"
                                    type="text"
                                    name="lname"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    placeholder="Enter Last name"
                                />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" id="form-gender">
                        <Form.Label>Gender </Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                            type="radio"
                            id="male"
                            checked={gender === "male"}
                            onChange={() => { hadleGender("male") }}
                        />
                        <label htmlFor="male">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input
                            type="radio"
                            id="female"
                            checked={gender === "female"}
                            onChange={() => { hadleGender("female") }}
                        />
                        <label htmlFor="female">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input
                            type="radio"
                            id="other"
                            checked={gender === "other"}
                            onChange={() => { hadleGender("other") }}
                        />
                        <label htmlFor="other">Other</label>&nbsp;&nbsp;&nbsp;
                    </Form.Group>

                    {/* email */}
                    <Form.Group controlId="formBasicEmail" id="form-email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    {/* Phone number */}
                    <Form.Group controlId="formBasicEmail" id="form-email">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="number"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter Phone No."
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicProfession" id="form-city">
                        <div className="form-inputs">
                            <div>
                                <Form.Label>City</Form.Label>&nbsp;&nbsp;&nbsp;
                                <input
                                    id="name-ip"
                                    type="text"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Enter Your city"

                                />
                            </div>
                            <div>
                                <Form.Label>PinCode</Form.Label>&nbsp;&nbsp;&nbsp;
                                <input
                                    id="name-ip"
                                    type="number"
                                    name="pin"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    placeholder="Enter City Pin code"

                                />
                            </div>
                        </div>
                    </Form.Group>

                    {/* password */}
                    <Form.Group controlId="formBasicPassword" id="form-password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </Form.Group>


                    {/* submit button */}
                    <Button
                        id="subbtn"
                        variant="primary"
                        type="submit"
                        style={{ margin: "10px 0 10px 0" }}
                        onClick={(e) => handleSubmit(e)}
                    >
                        Register
                    </Button>

                    {/* display success message */}
                    {register ? (
                        <p className="text-success">You Are Registered Successfully</p>
                    ) : (
                        <p className="text-danger">You Are Not Registered</p>
                    )}
                </Form>
            </div>
        </div>
    );
    // return (
    //     <div className='user-body'>
    //         <Header />
    //         <div className='user-form h-screen w-screen'>

    //             <form className="w-full max-w-lg m-10" >
    //                 <div className="flex flex-wrap -mx-3 mb-6">
    //                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    //                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
    //                             First Name
    //                         </label>
    //                         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter First Name" />
    //                         {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    //                     </div>
    //                     <div class="w-full md:w-1/2 px-3">
    //                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
    //                             Last Name
    //                         </label>
    //                         <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Last Name" />
    //                     </div>
    //                 </div>
    //                 <div ><b>Gender</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                     <input
    //                         type="radio"
    //                         id="male"
    //                         checked={gender === "male"}
    //                         onChange={() => { hadleGender("male") }}
    //                     />
    //                     <label htmlFor="male">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    //                     <input
    //                         type="radio"
    //                         id="female"
    //                         checked={gender === "female"}
    //                         onChange={() => { hadleGender("female") }}
    //                     />
    //                     <label htmlFor="female">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    //                     <input
    //                         type="radio"
    //                         id="other"
    //                         checked={gender === "other"}
    //                         onChange={() => { hadleGender("other") }}
    //                     />
    //                     <label htmlFor="other">Other</label>&nbsp;&nbsp;&nbsp;
    //                 </div><br />

    //                 <div class="flex flex-wrap -mx-3 mb-6">
    //                     <div class="w-full px-3">
    //                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
    //                             Email
    //                         </label>
    //                         <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Enter Gmail" />

    //                     </div>
    //                     {/* <div class="w-full px-3">
    //                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
    //                             City
    //                         </label>
    //                         <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Enter City" />

    //                     </div> */}
    //                     <div class="w-full px-3">
    //                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
    //                             Password
    //                         </label>
    //                         <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />

    //                     </div>
    //                 </div>
    //                 <div class="flex flex-wrap -mx-3 mb-2">
    //                     <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    //                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
    //                             City
    //                         </label>
    //                         <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="text" placeholder="Pune" />
    //                     </div>
    //                     <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    //                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="state">
    //                             State
    //                         </label>
    //                         <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="state" type="text" placeholder="Maharashtra" />
    //                     </div>
    //                     <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    //                         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="pincode">
    //                             Pincode
    //                         </label>
    //                         <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pincode" type="text" placeholder="411041" />
    //                     </div>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // );
}
export default UserRegister;