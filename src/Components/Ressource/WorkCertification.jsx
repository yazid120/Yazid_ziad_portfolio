import React from "react";
import config from "../../config";


const WorkCertification = function({CertificationData}){
    return(
        <div className="certification-grid">
            {Object.keys(CertificationData).map((certif, key) => (
                <div key={key} className="cert-card">
                    <div className="cert-card-header">
                        <img
                            src={`${config.baseUrl}/assets/images/${CertificationData[certif].image}`}
                            alt={`${CertificationData[certif].certifiedBy} logo`}
                            className="cert-logo"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${config.baseUrl}/assets/images/svg/placeholder.svg`; }}
                        />
                        <div>
                            <p className="cert-title">{CertificationData[certif].title}</p>
                            <p className="cert-issuer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-3.5 h-3.5 mr-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {CertificationData[certif].certifiedBy}
                            </p>
                        </div>
                    </div>

                    <p className="cert-topic">{CertificationData[certif].topic}</p>

                    <div className="cert-skills">
                        {CertificationData[certif].Skills.map((skill, i) => (
                            <span key={i} className="cert-skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default WorkCertification; 