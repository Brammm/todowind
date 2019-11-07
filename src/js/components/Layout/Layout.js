import React from 'react';

const Layout = ({children, header}) => {

    const navAClassName = 'block w-full py-2 px-4 hover:bg-gray-900 hover:text-teal-400';

    return (
        <>
            <div className="flex flex-justify-between h-16 bg-gray-800 text-gray-100 items-center">
                <h1 className="mr-auto w-1/4 xl:w-1/5 text-center text-teal-400 text-2xl font-bold h-8">
                    TODOWIND
                </h1>
                <a href="/">
                    <img
                        className="h-8 mr-4 rounded-full"
                        alt="avatar" src="https://api.adorable.io/avatars/285/hello@bitcode.be.png" />
                </a>
            </div>
            <div className="w-full lg:flex">
                <aside className="w-full lg:w-1/4 xl:w-1/5 bg-gray-800 text-gray-100">
                    <nav>
                        <a className={navAClassName} href="/">Todos</a>
                        <a className={navAClassName} href="/">Users</a>
                    </nav>
                </aside>
                <main className="lg:flex-1 text-gray-700">
                    <header className="bg-white p-4 border-b">
                        <h1 className="text-3xl text-gray-900">{header}</h1>
                    </header>
                    <div className="p-4">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
};

export default Layout;
