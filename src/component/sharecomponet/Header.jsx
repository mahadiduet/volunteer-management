import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
// import {logo} from 

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log('User header:', user);
    const menu = <>
        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'bg-blue-700 hover:bg-purple-800 text-white text-xl font-bold' : 'text-xl font-bold')}>Home</NavLink> </li>
        <li><NavLink to='/volunteersPost' className={({ isActive }) => (isActive ? 'bg-blue-700 hover:bg-purple-800 text-white text-xl font-bold' : 'text-xl font-bold')}>Need Volunteer</NavLink> </li>
        <li><NavLink to='/myvolunteerpost' className={({ isActive }) => (isActive ? 'bg-blue-700 hover:bg-purple-800 text-white text-xl font-bold' : 'text-xl font-bold')}>My Volunteer Post</NavLink> </li>
        {/* <li><NavLink to='/to' className={({ isActive }) => (isActive ? 'bg-blue-700 hover:bg-purple-800 text-white text-xl font-bold' : 'text-xl font-bold')}>Contact</NavLink> </li> */}
    </>;

    const loggedUser = <>
        <div className="flex items-center gap-4">
            <div className="dropdown">
                <button type="button" className="text-white bg-blue-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">My Profile</button>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li> <Link to='/addvolunteerpost'>Add Volunteer Post</Link> </li>
                    <li> <Link to='/myvolunteerpost'>Manage My Post</Link> </li>
                    <li> <Link to='/my-volunteer-request-post'>My Volunteer Request Post</Link> </li>
                </ul>
            </div>
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">My Profile</button> */}
            <div className="dropdown dropdown-end">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user?.photoURL ? (<img src={user.photoURL} />) : (<img src="https://i.ibb.co/9rrBVK6/man.jpg" />)}
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            {user?.displayName ? <p>{user.displayName}</p> : ''}
                        </li>
                        <li><button onClick={logOut}>Logout</button></li>
                    </ul>
                </div>
                {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {user?.photoURL ? (<img src={user.photoURL} />) : (<img src="https://i.ibb.co/9rrBVK6/man.jpg" />)}
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        {user?.displayName ? <p>{user.displayName}</p> : ''}
                    </li>
                    <li><button onClick={logOut}>Logout</button></li>
                </ul> */}
            </div>
        </div>
    </>
    const loginUser = <>
        <div>
            <Link to='/registration'><button type="button" className="text-white bg-blue-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Register</button></Link>
            <Link to='/login'><button type="button" className="text-white bg-blue-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Login</button></Link>
        </div>
    </>

    const handleTheam = e => {
        e.preventDefault();
        const value = e.target.value;
        console.log('Theme Value', value);
    }
    return (
        <div className="navbar bg-slate-500 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/'><img src="/logo.png" className="w-[150px] h-[50px] rounded-full" alt="" /></Link>
                {/* <a className="btn btn-ghost text-xl font-bold">Volunteer Management</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? loggedUser : loginUser}
            </div>
            <div className="ml-4">
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleTheam} type="checkbox" value="dark" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;