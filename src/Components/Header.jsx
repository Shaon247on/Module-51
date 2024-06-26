import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out successfully')
            })
            .catch(error => {
                console.error(error);
            })
    }
    const navLink = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/login'>Login</NavLink> </li>
        <li> <NavLink to='/register'>Register</NavLink> </li>
        {
            !loading ? user &&
                <>
                    <li> <NavLink to='/profile'>Profile</NavLink> </li>
                    <li> <NavLink to='/orders'>Orders</NavLink> </li>
                </>
                :
                <span></span>
        }
    </>
    return (
        <div className="navbar bg-base-100 mx-10" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <samp className="pr-3">{user.email}</samp>
                        <a onClick={handleLogOut} className="btn btn-sm mr-20">Sign Out</a>
                    </> :
                        <>
                            <button className="btn btn-sm mr-20"> <Link to='/login'>LogIn</Link> </button></>
                }

            </div>
        </div>
    );
};

export default Header;