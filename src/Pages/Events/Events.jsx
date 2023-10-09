import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {BsChevronDown} from 'react-icons/bs';
import Event from "./Event";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    useEffect(() => {
        fetch('/events.json')
        .then(res => res.json())
        .then(data => setEvents(data));
    }, []);
    const handleSelection = value => {
        const filteredEvents = events.filter(event => (event.eventCategory).toLowerCase() === value.toLowerCase())
        setFilteredEvents(filteredEvents);
    }
    return (
        <div>
            <Helmet>
                <title>Rock N Roll | Events</title>
            </Helmet>
            <div className="space-y-4 my-8">
                <h1 className="text-4xl font-bold text-center">Select your event category from below!</h1>
                <div className="flex justify-center">
                    <details className="dropdown">
                        <summary className="m-1 btn">Filter Events by Category <BsChevronDown></BsChevronDown></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleSelection('Upcoming Event')}><a>Upcoming Events</a></li>
                            <li onClick={() => handleSelection('Past Event')}><a>Past Events</a></li>
                        </ul>
                    </details>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 mx-4">
                    {
                        filteredEvents.length === 0 ? 
                        events.map(event => <Event key={event.name} event={event}></Event>) :
                        filteredEvents.map(event => <Event key={event.name} event={event}></Event>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Events;