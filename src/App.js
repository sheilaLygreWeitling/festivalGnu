import React from 'react'
import Welcome from './assets/Components/FrontPage/Welcome';
import BuyTicket from './assets/Components/Header/BuyTicket';
import FestivalName from './assets/Components/Header/FestivalName';
import GnuLogo from './assets/Components/Header/GnuLogo';


const App = () => {
    return (

        <div>
            <div className='bg-gradient-to-r from-yellow-300 to-gray-400  h-[1000px]'>
                <div className='p-3 flex items-center justify-between w-full bg-transparent fixed'>
                    <div className='flex items-center'>
                        <GnuLogo />
                        <FestivalName />
                    </div>
                    <div className='p-3 bg-green-300 rounded-xl '>
                        <BuyTicket />
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center pt-32'>
                        <Welcome />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default App