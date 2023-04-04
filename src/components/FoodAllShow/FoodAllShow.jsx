import React from 'react';

const FoodAllShow = ({foods}) => {
    // console.log(props)
    const description = foods.strCategoryDescription.slice(0,100);
    console.log(description)
    
    return (
        <div>
           <div className='bg-lime-200 px-4 py-3 h-full rounded relative'>
            <img src={foods.strCategoryThumb} alt="" />
            <h2 className='font-bold text-3xl'>{foods.strCategory}</h2>
            <p className='mb-16'>{description}</p>
            <div>
            <button className='bg-gray-600 text-white py-2 px-5 rounded hover:bg-slate-800 w-full  absolute bottom-0 left-0'>Details</button>
            </div>
            
           </div>
        </div>
    );
};

export default FoodAllShow;