import React from "react";
import digital from "./assets/img/digital-discount.png";
import donymusic from "./assets/img/donymusic.png";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

const Digital = ({ theme }) => {
    const backgroundText = theme === "dark" ? "bg-yellow-500" : "bg-purple-500";

    return (
        <div className="space-y-6 my-8 py-10 md:py-16 lg:py-20 max-w-7xl p-4 mx-auto">
            <NavLink to="/" className="flex items-center mb-4 gap-1 max-w-max">
                <ArrowLeft />
                Revenir
            </NavLink>
            <h2 className="text-3xl font-extrabold relative max-w-max">
                Description
                <span className={`w-full h-1 absolute top-9 ${backgroundText} block`}></span>
            </h2>
            <div>
                <p>Ce site de vente en ligne propose une large gamme de produits numériques, allant des logiciels aux outils créatifs, en passant par les cours en ligne et les ressources téléchargeables.</p>
                <br />
                <p>Digital Discount s’adresse à une clientèle à la recherche de solutions numériques accessibles à prix réduits, offrant des promotions exclusives et des réductions attractives sur des produits de haute qualité.</p>
            </div>
            <div className="space-y-6 my-8 py-10 md:py-16 lg:py-20 max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold relative max-w-max">
                    Technologies utilisées
                    <span className={`w-full h-1 absolute top-9 ${backgroundText} block`}></span>
                </h2>
                <ul className="space-y-2 list-disc">
                    <li className="ml-7">React.js</li>
                    <li className="ml-7">Boostrap</li>
                    <li className="ml-7">Node.js</li>
                    <li className="ml-7">Mysql</li>
                    <li className="ml-7">Paypal</li>
                </ul>
            </div>
        </div>
    );
};

export default Digital;
