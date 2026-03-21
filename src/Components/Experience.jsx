import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import WorkExperience from "./Ressource/WorkExperience";
import config from "../config"


const Experience = function () {
  const [workData, SetjsonData] = useState([]);

  async function get_Experience_api() {
    const link_api = `${config.baseUrl}/experience.json`;
    try {
      const response = await axios.get(link_api);
      SetjsonData(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    get_Experience_api();
  }, []);


  return (
    <>
      <h1 className="mb-8 mt-20 text-4xl tracking-tight font-extrabold text-center text-gray-900 
        dark:text-white"> Work Experiences </h1>
      <section className="experience-section" id="section-experience">
        <WorkExperience workData={workData} />
      </section>
    </>
  )
}
export default Experience; 