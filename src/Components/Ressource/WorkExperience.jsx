import React from 'react';

function WorkExperience({ workData }) {
    const style_expos={
        padding:'1.5rem',
        backgroundColor:'#9caac5', 
        borderRadius:'5px'
    }
  return (
    <div className="container mx-auto p-4 max-h-screen overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
      <p>Some of work experience on my site</p>
      {Object.keys(workData).map((company, index) => (
        <div key={index} className="mb-6" style={style_expos}>
          <img
            src={'/src/assets/images/'+workData[company].image_company}
            alt={company}
            className="w-24 h-24 rounded-full object-cover"
          />
          <h2 className="text-3xl font-bold mt-2 ">{company}</h2>
          <p className="text-gray-600 text-xl">{workData[company].title}
          <span className="text-gray-950"> {workData[company].location}</span></p>
          
          <p className="text-gray-600">{workData[company].date}</p>
          <ul className="list-disc list-inside mt-2">
            {Object.keys(workData[company])
              .filter(key => key.includes('work_experience'))
              .map((key, experienceIndex) => (
                <li className="font-bold" key={experienceIndex}>{workData[company][key]}</li>
              ))}
          </ul>
        </div>
      ))
      }
    </div>
  );
}

export default WorkExperience;