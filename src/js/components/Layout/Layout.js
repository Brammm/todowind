import React from 'react';

const Layout = ({children, header}) => {
    return (
        <div className="w-full flex">
            <nav className="w-1/4 xl:w-1/5 bg-gray-800 text-gray-100">
                Navigation
            </nav>
            <main className="flex-1 text-gray-700">
                <header className="bg-white">
                    <h1>{header}</h1>
                </header>
                <div>
                    {children}
                </div>
            </main>
        </div>
    )
};

export default Layout;
