import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const selectedService = services.find(service => service.id === id);
    return (
        <div>
            <img src={selectedService?.image} alt="" className="max-w-md mx-auto" />
            <h1 className="text-3xl font-semibold text-center">{selectedService?.name}</h1>
            <h3 className="text-lg text-error text-center">{selectedService?.price}</h3>
            <div className="my-4">
                <p className="text-center text-base"><span className="font-bold">Description :</span> {selectedService?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;