import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";


const BuyTicket = () => {
    return <div>

        <button className='text-current flex items-center fonth1Body ' onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScL8U91vKNRZlvy214P9mlD3qdjrOo7tjbo3jDb9WyOGuSTZg/viewform")}> <MdAddShoppingCart /> Køb din billet her</button>

    </div>;
};

export default BuyTicket;
