import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-green-100 text-center overflow-hidden relative flex flex-col justify-center items-center gap-4 h-screen w-full">
            <h1 className="text-9xl font-mono font-bold text-green-500">404</h1>
            <h2 className="font-bold text-3xl ">Oops! Page not found</h2>
            <p className="text-gray-500">The page you are looking for doesn't exist or may have been moved.</p>
            <div className="size-70 sm:size-100 bg-green-400 rounded-full absolute -top-30 -left-30"></div>
            <div className="size-40 bg-green-200 rounded-full absolute top-135 sm:top-130 left-20"></div>
            <div className="hidden lg:block size-30 bg-green-400 rounded-full absolute top-70 left-70"></div>
            <div className="size-80 bg-green-300 rounded-full absolute -bottom-30 -right-30"></div>
            <div className="hidden sm:block size-40 bg-green-300 rounded-full absolute top-10 md:top-40 right-30"></div>
            <button
                onClick={() => navigate("/")}
                className="mt-3 z-20 bg-green-100 flex items-center actice:scale-95 hover:transition-all hover:duration-300 min-w-35 justify-center gap-4 border-2 border-green-700 transition-transform duration-300 active:scale-95 px-6 text-green-700 h-12 font-bold rounded-full text-lg cursor-pointer"
            >
                Home
            </button>
        </div>
    );
};

export default PageNotFound;
