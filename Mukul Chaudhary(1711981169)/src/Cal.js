import React from 'react'
import DateUtil from "./DateUtil";

const st = {
    width: '250px',
    display: 'inline-block',
    listStyleType: 'none',
    paddingInlineStart: '0px',
    
};
const st2 = {
    marginTop:'3%',
    marginBottom:'3%',
    marginLeft: '10%',
    marginRight: '10%',
    width: 'fit-content',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};
const st3 = {
    backgroundColor: 'white',
    WebkitTextFillColor: 'black',
    border: '0px',
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
};

const st4 = {
    WebkitTextFillColor: 'white',
    backgroundColor: 'purple',
    display: 'inline-block',
    borderRadius: '25px',
    paddingLeft: '7px',
    paddingRight: '7px'
};

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const Upcoming = ({holidays}) => {
    let arr = [];
    let mod = [];
    for (let i = 0; i < holidays.length; i++) {
        mod.push(<div key={i}><h3><b>{holidays[i].name}</b></h3>
            <p style={st4}>{holidays[i].type[0]}</p>
            <p>{holidays[i].description}</p><br/></div>);
        if (i !== holidays.length - 1)
            if (holidays[i].date.datetime.day === holidays[i + 1].date.datetime.day && holidays[i].date.datetime.month === holidays[i + 1].date.datetime.month)
                continue;


        arr.push(<ul key={i} style={st}>
            <button type='button' className="btn btn-info btn-sm" data-toggle="modal" data-target={"#myModal" + i}
                    style={st3}><DateUtil
                date={holidays[i].date.datetime.day}
                month={holidays[i].date.datetime.month}/>
            </button>
            <div className="modal fade" id={"myModal" + i} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{holidays[i].date.datetime.day} {monthNames[holidays[i].date.datetime.month-1]} {holidays[i].date.datetime.year}</h4>
                        </div>
                        <div className="modal-body">
                            {mod}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </ul>);
        mod = []
    }
    return (
        <div style={st2}>
            {arr}
        </div>
    )
};
export default Upcoming;