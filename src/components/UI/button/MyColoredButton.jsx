import React from 'react';
import cl from "./MyColoredButton.module.css";

const MyColoredButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.myColoredButton}>
            {children}
        </button>
    );
};

export default MyColoredButton;