import React from 'react';

const Event = ({ event }) => {
    const { name, venue, ticketPrice, organizers, sponsors, date, eventCategory } = event;
    return (
        <div className='shadow-md rounded-md p-4 space-y-2 flex flex-col justify-between'>
            <h1 className='text-3xl font-bold font-font-roboto'>{name}</h1>
            <div className='my-3 space-y-2'>
                <p><span className='font-bold'>Venue : </span>{venue}</p>
                <p><span className='font-bold'>Price : </span>{ticketPrice}</p>
                <p><span className='font-bold'>Organizers : </span>{organizers}</p>
                <p><span className='font-bold'>Sponsors : </span>{sponsors}</p>
                <p><span className='font-bold'>Date : </span>{date}</p>
                <p><span className='font-bold'>Event Category : </span>{eventCategory}</p>
            </div>
            <button className='btn btn-outline w-full' disabled={eventCategory === "Past Event" ? true : false}>Buy Ticket</button>
        </div>
    );
};

export default Event;