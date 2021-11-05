import React, { useState } from "react";
import { Switch,Route,Redirect } from "react-router-dom";


function Contact() 
{
    const [input_value,set_input_value]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });
function form_event(e)
{
let {name,value}=e.target;
    set_input_value((prev)=>{
        return {
            ...prev,
            [name]:value
        }
    })

}
    return (
        <>

               <h1 className="text-center mt-4 mb-2">Contact Us</h1>
               <div className="form_container">

               <form  onSubmit={(e)=>e.preventDefault()}>

                   <input onChange={form_event} value={input_value.name}  required autoComplete="off" type="text"  name="name" placeholder="Your Name"      />
                   <input onChange={form_event} value={input_value.email}  required autoComplete="of" type="email"  name="email" placeholder="Your Email"      />
                   <input onChange={form_event} value={input_value.subject}  required autoComplete="of" type="text"  name="subject" placeholder="Subject"      />
                   <textarea  onChange={form_event} value={input_value.message}  name="message" placeholder="Write Your Message..." required autoComplete="of"  name="message"   />
                   <button type="submit" className="btn  btn-outline-secondary" id="submit_btn"  >Submit</button>


               </form>

               </div>
        </>
    )
}

export default Contact;