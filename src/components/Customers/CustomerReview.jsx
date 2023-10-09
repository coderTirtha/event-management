import React from 'react';
import {BsStarFill} from 'react-icons/bs';

const CustomerReview = ({ review }) => {
    const { name, image, rating, customerReview } = review;
    return (
        <div className='shadow-md rounded-md p-4'>
            <div className='flex items-center gap-2'>
                <img src={image} alt="" className='w-[50px]' />
                <div>
                    <h1 className='text-lg font-semibold'>{name}</h1>
                    <p className='flex items-center gap-1'>{rating}.0 <BsStarFill className='text-yellow-400'></BsStarFill></p>
                </div>
            </div>
            <p className='my-3 text-gray-500'>{customerReview}</p>
        </div>
    );
};

export default CustomerReview;