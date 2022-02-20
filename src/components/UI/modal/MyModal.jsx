import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ children, visible, closeModal }) => {
    const rootClasses = [cl.myModal];
    const modalClasses = [cl.myModalContent];
    if (visible) {
        rootClasses.push(cl.active);
        modalClasses.push(cl.myModalContentActive);
    }

    return (
        <div className={rootClasses.join(" ")} onMouseDown={closeModal}>
            <div
                className={modalClasses.join(` `)}
                onMouseDown={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;
