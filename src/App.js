import React from 'react'
import Welcome from './assets/Components/FrontPage/Welcome';
import BuyTicket from './assets/Components/Header/BuyTicket';
import GnuLogo from './assets/Components/Header/GnuLogo';


const App = () => {
    return (

        <div>
            <div className='bg-[#6F7580]  h-[750px]'>
                <div className='flex justify-center pt-32'>
                    <div className='absolute'>
                        <GnuLogo />
                    </div>
                    <div className='relative'>
                        <Welcome />
                    </div>

                </div>
                <div className='bg-[#FDE047] h-[400px] flex justify-center pt-32'>
                    <BuyTicket />

                </div>
            </div>
        </div>



    )
}

export default App