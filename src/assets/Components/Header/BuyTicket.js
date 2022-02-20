import React from 'react';



const BuyTicket = () => {
    return <div>

        <button className='text-current flex items-center fonth1Body text-5xl' onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScL8U91vKNRZlvy214P9mlD3qdjrOo7tjbo3jDb9WyOGuSTZg/viewform")}> Køb din billet her</button>
        <div className='border border-black'>
            <form action="post" netflify name="test" data-netlify="true">
                <input type="email" name="email" id="" />
                <button type="submit">send</button>
            </form>
        </div>

    </div>;
};

export default BuyTicket;
