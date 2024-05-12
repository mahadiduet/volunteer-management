import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Link } from "react-router-dom";


const Registration = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const photo_url = from.photo_url.value;
        const password = from.password.value;
        // console.log(name, email, photo_url, password);
        if (password.length < 6) {
            // { toast.warning('Please give me minimum 6 character!') }
            console.log('Please give me minimum 6 character!');
            return;
        }
        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            // { toast.warning('You have must be provide password with uppercase or Lowercase!') }
            console.log('You have must be provide password with uppercase or Lowercase!')
            return;
        }
        createUser(email, password)
            .then((res) => {
                const user = res.user;
                if (user) {
                    updateUser(name, photo_url)
                        .then((res) => {
                            console.log('Update User:', res)
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-green-red">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>

                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="photo-url">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photo_url"
                            name="photo_url"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Photo URL"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 border-gray-400 border border-dashed border-x-2">
                    {/* <span className="mt-4 border-red-600 border-x-2"></span> */}
                </div>
                <div>
                    <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400 mt-4">
                        Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;