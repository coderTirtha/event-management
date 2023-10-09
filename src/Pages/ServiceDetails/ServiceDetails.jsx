import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const selectedService = services.find(service => service.id === id);
    return (
        <div className="max-w-md mx-auto shadow-lg my-12 rounded-md p-4">
            <img src={selectedService?.image} alt="" className="max-w-md mx-auto" />
            <h1 className="text-3xl font-semibold text-center">{selectedService?.name}</h1>
            <div className="my-4 max-w-md mx-auto space-y-4">
                <p className="text-lg"><span className="font-bold">Description :</span> {selectedService?.description}</p>
                <h3 className="text-lg font-bold">Price: <span className="text-error">{selectedService?.price}</span></h3>
            </div>
            <button className="btn w-full btn-outline">Book Now</button>
        </div>
    );
};

export default ServiceDetails;