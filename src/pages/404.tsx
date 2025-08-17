import Link from "next/link";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineWarningAmber } from "react-icons/md";

const PageNotFound = () => {

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-6xl md:text-8xl font-bold text-gray-800 tracking-wider  flex justify-center items-center">
                        <span >404</span>
                        <MdOutlineWarningAmber className="text-yellow-600" />
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                        Oops! Page not found.
                    </h2>
                    <p className="text-gray-600 text-lg">
                        The page you are looking for might have been removed, had its name
                        changed, or is temporarily unavailable.
                    </p>
                </div>

                <Link
                    href={"/"}
                    className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 ease-in-out space-x-2"
                    aria-label="Return to homepage"
                >
                    <BiHomeAlt className="text-xl" />
                    <span>Back to Home</span>
                </Link>

                <div className="mt-8 text-sm text-gray-500">
                    © {new Date().getFullYear()} InNhanh79. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;