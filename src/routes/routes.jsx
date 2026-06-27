import React, { Children } from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import QuizSession from "../components/QuizSession";
import About from "../components/About";
import Contact from "../components/Contact";
import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import Result from "../components/Result";

export const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true,
            },
            {
                path: "quiz",
                element: <Quiz />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "result",
                element: <Result />,
            },
        ],
    },
    {
        path: "quizsession",
        element: <QuizSession />,
    },
]);
