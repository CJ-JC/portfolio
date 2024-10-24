import React from "react";
import digital from "./assets/img/digital-discount.png";
import donymusic from "./assets/img/donymusic.png";

const Donymusic = ({ theme }) => {
    const backgroundText = theme === "dark" ? "bg-yellow-500" : "bg-purple-500";

    return (
        <div className="space-y-6 my-8 py-10 md:py-16 lg:py-20 max-w-7xl p-4 mx-auto">
            <h2 className="text-3xl font-extrabold relative max-w-max">
                Description
                <span className={`w-full h-1 absolute top-9 ${backgroundText} block`}></span>
            </h2>
            <div>
                <p>Donymusic est une plateforme d'apprentissage musical en ligne que j'ai développée avec une approche pédagogique centrée sur l'utilisateur. Le site propose des tutoriels et des cours interactifs pour différents instruments.</p>
                <br />
                <p>Grâce à une interface claire et des fonctionnalités pratiques, il permet aux utilisateurs de progresser à leur propre rythme, tout en accédant facilement à des ressources complémentaires pour approfondir leurs connaissances musicales.</p>
            </div>
            <div className="space-y-6 my-8 py-10 md:py-16 lg:py-20 max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold relative max-w-max">
                    Technologies utilisées
                    <span className={`w-full h-1 absolute top-9 ${backgroundText} block`}></span>
                </h2>
                <ul className="space-y-2 list-disc">
                    <li className="ml-7">Next.js</li>
                    <li className="ml-7">Prisma</li>
                    <li className="ml-7">PostgreSql</li>
                    <li className="ml-7">Tailwind CSS</li>
                    <li className="ml-7">Stripe</li>
                </ul>
            </div>
        </div>
    );
};

export default Donymusic;
