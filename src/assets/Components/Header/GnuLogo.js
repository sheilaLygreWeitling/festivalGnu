import React from 'react';
import logo from "../../Image/GnuLogo.png"

const GnuLogo = () => {
    return <div>
        <img src={logo} alt="gnu logo" className='w-28 tablet:w-40' />
    </div>;
};

export default GnuLogo;
