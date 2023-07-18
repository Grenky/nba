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
        <div className="GBP-wrapper">
            {isLoading ? (<h1>Loading...</h1>) : ( 
            gbp &&
                <div className='gbp-wrapper_content'>
                    <p className='gbp-wrapper_content__content__box_text_title'>{gbp.code}</p>
                    <p className='gbp-wrapper_content__content__box_text'>{gbp.sybol}</p>
                    <p className='gbp-wrapper_content__content__box_text'>{gbp.rate}</p>
                    <p className='gbp-wrapper_content__content__box_text'>{gbp.description}</p>
                    <p className='gbp-wrapper_content__content__box_text'>{gbp.rate_float}</p>
                </div>
                )
            }
        </div>
    )
}