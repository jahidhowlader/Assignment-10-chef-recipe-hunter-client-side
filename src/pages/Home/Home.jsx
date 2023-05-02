import './Home.css'
import Card from '../../components/shared/Card/Card';
import SwiperCard from '../../components/shared/swiper/SwiperCard';
import SwiperCardMobile from '../../components/shared/swiper/SwiperCardMobile';

const Home = () => {
    return (
        <>

            <section id='home-banner' className=''>
                <div className="lg:grid grid-cols-2 my-container py-20 md:py-40 opacity-90 ">
                    <div className='px-5 md:px-0'>
                        <h1 className='text-decorative text-pink text-7xl md:text-[100px] leading-10'>Delicious</h1>
                        <h2 className='font-bold text-2xl md:text-4xl pt-10 pb-5 tracking-wider md:tracking-widest'>CAKES FOR YOU</h2>
                        <p className='text-2xl tracking-wide md:tracking-wider'>Sweet Bakery offers the best cakes and sweets for you.</p>
                        <button className='my-btn'>SHOP NOW</button>
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
            <section>
                <div id='bg-pettern' >
                    <h1 className='text-3xl md:text-6xl text-center font-semibold pt-16 uppercase'>New Products</h1>
                    <div className='my-container py-20 hidden md:block'>
                        <SwiperCard></SwiperCard>
                    </div>
                    <div className=' py-20 block md:hidden mx-5'>
                        <SwiperCardMobile></SwiperCardMobile>
                    </div>
                </div>
            </section>

            {/* Summer Sell */}
            <section id='bg-1'>
                <div  className='my-container md:grid md:grid-cols-5'>
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
        </>

    );
};

export default Home;