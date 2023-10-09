import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signInUser(email, password)
        .then(() => {
            toast.success("User Logged in successfully");
            location?.state ? navigate(location.state) : navigate('/')
        })
    }
    return (
        <div>
            <Helmet>
                <title>Rock N Roll | Login</title>
            </Helmet>
            <form onSubmit={handleLogin} className="max-w-md mx-auto shadow-lg py-8 px-4 rounded-lg my-12">
                <h1 className="text-3xl font-bold text-center mb-10 mt-4">Login Your Account</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                </div>
                <button className="btn btn-neutral btn-outline w-full mt-6">Login</button>
                <div className="mt-4">
                    <p className="text-center">Don't have an account? <Link className="text-error font-semibold" to={'/register'}>Register</Link></p>
                </div>
            </form>
            <ToastContainer autoClose={1000} />
        </div>
    );
};

export default Login;