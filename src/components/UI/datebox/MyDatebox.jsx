import React from 'react';
import cl from './MyDatebox.module.css'
import moment from "moment";

const MyDatebox = ({date, ...props}) => {

    const rootClasses = [cl.myDatebox]
    const curDate = new Date(date)

    let formatDate = 'MMM D'
    if (moment(curDate).year() !== moment(new Date()).year()) {
        formatDate = 'D MMM YYYY'
    }

    let value = moment(date).format(formatDate)
    if (moment(curDate).isAfter(new Date(), 'day')) {
        rootClasses.push(cl.default)
    } else if (moment(curDate).isSame(new Date(), 'day')) {
        rootClasses.push(cl.today)
        value = 'Today'
    } else {
        rootClasses.push(cl.late)
    }


    return (
        <div {...props} className={rootClasses.join(' ')}>
            <svg width="12" height="12" viewBox="0 0 12 12" style={{marginRight: 3, marginTop: 0}}>
                <path d="M9.5 1A1.5 1.5 0 0 1 11 2.5v7A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM8.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
            </svg>
            <p>{value}</p>
        </div>
    );
};

export default MyDatebox;