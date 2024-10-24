import { BriefcaseBusiness, Home, Mail, Moon, Sun, User } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar = ({ theme, toggleTheme, themeIcon, colorIconTheme }) => {
    const [navbarColor, setNavbarcolor] = useState("bg-black");
    const [colorLink, setColorLink] = useState("text-white");

    useEffect(() => {
        {
            theme === "dark" ? setNavbarcolor("bg-white") : setNavbarcolor("bg-black");
            theme === "dark" ? setColorLink("text-black") : setColorLink("text-white");
        }
    }, [theme]);

    return (
        <div className={`${navbarColor} ${colorLink} flex justify-around items-center w-full max-w-72 mx-auto fixed left-1/2 transform -translate-x-1/2 top-0 mt-3 z-50 py-4 rounded-full`}>
            <div>
                <a href="#home" title="Accueil">
                    <Home />
                </a>
            </div>
            <div>
                <a href="#about" title="à propos">
                    <User />
                </a>
            </div>
            <div>
                <a href="#stacks" title="compétences">
                    <BriefcaseBusiness />
                </a>
            </div>
            <div>
                <a href="#contact" title="Contact">
                    <Mail />
                </a>
            </div>

            <button onClick={toggleTheme} className={` ${themeIcon} ${colorIconTheme}`}>
                {theme === "light" ? (
                    <div className="flex items-center gap-3 text-black">
                        <Moon className="text-orange-500" />
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Sun />
                    </div>
                )}
            </button>
        </div>
    );
};

export default Navbar;

// import React, { useEffect, useState } from "react";

// const Navbar = ({ theme }) => {
//     const [colorLink, setColorLink] = useState("text-white");
//     const [isOpen, setIsOpen] = useState(false); // State for the mobile menu

//     useEffect(() => {
//         theme === "dark" ? setColorLink("text-white") : setColorLink("text-black");
//     }, [theme]);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className={`${colorLink} flex flex-col md:flex-row justify-between items-center w-full mx-auto fixed top-0 z-50 py-6 bg-white border-b md:px-28 p-4 gap-7 font-medium`}>
//             {/* Logo or Title */}
//             <div className="text-lg font-bold">
//                 <a href="#home" title="Accueil">
//                     Logo
//                 </a>
//             </div>

//             {/* Hamburger Icon for Mobile */}
//             <div className="md:hidden" onClick={toggleMenu}>
//                 <button className={`focus:outline-none ${colorLink}`}>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                     </svg>
//                 </button>
//             </div>

//             {/* Menu Items */}
//             <div className={`md:flex ${isOpen ? "block" : "hidden"} md:items-center md:block absolute md:static bg-white w-full left-0 top-full md:w-auto md:bg-transparent`}>
//                 <div className="flex flex-col md:flex-row md:gap-7">
//                     <a href="#home" title="Accueil" className={`${colorLink} block md:inline-block py-2`}>
//                         Home
//                     </a>
//                     <a href="#about" title="à propos" className={`${colorLink} block md:inline-block py-2`}>
//                         À propos de moi
//                     </a>
//                     <a href="#stacks" title="compétences" className={`${colorLink} block md:inline-block py-2`}>
//                         Technologies
//                     </a>
//                     <a href="#projects" title="Mes projets" className={`${colorLink} block md:inline-block py-2`}>
//                         Mes projets
//                     </a>
//                     <a href="#contact" title="Contact" className={`${colorLink} block md:inline-block py-2`}>
//                         Mon parcours
//                     </a>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
