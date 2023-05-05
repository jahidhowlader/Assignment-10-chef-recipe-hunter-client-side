import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Signup = () => {

    // Context API
    const { createUser } = useContext(AuthContext)

    // Navigate Varriable
    const nevigate = useNavigate()

    // All State Here
    const [error, setError] = useState('')

    // Name Validation
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState('')

    // Email Validation
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    // PassWord Validation
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    // Terms And condition state and Handler
    const [accepted, setAccepted] = useState(false)

    // Handler Terms And Condition
    const handlerterms = event => {
        setAccepted(event.target.checked)
    }

    // handle name input
    const handlerUserName = e => {
        const userNameInput = e.target.value
        setUserName(userNameInput)
        setUserNameError('')
    }

    // handle email input
    const handlerEmail = e => {
        const emailInput = e.target.value
        setEmail(emailInput)

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
            setEmailError('Invaild Email Address')
        } else {
            setEmailError('')
        }
    }

    // handle password input
    const hadlerPassword = e => {
        const passwordInput = e.target.value
        setPassword(passwordInput)

        if (passwordInput.length < 6) {
            setPasswordError('Password will be at list 6 character..')

        } else if (!/(?=.*[A-Z])(?=.*[a-z])/.test(passwordInput) || !(/(?=.*\d)/.test(passwordInput))) {
            setPasswordError('Password will be 1 number, 1 capital and 1 smaller character')

        } else {
            setPasswordError('')
            setPassword(passwordInput)
        }
    }

    // pass show and hide handler
    const toggoleShowPassword = () => {

        setShowPassword(!showPassword)
    }

    // Set Location for Navigate
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    // Handler Form Submit
    const handlerSubmit = e => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value

        if (!name) {
            setUserNameError('Username is Required')
            form.name.focus()
            return

        } else if (!email) {
            setEmailError('Invaild Email Address')
            form.email.focus()
            return

        } else if (emailError) {
            setEmailError('Invaild Email Address')
            form.email.focus()
            return
        }
        else if (!password) {
            setPasswordError('Password will be at list 6 character..')
            form.password.focus()
            return

        } else if (passwordError) {
            form.password.focus()
            return

        } else {
            createUser(email, password)
                .then((userCredential) => {

                    // Update Profile function
                    updateProfile(userCredential.user, {
                        displayName: userName,
                        photoURL: photo
                    })
                })
                .then(() => {
                    setUserName('')
                    setEmail('')
                    setPassword('')
                    nevigate(from, { replace: true })
                    toast.success('Successfully created Account', {
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
                .catch(e => {
                    const errorMessage = e.code.slice(5, (e.code.length))
                    setError(errorMessage)
                    if (errorMessage == 'email-already-in-use') {
                        form.email.focus()
                        setEmailError(e.code.slice(5, (e.code.length)))
                    }
                })
        }
    }

    return (
        <section className='h-[100vh]'>
            <div className='flex justify-center items-center bg-white'>
                <div className='w-[400px] mt-32'>

                    {
                        error && <span className='my-5 text-error-clr bg-error-clr py-3 block bg-opacity-20 font-bold px-2 text-center rounded'>{error}</span>
                    }

                    <h3 className='text-4xl font-bold pb-6'>Welcome Back</h3>
                    <p>Welcome Back, Please enter your details.</p>

                    <form onSubmit={handlerSubmit} className='pt-5'>

                        <div className="form-control w-full ">
                            <label className="label font-bold">Name</label>
                            <input onChange={handlerUserName} type="text" name='name' placeholder="Enter your Name" value={userName} className={`input input-bordered w-full focus:border-black ${userNameError && 'input-error focus:border-error-clr'} ${userName && !userNameError && 'input-success focus:border-green'}`} />
                            {
                                userNameError && <span className="text-error-clr"><small>{userNameError}</small></span>
                            }
                        </div>

                        <div className="form-control w-full ">
                            <label className="label font-bold">Email</label>
                            <input onChange={handlerEmail} type="email" name='email' value={email} placeholder="Enter your email" className={`input input-bordered w-full focus:border-black ${emailError && 'input-error focus:border-error-clr'} ${email && !emailError && 'input-success focus:border-green'}`} />
                            {
                                emailError && <span className="text-error-clr"><small>{emailError}</small></span>
                            }
                        </div>

                        <div className="form-control w-full pt-2 ">
                            <label className="label font-bold">Password</label>
                            <div className='relative'>
                                <input onChange={hadlerPassword} type={`${showPassword ? 'text' : 'password'}`} placeholder="Enter your password" name='password' value={password} className={`input input-bordered w-full focus:border-black ${passwordError && 'input-error focus:border-error-clr'} ${password && !passwordError && 'input-success focus:border-green'}`} />
                                {
                                    showPassword ?
                                        <FaEyeSlash onClick={toggoleShowPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEyeSlash> :
                                        <FaEye onClick={toggoleShowPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEye>
                                }
                                {
                                    passwordError && <span className="text-error-clr"><small>{passwordError}</small></span>
                                }
                            </div>
                        </div>

                        <div className="form-control w-full pt-2 ">
                            <label className="label font-bold">Photo URL <small>(Optional)</small></label>
                            <div className='relative'>
                                <input type="text" placeholder="Enter your PhotoURL" name='photo' className="input input-bordered w-full focus:border-black" />
                            </div>

                        </div>

                        <div className="pt-5 flex items-center">
                            <input onClick={handlerterms} className="accent-pink ml-2 mr-3" type="checkbox" name="accept" />
                            <small>
                                <label className="text-pink">
                                    Accept <span className="font-semibold">Trerms and Condition</span>
                                </label>
                            </small>
                        </div>

                        <input type="submit" value='Sign up' className='bg-pink hover:bg-btn-hover text-white w-full py-2 rounded-lg cursor-pointer mt-5' disabled={!accepted ? true : false} />
                    </form>

                    <p className='text-center mt-5 lg:mb-24'>You have an account? <Link to='/signin' className='font-semibold text-pink'> Sign in</Link></p>
                </div>
            </div>

        </section>
    );
};

export default Signup;