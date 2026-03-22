import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import WorkSkills from "./Ressource/WorkSkills";
import config from "../config";

const Skills = function () {
  const [Skills_state, SetSkills] = useState([]);

  async function getSkills_Api() {
    const link_api = `${config.baseUrl}/Skills.json`;
    try {
      await axios.get(link_api).then((response) => {
        SetSkills(response.data);
      })
    } catch (error) {
      console.error('Fetching error in:'.error)
    }
  }
  useEffect(() => {
    getSkills_Api();
  }, []);

  return (
    <>
      <section className="Skills_wrapp_container" id="section-2">
        <h1 className="text-4xl font-extrabold text-center dark:text-white">
          Skills
        </h1>
        <WorkSkills SkillsData={Skills_state} />
      </section>
    </>
  );
}
export default Skills;