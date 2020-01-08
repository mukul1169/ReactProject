import React, {useEffect, useState} from 'react';
import './App.css';
import Today from "./Today";
import Upcoming from "./Upcoming";
import Past from "./Past";

const st = {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};

function App() {
    const [holidays, setHolidays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState(1);
    const [error, setError] = useState(false)

    function clickHandler(mode1) {
        setMode(mode1);
    }

    useEffect(() => {
        const url = 'https://calendarific.com/api/v2/holidays?country=IN&year=2019&api_key=757945850493162722ff653453ce9b4708e23b78&amp';
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                    if (result.meta.code === 200) {
                        setLoading(false)
                        setHolidays(result.response.holidays);
                    }
                },
                (error) => {
                    setLoading(false)
                    setError(true)
                    console.log('error')
                }
            )
    }, []);

    if (error)
        return <h3>Error Loading Data</h3>;
    else
        return (
            <div>
                {loading ? (
                    <h3>Loading...</h3>
                ) : (
                    <>
                        <br/>
                        <Today holidays={holidays}/>
                        <br/>
                        <div className="btn-group btn-group-lg" role='group' aria-label='btn-grp1' style={st}>

                            <button type="button" style={{backgroundColor:'lavender'}} 
                                    onClick={() => clickHandler(1)}>Upcoming
                                Holidays
                            </button>
                            <button type="button" style={{backgroundColor:'lavender'}} 
                                    onClick={() => clickHandler(0)}>Passed
                                Holidays
                            </button>
                        </div>
                        {mode ? (
                                <Upcoming holidays={holidays}/>
                            ) :
                            (<Past holidays={holidays}/>)
                        }

                    </>
                )}
            </div>
        );
}

export default App;
