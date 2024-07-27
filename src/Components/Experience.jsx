import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import WorkExperience from "./Ressource/WorkExperience";
 

const Experience = function(){
    const [workData, SetjsonData] = useState([]); 
    
  async function get_Experience_api(){
    let link_api = '/experience.json'
    try{
      const response = await axios.get(link_api); 
        SetjsonData(response.data);
    }catch(error){
      console.error(error)
    }
  }
  
  useEffect(()=>{
    get_Experience_api();
  }, []);


    return( 
    <>
   <section className="flex justify-center items-center" id="section-experience">
    <div className="bg-gray-100 w-10/12 min-h-screen rounded-md	overflow-auto">
      <WorkExperience workData={workData} />
    </div>
  </section>
    </>   
    )
}
export default Experience; 