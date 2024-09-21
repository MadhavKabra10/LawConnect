import Header from "../header/header";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
function UserRegister() {
  let navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/Legal/register", {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      gender: "male",
      profession: "user",
      city: city,
      phone: pin,
      connection: [],
      pending: [],
      role: "USER",
    });
    console.log("89", res.token);
    localStorage.setItem("jwt", res.data.token);
    localStorage.setItem("user", email);
    localStorage.setItem("role", "user");
    localStorage.setItem("dateNow", new Date().getTime);
    navigate("/");
    console.log("done", res);
  }

  return (
    <>
             <Header disable={1}/>
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#0277B5] to-blue-500">
        <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl overflow-hidden p-10 ">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Create Your Account
          </h2>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition duration-300"
                id="grid-first-name"
                type="text"
                placeholder="John"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <span className="absolute top-9 right-4 text-gray-400">
                <i className="fas fa-user"></i>
              </span>
            </div>

            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition duration-300"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <span className="absolute top-9 right-4 text-gray-400">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="relative mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition duration-300"
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="absolute top-9 right-4 text-gray-400">
              <i className="fas fa-envelope"></i>
            </span>
          </div>

          <div className="relative mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition duration-300"
              id="grid-password"
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute top-9 right-4 text-gray-400">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition duration-300"
                id="city"
                type="text"
                placeholder="Pune"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <span className="absolute top-9 right-4 text-gray-400">
                <i className="fas fa-city"></i>
              </span>
            </div>

            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="state"
              >
                State
              </label>
              <input
                className="block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition duration-300"
                id="state"
                type="text"
                placeholder="Maharashtra"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <span className="absolute top-9 right-4 text-gray-400">
                <i className="fas fa-map-marker-alt"></i>
              </span>
            </div>

            <div className="relative">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="pincode"
              >
                Pincode
              </label>
              <input
                className="block w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition duration-300"
                id="pincode"
                type="text"
                placeholder="411041"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <span className="absolute top-9 right-4 text-gray-400">
                <i className="fas fa-map-pin"></i>
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              id="subbtn"
              variant="primary"
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transform transition duration-300 hover:scale-105"
              onClick={(e) => handleSubmit(e)}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default UserRegister;
