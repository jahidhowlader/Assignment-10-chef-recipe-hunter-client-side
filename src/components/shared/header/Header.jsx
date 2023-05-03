import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-toastify';


const Header = () => {

    // Context API
    const { user, logout } = useContext(AuthContext)

    // console.log(user);

    //  Handler Signout
    const HandlerSignout = () => {
        logout()
            .then(() => {
                toast.success('Successfully Signout', {
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
                            <li><a>Item 1</a></li>
                            {/* <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img className='w-[140px] md:w-[230px]' src={logo} alt="" />
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">HOME</Link></li>
                        <li><a>GALLERY</a></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><Link>CONTACT US</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                
                                <Link onClick={HandlerSignout} to="/signin" className='border border-pink rounded hover:bg-pink hover:text-white py-1 px-3'>Sign out</Link>
                            </> :
                            <>
                                <FaUserCircle className='text-3xl text-pink mr-2'></FaUserCircle>
                                <Link to="/signin" className='border border-pink rounded hover:bg-pink hover:text-white py-1 px-3'>Sign in</Link>
                            </>
                    }
                    {/* <a className="btn">Get started</a> */}
                </div>
            </header>
        </section>
    );
};

export default Header;