import React from 'react'

const FrontPage = () => {
    return (
        <div>
            <div className='bg-gray-50'>
                <div className='p-3 flex items-center justify-between w-full bg-transparent fixed'>
                    <div className='flex items-center'>
                        <GnuLogo />
                        <FestivalName />
                    </div>
                    <div className='p-3 bg-green-300 rounded-xl '>
                        <BuyTicket />
                    </div>
                </div>
                <div className=''>
                    <div className='flex justify-center pt-32'>
                        <Welcome />
                    </div>
                    <div >
                        <MainImage />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FrontPage