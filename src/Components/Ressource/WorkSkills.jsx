import React from "react";
import config from "../../config";


function WorkSkills({SkillsData}){
   return( 
    <>
    <div className="main_sect_option">
    {
        Object.keys(SkillsData).map((index) =>(
         <div key={index}>
            <p className="text-white text-2xl font-bold antialiased m-1">{index}</p>
             <div className="grid grid-cols-4 gap-4">
            {
                Object.keys(SkillsData[index]).map((item)=>(
                    <div key={item} className="item_skill">
                    <img src={`${config.baseUrl}/assets/images/svg/${SkillsData[index][item].image}`}
                        alt={SkillsData[index][item].title}
                        className="w-15 h-24 mr-2"/>
                   <p className="text-white bold m-2">{SkillsData[index][item].title}</p>
                    </div>
                ))
            }
            </div>
         </div>
        ))
     
    }
    </div>
    </>
   )
}
export default WorkSkills;