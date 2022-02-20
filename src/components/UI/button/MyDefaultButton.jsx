import React from 'react';
import cl from './MyDefaultButton.module.css'

const MyDefaultButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.myDefaultButton}>
            {children}
        </button>
    );
};

export default MyDefaultButton;