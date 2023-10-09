import React from 'react';

const Schedule = () => {
    return (
        <div className='my-8'>
            <div className='bg-neutral text-white rounded px-4 py-8'>
                <h1 className='text-5xl font-font-roboto font-bold text-center'>Grab Your Schedule Now!</h1>
                <p className='mx-auto w-3/4 text-center text-gray-300'>Stay ahead of the entertainment curve with us! Explore upcoming events, secure your tickets, and mark your calendar for unforgettable experiences. Don't miss out – your entertainment journey starts here.</p>
                <form className='max-w-md mx-auto my-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Event Type</span>
                        </label>
                        <select className="select select-bordered w-full max-w-md text-gray-400">
                            <option disabled selected>Select Event Type</option>
                            <option>Concert</option>
                            <option>Catering in Concert</option>
                            <option>Security and Crowd Control</option>
                        </select>
                    </div>
                    <button className='btn w-full mt-4'>Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default Schedule;