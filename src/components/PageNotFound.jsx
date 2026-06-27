import React from "react";

const PageNotFound = () => {
    return (
        <div className="bg-green-100 text-center overflow-hidden relative flex flex-col justify-center items-center gap-4 h-screen w-full">
            <h1 className="text-9xl font-mono font-bold text-green-500">404</h1>
            <h2 className="font-bold text-3xl ">Oops! Page not found</h2>
            <p className="text-gray-500">The page you are looking for doesn't exist or may have been moved.</p>
            <div className="size-70 sm:size-100 bg-green-400 rounded-full absolute -top-30 -left-30"></div>
            <div className="size-40 bg-green-200 rounded-full absolute top-130 left-20"></div>
            <div className="hidden lg:block size-30 bg-green-400 rounded-full absolute top-70 left-70"></div>
            <div className="size-80 bg-green-300 rounded-full absolute -bottom-30 -right-30"></div>
            <div className="hidden sm:block size-40 bg-green-300 rounded-full absolute top-10 md:top-40 right-30"></div>
        </div>
    );
};

export default PageNotFound;
