import logo from '../../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-toastify';


const Header = () => {

    // Context API
    const { user, logout } = useContext(AuthContext)

    //  Handler Signout
    const HandlerSignout = () => {
        logout()
            .then(() => {
                toast.success('Signout Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
    }
    return (
        <section className='fixed top-0 bg-white z-10 w-full shadow-md'>
            <header className="navbar my-container font-semibold ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-pink" : ""
                                }
                            >
                                HOME
                            </NavLink></li>

                            <li> <NavLink
                                to="/gallery"
                                className={({ isActive }) =>
                                    isActive ? "text-pink" : ""
                                }
                            >
                                GALLERY
                            </NavLink></li>

                            <li> <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "text-pink" : ""
                                }
                            >
                                BLOG
                            </NavLink></li>

                            <li> <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "text-pink" : ""
                                }
                            >
                                CONTACT US
                            </NavLink></li>
                        </ul>
                    </div>
                    <img className='w-[140px] md:w-[230px]' src={logo} alt="" />
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-pink" : ""
                            }
                        >
                            HOME
                        </NavLink></li>

                        <li> <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                isActive ? "text-pink" : ""
                            }
                        >
                            GALLERY
                        </NavLink></li>

                        <li> <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "text-pink" : ""
                            }
                        >
                            BLOG
                        </NavLink></li>

                        <li> <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "text-pink" : ""
                            }
                        >
                            CONTACT US
                        </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                {user.photoURL ?
                                    <>
                                        <div className='tooltip tooltip-bottom tooltip-secondary' data-tip={user.email}>
                                            <img className='w-8 h-8 rounded-full mr-2' src={user.photoURL} alt="" />
                                        </div>
                                    </> :
                                    <>
                                        <div className='tooltip tooltip-bottom tooltip-secondary' data-tip={user.email}>
                                            <FaUserCircle className='text-3xl text-pink mr-2 tooltip' ></FaUserCircle>
                                        </div>
                                    </>
                                }
                                <Link onClick={HandlerSignout} to="/signin" className='border border-pink rounded hover:bg-pink hover:text-white py-1 px-3'>Sign out</Link>
                            </> :
                            <>
                            <button >
                                <Link to="/signin" className='border border-pink rounded hover:bg-pink hover:text-white py-1 px-3'>Sign in</Link>
                            </button>
                            </>
                    }
                    {/* <a className="btn">Get started</a> */}
                </div>
            </header>
        </section>
    );
};

export default Header;