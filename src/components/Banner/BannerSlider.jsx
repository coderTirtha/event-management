import concertBanner from '../../assets/concert banner.png';
import comedyBanner from '../../assets/comedy banner.png';
import theatreBanner from '../../assets/theatre banner.png';
import logoWhite from '../../assets/logo-white.png';
const BannerSlider = () => {
    return (
        <div>
            <div className="carousel w-full rounded-md">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url('${concertBanner}')` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className='flex flex-col-reverse md:flex-row justify-center items-center p-8 gap-12'>
                            <div className="hero-content text-white flex items-center justify-center flex-1 p-4">
                                <div className="max-w-md space-y-2">
                                    <h1 className="mb-5 text-5xl font-bold">Winter Music Festival</h1>
                                    <p>Join us for a day of live music, food, and fun in the mist! Featuring top artists from various genres.</p>
                                    <p className='text-gray-300'><span className='font-bold text-[#ff6d8a]'>Date :</span> 15-11-2023</p>
                                    <p className='text-gray-300'><span className='font-bold text-[#ff6d8a]'>Venue :</span> City Park Amphitheater</p>
                                    <button className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={logoWhite} alt="" className='w-[300px]' />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url('${comedyBanner}')` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className='flex flex-col-reverse md:flex-row justify-center items-center p-8 gap-12'>
                            <div className="hero-content text-white flex items-center justify-center flex-1 p-4">
                                <div className="max-w-md space-y-2">
                                    <h1 className="mb-5 text-5xl font-bold">Comedy Night Live</h1>
                                    <p>Get ready for an evening of non-stop laughter with some of the best comedians in the industry.</p>
                                    <p className='text-gray-300'><span className='font-bold text-[#ffeff3]'>Date :</span> 10-11-2023</p>
                                    <p className='text-gray-300'><span className='font-bold text-[#ffeff3]'>Venue :</span> Laugh Palace Comedy Club</p>
                                    <button className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={logoWhite} alt="" className='w-[300px]' />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url('${theatreBanner}')` }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className='flex flex-col-reverse md:flex-row justify-center items-center p-8 gap-12'>
                            <div className="hero-content text-white flex items-center justify-center flex-1 p-4">
                                <div className="max-w-md space-y-2">
                                    <h1 className="mb-5 text-5xl font-bold">Theater Showcase</h1>
                                    <p>Experience the magic of live theater with captivating performances and drama.</p>
                                    <p className='text-gray-300'><span className='font-bold text-[#ffeaf0]'>Date :</span> 20-11-2023</p>
                                    <p className='text-gray-300'><span className='font-bold text-[#ffeaf0]'>Venue :</span> Grand Theater</p>
                                    <button className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={logoWhite} alt="" className='w-[300px]' />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;