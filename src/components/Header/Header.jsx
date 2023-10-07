import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
const Header = () => {
    const handleMenuOpen = () => {
        const menu = document.getElementById('menu');
        menu.classList.remove('hidden');
        document.body.style.overflowY = 'hidden';
    }
    const handleMenuClose = () => {
        const menu = document.getElementById('menu');
        menu.classList.add('hidden');
        document.body.style.overflowY = 'unset';
    }
    return (
        <div className='navbar items-center justify-between'>
            <div className='flex-1'>
                <img src={logo} alt="" className='w-[60px]' />
            </div>
            <div className='flex-1'>
                <div className='hidden menu menu-horizontal md:flex'>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/services'}>Services</NavLink></li>
                    <li><NavLink to={'/events'}>Events</NavLink></li>
                </div>
            </div>
            <div className='hidden md:flex gap-4'>
                <Link to={'/login'}><button className='btn btn-md'>Login</button></Link>
                <Link to={'/register'}><button className='btn btn-outline btn-md'>Register</button></Link>
            </div>
            <div className='flex md:hidden'>
                <FiMenu className='text-2xl' onClick={handleMenuOpen}></FiMenu>
                <div id='menu' className='absolute z-10 top-0 right-0 w-[100vw] h-[100vh] bg-[#0000003d] hidden duration-500'>
                    <div className='menu menu-vertical w-[70vw] bg-base-100 absolute right-0 h-[100vh]'>
                        <div className='mb-10'>
                            <button className='btn'><RxCross2 onClick={handleMenuClose} className='text-2xl'></RxCross2></button>
                        </div>
                        <div>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/services'}>Services</NavLink></li>
                            <li><NavLink to={'/events'}>Events</NavLink></li>
                        </div>
                        <div className='flex flex-col mt-16 gap-4'>
                            <Link to={'/login'}><button className='btn btn-outline'>Login</button></Link>
                            <Link to={'/register'}><button className='btn btn-neutral'>Register</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;