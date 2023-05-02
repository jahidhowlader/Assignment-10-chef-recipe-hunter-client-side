import './Home.css'

const Home = () => {
    return (
        <section id='home-banner'>
            <div className="grid grid-cols-2 my-container py-40">
                <div className=''>
                    <h1 className='text-decorative text-pink text-[100px] leading-10'>Delicious</h1>
                    <h2 className='font-bold text-4xl pt-10 pb-5 tracking-widest'>-CAKES FOR YOU</h2>
                    <p className='text-2xl tracking-wider'>Sweet Bakery offers the best cakes and sweets for you.</p>
                    <button className='bg-pink py-5 px-10 my-8 text-white rounded-lg font-semibold hover:bg-btn-hover'>SHOP NOW</button>
                </div>
            </div>
        </section>
    );
};

export default Home;