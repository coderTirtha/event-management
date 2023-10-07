import { Helmet } from "react-helmet-async";
import BannerSlider from "../../components/Banner/BannerSlider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Rock N Roll | Home</title>
            </Helmet>
            <BannerSlider></BannerSlider>
        </div>
    );
};

export default Home;