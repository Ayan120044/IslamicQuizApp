import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    navigate("/quiz");
                }}
                className="select-none bg-green-600 text-white p-2 px-4 transition-transform duration-300 active:scale-95 font-bold rounded-full text-sm cursor-pointer"
            >
                Start Quiz
            </button>
        </div>
    );
};

export default Button;
