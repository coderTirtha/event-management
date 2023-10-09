import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        signOutUser()
        .then(() => {
            toast.success("User Logged out Successfully");
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    return (
        <div className="max-w-md mx-auto shadow-md rounded-md p-4 my-8">
            <div>
                <img src={user?.photoURL} alt="" className="w-[100px] mx-auto rounded-full" />
                <h1 className="text-center text-2xl font-semibold">{user?.displayName}</h1>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" value={user?.email} className="input input-bordered text-gray-400" readOnly />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" value={user?.photoURL} className="input input-bordered text-gray-400" readOnly />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">User ID</span>
                </label>
                <input type="text" value={user?.uid} className="input input-bordered text-gray-400" readOnly />
            </div>
            <div className="mt-4 flex justify-end">
                <button onClick={handleLogOut} className="btn btn-outline btn-error">Log Out</button>
            </div>
            <ToastContainer autoClose={1000} />
        </div>
    );
};

export default Profile;