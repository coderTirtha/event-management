import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Rock N Roll | Home</title>
            </Helmet>
            <h1 className="text-xl">This is Home</h1>
        </div>
    );
};

export default Home;