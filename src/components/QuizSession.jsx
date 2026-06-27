import React, { useEffect, useState } from "react";
import { IoMdStopwatch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { questions } from "../data/questions";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const QuizSession = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];
    const [answers, setAnswers] = useState({});
    const [timers, setTimers] = useState({});
    const timeLeft = timers[currentQuestionIndex] ?? 30;
    const selectedAnswer = answers[currentQuestionIndex] ?? null;
    const navigate = useNavigate();

    const handleAnswerSelection = (index) => {
        setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: index }));
    };

    const getOptionClass = (index) => {
        const defaultClass = "transition-transform duration-300  cursor-pointer min-h-16 rounded-lg p-4 border-2  flex items-center gap-4";

        const hoverClass = "hover:bg-green-50 hover:border-green-600 hover:scale-97";

        if (selectedAnswer === null) {
            return `${defaultClass} ${hoverClass} active:scale-95 border-gray-300 bg-gray-50`;
        }

        if (currentQuestion.correctAnswerIndex === index) {
            return `${defaultClass} border-green-500 bg-green-50`;
        }

        if (selectedAnswer === index && selectedAnswer !== currentQuestion.correctAnswerIndex) {
            return `${defaultClass} border-red-600 bg-red-50`;
        }

        return `${defaultClass} border-gray-300 bg-gray-50`;
    };

    const getCircleClass = (index) => {
        const defaultClass = "rounded-full size-8 flex justify-center items-center text-white text-sm font-bold";

        if (selectedAnswer === null) {
            return `${defaultClass} bg-gray-400`;
        }

        if (currentQuestion.correctAnswerIndex === index) {
            return `${defaultClass} bg-green-500`;
        }

        if (selectedAnswer === index && selectedAnswer !== currentQuestion.correctAnswerIndex) {
            return `${defaultClass} bg-red-500`;
        }

        return `${defaultClass} bg-gray-400`;
    };

    useEffect(() => {
        if (selectedAnswer !== null) return;
        if ((timers[currentQuestionIndex] ?? 30) <= 0) return;
        const timer = setInterval(() => {
            setTimers((prev) => {
                const currentTime = prev[currentQuestionIndex] ?? 30;
                if (currentTime <= 1) {
                    clearInterval(timer);
                    handleTimeUp();
                    return { ...prev, [currentQuestionIndex]: 0 };
                }

                return { ...prev, [currentQuestionIndex]: currentTime - 1 };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentQuestionIndex, selectedAnswer]);

    const handleTimeUp = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => {
                return prev + 1;
            });
        }
    };

    const handleNextLogic = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    };

    const handleSubmit = () => {
        const score = questions.reduce((total, question, index) => {
            return total + (answers[index] === question.correctAnswerIndex ? 1 : 0);
        }, 0);

        navigate("/result", {
            state: { score },
        });
    };

    return (
        <div className=" h-screen bg-white  sm:bg-[url('/bg-1.png')] bg-cover bg-center flex justify-center font-noni">
            <div className="w-150 p-8 sm:rounded-lg bg-white sm:shadow-lg my-16">
                <div className="flex justify-between">
                    <div className="p-1 rounded-full w-20  flex justify-center items-center bg-[#e6f4ed]">
                        <p className="text-green-700 font-bold text-sm">{currentQuestion.id} / 24</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex gap-1 items-center font-extrabold text-green-700">
                            <IoMdStopwatch className="text-xl " />
                            <p>{timeLeft}s</p>
                        </div>
                        <div className="px-4 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-sm text-noni font-bold">
                            <p>{currentQuestion.category}</p>
                        </div>
                    </div>
                </div>
                <h1 className="mt-7 px-1 text-lg mb-8 font-bold">{currentQuestion.question}</h1>
                <div className="flex flex-col gap-3">
                    {currentQuestion.options.map((option, index) => {
                        return (
                            <button
                                disabled={selectedAnswer !== null || timeLeft === 0}
                                onClick={() => handleAnswerSelection(index)}
                                key={index}
                                className={getOptionClass(index)}
                            >
                                <div className={getCircleClass(index)}>{String.fromCharCode(65 + index)}</div>
                                <p>{option}</p>
                            </button>
                        );
                    })}
                </div>

                <div className="flex justify-between items-center">
                    <button
                        onClick={() => {
                            if (currentQuestionIndex > 0) {
                                setCurrentQuestionIndex((prev) => prev - 1);
                            }
                        }}
                        className="flex items-center text-lg justify-center gap-2 bg-green-700 mt-10  px-4 text-white py-2 font-bold rounded-full transition-transform duration-300 active:scale-95 cursor-pointer"
                    >
                        <FaArrowLeft />
                        <span>Previous</span>
                    </button>

                    {currentQuestionIndex === questions.length - 1 ? (
                        <button
                            onClick={handleSubmit}
                            className="flex items-center text-lg justify-center gap-2 bg-green-700 mt-10  px-4 text-white py-2 font-bold rounded-full transition-transform duration-300 active:scale-95 cursor-pointer"
                        >
                            <span>Submit</span>
                            <FaCircleCheck />
                        </button>
                    ) : (
                        <button
                            onClick={handleNextLogic}
                            className="flex items-center text-lg justify-center gap-2 bg-green-700 mt-10  px-4 text-white py-2 font-bold rounded-full transition-transform duration-300 active:scale-95 cursor-pointer"
                        >
                            <span>Next</span>
                            <FaArrowRight />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizSession;
