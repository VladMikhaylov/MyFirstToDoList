import React from 'react';

const AddTaskElement = (props) => {
    return (
        <div {...props} className="add-task">
            <button>
                <svg width="24" height="24" viewBox="-2.6 -2.6 20 20">
                    <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor"/>
                </svg>
            </button>
            <p>Add task</p>
        </div>
    );
};

export default AddTaskElement;