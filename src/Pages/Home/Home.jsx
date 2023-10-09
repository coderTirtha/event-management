import { Helmet } from "react-helmet-async";
import BannerSlider from "../../components/Banner/BannerSlider";
import Services from "../../components/Services/Services";
import Schedule from "../../components/Schedule/Schedule";
import CustomersReviews from "../../components/Customers/CustomersReviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Rock N Roll | Home</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <Services></Services>
            <Schedule></Schedule>
            <CustomersReviews></CustomersReviews>
        </div>
    );
};

export default Home;