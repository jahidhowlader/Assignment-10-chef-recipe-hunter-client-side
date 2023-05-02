import './Home.css'
import Card from '../../components/shared/Card/Card';

const Home = () => {
    return (
        <>
        
        <section id='home-banner' className=''>
            <div className="lg:grid grid-cols-2 my-container py-40 opacity-90 mt-[55px]">
                <div className='px-5 md:px-0'>
                    <h1 className='text-decorative text-pink text-7xl md:text-[100px] leading-10'>Delicious</h1>
                    <h2 className='font-bold text-2xl md:text-4xl pt-10 pb-5 tracking-wider md:tracking-widest'>CAKES FOR YOU</h2>
                    <p className='text-2xl tracking-wide md:tracking-wider'>Sweet Bakery offers the best cakes and sweets for you.</p>
                    <button className='bg-pink py-5 px-10 my-8 text-white rounded-lg font-semibold hover:bg-btn-hover drop-shadow-xl'>SHOP NOW</button>
                </div>
            </div>

        </section>
            
            <section className='my-container py-16'>
                <h1 className='text-3xl md:text-6xl text-center font-semibold'>WHAT WE OFFER</h1>

                <div className='py-5 md:grid md:grid-cols-3'>
                    <Card></Card>
                    
                </div>
            </section>
        </>

    );
};

export default Home;