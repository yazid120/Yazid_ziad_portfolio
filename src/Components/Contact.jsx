import React from "react";
import { useState } from "react"; 
import axios from "axios";
import experieceSvg from "../../public/assets/images/Innovation-amico.svg"


const Contact = function(){
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')


    const SubmitContact = async function(e){
        e.preventDefault();
       let contactData = {
        email:email,
        subject:subject, 
        message:message
       }

       try{
            const response = await axios.post('http://127.0.0.1:5000/api/contact', contactData);
            console.log(response.data)
       }catch(e){
            console.error('excepted error: ', e)
       }
    }

    return(
        <>
    <div className="flex justify-center gap-4 ">
        <img src={experieceSvg} className="w-3/4 sm:w-1/3 lg:w-1/4 object-cover rounded-md shadow-lg" alt="Experience" />
    </div>
    <section className="bg-white dark:bg-gray-900" id="section-contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Contact me in any convenient way to discuss the details.</p>
        <form action="" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border 
              border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 
              focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 
              dark:shadow-sm-light" placeholder="name@gmail.com" required
              value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 
              rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
               dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
               placeholder="Let us know how we can help you" required
               value={subject} onChange={(e)=> setSubject(e.target.value)}/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
              rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
              dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."
              value={message} onChange={(e)=> setMessage(e.target.value)}>
              </textarea>
          </div>
          <button type="submit" id="contact_btn" className="py-3 px-5 text-sm font-medium text-center text-white
           rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none 
           focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
           onClick={(e)=> SubmitContact(e)}>
            Send message</button>
        </form>
      </div>
   </section>
        </>
    )
}
export default Contact; 