import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom'
import { PhoneArrowUpRightIcon,Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/solid'

const HeaderLink = () => {
    const [open , setOpen ]= useState(false)
    return (
        <div>
            <nav className='flex justify-between items-center px-4 md:px-28 py-4 bg-green-100'>
                <Link to="/">
                    <div className='flex'>
                    <PhoneArrowUpRightIcon className="h-8 w-7 text-blue-500" />
                    <span className='text-3xl font-bold text-gray-700'>MelBd</span>  
                    </div>
                </Link>
            
            
                    <ul className={`md:flex duration-500  bg-green-100 absolute md:static ${open ?'top-12' : '-top-32'}`}>
                            <li className='ml-5'><NavLink className={({ isActive}) =>isActive? "text-purple-700": ""}  to="/">Home</NavLink></li>
                            <li className='ml-5'><NavLink  className={({ isActive}) =>isActive? "text-purple-700": ""} to="/about">About</NavLink></li>
                            <li className='ml-5'><NavLink className={({ isActive}) =>isActive? "text-purple-700": ""} to ="/contact">Contact</NavLink></li>
                            <li className='ml-5'><NavLink className={({ isActive}) =>isActive? "text-purple-700": ""} to ="/food">Food</NavLink></li>
                    </ul>
                <div className="md:hidden" onClick={()=> setOpen(!open)}>
                    {
                    open ? <XMarkIcon className="h-6 w-6 text-purple-500" />:<Bars3BottomRightIcon className='h-8 w-7 text-blue-500'></Bars3BottomRightIcon>
                    }
                    
                </div>
            
            </nav>
            
        </div>
    );
};

export default HeaderLink;