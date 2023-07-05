import { useEffect, useState } from 'react';
import '../styles/GBP.css';
import axios from 'axios';

export default function GBP() {

    const [gbp, setGBP] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    useEffect(() => {
        axios
        .get(url)
        .then(response => {
            setGBP(response.data.bpi.GBP);
            setIsLoading(false);

        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
        });
    }, [])

    return(
        <div className="players-wrapper">
            <h1>Players!</h1>
            {isLoading ? (<h1>Loading...</h1>) : ( 
            gbp &&
                <div>
                    <p>{gbp.code}</p>
                    <p>{gbp.sybol}</p>
                    <p>{gbp.rate}</p>
                    <p>{gbp.description}</p>
                    <p>{gbp.rate_float}</p>
                </div>
                )
            }
        </div>
    )
}