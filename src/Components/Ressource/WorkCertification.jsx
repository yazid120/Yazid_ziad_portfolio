import React from "react";
import config from "../../config";


const WorkCertification = function({CertificationData}){
    return(
        <>
        <div className="container mx-auto p-4 max-h-screen overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-auto gap-6">
    {Object.keys(CertificationData).map((certif, key) => (
      <div key={key} className="relative bg-white h-[400px] shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out overflow-hidden">
      <div className="absolute inset-0 border-2 border-transparent hover:border-white transition duration-300 ease-in-out"></div>
      <img 
        src={`${config.baseUrl}/assets/images/${CertificationData[certif].image}`} 
        alt={`${CertificationData[certif].certifiedBy} logo`} 
        className="w-20 h-20 rounded-full object-contain mb-4 mx-auto"
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
        {CertificationData[certif].title}
      </h3>
      <p className="text-gray-500 text-center mb-4">
        Certified by: <span className="text-gray-800">{CertificationData[certif].certifiedBy}</span>
      </p>
      <div className="text-sm text-gray-600">
        <p><span className="font-semibold">Skills:</span> {CertificationData[certif].Skills.join(", ")}</p>
        <p><span className="font-semibold">Topic:</span> {CertificationData[certif].topic}</p>
      </div>
  </div>
    ))}
    </div>
        </div>
        </>
    )
}
export default WorkCertification; 