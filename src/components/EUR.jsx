import { useEffect, useState } from 'react';
import '../styles/EUR.css';
import axios from 'axios';

export default function EUR() {

    const [eur, setEur] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const url ='https://api.coindesk.com/v1/bpi/currentprice.json';

    useEffect(() => {
        axios
        .get(url)
        .then(response => {
            setEur(response.data.bpi.EUR);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
        });
    }, [])

    return(
        <div className="about-wrapper">
            <h1>About!</h1>
            {isLoading ? (<h1>Loading...</h1>) : ( 
            eur &&
                <div>
                    <p>{eur.code}</p>
                    <p>{eur.sybol}</p>
                    <p>{eur.rate}</p>
                    <p>{eur.description}</p>
                    <p>{eur.rate_float}</p>
                </div>
            )
            }
        </div>
    )   
}