 import React from 'react'
 import './Contact.css';
 import Buttons from '../Buttons/Buttons';
import ContactqueImg  from '../../Assets/homeimg4.png';
import axios from "axios";
import { useState } from 'react';
 export default function Contactsection() {
    const [cdata,setCdata] = useState({cName:"",cEmail:"",cMobile:"",cComments:""});
    const [err,setErr] = useState();

    const formChangedata =(event)=>{
        setCdata({...cdata,[event.target.name]:event.target.value});
        setErr("")
    }

    async function formSubmit(event){
        event.preventDefault();
        if(!cdata.cName || !cdata.cEmail || !cdata.cMobile || !cdata.cComments){
            // alert("Please fill correct Data...");
            setErr("Please fill correct Data...");
        }
        try{
            await axios.post("http://localhost:4000/teamform",cdata);
            alert("Data sended backend successfully...!");
        }
        catch(err){
            if(err){
                alert("data not send db or backend",err);
            }
        }
        console.log(cdata);
        console.log("Data saved");
        setCdata({cName:"",cEmail:"",cMobile:"",cComments:""});
    }
   return (
     <section className='contactse'>
        <div className="heroright">
            <img src={ContactqueImg} alt="hero images" />
        </div>
        <div className="heroleft">
            <div className="formsec">
                <h2>Get in touch with our team</h2>
                <form onSubmit={formSubmit}>
                    <div className="feilds">
                        <label htmlFor="cname">Client Name</label>
                        <div className="inputs">
                            <input 
                            type="text" 
                            name="cName"
                            onChange={formChangedata}
                            value={cdata.cName} 
                            placeholder='Enter your Name' />
                            {err && <p> {err} </p>}
                        </div>
                    </div>
                    
                    <div className="feilds">
                        <label htmlFor="cname">Client Email</label>
                        <div className="inputs">
                            <input 
                            type="email" 
                            name="cEmail"
                            onChange={formChangedata}
                            value={cdata.cEmail}
                            placeholder='Enter your Email' />
                             {err && <p> {err} </p>}
                        </div>
                    </div>

                    <div className="feilds">
                        <label htmlFor="cname">Client Mobile</label>
                        <div className="inputs">
                            <input 
                            type="tel" 
                            name="cMobile" 
                            onChange={formChangedata}
                            value={cdata.cMobile}
                            placeholder='Enter your Mobile' />
                            {err && <p> {err} </p>}
                        </div>
                    </div>

                    <div className="feilds">
                        <label htmlFor="cname">Client Comments</label>
                        <div className="inputs">
                            <textarea 
                            name="cComments" 
                            onChange={formChangedata}
                            value={cdata.cComments}
                            placeholder='Enter your Mobile' />
                             {err && <p> {err} </p>}
                        </div>
                    </div>
                    <div className="feilds">
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
        
    </section>
   )
 }
 