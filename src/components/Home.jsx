import React from "react";
import { RiSparkling2Line } from "react-icons/ri";
import { RiGraduationCapFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="bg-[url('/bg-1.png')] bg-cover bg-center min-h-[calc(100vh-4rem)] pt-20 mt-8 md:mt-16 flex">
                <div className="px-4 md:px-8  lg:px-36  flex  md:gap-16 flex-col md:flex-row">
                    <div className="flex flex-col gap-10 md:w-[55%]">
                        <div className="flex gap-4 text-lg items-center max-w-55 h-8 justify-center bg-gray-50 rounded-full">
                            <p>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                            <RiSparkling2Line />
                        </div>
                        <div>
                            <h1 className="font-cg md:text-5xl text-4xl font-extrabold">yest Your Islamic Knowledge</h1>
                            <p className="text-gray-500 mt-4 text-sm md:text-lg">
                                Embark on a spiritual journey of learning. Challenge yourself with questions from the Quran, Sunnah, Islamic history,
                                and more — growing closer to your faith with every answer.
                            </p>
                        </div>
                        <div className="flex md:gap-8 gap-4 select-none">
                            <button
                                className="hover:-translate-y-2 hover:shadow-green-900/50 hover:shadow-lg cursor-pointer flex items-center transition-transform duration-300 active:scale-95 justify-center gap-2 bg-green-500 px-4 h-10 text-sm md:px-0  md:w-40 text-white  md:h-12 font-bold rounded-full md:text-lg "
                                onClick={() => navigate("/quiz")}
                            >
                                <RiGraduationCapFill />
                                Start Quiz
                            </button>

                            <button
                                className="hover:bg-green-500 hover:text-white hover:transition-all hover:duration-300 hover:ease-in flex items-center justify-center gap-2 border-3 border-green-500 px-4 h-10 text-sm md:px-0 md:w-40 md:h-12 text-green-500 font-bold rounded-full md:text-lg cursor-pointer transition-transform duration-300 active:scale-95"
                                onClick={() => navigate("/about")}
                            >
                                Learn more
                            </button>
                        </div>
                        <div className="flex gap-6 items-baseline ">
                            <div className="text-center ">
                                <h1 className="md:text-2xl font-extrabold ">20+</h1>
                                <p className="text-sm md:text-md">Questions</p>
                            </div>
                            <div className="text-center">
                                <h1 className="md:text-2xl font-extrabold ">8</h1>
                                <p className="text-sm md:text-md">Categories</p>
                            </div>
                            <div className="text-center">
                                <h1 className="md:text-3xl font-black">∞</h1>
                                <p className="text-sm md:text-md">Knowledge</p>
                            </div>
                        </div>
                    </div>
                    <div className="size-70 lg:size-100 mx-auto lg:mx-0">
                        <img src="./man.png" alt="muslim-man" />
                    </div>
                </div>
            </div>
            <div className="min-h-88 px-4 py-8 md:px-8  lg:px-36  bg-green-800 text-white w-full flex flex-col justify-center">
                <p className="opacity-80 ">✦ Inspiration</p>
                <h1 className="mt-4 font-extrabold font-cg text-3xl md:text-4xl">Gems of Wisdom</h1>
                <div className="flex flex-col lg:flex-row gap-8 text-sm md:text-base md:gap-12 mt-6">
                    <div className="bg-white/10 min-h-32 md:min-w-90 flex flex-col justify-center border italic rounded-lg p-4">
                        <p className="font-bold">"Seeking knowledge is an obligation upon every Muslim."</p>
                        <p className="mt-3 text-yellow-500/90">— Prophet Muhammad ﷺ (Ibn Mājah)</p>
                    </div>
                    <div className="bg-white/10 min-h-32 md:min-w-90 flex flex-col justify-center border italic rounded-lg p-4">
                        <p className="font-bold">"Read! In the name of your Lord who created — created man from a clinging substance."</p>
                        <p className="mt-3 text-yellow-500/90">— Quran 96:1-2 (First Revelation)</p>
                    </div>
                    <div className="bg-white/10 min-h-32 md:min-w-90   flex flex-col justify-center border italic rounded-lg p-4">
                        <p className="font-bold">"Allah raises the ranks of those who believe and those who are given knowledge."</p>
                        <p className="mt-3 text-yellow-500/90">— Quran 58:11</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
