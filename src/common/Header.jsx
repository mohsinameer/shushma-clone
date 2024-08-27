import React, { useState } from 'react';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <header className='w-[100%] bg-transparent py-5 fixed top-0 border'>
                <nav className='max-w-[1320px] mx-auto flex justify-between items-center'>
                    <figure className='logo'>
                        <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/Group%203960-BLB6eVGP.png" alt="Logo" />
                    </figure>
                    <div className='flex items-center'>
                        <button className='text-[blue] bg-[white] px-3 font-bold py-1 leading-[17px] rounded-[20px] text-[11px] uppercase'>Call Now</button>
                        <button
                            className='ml-6 text-white font-medium'
                            onClick={toggleNav}
                        >
                            {/* You can replace this with an actual icon */}
                            <span className='block w-6 h-0.5 bg-white mb-1'></span>
                            <span className='block w-6 h-0.5 bg-white mb-1'></span>
                            <span className='block w-6 h-0.5 bg-white'></span>
                        </button>
                    </div>
                    {isNavOpen ? (
                        <div className='absolute top-16 right-0 bg-white shadow-lg p-4 rounded-lg'>
                            <ul>
                                <li><a href="#home" className='block py-2'>Home</a></li>
                                <li><a href="#services" className='block py-2'>Services</a></li>
                                <li><a href="#about" className='block py-2'>About</a></li>
                                <li><a href="#contact" className='block py-2'>Contact</a></li>
                            </ul>
                        </div>
                    ) : null}
                </nav>
            </header>
        </>
    );
}
