import './Home.css'
import Card from '../../components/shared/Card/Card';
import SwiperCard from '../../components/shared/swiper/SwiperCard';
import SwiperCardMobile from '../../components/shared/swiper/SwiperCardMobile';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
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
            <section className='-mt-12 mb-12'>
                <div className='my-container'>
                    <div id='fresh-cake' className='border-8 border-gray pt-12'>
                        <div className='flex justify-center'>
                        <div className='w-2/4 text-center'>
                            <h3 className='text-decorative text-white text-5xl'>Only Fresh Cakes</h3>
                            <p className='text-white py-5'>All of our products are made from scratch using family recipes with only the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
                            <div className='flex justify-center'>
                            <FaArrowRight className='bg-white text-pink p-2 rounded-full text-4xl text-center'></FaArrowRight>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='my-container py-16'>
                <h1 className='text-3xl md:text-6xl text-center font-semibold'>WHAT WE OFFER</h1>

                <div className='py-5 md:grid md:grid-cols-3'>
                    <Card></Card>
                </div>
            </section>

            {/* New roducts */}
            <section className=''>
                <div id='bg-pettern' >
                    <div>
                        <h1 className='text-3xl md:text-6xl text-center font-semibold pt-28 uppercase'>New Products</h1>
                        <div className='my-container py-20 hidden md:block'>
                            <SwiperCard></SwiperCard>
                        </div>
                    </div>
                    <div className=' py-20 block md:hidden mx-5'>
                        <SwiperCardMobile></SwiperCardMobile>
                    </div>
                </div>
            </section>

            {/* Summer Sell */}
            <section id='bg-1'>
                <div className='my-container md:grid md:grid-cols-5'>
                    <div className='pt-20 col-span-2'>
                        <h1 className='text-3xl md:text-6xl font-semibold pt-16 uppercase'>Summer Sale</h1>
                        <p className='py-5'><span className='text-decorative text-pink text-5xl'>-20%</span> <span className='tracking-wider font-semibold text-2xl'>ON ALL CAKES</span></p>
                        <p className=''>Purchase our tasty cakes and sweets for your next event or family dinner at our online shop and save more money than anywhere.</p>
                        <button className='my-btn'>SHOP NOW</button>
                    </div>
                </div>
            </section>

            {/* Our team */}
            <section>
                <div id='bg-pettern' >

                </div>
            </section>

            {/* All Kind of Cakes */}
            <section id='bg-2' className='flex justify-center items-center'>
                <div className='my-container text-center'>
                    <div>
                        <h2 className='text-decorative text-pink text-5xl'>Unique Flavors and Fresh Ingredients</h2>
                        <h1 className='text-3xl md:text-5xl font-semibold pt-10 uppercase tracking-wider'>ALL KINDS OF CAKES</h1>
                        <button className='my-btn'>Read More</button>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;