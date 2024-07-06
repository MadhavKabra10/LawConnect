// src/Logout.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Logout = () => {

let navigate=useNavigate()
    useEffect(() => {
        localStorage.removeItem('dateNow');
      localStorage.removeItem('jwtToken');
       navigate('/')
    }, );

    return null;
};

export default Logout;
