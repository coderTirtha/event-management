import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

AOS.init();
AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});
const Service = ({ service }) => {
    const { image, name, price } = service;
    return (
        <div className="shadow-md rounded-md py-8 hover:scale-110 duration-300 cursor-pointer" data-aos='fade-down'>
            <div className="flex justify-center">
                <img src={image} alt="service" className="w-[100px]" />
            </div>
            <div className="text-center font-font-roboto-normal">
                <h1 className="text-xl font-semibold text-gray-700">{name}</h1>
                <h4 className="text-error text-base">{price}</h4>
            </div>
        </div>
    );
};

export default Service;