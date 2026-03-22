import React from "react";
import config from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function WorkSkills({ SkillsData }) {
  if (!SkillsData || Object.keys(SkillsData).length === 0) {
    return null; // or a loader
  }

  return (
    <div className="main_sect_option">
      {Object.entries(SkillsData).map(([sectionTitle, skillsObj]) => {
        // skillsObj is an object of skillKey => { title, image }
        const skillsEntries = Object.entries(skillsObj);

        return (
          <div key={sectionTitle} className="skills-category">
            <p className="skills-category-title">
              <span className="cat-dot"></span>
              {sectionTitle}
            </p>

            <Swiper
              modules={[Navigation]}
              spaceBetween={12}
              navigation
              slidesOffsetBefore={36}
              slidesOffsetAfter={36}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              className="py-2 skills-swiper"
            >
              {skillsEntries.map(([skillKey, skill]) => {
                const imgSrc = `${config.baseUrl}/assets/images/svg/${skill.image || "placeholder.svg"}`;
                return (
                  <SwiperSlide key={`${sectionTitle}-${skillKey}`} className="flex justify-center">
                    <div className="item_skill">
                      <img
                        src={imgSrc}
                        alt={skill.title}
                        className="w-14 h-14 mx-auto object-contain"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${config.baseUrl}/assets/images/svg/placeholder.svg`; }}
                      />
                      <p>{skill.title}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
}

export default WorkSkills;
