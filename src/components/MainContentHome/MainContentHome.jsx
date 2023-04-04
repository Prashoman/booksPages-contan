import React from 'react';
import LogoLittle from "../../assets/36895-healthy-or-junk-food.json";
import { useLottie } from "lottie-react";

const MainContentHome = () => {
    const options = {
        animationData: LogoLittle,
        loop: true
      };
      const { View } = useLottie(options);
    return (
        <div className='md:flex px-5 md:px-32 justify-between items-center'>
            <div className=''>
                <h2 className='text-4xl font-bold mb-4'>Only <span className='text-5xl text-blue-600'>Quality</span>  food</h2>
                <p className='text-xl text-black tracking-wide mb-4'>Whether you start small or migrate an existing website, Bluehost provides all the tools you need to build an audience, sell online, or grow your business.</p>
                <button className='bg-gray-600 text-white py-2 px-5 rounded hover:bg-slate-800 '>View Menu</button>
                <button className='bg-orange-300 text-white py-2 px-5 rounded hover:bg-orange-900 ml-4'>Reservation</button>
            </div>
            <div className='w-full h-auto'>
                
                {View}
            </div>
            
        </div>
    );
};

export default MainContentHome;