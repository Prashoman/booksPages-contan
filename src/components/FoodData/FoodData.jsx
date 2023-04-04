import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodAllShow from '../FoodAllShow/FoodAllShow';

const FoodData = () => {
    const dataFood = useLoaderData();
    
    return (
        <div className=' px-4  py-4 md:px-28 md:py-8'>
            <h1 className='text-4xl font-bold text-blue-400 text-center mt-4'>All Food Items </h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-5'>
            {
                dataFood.categories.map(food => <FoodAllShow key={food.idCategory} foods={food}></FoodAllShow>)
            }
            </div>
            
        </div>
    );
};

export default FoodData;