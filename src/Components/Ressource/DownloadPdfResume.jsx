import React from "react";
import { Link } from "react-router-dom";

function DownloadResume(pdfDocument){
    return(
        <>
        <a href={pdfDocument} 
        download="Ziad_MouhamedYazid_CV.pdf"
        target="_blank"
        rel="noreferrer">
            <button>
            Download Resume
            </button>
        </a>
        </>
    )
}
export default DownloadResume; 