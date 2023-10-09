import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[100vh] space-y-4'>
            <h1 className='text-7xl font-bold'>404</h1>
            <h3 className='text-xl text-gray-700'>Page not Found!</h3>
            <p className='text-gray-400'>Page you are trying to access may have been removed or moved to another route!</p>
            <Link to="/"><button className='btn'>Go back to Home</button></Link>
        </div>
    );
};

export default Error;