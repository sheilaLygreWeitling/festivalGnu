import React from 'react'

const BuyForm = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-yellow-300 to-gray-400  h-[1000px] fonth1Body  items-center'>
                <div className="border flex flex-col items-center max-w-min p-5">
                    <form name="contact" method="POST" data-netlify="true">
                        <label>Fulde navn:
                            <input type="text" name="name" />
                        </label>

                        <label>Klan:
                            <input type="text" name="name" />
                        </label>

                        <label>Skal du have salatbar til 25 kr. Send pengene til 53 12 40 67 (Andreas):
                            <input type="checkbox" name="name" />
                        </label>

                        <button type="submit" className='bg-black text-white p-2 m-2 rounded'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BuyForm