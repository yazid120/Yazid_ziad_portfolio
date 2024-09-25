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


    console.log(CertificationData)

    return(
        <>
        <div>
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Certification</h1>
            <WorkCertification CertificationData={CertificationData}/>
        </div>
        </>
    )
}
export default Certification; 