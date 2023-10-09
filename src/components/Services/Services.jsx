import { useEffect, useState } from "react";
import Service from "./Service/Service";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className="my-8 mx-4 flex flex-col md:flex-row gap-4 items-center">
            <div className="text-center space-y-2" data-aos="fade-up">
                <h1 className="font-font-roboto text-5xl font-bold">Our Services</h1>
                <p className="text-gray-500 max-w-sm text-justify">Discover our comprehensive range of services designed to elevate your events and create unforgettable moments. From event planning to entertainment booking, we're dedicated to making your occasions truly special.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;