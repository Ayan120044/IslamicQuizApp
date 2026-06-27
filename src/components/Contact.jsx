import React from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
    return (
        <div className="mt-16 min-h-[calc(100vh-4rem)] bg-[#f8faf9]">
            <div className="min-h-44 text-center w-full bg-green-800 mt-16 flex flex-col justify-center items-center text-white">
                <h1 className="md:text-4xl text-3xl font-cg font-extrabold">Contact Us</h1>
                <p className="text-sm md:text-base mt-3 opacity-80">We'd love to hear from you.</p>
            </div>

            <div className="min-h-[calc((100vh-4rem)-14.5rem)] flex justify-center px-4">
                <div className=" sm:w-120 w-full rounded-lg bg-white shadow-lg my-16 p-8">
                    <h1 className="font-noni font-bold text-xl text-green-600">Send Us a Message</h1>
                    <p className="text-sm opacity-70 mt-2 mb-6">Have a question or suggestion? We'll get back to you, insha'Allah.</p>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm">
                                Your Name
                            </label>
                            <input
                                type="text"
                                className="border outline-none border-gray-300 p-2 rounded-lg bg-[#f8faf9] focus:border-green-500 focus:shadow-[0_0_8px_#16a34a]  transition-all duration-200"
                                id="name"
                                placeholder="e.g. Abdullah"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="border outline-none border-gray-300 p-2 rounded-lg bg-[#f8faf9] focus:border-green-500 focus:shadow-[0_0_8px_#16a34a]  transition-all duration-200"
                                id="email"
                                placeholder="e.g. Abdullah@gmail.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm" htmlFor="sub">
                                Subject
                            </label>
                            <input
                                type="text"
                                className="border outline-none border-gray-300 p-2 rounded-lg bg-[#f8faf9] focus:border-green-500 focus:shadow-[0_0_8px_#16a34a]  transition-all duration-200"
                                id="sub"
                                placeholder="Question about the quiz..."
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm" htmlFor="mes">
                                Message
                            </label>
                            <textarea
                                id="mes"
                                className="border border-gray-300 p-2 rounded-lg bg-[#f8faf9] resize-none outline-none focus:border-green-500 focus:shadow-[0_0_8px_#16a34a]  transition-all duration-200"
                                placeholder="Assalamu Alaikum..."
                                rows={4}
                            />
                        </div>
                        <button className="bg-green-700 p-2 cursor-pointer active:opacity-80 active:scale-95 transition-transform duration-300 text-white font-bold rounded-lg w-full text-lg flex gap-3 justify-center items-center">
                            <span>Send</span>
                            <IoIosSend />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
