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
                <div className="text-gray-700 lg:float-right lg:w-4/5 xl:w-5/6">
                    <main className="p-4 lg:p-8 border-t-2">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
};

export default Layout;
