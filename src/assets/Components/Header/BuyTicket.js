import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom"


const BuyTicket = () => {
    return <div>
        <Link to="/signup">
            <button className='text-current flex items-center fonth1Body '> <MdAddShoppingCart /> Køb din billet her</button>
        </Link>
    </div>;
};

export default BuyTicket;
