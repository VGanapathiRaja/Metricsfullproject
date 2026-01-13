import React from 'react'
import './Subscribe.css';
import { useState } from 'react';
import axios from 'axios';
export default function Signin() {
    const [sign,setSign] =useState({semail:"",spass:""});
    const [serr,setSerr] =useState();
    const formdataChange =(s)=>{
        setSign({...sign,[s.target.name]:s.target.value});
        setSerr("");
    }
    const formSubmit = async (s)=>{
        s.preventDefault();
        if(!sign.semail || !sign.spass){
            setSerr("Please Fill Validate The Data");
            return ;
        }
        console.log(sign);
        console.log("Data sended..!");
        setSign({semail:"",spass:""});
        try{
            await axios.post(process.env.GLobal_server,sign);
            alert("data sended to backend");
        }
        catch(err){
            if(err){
                alert("Data not send to backend");
                console.log(err);
            }
        }
    }
  return (
    <section className='subscribe'>
        <div className="subcontent">
            <h2>Subscribe to our news and <br /> regular updates</h2>
            <form  onSubmit={formSubmit}>
                <div className="subfield sign">
                    <div className="inputs">
                        <input type="email" name="semail" onChange={formdataChange} value={sign.semail} placeholder='Enter Your Email' />
                        {serr && <p> {serr} </p>}
                    </div>
                    <div className="inputs">
                        <input type="password" name="spass" onChange={formdataChange} value={sign.spass} placeholder='Enter Your password' />
                        {serr && <p> {serr} </p>}
                    </div>
                    <div className="inputs">
                        <button type='submit'>Sign Now...!</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}
