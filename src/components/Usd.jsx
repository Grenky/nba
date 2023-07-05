import { useEffect, useState } from 'react';
import '../styles/Usd.css';
import axios from 'axios';

export default function Usd() {

    const [usd, setUsd] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';


    useEffect(() => {
        axios
        .get(url)
        .then(response => {
            setUsd(response.data.bpi.USD);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false)
        });
    }, [])
    return(
        <div className="teams-wrapper">
            <h1>Teams!</h1>
            {isLoading ? (<h1>Loading...</h1>) : (
            usd &&
                <div>
                    <p>{usd.code}</p>
                    <p>{usd.sybol}</p>
                    <p>{usd.rate}</p>
                    <p>{usd.description}</p>
                    <p>{usd.rate_float}</p>   
                </div>
                )
            }
        </div>
    )
}