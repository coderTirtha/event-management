import { Helmet } from "react-helmet-async";
import BannerSlider from "../../components/Banner/BannerSlider";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Rock N Roll | Home</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <Services></Services>
        </div>
    );
};

export default Home;