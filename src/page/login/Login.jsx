import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        login(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                console.log(res.user);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-dew-gradient">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-8">Login</h2>

                <form onSubmit={handleLogin}>
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
                        Login
                    </button>
                </form>
                <div className="px-6 sm:px-0 max-w-sm mt-4">
                    <button onClick={handleGoogleLogin} type="button" className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                </div>
                <div className="mt-4 border-gray-400 border border-dashed border-x-2">
                    {/* <span className="mt-4 border-red-600 border-x-2"></span> */}
                </div>
                <div>
                    <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400 mt-4">
                        Are you new user? <Link to='/registration' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Please Sign Up here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;