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
                <div className="flex justify-center mb-3">
                    <a href="https://github.com/yazid120/Yazid_ziad_portfolio" target="_blank" rel="noopener noreferrer"
                       className="gh-star-btn gh-star-btn--sm">
                        <svg aria-hidden="true" height="14" viewBox="0 0 16 16" width="14" fill="currentColor">
                          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                        </svg>
                        Star on GitHub
                    </a>
                </div>
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Yazid Ziad. All rights reserved.
                </p>
            </div>
        </footer>
        </>
    )
}
export default Footer;