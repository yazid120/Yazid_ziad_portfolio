import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import WorkCertification from "./Ressource/WorkCertification";
import config from "../config"



const Certification = function(){
    const [CertificationData, SetcertificationData]= useState([]);

    async function Get_Certification_api(){
        const link_api = `${config.baseUrl}/Certification.json`;
        try{
            const response = await axios.get(link_api);
            SetcertificationData(response.data)
        }catch(e){
            console.error(e)
        }
    }

   
    useEffect(()=>{
        Get_Certification_api()
    },[])



    return(
        <> 
        <h1 className="mb-4 mt-12 text-4xl tracking-tight font-extrabold text-center text-gray-900 
        dark:text-white"> Certification</h1>
        <section className="flex justify-center items-center" id="section-certification">
            <div className="bg-gray-100 opacity-90 w-9/12 min-h-screen-auto rounded-md	overflow-auto">
               
            <WorkCertification CertificationData={CertificationData}/>
            </div>
        </section>
        </>
    )
}
export default Certification; 