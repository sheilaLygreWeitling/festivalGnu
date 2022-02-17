import React from 'react';

import { Link } from "react-router-dom"


const BuyTicket = () => {
    return <div>
        <Link to="/signup">
            <div className='flex flex-col'>
                <div className='fonth1Body text-5xl p-3 '>
                    <h1 className='content-center'>KØB BILLET</h1>
                </div>
                <div className='border'>
                </div>
                <div className='fonth1Body text-3xl p-4'>
                    <h2>Vælg salatbar til 25kr</h2>
                </div
                ></div>
        </Link>
    </div>;
};

export default BuyTicket;
