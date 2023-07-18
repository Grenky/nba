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
        <div className="EUR-wrapper">
            {isLoading ? (<h1>Loading...</h1>) : ( 
            eur &&
                <div className='EUR-wrapper_content'>
                    <p className='EUR-wrapper_content__content__box_text_title'>{eur.code}</p>
                    <p className='EUR-wrapper_content__content__box_text'>{eur.sybol}</p>
                    <p className='EUR-wrapper_content__content__box_text'>{eur.rate}</p>
                    <p className='EUR-wrapper_content__content__box_text'>{eur.description}</p>
                    <p className='EUR-wrapper_content__content__box_text'>{eur.rate_float}</p>
                </div>
            )
            }
        </div>
    )   
}