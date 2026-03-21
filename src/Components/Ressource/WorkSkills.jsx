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
    <div className="main_sect_option px-4 space-y-8">
      {Object.entries(SkillsData).map(([sectionTitle, skillsObj]) => {
        // skillsObj is an object of skillKey => { title, image }
        const skillsEntries = Object.entries(skillsObj);

        return (
          <div key={sectionTitle} className="mb-6">
            <p className="text-white text-2xl font-bold mb-4">{sectionTitle}</p>

            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              navigation
              slidesOffsetBefore={40}
              slidesOffsetAfter={40}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
              }}
              className="py-2 skills-swiper"
            >
              {skillsEntries.map(([skillKey, skill]) => {
                const imgSrc = `${config.baseUrl}/assets/images/svg/${skill.image || "placeholder.svg"}`;
                return (
                  <SwiperSlide key={`${sectionTitle}-${skillKey}`} className="flex justify-center">
                    <div className="item_skill text-center px-3">
                      <img
                        src={imgSrc}
                        alt={skill.title}
                        className="w-20 h-20 mx-auto mb-2 object-contain"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${config.baseUrl}/assets/images/svg/placeholder.svg`; }}
                      />
                      <p className="text-white font-semibold text-sm">{skill.title}</p>
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
