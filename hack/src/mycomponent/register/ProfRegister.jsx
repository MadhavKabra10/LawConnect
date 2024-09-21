import { useState } from "react"
import axios from "axios";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
export default function LawyerLogin(){
  let navigate = useNavigate();
    const [state, setState] = useState(0);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [otp,setOtp]=useState('');
    async function verify(event){
     const res= await axios.post("http://localhost:8080/Legal/verify-otp",{email:email,otp:otp})
    localStorage.setItem("jwt", res.data.token);
    localStorage.setItem("user", email);
    localStorage.setItem("role", "non_user");
    localStorage.setItem("dateNow", new Date().getTime);
    navigate("/");
    }
    function handleOtpChange(event){
        setOtp(event.target.value);
    }
   async function onsubmit(event){
        event.preventDefault();
       const res= await axios.post("http://localhost:8080/Legal/login",{ password: password, email: email, }, { headers: { 'Content-Type': 'application/json' }, });
       setState(1);

    }
    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    return(<>
    <div>
        <Header disable={1}/>
        <div className="h-screen md:flex">
       
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">Law Connect</h1>
			
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
{state===0?<>		<form onSubmit={onsubmit} className="bg-white">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
			

					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none" type="text"  value={email} onChange={handleEmailChange} placeholder="Email Address" />
      </div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input className="pl-2 outline-none border-none" type="text" value={password} onChange={handlePasswordChange} placeholder="Password" />
      </div>
      <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
		</form></>:<>
        <form onSubmit={verify} className="bg-white">
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Verify</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Enter Six digit OTP</p>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none" type="text"  value={otp} onChange={handleOtpChange} placeholder="OTP" />
                        
      </div>
      <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Submit</button>
        </form>
        </>}
		
	</div>
</div>
    </div>
    </>)
}