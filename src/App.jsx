import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import QuizSession from "./components/QuizSession";
import Result from "./components/Result";
import MainLayout from "./layouts/MainLayout";

const App = () => {
    return (
        <div>
            <MainLayout />
        </div>
    );
};

export default App;
