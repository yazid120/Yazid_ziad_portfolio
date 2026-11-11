import { useState, useEffect } from "react";
import axios from "axios";
import WorkSkills from "./Ressource/WorkSkills";

const Skills = function () {
  const [Skills_state, SetSkills] = useState([]);

  async function getSkills_Api() {
    const link_api = `${import.meta.env.BASE_URL}Skills.json`;
    try {
      const response = await axios.get(link_api);
      SetSkills(response.data);
    } catch (error) {
      console.error("Fetching skills failed:", error);
    }
  }
  useEffect(() => {
    getSkills_Api();
  }, []);

  return (
    <>
      <section className="Skills_wrapp_container" id="section-2">
        <div className="skills-section-heading">
          <span className="skills-eyebrow">MY TOOLKIT</span>
          <h2>Skills & Technologies</h2>
          <p>Tools and technologies I use to build, automate, and deliver digital products.</p>
        </div>
        <WorkSkills SkillsData={Skills_state} />
      </section>
    </>
  );
}
export default Skills;