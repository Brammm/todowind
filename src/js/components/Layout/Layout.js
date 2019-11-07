import React, {useState} from 'react';

const Layout = ({children, header}) => {
    const [showNavigation, toggleNavigation] = useState(false);

    let navClassName = 'w-full fixed z-40 lg:w-1/4 xl:w-1/5 bg-gray-800 text-gray-100 lg:block h-screen';
    if (! showNavigation) {
        navClassName = navClassName + ' hidden';
    }

    const navLinkClassName = 'block w-full py-2 px-4 hover:bg-gray-900 hover:text-teal-400';

    const handleMenuToggle = e => {
        e.preventDefault();
        e.stopPropagation();
        toggleNavigation(prevState => !prevState);
    };

    return (
        <>
            <div className="fixed w-full z-50 flex flex-justify-between h-16 bg-gray-800 text-gray-100 items-center">
                <h1 className="mr-auto w-1/4 xl:w-1/5 text-center text-teal-400 text-2xl font-bold h-8 tracking-widest uppercase">
                    Todowind
                </h1>
                <a href="/">
                    <img
                        className="h-8 mr-4 rounded-full"
                        alt="avatar" src="https://api.adorable.io/avatars/285/hello@bitcode.be.png" />
                </a>
                <button onClick={handleMenuToggle}>
                    <i className="fas fa-bars fa-border rounded mr-4 text-gray-500 border-gray-500 lg:hidden hover:text-white hover:border-white" />
                </button>
            </div>
            <div className="w-full pt-16 content-end lg:clearfix">
                <aside className={navClassName}>
                    <nav>
                        <a className={navLinkClassName} href="/"><i className="fas fa-tasks mr-4"/>Todos</a>
                        <a className={navLinkClassName} href="/"><i className="fas fa-users mr-4"/>Users</a>
                    </nav>
                </aside>
                <main className="text-gray-700 lg:float-right lg:w-3/4 xl:w-4/5">
                    <header className="bg-white p-4 border-b sticky">
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
