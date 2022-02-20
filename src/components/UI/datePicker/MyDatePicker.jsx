import React from 'react';
import cl from './MyDatePicker.module.css'
import moment from "moment";

const MyDatePicker = ({value, ...props}) => {

    const valueString = moment(value).format("YYYY-MM-DD")
    const todayString = moment(new Date()).format("YYYY-MM-DD")

    return (
        <div>
            <input
                type="date"
                id="mdp"
                value={valueString}
                min={todayString}
                {...props}
                className={cl.myDatePicker}
            />
        </div>
    );
};

export default MyDatePicker;