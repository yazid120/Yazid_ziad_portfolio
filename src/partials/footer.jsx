import React from "react";


let Footer = function(){
    return(
        <>
        <footer className="bg-black p-6 shadow-md mt-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4 text-white">Support Our Cause</h2>
                <p className="text-gray-400 mb-6">
                    If you enjoy our content and would like to support us, consider making a donation to help keep our work going.
                </p>
                <div className="flex justify-center mb-6">
                    <button className="bg-white text-black px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition duration-300">
                        Donate Now
                    </button>
                </div>
                <hr className="my-4 border-gray-600" />
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
        </>
    )
}
export default Footer;