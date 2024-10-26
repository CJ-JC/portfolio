import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import react from "./assets/react.png";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
// Icone
import profil from "./assets/profil.jpg";
import php from "./assets/php.png";
import javaScript from "./assets/javascript.svg";
import sql from "./assets/sql.png";
import mysql from "./assets/mysql.png";
import symfony from "./assets/symfony.png";
import nodejs from "./assets/node-js.svg";
import html5 from "./assets/html5.png";
import tailwind from "./assets/tailwind.png";
import css from "./assets/css.png";
import bootstrap from "./assets/bootstrap.png";
import github from "./assets/github.svg";
import actions from "./assets/actions.png";
import playwright from "./assets/playwright.png";
import vercel_light from "./assets/vercel-icon-light.svg";
import vercel_dark from "./assets/vercel-icon-dark.svg";
// projets
import digital from "./assets/img/digital-discount.png";
import donymusic from "./assets/img/donymusic.png";

const Home = ({ theme }) => {
    const themeProject = theme === "light" ? "bg-black" : "bg-white";
    const themeProjectColor = theme === "light" ? "text-white" : "text-black";

    const backgroundText = theme === "dark" ? "bg-yellow-500" : "bg-purple-500";
    return (
        <div className="w-full max-w-screen-xl mx-auto md:px-8 p-4 mt-20">
            {/* Home */}
            <div id="home" className="space-y-6 md:my-5 md:py-16 lg:py-20 text-default max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-6 order-2 md:order-1 mt-4">
                    <h1 className="text-4xl font-bold">Cherley JOACHIM</h1>
                    <div className="relative max-w-max">
                        <h3 className="text-3xl z-10 relative max-w-max">
                            Développeur Full-Stack
                            <span className={`w-full h-3 -z-10 -rotate-6 absolute top-4 ${backgroundText} block`}></span>
                        </h3>
                    </div>
                    <p>Fraichement diplômé d'Architect Web à F2I, je suis à la recherche d'une nouvelle aventure professionnelle.</p>
                    <div className="mx-auto flex gap-3 flex-col lg:flex-row">
                        <div className="flex items-center gap-1">
                            <FaLocationDot size={22} /> France, Île-de-France
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3 ml-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <p>Disponible pour un nouveau challenge</p>
                        </div>
                    </div>
                    <div className="mx-auto flex items-center gap-3">
                        <Link to="https://www.linkedin.com/in/cherley-joachim/" target="_blank" className="p-2 rounded-full shadow-sm hover:-translate-y-1 hover:scale-110 ease-in-out text-black border-2 bg-white border-black duration-300 flex justify-between gap-2">
                            <FaLinkedin size={24} className="text-sky-700" />
                            Linkedin
                        </Link>
                        <Link to="https://github.com/CJ-JC" target="_blank" className="p-2 rounded-full shadow-sm hover:-translate-y-1 hover:scale-110 ease-in-out text-black border-2 bg-white border-black duration-300 flex justify-between gap-2">
                            <FaGithub size={24} />
                            Github
                        </Link>
                    </div>
                </div>
                <div className="space-y-2 mb-5 order-1 md:order-2 text-center">
                    <img src={profil} alt="photo de profil" className="rounded-full w-48 h-48 mx-auto border-2" />
                </div>
            </div>

            {/* About */}
            <div id="about" className="space-y-6 my-8 py-10 md:py-16 lg:py-20 text-default max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold relative max-w-max">
                    À Propos de moi
                    <span className={`w-full h-1 absolute top-9 ${backgroundText} block`}></span>
                </h2>
                <p>
                    Salut, moi c'est Cherley ✌🏾, <span className="text-green-500">développeur web</span> passionné, diplômé d’un Master 2 en développement web. Je crée des sites performants, intuitifs et centrés utilisateur.
                </p>
                <p>
                    Fort de plusieurs expériences sur des projets complexes, j'ai développé une solide expertise avec des technologies comme <span className="text-green-500">Symfony</span> et <span className="text-green-500">ReactJS</span>. Ce que j'apprécie particulièrement, c'est d'apprendre en continu et de m'adapter aux nouvelles tendances technologiques. <br /> Mon objectif : relever des défis techniques avec des solutions innovantes.
                </p>
                <p>Ce portfolio est un aperçu de mes compétences et de mon parcours. J'espère que vous y trouverez une bonne vision de mon travail. Si vous souhaitez discuter de vos projets ou envisager une collaboration, n’hésitez pas à me contacter !</p>
            </div>

            {/* Stacks */}
            <div id="stacks" className="space-y-6 md:my-8 md:py-16 lg:py-20 max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold relative max-w-max">
                    Mes Compétences
                    <span className={`w-full h-1 absolute top-9 ${backgroundText} block`}></span>
                </h2>
                <div className="flex justify-between md:flex-row flex-col">
                    <div className="flex flex-col mt-8">
                        <h2 className="text-xl font-semibold mb-4">Front-end</h2>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <img src={html5} alt="logo php" className="w-5" /> HTML
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={css} alt="logo php" className="w-5" /> CSS
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={javaScript} alt="logo php" className="w-5" /> JavaScript
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={react} alt="logo php" className="w-5" /> React.js
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={tailwind} alt="logo php" className="w-5" /> Tailwind CSS
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={bootstrap} alt="logo php" className="w-5" /> Boostrap
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col mt-8">
                        <h2 className="text-xl font-semibold mb-4">Back-end</h2>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <img src={php} alt="logo php" className="w-10" /> PHP
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={mysql} alt="logo php" className="w-10" /> Mysql
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={sql} alt="logo php" className="w-10" /> SQL
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={symfony} alt="logo php" className="w-6" /> Symfony
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={nodejs} alt="logo php" className="w-6" /> Node.js
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col mt-8">
                        <h2 className="text-xl font-semibold mb-4">Autre</h2>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <img src={github} alt="logo php" className="w-5" /> Git & GitHub
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={actions} alt="logo php" className="w-5" /> Github Actions
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={playwright} alt="logo php" className="w-5" /> Playwright E2E
                            </li>
                            <li className="flex items-center gap-2">
                                {theme === "light" ? <img src={vercel_dark} alt="logo php" className="w-5" /> : <img src={vercel_light} alt="logo php" className="w-5" />}
                                Vercel
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div id="projects" className="space-y-6 my-8 py-10 md:py-16 lg:py-20 max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold relative max-w-max">
                    Mes Réalisations
                    <span className={`w-full h-1 absolute top-9 ${backgroundText} block`}></span>
                </h2>
                <p>Découvrez une sélection de projets marquants que j'ai eu l'occasion de mener à bien, alliant créativité et expertise technique.</p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
                    <a href="/digital-discount" className="hover:-translate-y-1 hover:scale-110 ease-in-out border-1 duration-300 px-2">
                        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl pt-30 min-h-72 max-w-sm mx-auto">
                            <img className="absolute inset-0 h-full w-full object-cover" src={digital} alt="digital-discount" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80"></div>
                            <div className={`z-10 space-y-2 p-4 ${themeProject} ${themeProjectColor}`}>
                                <h3 className="text-xl font-medium">Digital Discount</h3>
                                <p className="text-left text-sm">Site de vente en ligne de produits numériques</p>
                            </div>
                        </article>
                    </a>
                    <a href="/donymusic" className="hover:-translate-y-1 hover:scale-110 ease-in-out border-1 duration-300 px-2">
                        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl pt-30 min-h-72 max-w-sm mx-auto">
                            <img className="absolute inset-0 h-full w-full object-cover" src={donymusic} alt="digital-discount" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80"></div>
                            <div className={`z-10 space-y-2 p-4 ${themeProject} ${themeProjectColor}`}>
                                <h3 className="text-xl font-medium">Donymusic</h3>
                                <p className="text-left text-sm">Une plateforme dédiée à l'apprentissage de la musique</p>
                            </div>
                        </article>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
