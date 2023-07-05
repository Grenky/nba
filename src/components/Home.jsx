import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
 import axios from 'axios';

 export default function Home() {

    const [test, setTest] = useState();
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    useEffect(() => {
        axios
        .get(url)
        .then(response => {
            setTest(response.data.time.updated)});
    }, []);

    return(
        <div className="home-wrapper">
            <h1>H</h1>
            <p>{test}</p>
        </div>
    )
 }