import React from "react";



const WorkCertification = function({CertificationData}){
    return(
        <>
        <div className="container mx-auto p-4 max-h-screen overflow-auto">
            {Object.keys(CertificationData).map((certif, key)=>(
            <div key={key} className="">
                <p>{certif.certifiedBy}</p>
            </div>
            ))
            }
        </div>
        </>
    )
}
export default WorkCertification; 