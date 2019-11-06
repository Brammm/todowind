import React from 'react';

const Layout = ({children, header}) => {
    return (
        <>
            <nav>
                Navigation
            </nav>
            <header>
                <h1>{header}</h1>
            </header>
            <main>
                {children}
            </main>
        </>
    )
};

export default Layout;
