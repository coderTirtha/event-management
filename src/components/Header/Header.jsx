import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/events'}>Events</NavLink></li>
        <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
    </>
    const { user, signOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        signOutUser()
        .then(() => {
            toast.success("User successfully logged out!")
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img src={logo} className='w-[60px]' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="rounded-full">
                                    <img src={user?.photoURL} className='rounded-full' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink to={'/profile'} className="justify-between">
                                        Profile
                                    </NavLink>
                                </li>
                                <li onClick={handleLogOut}><a>Logout</a></li>
                            </ul>
                        </div> :
                        <>
                            <Link to={'/login'} className="btn">Login</Link>
                            <Link to={'/register'} className="btn btn-outline">Register</Link>
                        </>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Header;