import React, { useState } from "react";
import Button from "./Button";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { MdQuiz } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const handlequiz = () => {
        setIsOpen(false);
        navigate("/quiz");
    };
    return (
        <div>
            <nav className="select-none min-h-16 px-4 md:px-8  lg:px-32 shadow-lg shadow-green-900/10 z-20 fixed top-0 left-0 w-screen bg-white flex justify-between items-center">
                <Link to="/" className="flex gap-2 justify-baseline items-center">
                    <div className="md:size-8 size-6 bg-cover flex justify-center items-center">
                        <img className="rounded-sm" src="./logo_moon.png" alt="logo" />
                    </div>
                    <div className=" font-cg font-extrabold text-2xl md:text-3xl text-green-600">
                        <p>IslamicVibe</p>
                    </div>
                </Link>
                <ul className="md:flex gap-4 text-xl sm:hidden hidden">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => {
                                return `transition-all duration-200 ${isActive ? "text-green-600 font-bold" : "text-gray-700"}`;
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/quiz"
                            className={({ isActive }) => {
                                return `transition-all duration-200 ${isActive ? "text-green-600 font-bold" : "text-gray-700"}`;
                            }}
                        >
                            Quiz
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => {
                                return `transition-all duration-200 ${isActive ? "text-green-600 font-bold" : "text-gray-700"}`;
                            }}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => {
                                return `transition-all duration-400 ${isActive ? "text-green-600 font-bold" : "text-gray-700"}`;
                            }}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="md:flex gap-8 items-center sm:hidden hidden">
                    <Button />
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl transition-transform duration-300">
                    {isOpen ? <IoCloseSharp /> : <CgMenu />}
                </button>
            </nav>
            <div
                className={`md:hidden mt-16 px-2 fixed top-0 left-0 h-screen w-64 bg-[#f2fdf0]  z-20 shadow-lg transition-transform ease-in duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <ul className="flex flex-col gap-2 text-lg py-4 px-2 justify-center ">
                    <li>
                        <NavLink
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => {
                                return `flex gap-3 items-center transition-all duration-200 ${isActive ? "text-green-600 " : "text-gray-700"}`;
                            }}
                        >
                            <AiFillHome />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/quiz"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => {
                                return `flex gap-3 items-center transition-all duration-200 ${isActive ? "text-green-600 " : "text-gray-700"}`;
                            }}
                        >
                            <MdQuiz />
                            <span>Quiz</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => {
                                return `flex gap-3 items-center transition-all duration-200 ${isActive ? "text-green-600 " : "text-gray-700"}`;
                            }}
                        >
                            <IoInformationCircle />
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => {
                                return `flex gap-3 items-center transition-all duration-400 ${isActive ? "text-green-600 " : "text-gray-700"}`;
                            }}
                        >
                            <FaPhone className="text-sm" />
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
                <button onClick={handlequiz} className="w-full py-1 mt-4 rounded bg-green-500 flex justify-center items-center text-white ">
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default Navbar;
