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
        <div className="usd-wrapper">
            <div className='usd-wrapper_content'>
                {isLoading ? (<h1>Loading...</h1>) : (
                usd &&
                    <div className='usd-wrapper_content__content__box'>
                        <p  className='usd-wrapper_content__content__box_text_title'>{usd.code}</p>
                        <p  className='usd-wrapper_content__content__box_text'>{usd.sybol}</p>
                        <p  className='usd-wrapper_content__content__box_text'>{usd.rate}</p>
                        <p  className='usd-wrapper_content__content__box_text'>{usd.description}</p>
                        <p  className='usd-wrapper_content__content__box_text'>{usd.rate_float}</p>   
                    </div>
                    )
                }
            </div> 
        </div>
    )
}