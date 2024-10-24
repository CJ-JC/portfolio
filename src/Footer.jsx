import React from "react";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="w-full max-w-screen-xl mx-auto md:px-8 mt-20 justify-center flex">
            <div className="border-t border-1 w-full text-center p-4">Tous droits réservés © {year} Cherley JOACHIM</div>
        </div>
    );
};

export default Footer;
