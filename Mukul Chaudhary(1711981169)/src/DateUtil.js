import React from 'react'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const DateUtil = ({date, month}) => {
    return (
            <li>
                <h1><b>{date}</b></h1>
                <h6><b>{monthNames[month-1]}</b></h6>
            </li>
    )
};
export default DateUtil