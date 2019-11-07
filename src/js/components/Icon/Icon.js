import React from 'react';
import classnames from 'classnames';

const Icon = ({name, classNames}) => {
    return (
        <i className={classnames({
            'fas': true,
            [name]: true,
            ...classNames
        })} />
    );
};

export default Icon;