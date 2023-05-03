import './Home.css'
import Card from '../../components/shared/Card/Card';
import SwiperCard from '../../components/shared/swiper/SwiperCard';
import SwiperCardMobile from '../../components/shared/swiper/SwiperCardMobile';
import { FaArrowRight, FaBirthdayCake, FaCcMastercard, FaServicestack, FaTruckMoving } from 'react-icons/fa';
import strawberry from '../../assets/stwbry.jpg'
import aboutThumbnail from '../../assets/about.jpg'
import ChefCard from '../../components/shared/chefCard/chefCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const {chefs} = useLoaderData()

    return (
        <>
            <section id='home-banner' className=''>
                <div className="lg:grid grid-cols-2 my-container py-20 md:py-40  ">
                    <div className='px-5 md:px-0'>
                        <h1 className='text-decorative text-pink text-7xl md:text-[100px] leading-10'>Delicious</h1>
                        <h2 className='font-bold text-2xl md:text-4xl pt-10 pb-5 tracking-wider md:tracking-widest'>CAKES FOR YOU</h2>
                        <p className='text-2xl tracking-wide md:tracking-wider'>Sweet Bakery offers the best cakes and sweets for you.</p>
                        <button className='my-btn'>SHOP NOW</button>
                    </div>
                </div>
            </section>

            {/* Fresh Cake Section */}
            <section className='md:-mt-12 mt-5 mb-12 mx-5 md:mx-0'>
                <div className='my-container'>
                    <div id='fresh-cake' className='border-8 border-gray pt-12'>
                        <div className='flex justify-center'>
                            <div className='md:w-2/4 text-center'>
                                <h3 className='text-decorative text-white text-3xl md:text-5xl'>Only Fresh Cakes</h3>
                                <p className='text-white py-5 px-5 '>All of our products are made from scratch using family recipes with only the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
                                <div className='flex justify-center'>
                                    <FaArrowRight className='bg-white text-pink p-2 rounded-full text-4xl text-center'></FaArrowRight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* What We Offer */}
            <section className='my-container md:py-16'>
                <h1 className='text-3xl md:text-6xl text-center font-semibold'>WHAT WE OFFER</h1>

                <div className='py-5 md:grid md:grid-cols-3'>
                    <Card></Card>
                </div>
            </section>

            {/* New Products */}
            <section className=''>
                <div id='bg-pettern' >
                    <div>
                        <h1 className='text-3xl md:text-6xl text-center font-semibold pt-12 md:pt-32 uppercase'>New Products</h1>
                        <div className='my-container py-20 hidden md:block'>
                            <SwiperCard></SwiperCard>
                        </div>
                    </div>
                    <div className='py-12 block md:hidden mx-5'>
                        <SwiperCardMobile></SwiperCardMobile>
                    </div>
                </div>
            </section>

            {/* Why Choose Me */}
            <section className='py-12 md:py-32 px-5 md:px-0'>
                <h1 className='text-3xl md:text-6xl font-semibold text-center uppercase'>WHY CHOOSE ME</h1>
                <div className='md:grid md:grid-cols-3 items-center my-container pt-12 gap-8'>
                    <div>
                        <div className='md:flex items-center gap-6'>
                            <div className='text-center md:text-right'>
                                <div className='flex justify-center'>
                                    <FaBirthdayCake className='text-6xl text-pink block md:hidden mb-5'></FaBirthdayCake>
                                </div>
                                <h4 className='text-2xl font-semibold tracking-wide'>QUALITY PRODUCTS</h4>
                                <small className='pt-6'>We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.</small>
                            </div>
                            <FaBirthdayCake className='md:text-9xl text-pink hidden md:block'></FaBirthdayCake>
                        </div>
                        <hr className='my-12 opacity-10 hidden md:block' />
                        <div className='flex items-center gap-6'>
                            <div className='text-center md:text-right'>
                                <div className='flex justify-center'>
                                    <FaTruckMoving className='text-6xl text-pink block md:hidden mb-5 mt-12'></FaTruckMoving>
                                </div>
                                <h4 className='text-2xl font-semibold tracking-wide'>FREE DELIVERY</h4>
                                <small className='pt-6'>All orders submitted by our US clients are delivered for free throughout the United States.</small>
                            </div>
                            <FaTruckMoving className='text-9xl text-pink hidden md:block'></FaTruckMoving>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img src={strawberry} alt="" />
                    </div>
                    <div>
                        <div className='md:flex items-center gap-6'>
                            <div className='flex justify-center'>
                                <FaServicestack className='text-6xl text-pink block md:hidden mb-5 mt-12'></FaServicestack>
                            </div>
                            <FaServicestack className='text-9xl text-pink hidden md:block'></FaServicestack>
                            <div className='text-center md:text-left'>
                                <h4 className='text-2xl font-semibold tracking-wide'>CATERING SERVICE</h4>
                                <small className='pt-6'>Our bakery also provides an outstanding catering service for events and special occasions.</small>
                            </div>
                        </div>
                        <hr className='my-12 opacity-10 hidden md:block' />
                        <div className='md:flex items-center gap-6'>
                            <div className='flex justify-center'>
                                <FaCcMastercard className='text-6xl text-pink block md:hidden mb-5 mt-12'></FaCcMastercard>
                            </div>
                            <FaCcMastercard className='text-9xl text-pink hidden md:block'></FaCcMastercard>
                            <div className='text-center md:text-left'>
                                <h4 className='text-2xl font-semibold tracking-wide'>ONLINE PAYMENT</h4>
                                <small className='pt-6'>We accept all kinds of online payments including Visa, MasterCard, American Express credit cards.</small>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Summer Sell */}
            <section id='bg-1'>
                <div className='my-container md:grid md:grid-cols-5'>
                    <div className='pt-20 col-span-2 mx-5 md:mx-0 text-center md:text-left'>
                        <h1 className='text-3xl md:text-6xl font-semibold pt-16 uppercase'>Summer Sale</h1>
                        <p className='py-5'><span className='text-decorative text-pink text-5xl'>-20%</span> <span className='tracking-wider font-semibold text-2xl'>ON ALL CAKES</span></p>
                        <p className=''>Purchase our tasty cakes and sweets for your next event or family dinner at our online shop and save more money than anywhere.</p>
                        <button className='my-btn'>SHOP NOW</button>
                    </div>
                </div>
            </section>

            {/* About us */}
            <section className='py-12 md:py-32 mx-5 md:mx-0'>
            <h1 className='text-3xl md:text-6xl text-center font-semibold pb-12 uppercase'>About Us</h1>
                <div className='md:grid md:grid-cols-2 gap-5 my-container' >
                    <div>
                        <img src={aboutThumbnail} alt="" />
                    </div>
                    <div className='relative text-center md:text-left pt-5 md:pt-0'>
                        <div className='border-8 opacity-10 w-[250px] h-[350px] hidden md:block'></div>
                        <div className='md:w-3/4 md:absolute top-14 md:left-28 bg-white'>
                            <h3 className='text-xl font-semibold'>ENSURING THE BEST ATMOSPHERE FOR EVERYONE</h3>
                            <span className='block py-5'>
                                <small>We see the most important part of our business in ensuring the happiness of our staff and the satisfaction of our clients by creating a welcoming and caring atmosphere.</small>
                            </span>
                            <button className='border-b-2 font-semibold text-border-clr hover:text-pink hover:tracking-wider md:ml-40'>READ MORE</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our team */}
            <section>
                <div id='bg-pettern-about' className='pb-32'>
            <h1 className='text-3xl md:text-6xl text-center font-semibold pb-12 uppercase pt-24'>Our Team</h1>
                    <div className='grid grid-cols-4 gap-5 my-container justify-center'>
                        {
                            chefs && chefs.map(chef => <ChefCard
                                key={chef._id}
                                chef={chef}
                            ></ChefCard>)
                        }
                        
                    </div>
                </div>
            </section>

            {/* All Kind of Cakes */}
            <section id='bg-2' className='flex justify-center items-center'>
                <div className='my-container text-center'>
                    <div>
                        <h2 className='text-decorative text-pink text-3xl md:text-5xl'>Unique Flavors and Fresh Ingredients</h2>
                        <h1 className='text-2xl md:text-5xl font-semibold pt-5 md:pt-10 uppercase tracking-wider'>ALL KINDS OF CAKES</h1>
                        <button className='my-btn'>Read More</button>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;