import React from 'react';
import config from "../../config";

function WorkExperience({ workData }) {
  const style_expos = {
    padding: "1.5rem",
    backgroundColor: "#9caac5",
    borderRadius: "5px",
  };

  return (
    <div className="container mx-auto p-4 max-h-screen overflow-auto">
      <p>Some of work experience on my site</p>
      {Object.keys(workData).map((company, index) => (
        <div key={index} className="mb-6" style={style_expos}>
          <img
            src={`${config.baseUrl}/assets/images/${workData[company].image_company}`}
            alt={company}
            className="w-24 h-24 rounded-full object-cover"
          />
          <h2 className="text-3xl font-bold mt-2">{company}</h2>
          <p className="text-gray-600 text-xl">
            {workData[company].title}
            <span className="text-gray-950"> {workData[company].location}</span>
          </p>

          <p className="text-gray-600">{workData[company].date}</p>
          <ul className="list-disc list-inside mt-2">
            {Object.keys(workData[company])
              .filter((key) => key.startsWith("work_experience"))
              .sort() // Ensure subtitles come right after their main experience
              .reduce((acc, key) => {
                const match = key.match(/^(work_experience\d+)(-\d+)?$/); // Match main and sub-experiences
                if (match) {
                  const [fullKey, mainKey, subKey] = match;
                  if (!subKey) {
                    // Main experience point
                    acc.push(
                      <li key={fullKey} className="font-bold">
                        {workData[company][fullKey]}
                      </li>
                    );
                  } else {
                    // Sub-experience (indented)
                    acc.push(
                      <li key={fullKey} className="ml-6 text-gray-800">
                         {workData[company][fullKey]}
                      </li>
                    );
                  }
                }
                return acc;
              }, [])}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
