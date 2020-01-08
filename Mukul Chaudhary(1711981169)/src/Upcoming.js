import Cal from './Cal.js'
import React from 'react'

const Upcoming = ({holidays}) => {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let upComingHolidays = [];
    for (let i = 0; i < holidays.length; i++) {

        if (holidays[i].date.datetime.month > month || (holidays[i].date.datetime.month === month && holidays[i].date.datetime.day > day))
            upComingHolidays.push(holidays[i])
    }
    return <Cal holidays={upComingHolidays}/>
};
export default Upcoming;