import React from "react";
import { GoGoal } from "react-icons/go";
import { LuBookOpenText } from "react-icons/lu";
import { IoTelescope } from "react-icons/io5";

const About = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-[#f8faf9]">
            <div className="min-h-44 w-full text-center bg-green-800 mt-16 flex flex-col justify-center items-center text-white">
                <h1 className="sm:text-4xl text-3xl font-cg font-extrabold">About IslamicVibe</h1>
                <p className="mt-3 text-sm sm:text-base opacity-80">Our mission, story, and vision.</p>
            </div>
            <div className="p-8 md:px-8  lg:px-32 flex-col md:flex-row flex gap-6 min-h-[calc((100vh-4rem)-14.5rem)] w-full justify-center items-center md:items-stretch lg:items-center">
                <div className=" p-8 rounded-xl shadow-xl bg-white w-full md:min-h-72 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex gap-4 items-center">
                        <GoGoal className="size-8 text-green-600" />
                        <h1 className="text-xl font-bold">Our Mission</h1>
                    </div>

                    <p className="mt-4 opacity-80">
                        To make Islamic learning engaging, accessible, and meaningful for everyone. Through interactive quizzes, we help users
                        strengthen their knowledge of the Quran, Hadith, Prophets, Islamic history, and daily Islamic teachings in a simple and
                        enjoyable way.
                    </p>
                </div>
                <div className=" p-8 rounded-xl shadow-xl bg-white w-full md:min-h-72 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex gap-4 items-center">
                        <LuBookOpenText className="size-8 text-green-600" />
                        <h1 className="text-xl font-bold">Our Story</h1>
                    </div>
                    <p className="mt-4 opacity-80">
                        My journey began with a simple goal: to make learning about Islam easier, more engaging, and accessible to everyone. We
                        noticed that many people wanted to increase their Islamic knowledge but often found traditional learning methods difficult to
                        fit into their daily lives.
                    </p>
                </div>
                <div className=" p-8 rounded-xl shadow-xl bg-white w-full md:min-h-72 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex gap-4 items-center">
                        <IoTelescope className="size-8 text-green-600" />
                        <h1 className="text-xl font-bold">Our Vision</h1>
                    </div>
                    <p className="mt-4 opacity-80">
                        Our vision is to become a trusted global platform for Islamic education by inspiring millions of people to deepen their
                        understanding of Islam. Through technology, continuous learning, and meaningful engagement, we aim to make IslamicVibe
                        impactful.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
