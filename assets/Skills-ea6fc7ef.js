import{j as s,r as i}from"./index-123e80ff.js";import{c as l,a as n}from"./config-60515c48.js";function o({SkillsData:e}){return s.jsx(s.Fragment,{children:s.jsx("div",{className:"main_sect_option",children:Object.keys(e).map(t=>s.jsxs("div",{children:[s.jsx("p",{className:"text-white text-2xl font-bold antialiased m-1",children:t}),s.jsx("div",{className:"grid grid-cols-4 gap-4",children:Object.keys(e[t]).map(r=>s.jsxs("div",{className:"item_skill",children:[s.jsx("img",{src:`${l.baseUrl}/assets/images/svg/${e[t][r].image}`,alt:e[t][r].title,className:"w-15 h-24 mr-2"}),s.jsx("p",{className:"text-white bold m-2",children:e[t][r].title})]},r))})]},t))})})}const d=function(){const[e,t]=i.useState([]);async function r(){const c=`${l.baseUrl}/Skills.json`;try{await n.get(c).then(a=>{t(a.data)})}catch{console.error("Fetching error in:".error)}}return i.useEffect(()=>{r()},[]),s.jsx(s.Fragment,{children:s.jsxs("section",{className:"Skills_wrapp_container mt-2 mb-4",id:"section-2",children:[s.jsx("h1",{className:"mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white",children:"Skills"}),s.jsx(o,{SkillsData:e})]})})};export{d as default};
