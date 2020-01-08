import React from 'react'

const NoHoliday = () => {
    return (
        <>
            <h1>No Holiday Today</h1>
        </>
    )
};

const st4 = {
    WebkitTextFillColor: 'white',
    backgroundColor: 'purple',
    display: 'inline-block',
    borderRadius: '25px',
    paddingLeft: '7px',
    paddingRight: '7px'
};

const Holiday = ({holidays, pos}) => {
    return (
        <>
            <h4>Hey, you've got a holiday today.</h4>
            <div key={pos}><h5>{holidays[pos].name}</h5>
                <p style={st4}>{holidays[pos].type[0]}</p>
                <p>{holidays[pos].description}</p><br/>
            </div>
        </>
    )
};

const Today = ({holidays}) => {
    let isHoliday = 0;
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let i;
    for (i = 0; i < holidays.length; i++)
        if (holidays[i].date.datetime.day === day && holidays[i].date.datetime.month === month) {
            isHoliday = 1
            break;
        }

    if (!isHoliday)
        return <NoHoliday/>
    else
        return <Holiday holidays={holidays} pos={i}/>
}
export default Today;