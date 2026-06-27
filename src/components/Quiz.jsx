import React from "react";
import Button from "./Button";
import { RiGraduationCapFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
    const navigate = useNavigate();

    return (
        <div className="mt-16 min-h-[calc(100vh-4rem)] sm:bg-[#f8faf9]">
            <div className="min-h-44 w-full bg-green-800 mt-16 flex text-center flex-col justify-center items-center text-white">
                <h1 className="sm:text-4xl text-3xl font-cg font-extrabold">Islamic Knowledge Quiz</h1>
                <p className="text-sm sm:text-base mt-3 opacity-80">Test yourself. Learn. Grow in faith.</p>
            </div>

            <div className="min-h-[calc((100vh-4rem)-14.5rem)] flex justify-center">
                <div className="w-full sm:w-150  rounded-lg bg-white shadow-lg sm:my-16">
                    <div className="px-12 py-8 flex flex-col justify-center items-center">
                        <div className="bg-[url('./lg.png')] size-50 rounded-2xl bg-cover bg-center"></div>
                        <h1 className="font-cg font-black text-4xl text-center">Islamic Knowledge Quiz</h1>
                        <p className="text-sm opacity-70 mt-4 mb-6 text-center">
                            Answer 24 questions covering Quran, Prophets, History, Five Pillars, Ramadan, Hajj, and more. Each question has a
                            30-second timer. May Allah grant you success!
                        </p>
                        <div className="flex text-center flex-wrap gap-x-4 gap-y-4 justify-center items-center">
                            <div className="min-h-20 p-4 w-58 rounded-lg bg-[#e6f4ed]">
                                <h1 className="text-green-800 font-bold font-serif">Questions</h1>
                                <p className="font-bold mt-2">24 Questions</p>
                            </div>
                            <div className="min-h-20 w-58 p-4 rounded-lg bg-[#e6f4ed]">
                                <h1 className="text-green-800 font-bold font-serif">Timer</h1>
                                <p className="font-bold mt-2">30 sec / Q</p>
                            </div>
                            <div className="min-h-20 w-58 p-4 rounded-lg bg-[#e6f4ed]">
                                <h1 className="text-green-800 font-bold font-serif">Categories</h1>
                                <p className="font-bold mt-2">8 Topics</p>
                            </div>
                            <div className="min-h-20 w-58 p-4 rounded-lg bg-[#e6f4ed]">
                                <h1 className="text-green-800 font-bold font-serif">Order</h1>
                                <p className="font-bold mt-2">Randomized</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate("/quizsession")}
                            className="flex items-center justify-center gap-4 bg-green-600 mt-8 transition-transform duration-300 active:scale-95 px-6 text-white h-12 font-bold rounded-full text-lg cursor-pointer"
                        >
                            بِسْمِ اللَّهِ — Begin Quiz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
