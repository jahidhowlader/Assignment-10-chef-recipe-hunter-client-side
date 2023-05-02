import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signin = () => {



    return (
        <section className='grid lg:grid-cols-2 h-[100vh]'>
            <div className='flex justify-center items-center bg-white'>
                <div className='w-[400px]'>
                    {/* 
                    {
                        firebaseError && <span className='my-5 text-error-clr bg-error-clr py-3 block bg-opacity-20 font-bold px-2'>{firebaseError}</span>
                    } */}

                    <h3 className='text-4xl font-bold pb-6'>Welcome Back</h3>
                    <p>Welcome Back, Please enter your details.</p>

                    <form onSubmit='' className='pt-5'>
                        <div className="form-control w-full ">
                            <label className="label font-bold">Email</label>
                            <input type="email" name='email' placeholder="Enter your email" className={`input input-bordered  w-full `} required />


                        </div>

                        <div className="form-control w-full pt-2 ">
                            <label className="label font-bold">Password</label>
                            <div className='relative'>

                                <input type='password' placeholder="Enter your password" name='password' className={`input input-bordered  w-full  `} />

                            </div>

                        </div>

                        <div className='flex items-center justify-between py-5'>
                            <div className='flex '>
                                <input type="checkbox" />
                                <small className='pl-2'>Remember for 30 days</small>
                            </div>
                            <small className='font-bold cursor-pointer'>Forgot Password</small>
                        </div>

                        <input type="submit" value='Sign up' className='bg-pink text-white w-full py-2 rounded-lg cursor-pointer' />

                        <button onClick='' className='border-2 border-pink mt-5 w-full py-2 rounded-lg hover-google-signin'>
                            <span className='flex justify-center items-center'>
                                <FaGoogle className='mr-2 text-pink text-2xl'></FaGoogle>
                                <span className='font-semibold'>Sign in with Google</span>
                            </span>
                        </button>
                    </form>

                    <p className='text-center mt-5 lg:mb-24'>Do not have an account? Please<Link to='/signup' className='font-bold text-pink'> Sign Up</Link></p>
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

export default Signin;

