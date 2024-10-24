import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./Digital";
import Skills from "./Skills";
import "./App.css";

import { useEffect, useState } from "react";
import { PageTransition } from "@steveeeie/react-page-transition";
import Footer from "./Footer";
import Digital from "./Digital";
import Donymusic from "./Donymusic";

export default function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const [themeIcon, setThemeIcon] = useState("text-white");
    const [colorIconTheme, setColorIconTheme] = useState("text-white");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        setThemeIcon(theme === "dark" ? "bg-white" : "text-white");
        setColorIconTheme(theme === "dark" ? "text-black" : "text-white");

        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`App ${theme} h-full relative`}>
            <Navbar theme={theme} toggleTheme={toggleTheme} themeIcon={themeIcon} colorIconTheme={colorIconTheme} />
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <Routes>
                        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} themeIcon={themeIcon} colorIconTheme={colorIconTheme} />} />
                        <Route path="/digital-discount" element={<Digital theme={theme} />} />
                        <Route path="/donymusic" element={<Donymusic theme={theme} />} />
                    </Routes>
                    <Footer />
                </ul>
            </div>
        </div>
    );
}
