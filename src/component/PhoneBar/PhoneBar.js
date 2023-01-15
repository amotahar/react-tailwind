import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PhoneBar = () => {
    const {phone, setPhone} =  useState([]);
    useEffect(()=>{
        //fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        //.then(res=>res.json())
        //.then(data=>console.log(data)) 
         
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>console.log(data)) 

    },[])
    return (
        <div>
            
        </div>
    );
};

export default PhoneBar;