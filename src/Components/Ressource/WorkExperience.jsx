import React from 'react';
import config from "../../config";

function WorkExperience({ workData }) {
  return (
    <div className="timeline">
      {Object.keys(workData).map((company, index) => {
        const data = workData[company];
        const experiences = Object.keys(data)
          .filter((key) => key.startsWith("work_experience"))
          .sort();

        return (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <img
                  src={`${config.baseUrl}/assets/images/${data.image_company}`}
                  alt={company}
                  className="timeline-company-logo"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${config.baseUrl}/assets/images/svg/placeholder.svg`; }}
                />
                <div>
                  <h2 className="text-white text-xl font-bold leading-tight">{company}</h2>
                  <p className="text-indigo-300 text-sm font-medium">{data.title}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{data.location}</p>
                </div>
              </div>

              <div className="timeline-date-badge">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {data.date}
              </div>

              <ul className="timeline-experiences">
                {experiences.reduce((acc, key) => {
                  const match = key.match(/^(work_experience\d+)(-\d+)?$/);
                  if (match) {
                    const [fullKey, , subKey] = match;
                    acc.push(
                      <li key={fullKey} className={subKey ? "sub-exp" : ""}>
                        {data[fullKey]}
                      </li>
                    );
                  }
                  return acc;
                }, [])}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WorkExperience;
