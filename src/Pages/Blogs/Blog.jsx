import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

});

const Blog = ({ blog }) => {
    const { id, title, author, date, category, content } = blog;
    return (
        <div className='border border-gray-400 p-4 rounded shadow-md' data-aos="zoom-in-down">
            <div className='flex items-center gap-2'>
                <FaUserCircle className='text-5xl'></FaUserCircle>
                <div>
                    <h1 className='text-base font-bold'>{author}</h1>
                    <h6 className='text-sm text-gray-400'>#{id}</h6>
                    <p className='text-gray-500'>{date}</p>
                </div>
            </div>
            <div className='my-4'>
                <h1 className='text-xl font-semibold'>{title}</h1>
            </div>
            <div>
                <p className='text-gray-400 btn-sm btn-disabled'>#{category}</p>
                <p className='text-gray-600'>{content}</p>
            </div>
        </div>
    );
};

export default Blog;