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


   
let Navigationbar = function(){
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

          <div className="flex gap-4" >
          <a href="https://github.com/yazid120">
          <FaGithubAlt className="cursor-pointer text-3xl"/>
          </a>
          <a href="https://www.linkedin.com/in/ziad-mouhamed-yazid-802057218/">
          <RiLinkedinFill className="cursor-pointer text-3xl"/>
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
