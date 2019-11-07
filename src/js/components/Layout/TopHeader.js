import React from "react";

const TopHeader = ({onClick}) => (
    <header className="fixed z-40 w-full h-16 flex items-center bg-white">
        <h1 className="mr-auto ml-4 lg:ml-8 text-teal-400 text-2xl font-bold h-8 tracking-widest uppercase">
            Todowind
        </h1>
        <a href="/">
            <img
                className="h-8 mr-4 lg:mr-8 rounded-full"
                alt="avatar" src="https://api.adorable.io/avatars/285/hello@bitcode.be.png"
            />
        </a>
        <button onClick={onClick}>
            <i className="fas fa-bars  lg:hidden mr-4 text-gray-500 hover:text-gray-600"/>
        </button>
    </header>
);

export default TopHeader;
