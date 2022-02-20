import React from 'react';



const BuyTicket = () => {
    return <div>

        <button className='text-current flex items-center fonth1Body text-5xl' onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScL8U91vKNRZlvy214P9mlD3qdjrOo7tjbo3jDb9WyOGuSTZg/viewform")}> Køb din billet her</button>
        <div className='border border-black'>
            <form hidden method="post" name="form-test" netlify netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="form-test" />
                <input type="email" name="email" id="" />
                <button type="submit">send</button>
            </form>
            <div id="root"></div>
            <script type="text/babel">

                ReactDOM.render(
                <form name="form-test" method="post">
                    <input type="hidden" name="form-name" value="form-test" />
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>,
                document.getElementById("root")
                );

            </script>
        </div>



    </div>;
};

export default BuyTicket;
