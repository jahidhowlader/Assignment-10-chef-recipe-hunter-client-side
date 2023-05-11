import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Signin = () => {

    // Context API
    const { signinUser, signinWithGoogle, signininWithGithub } = useContext(AuthContext)

    // Nevigate Varriable
    const nevigate = useNavigate()

    // All State is here
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    // pass show and hide handler
    const toggoleShowPassword = () => {

        setShowPassword(!showPassword)
    }

    // Set Location for navigate
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    // Handler Signin
    const handlerSignin = e => {

        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signinUser(email, password)
            .then(() => {
                form.reset()
                nevigate(from, { replace: true })
                toast.success('Successfully Login', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                setError('')
            })
            .catch(e => {

                setError('')
                const errorMessage = e.code.slice(5, (e.code.length))

                if (errorMessage == 'missing-password') {
                    form.password.focus()
                    setError(errorMessage)
                    return

                } else if (errorMessage == 'wrong-password') {
                    form.password.focus()
                    setError(errorMessage)
                    return

                }
                setError(errorMessage)
                form.email.focus()
            })
    }

    // Handler Signin with google
    const handlerSigninWithGoogle = () => {
        signinWithGoogle()
            .then(() => {
                nevigate(from, { replace: true })
                toast.success('Successfully Signin', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                setError('')
            })
            .catch(e => {
                setError(e.code)
            })
    }

    // Handler Signin with github
    const handlerSigninWithGithub = () => {
        signininWithGithub()
            .then(() => {
                nevigate(from, { replace: true })
                toast.success('Successfully Signin', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                setError('')
            })
            .catch(e => {
                setError(e.code)
            })
    }

    return (
        <section className='md:h-[100vh] mx-5 md:mx-0'>
            <div className='flex justify-center items-center bg-white'>
                <div className='lg:w-[400px] my-12 md:my-32'>

                    {
                        error && <span className='my-5 text-error-clr bg-error-clr py-3 block bg-opacity-20 font-bold px-2 text-center'>{error}</span>
                    }

                    <h3 className='text-4xl font-bold pb-6'>Welcome Back</h3>
                    <p>Welcome Back, Please enter your details.</p>

                    <form onSubmit={handlerSignin} className='pt-5'>
                        <div className="form-control w-full ">
                            <label className="label font-bold">Email</label>
                            <input type="email" name='email' placeholder="Enter your email" className={`input input-bordered  w-full ${error && 'input-error focus:border-error-clr'}`} />


                        </div>

                        <div className="form-control w-full pt-2 ">
                            <label className="label font-bold">Password</label>
                            <div className='relative'>

                                <input type={`${showPassword ? 'text' : 'password'}`} placeholder="Enter your password" name='password' className={`input input-bordered  w-full ${error && 'input-error focus:border-error-clr'} `} />
                                {
                                    showPassword ?
                                        <FaEyeSlash onClick={toggoleShowPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEyeSlash> :
                                        <FaEye onClick={toggoleShowPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEye>
                                }
                            </div>

                        </div>

                        <input type="submit" value='Sign In' className='bg-pink text-white w-full py-2 rounded-lg cursor-pointer mt-5' />
                    </form>

                    <div className='flex flex-col md:flex-row gap-2 hover-button'>
                        <button onClick={handlerSigninWithGoogle} className='border-2 border-blue mt-5 w-full py-2 rounded-lg px-2 lg:px-0'>
                            <span className='flex justify-center items-center text-blue'>
                                <FaGoogle className='mr-2 text-blue text-2xl'></FaGoogle>
                                <span className='font-semibold'>Signin on Google</span>
                            </span>
                        </button>

                        <button onClick={handlerSigninWithGithub} className='border-2 border-blatext-black mt-2 md:mt-5 w-full py-2 rounded-lg px-2 lg:px-0'>
                            <span className='flex justify-center items-center text-black'>
                                <FaGithub className='mr-2 text-black text-2xl'></FaGithub>
                                <span className='font-semibold'>Signin on Github</span>
                            </span>
                        </button>
                    </div>

                    <p className='text-center mt-5 lg:mb-24'>Do not have an account? Please<Link to='/signup' state={location.state} className='font-semibold text-pink'> Sign Up</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Signin;

