import React from "react";


let Footer = function(){
    return(
        <>
        <footer className="bg-black p-6 shadow-md mt-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4 text-white">☕ Buy Me a Coffee</h2>
                <p className="text-gray-400 mb-6">
                    Enjoyed my work? A coffee goes a long way in keeping me fueled and building cool stuff!
                </p>
                <div className="flex justify-center mb-6">
                    <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 hover:scale-105 transition duration-300">
                        ☕ Buy me a coffee
                    </a>
                </div>
                <hr className="my-4 border-gray-600" />
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Yazid Ziad. All rights reserved.
                </p>
            </div>
        </footer>
        </>
    )
}
export default Footer;