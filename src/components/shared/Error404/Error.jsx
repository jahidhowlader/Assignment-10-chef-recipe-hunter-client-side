import Lottie from 'lottie-react'
import Error404 from '../../../assets/error404.json'

const Error = () => {
    return (
        <div className='flex justify-center'>
            <Lottie className='w-9/12' animationData={Error404} loop={true}></Lottie>
        </div>
    );
};

export default Error;