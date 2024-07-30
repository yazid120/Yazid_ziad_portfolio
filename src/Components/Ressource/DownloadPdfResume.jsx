import React from "react";
import pdfDocument from "../../../public/assets/pdf/Ziad_MouhamedYazid_CV.pdf";

function DownloadResume() {
    return (
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
    );
}

export default DownloadResume;