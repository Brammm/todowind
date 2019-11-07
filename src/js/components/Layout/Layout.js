import React, {useState} from 'react';
import TopHeader from "./TopHeader";
import Navigation from "./Navigation";

const Layout = ({children}) => {
    const [showNavigationOnSmallScreen, toggleNavigation] = useState(false);

    const handleMenuToggle = e => {
        e.preventDefault();
        e.stopPropagation();
        toggleNavigation(prevState => !prevState);
    };

    return (
        <>
            <TopHeader onClick={handleMenuToggle}/>
            <div className="w-full pt-16 content-end lg:clearfix">
                <Navigation showNavigationOnSmallScreen={showNavigationOnSmallScreen} />
                <div className="text-gray-700 lg:float-right lg:w-3/4 xl:w-4/5">
                    {children}
                </div>
            </div>
        </>
    )
};

Layout.Header = ({children}) => (
    <header className="bg-gray-800">
        <h1 className="border-b lg:rounded-tl-lg p-4 bg-white text-3xl text-gray-900">{children}</h1>
    </header>
);

Layout.Content = ({children}) => (
    <main className="p-4">
        {children}
    </main>
);

export default Layout;
