import React from "react";
import pdfDocument from "../../../public/assets/pdf/YAZID CV-Latest-v.pdf";

function DownloadResume() {
    return (
        <>
            <a href={pdfDocument}
                download="Ziad_MouhamedYazid_CV.pdf"
                target="_blank"
                rel="noreferrer">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Download Resume
                </button>
            </a>
        </>
    );
}

export default DownloadResume;