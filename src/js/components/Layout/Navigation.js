import React from "react";
import classnames from 'classnames';
import {NavLink} from 'react-router-dom';

import Icon from "../Icon/Icon";

const Navigation = ({showNavigationOnSmallScreen}) => (
    <nav className={classnames({
        'hidden': !showNavigationOnSmallScreen,
        'lg:block': true,
        'z-50': true,
        'fixed': true,
        'w-full': true,
        'lg:w-1/5': true,
        'xl:w-1/6': true,
        'h-screen': true,
        'pt-8': true,
        'p-6': true,
        'bg-gray-800': true,
    })}>
        <Navigation.Link path="/" exact iconName="tasks" label="Todos"/>
        <Navigation.Link path="/users" iconName="users" label="Users"/>
    </nav>
);

Navigation.Link = ({exact, iconName, label, path}) => (
    <NavLink
        activeClassName="bg-gray-900"
        className="text-gray-500 font-semibold block w-full rounded-lg py-3 pl-6 mb-3 hover:bg-gray-900 hover:text-teal-400"
        exact={exact}
        to={path}
    >
        <Icon name={iconName} classNames={{'mr-4': true}}/>{label}
    </NavLink>
);

export default Navigation;
