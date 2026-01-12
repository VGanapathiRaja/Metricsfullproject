import React from 'react'
import './Subscribe.css';
import { useState } from 'react';
import axios from 'axios';
export default function Subscribesection() {
    const [subscribe,setSubcribe] =useState({semail:""});
    const [serr,setSerr] =useState();
    const formdataChange =(s)=>{
        setSubcribe({...subscribe,[s.target.name]:s.target.value});
        setSerr("");
    }
    const formSubmit = async (s)=>{
        s.preventDefault();
        if(!subscribe.semail){
            // alert("Please Fill Validate The Data");
            setSerr("Please Fill Validate The Data");
            return ;
        }
        try{
            await axios.post("http://localhost:4001/Subscribes",subscribe);
            alert("Data Sended backend successfully..!");
        }
        catch(err){
            console.log(err);
            alert("Data not send to backend...!",err);
        }
        console.log(subscribe);
        console.log("Data sended..!");
        setSubcribe({semail:""});
    }
  return (
    <section className='subscribe'>
        <div className="subcontent">
            <h2>Subscribe to our news and <br /> regular updates</h2>
            <form  onSubmit={formSubmit}>
                <div className="subfield">
                    <div className="inputs">
                        <input type="email" name="semail" onChange={formdataChange} value={subscribe.semail} placeholder='Enter Your Email' />
                        {serr && <p> {serr} </p>}
                    </div>
                    <div className="inputs">
                        <button type='submit'>Subscribe Now...!</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}
