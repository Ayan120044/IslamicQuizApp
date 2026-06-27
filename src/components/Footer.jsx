import React from "react";
import { LiaFacebookF } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="px-4 md:px-8  lg:px-32 bg-green-950/90 min-h-84 text-white">
                <div className="flex flex-col sm:flex-row">
                    <div className="min-h-full md:w-[50%] p-8">
                        <div className="flex gap-2">
                            <img className="rounded-sm size-8 bg-cover" src="./logo_moon.png" alt="logo" />
                            <h1 className="font-cg font-extrabold text-2xl">IslamicVibe</h1>
                        </div>
                        <p className="mt-4">
                            A place to grow your Islamic knowledge through interactive quizzes and beautiful learning experiences. May Allah bless
                            your journey of seeking knowledge.
                        </p>
                        <div className="flex gap-3 mt-6 md:mt-8">
                            <div className="hover:bg-green-500  transition-all duration-200 ease-in rounded-full size-10 bg-green-200/10 flex justify-center items-center p-2">
                                <LiaFacebookF className="text-xl" />
                            </div>
                            <div className="hover:bg-green-500  transition-all duration-200 ease-in rounded-full size-10 bg-green-200/10 flex justify-center items-center p-2">
                                <FaXTwitter className="text-xl" />
                            </div>
                            <div className="hover:bg-green-500  transition-all duration-200 ease-in rounded-full size-10 bg-green-200/10 flex justify-center items-center p-2">
                                <LuInstagram className="text-xl" />
                            </div>
                            <div className="hover:bg-green-500  transition-all duration-200 ease-in rounded-full size-10 bg-green-200/10 flex justify-center items-center p-2">
                                <FaWhatsapp className="text-xl" />
                            </div>
                        </div>
                    </div>
                    <div className="h-full md:w-[25%] pl-8 pt-8 w-full p md:p-8 lg:pl-24">
                        <h1 className="font-bold">Quick Links</h1>
                        <div className="text-sm mt-2 flex flex-col gap-1 ">
                            <Link className="hover:text-green-500 hover:underline" to="/">
                                Home
                            </Link>
                            <Link className="hover:text-green-500 hover:underline" to="/quiz">
                                Take Quiz
                            </Link>
                            <Link className="hover:text-green-500 hover:underline" to="/about">
                                About Us
                            </Link>
                            <Link className="hover:text-green-500 hover:underline" to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="h-full w-[25%] p-8">
                        <h1 className="font-bold">Categories</h1>
                        <div className="text-sm mt-2 flex flex-col gap-1">
                            <p>Quran</p>
                            <p>Prophets</p>
                            <p>Five Pillars</p>
                            <p>Ramadan</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <hr />
                    <p className="mt-4 opacity-50 text-center pb-4  text-sm md:text-md md:text-left">
                        &copy; 2024 IslamicVibe. All rights reserved. Made with &hearts;&nbsp;for the Ummah.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
