import React from "react";
import Person from "../assets/images/kirua.jfif"
import { Link } from "react-scroll"

const PresentationSection = function(){
    const Links_list = [
        {'link_name':"Home"},
        {"link_name":"Experience"},
        {"link_name":"Skills"},
        {"link_name":"Socials"},
        {"link_name":"Contact"},
    ]
    return( 
    <>
    <section className="mt-3 m-32" id="section-home">
     <div className="flex flex-col items-center p-16">
      <img src={Person} alt="kirua" className="rounded-full w-44 shadow-lg shadow-white"/>
      <p className="text-white m-4 text-xl"><span className="text-emerald-100">Title:</span> Full Stack web developer</p>
     </div>

     <div className="m-3 flex justify-center">
        <ul className="flex justify-center gap-16 w-1/2 p-4">

            <li className="text-white text-3xl cursor-pointer">
            <Link activeClass="active" to="section-home"
               spy={true} smooth={true} 
               offset={-70}
               duration={800}
               className="font-semibold">
                    {Links_list[0].link_name}
            </Link>
            </li>
            
            <li className="text-white text-3xl cursor-pointer">
            <Link activeClass="active" to="section-experience"
               spy={true} smooth={true}
               offset={-70}
               duration={800}
               className="font-semibold">
                    {Links_list[1].link_name}
            </Link>
            </li>
            
            <li className="text-white text-3xl cursor-pointer">
            <Link activeClass="active" to="section-2"
                spy={true} smooth={true}
                offset={-70}
                duration={800}
                className="font-semibold">
                    {Links_list[2].link_name}
            </Link>
            </li>

            <li className="text-white text-3xl cursor-pointer">
            <Link activeClass="active" to="section-2"
                spy={true} smooth={true}
                offset={-70}
                duration={800}
                className="font-semibold">
                    {Links_list[3].link_name}
            </Link>
            </li>

            <li className="text-white text-3xl cursor-pointer">
            <Link activeClass="active" to="section-contact"
                spy={true} smooth={true}
                offset={-70}
                duration={800}
                className="font-semibold">
                    {Links_list[4].link_name}
            </Link>
            </li>
        </ul>
     </div>
    </section>
    </>
    );
}
export default PresentationSection; 