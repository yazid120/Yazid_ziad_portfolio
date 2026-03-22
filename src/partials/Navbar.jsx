import React from "react"
import DownloadResume from "../Components/Ressource/DownloadPdfResume"
import { PDFViewer } from "@react-pdf/renderer"
import pdfDocument  from "../../public/assets/pdf/Ziad_MouhamedYazid_CV.pdf"
import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
} from "@material-tailwind/react"
import {FaGithubAlt} from 'react-icons/fa'
import {RiLinkedinFill} from 'react-icons/ri'
import {FcFlashOn} from 'react-icons/fc'


   
let Navigationbar = function({ onOpenServices }){
    return (
      <Navbar className="bg-dark mx-auto max-w-screen-xl px-4 py-3 mt-3 border-0">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
          <p className="flex items-center">Yazid Ziad <FcFlashOn/></p>
          </Typography>

          <div className="flex items-center gap-3" >
          {/* <button className="hire-me-btn-nav" onClick={onOpenServices}>
            🚀 I Need a Website
          </button> */}
          
          <a href="https://github.com/yazid120">
            <FaGithubAlt className="cursor-pointer text-3xl"/>
          </a>
          <a href="https://www.linkedin.com/in/ziad-mouhamed-yazid-802057218/">
            <RiLinkedinFill className="cursor-pointer text-3xl"/>
          </a>
          <a href="https://github.com/yazid120/Yazid_ziad_portfolio" target="_blank" rel="noopener noreferrer"
             className="gh-star-btn">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
            </svg>
            Star
          </a>
          </div>
          
          <div>
            <DownloadResume />
          </div>
        </div>
  
      </Navbar>
    );
}
export default Navigationbar;
