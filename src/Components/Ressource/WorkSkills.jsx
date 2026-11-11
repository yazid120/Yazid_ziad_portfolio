function WorkSkills({ SkillsData }) {
  if (!SkillsData || Object.keys(SkillsData).length === 0) {
    return null;
  }

  const skills = Object.entries(SkillsData).flatMap(([category, skillsObj]) =>
    Object.entries(skillsObj).map(([skillKey, skill]) => ({
      ...skill,
      key: `${category}-${skillKey}`,
    }))
  );

  const renderSkills = (isDuplicate = false) => (
    <ul className="skills-group" aria-hidden={isDuplicate || undefined}>
      {skills.map((skill) => (
        <li
          key={skill.key}
          className="skill-chip"
          style={{ "--skill-color": skill.color }}
        >
          {skill.title}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="skills-marquee" role="region" aria-label="Skills and technologies">
      <div className="skills-track">
        {renderSkills()}
        {renderSkills(true)}
      </div>
    </div>
  );
}

export default WorkSkills;
