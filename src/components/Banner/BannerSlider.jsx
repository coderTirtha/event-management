import concertBanner from '../../assets/concert banner.png';
import logoWhite from '../../assets/logo-white.png';
const BannerSlider = () => {
    return (
        <div>
            <div className="hero mb-4" style={{ backgroundImage: `url('${concertBanner}')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='flex flex-col-reverse md:flex-row justify-center items-center p-8 gap-12'>
                    <div className="hero-content text-white flex items-center justify-center flex-1 p-4">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Winter Music Festival</h1>
                            <div className='space-y-2 mb-7'>
                                <p>Join us for a day of live music, food, and fun in the mist! Featuring top artists from various genres.</p>
                                <p className='text-gray-300'><span className='font-bold text-[#ff6d8a]'>Date :</span> 15-11-2023</p>
                                <p className='text-gray-300'><span className='font-bold text-[#ff6d8a]'>Venue :</span> City Park Amphitheater</p>
                            </div>
                            <button className="btn btn-md btn-error">Book Now</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={logoWhite} alt="" className='w-[300px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;