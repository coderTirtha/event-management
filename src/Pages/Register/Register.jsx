import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('');
        if(password.length < 6) {
            setError("Password should be at least 6 characters or longer!");
            return
        } else if (!/[A-Z]/.test(password)) {
            setError("Password should contain at least one Capital letter!");
            return
        } else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setError("Password should contain at least one special character!");
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        toast.success("User Profile Created Successfully!");
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div>
            <Helmet>
                <title>Rock N Roll | Register</title>
            </Helmet>
            <form onSubmit={handleRegister} className="max-w-md mx-auto shadow-lg py-8 px-4 rounded-lg my-12">
                <h1 className="text-3xl font-bold text-center mb-10 mt-4">Register Your Account</h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                </div>
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
                {
                    error ? <p className="text-red-600">{error}</p> : ''
                }
                <button className="btn btn-neutral btn-outline w-full mt-6">Register</button>
                <div className="mt-4">
                    <p className="text-center">Already have an account? <Link className="text-error font-semibold" to={'/login'}>Login</Link></p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;