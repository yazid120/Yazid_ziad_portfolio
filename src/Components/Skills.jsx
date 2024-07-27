import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import WorkSkills from "./Ressource/WorkSkills";

const Skills = function(){
    const [Skills_state, SetSkills] = useState([]); 

    async function getSkills_Api(){
    const link_api = '/Skills.json';
    try{
    await axios.get(link_api).then((response)=>{
        SetSkills(response.data);
    })
    }catch (error){
      console.error('Fetching error in:'.error)
    }
    }
    useEffect(()=>{
     getSkills_Api();
    },[]);

    return( 
    <>
    <section className="Skills_wrapp_container mt-2 mb-4" id="section-2">
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Skills</h1>
        <WorkSkills SkillsData={Skills_state}/>
    </section> 
    </>
    );
}
export default Skills;