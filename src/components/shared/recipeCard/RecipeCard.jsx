import { useState } from "react";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa"
import Rating from "react-rating"
import { toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {
    const { title, img, ingredients, cooking_method, ratings } = recipe

    // All State is here
    const [favorite, setFavorite] = useState(false)

    // handler React to favorite
    const handlerReact = () => {
        setFavorite(true)
        toast.success('Thanks for your contribute', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <div data-aos="fade-up"
        data-aos-duration="1500"
         className="bg-gray">
            <img className="w-full" src={img} alt="recipe" />
            <div className="px-5">
                {/* <small>{date}</small> */}
                <h3 className="font-semibold opacity-90 text-lg pt-5">{title}</h3>
                <p className="font-semibold pt-5 pb-2">Ingredients:</p>
                {
                    ingredients.map((item, idx) => <li key={idx} className="text-pink"><small className="font-semibold text-t-secondary">{item} <br /></small></li>)
                }

                <div className="pt-5">
                    <small className="text-t-secondary ">{cooking_method.slice(0, 210)}...</small>
                </div>

                {/* React Rating */}
                <div className='mt-2 flex justify-between pb-5'>
                    <div className="flex gap-2 ">
                        <Rating
                            placeholderRating={ratings}
                            readonly
                            emptySymbol={<FaRegStar className='text-pink text-xl'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-pink text-xl'></FaStar>}
                            fullSymbol={<FaStar className='text-xl'></FaStar>}
                        />
                        <span className='font-bold'>{('' + ratings).length === 1 ? `${ratings}.0` : ratings}</span>
                    </div>

                    <button onClick={handlerReact} disabled={favorite}>
                        <div className={`badge ${favorite ? '' : 'badge-secondary'}`}><span className="flex items-center gap-2"><FaHeart ></FaHeart></span></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;