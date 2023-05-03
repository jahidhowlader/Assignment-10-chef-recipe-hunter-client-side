import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    // Context API
    const { createUser } = useContext(AuthContext)

    // Navigate Varriable
    const nevigate = useNavigate()

    // All State Here
    const [error, setError] = useState('')
    // Email Validation
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    // PassWord Validation
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    // const [confirmPassword, setConfirmPassword] = useState('')
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    const handlerEmail = e => {
        const emailInput = e.target.value
        setEmail(emailInput)

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
            setEmailError('Invaild Email Address')
        } else {
            setEmailError('')
        }
    }

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


    // const handleConfirmPassword = e => {
    //     const confirmPasswordInpurt = e.target.value
    //     setConfirmPassword(confirmPasswordInpurt)

    //     if (password !== confirmPasswordInpurt) {

    //         setConfirmPasswordE('password and confirm password does not match')
    //     } else
    // }

    // pass show and hide handler
    const toggoleShowPassword = () => {

        setShowPassword(!showPassword)
    }

    // confirm pass show and hide handler
    // const toggoleShowConfirmPassword = () => {

    //     setShowConfirmPassword(!showConfirmPassword)
    // }

    // Handler Form Submit
    const handlerSubmit = e => {

        e.preventDefault()

        const form = e.target

        if (!email) {
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
                .then(() => {
                    setEmail('')
                    setPassword('')
                    nevigate('/')
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
        <section className='grid lg:grid-cols-2 h-[100vh]'>
            <div className='flex justify-center items-center bg-white'>
                <div className='w-[400px]'>

                    {
                        error && <span className='my-5 text-error-clr bg-error-clr py-3 block bg-opacity-20 font-bold px-2 text-center rounded'>{error}</span>
                    }

                    <h3 className='text-4xl font-bold pb-6'>Welcome Back</h3>
                    <p>Welcome Back, Please enter your details.</p>

                    <form onSubmit={handlerSubmit} className='pt-5'>
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

                        {/* <div className="form-control w-full pt-2 ">
                            <label className="label font-bold">Confirm password</label>
                            <div className='relative'>

                                <input onChange={handleConfirmPassword} type={`${showConfirmPassword ? 'text' : 'password'}`} name='confirmPassword' placeholder="Confirm password" className={`input input-bordered w-full `} />
                                {
                                    showConfirmPassword ?
                                        <FaEyeSlash onClick={toggoleShowConfirmPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEyeSlash> :
                                        <FaEye onClick={toggoleShowConfirmPassword} className='absolute top-2 right-3 bg-white pl-2 cursor-pointer text-3xl' ></FaEye>
                                }
                            </div>

                        </div> */}


                        <input type="submit" value='Sign up' className='bg-pink hover:bg-btn-hover text-white w-full py-2 rounded-lg cursor-pointer mt-5' />
                    </form>

                    <p className='text-center mt-5 lg:mb-24'>You have an account? <Link to='/signin' className='font-semibold text-pink'> Sign in</Link></p>
                </div>
            </div>
            <div className='bg-gray flex justify-center items-center relative'>
                <div className='auth-design'>
                    <div className='half-circle'>
                    </div>
                    <div className='full-circle'>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Signup;