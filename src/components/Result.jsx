import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { questions } from "../data/questions";
import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";

const Result = () => {
    const navigate = useNavigate();
    const totalQuestion = questions.length;
    const location = useLocation();
    const score = location.state?.score ?? 0;
    const wrongAnswer = totalQuestion - score;
    const contentRef = useRef(null);
    const percentage = Math.round((score / totalQuestion) * 100);

    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const [animatedTotal, setAnimatedTotal] = useState(0);
    const [animatedScore, setAnimatedScore] = useState(0);
    const [animatedWrongAnswer, setAnimatedWrongAnswer] = useState(0);

    const handlePrint = useReactToPrint({ contentRef });

    useEffect(() => {
        const animateValue = (target, setter) => {
            let current = 0;
            const duration = 1500;
            const incrementTime = duration / (target || 1);

            const timer = setInterval(() => {
                current++;
                setter(current);

                if (current >= target) {
                    clearInterval(timer);
                }
            }, incrementTime);
            return timer;
        };

        const timer1 = animateValue(percentage, setAnimatedPercentage);
        const timer2 = animateValue(totalQuestion, setAnimatedTotal);
        const timer3 = animateValue(score, setAnimatedScore);
        const timer4 = animateValue(wrongAnswer, setAnimatedWrongAnswer);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
            clearInterval(timer4);
        };
    }, [percentage, totalQuestion, score, wrongAnswer]);

    return (
        <div
            ref={contentRef}
            className="print-container mt-16 min-h-[calc(100vh-4rem)] bg-white  sm:bg-[url('/bg-1.png')] bg-cover bg-center flex justify-center font-noni"
        >
            <div className="print-card relative w-full sm:max-w-150  sm:rounded-lg bg-white sm:shadow-lg my-16">
                <button
                    onClick={handlePrint}
                    className="no-print absolute -top-10 right-10 sm:top-5 sm:right-5 py-1 px-4 flex items-center justify-center bg-green-100 cursor-pointer active:scale-95 transition-transform duration-200 text-green-600 rounded-full text-sm text-noni font-bold"
                >
                    Download Result
                </button>
                <div className="px-12 py-4 flex flex-col justify-center items-center">
                    <div className="bg-[url('/lg.png')] size-50 rounded-2xl bg-cover bg-center"></div>

                    <h1 className="relative -top-6 font-cg font-black text-4xl text-center">Quiz Complete!</h1>
                    <p className="text-5xl text-green-600 font-bold text-center">{animatedPercentage}% </p>
                    <p className=" opacity-70 mt-4 mb-6 text-center">
                        Alhamdulillah! You have successfully completed the quiz. May Allah reward you for your effort in learning Islam. Keep growing
                        in your faith!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                        <div className="min-h-20 p-4 w-full flex flex-col gap-1 justify-center items-center rounded-lg bg-[#e6f4ed]">
                            <h1 className="text-green-800 font-extrabold text-2xl">{animatedTotal}</h1>
                            <p className="font-bold ">Total</p>
                        </div>
                        <div className="min-h-20 p-4 w-full flex flex-col gap-1 justify-center items-center rounded-lg bg-green-100/90">
                            <h1 className="text-green-600 font-extrabold text-2xl">{animatedScore}</h1>
                            <p className="font-bold ">Correct </p>
                        </div>
                        <div className="min-h-20 w-full p-4 flex flex-col gap-1 justify-center items-center rounded-lg bg-red-50">
                            <h1 className="text-red-600 font-extrabold text-2xl">{animatedWrongAnswer}</h1>
                            <p className="font-bold ">Wrong/Skip </p>
                        </div>
                    </div>
                    <div className="bg-[#e6f4ed] mt-7 mb-5 w-full min-h-18 border-l-4 border-green-700 p-4">
                        <p className="text-sm italic">""Seeking knowledge is an obligation upon every Muslim.""</p>
                        <p className="text-sm text-green-700 mt-2">— Prophet Muhammad ﷺ</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            onClick={() => navigate("/quizsession")}
                            className="no-print flex hover:bg-green-600 hover:transition-all hover:duration-300 items-center min-w-35 justify-center gap-4 bg-green-700  transition-transform duration-300 active:scale-95 px-6 text-white h-12 font-bold rounded-full text-lg cursor-pointer"
                        >
                            Try Again
                        </button>

                        <button
                            onClick={() => navigate("/")}
                            className="no-print flex items-center hover:bg-[#e6f4ed] hover:transition-all hover:duration-300 min-w-35 justify-center gap-4 border-2 border-green-700 transition-transform duration-300 active:scale-95 px-6 text-green-700 h-12 font-bold rounded-full text-lg cursor-pointer"
                        >
                            Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
