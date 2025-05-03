import React from "react";
import config from "../../config";


function WorkSkills({ SkillsData }) {
    return (
        <>
            <div className="main_sect_option px-4">
                {Object.keys(SkillsData).map((index) => (
                    <div key={index} className="mb-6">
                        <p className="text-white text-2xl font-bold m-2">{index}</p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {Object.keys(SkillsData[index]).map((item) => (
                                <div key={item} className="item_skill text-center">
                                    <img
                                        src={`${config.baseUrl}/assets/images/svg/${SkillsData[index][item].image}`}
                                        alt={SkillsData[index][item].title}
                                        className="w-20 h-20 mx-auto mb-2 object-contain"
                                    />
                                    <p className="text-white font-semibold">{SkillsData[index][item].title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default WorkSkills;