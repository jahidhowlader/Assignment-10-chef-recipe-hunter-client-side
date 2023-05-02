import offer1 from '../../../assets/offer-1.jpg'
import offer2 from '../../../assets/offer-2.jpg'
import offer3 from '../../../assets/offer-3.jpg'

const Card = () => {

    const offer = [offer1, offer2, offer3]
    const offerTitle = ['PARTY CUPCAKES', 'CHOCO CAKES', 'WEDDING CAKES']

    return (<>
        {
            offer.map((image, idx) => 
                <div key={idx} className="card bg-base-100 rounded-none relative hover:shadow-lg hover:rounded py-5 px-5 md:px-0">
                    <div className="card-body items-center text-center p-0">
                        <img className='border border-border-clr border-opacity-30 p-3' src={image} alt="" />
                        <h2 className="card-title pt-3 text-2xl tracking-wide">{offerTitle[idx]}</h2>
                        <p className='text-sm pb-2 px-5'>We provide a variety of cupcakes for any party made with high-quality natural ingredients and no preservatives.</p>
                        <button className="border-b-2 font-semibold text-border-clr hover:text-black">READ MORE</button>
                    </div>
                </div>
             )
        }
        </>

    );
};

export default Card;