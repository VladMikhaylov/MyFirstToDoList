import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visible, closeModal}) => {

    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onMouseDown={closeModal}>
            <div className={cl.myModalContent} onMouseDown={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;