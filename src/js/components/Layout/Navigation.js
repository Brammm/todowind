import React from "react";
import classnames from 'classnames';

import Icon from "../Icon/Icon";

const Navigation = ({showNavigationOnSmallScreen}) => (
    <nav className={classnames({
        'hidden': !showNavigationOnSmallScreen,
        'lg:block': true,
        'z-50': true,
        'fixed': true,
        'w-full': true,
        'lg:w-1/4': true,
        'xl:w-1/5': true,
        'h-screen': true,
        'bg-gray-800': true,
        'shadow-2xl': true,
        'text-gray-100': true,
    })}>
        <Navigation.Link path="/" iconName="fa-tasks" label="Todos"/>
        <Navigation.Link path="/" iconName="fa-users" label="Users"/>
    </nav>
);

Navigation.Link = ({path, iconName, label}) => (
    <a className="block w-full py-2 px-8 hover:bg-gray-900 hover:text-teal-400" href={path}>
        <Icon name={iconName} classNames={{'mr-4': true}}/>{label}
    </a>
);

export default Navigation;
