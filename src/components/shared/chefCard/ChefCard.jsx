import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {

    const {_id ,picture, name, experience_years, num_recipes, likes } = chef

    return (
        <div className="card bg-base-100 shadow md:shadow-xl rounded mx-5 md:mx-0 mb-5 md:mb-0">

            <figure className="relative">
                <img className="w-full md:w-full h-[270px]" src={picture} alt="chef pic" />
                <div className="badge badge-secondary absolute top-2 md:bottom-2 right-2"><span className="flex items-center gap-2"><FaHeart ></FaHeart> {likes}</span></div>

            </figure>
            <div className="card-body  ">
                <h2 className="card-title uppercase tracking">
                    {name}
                </h2>

                <div className=""><span className="font-semibold">Experience: </span>{experience_years} years</div>
                <p className="text-sm"><span className="font-semibold">Number of recipes:</span> {num_recipes}</p>

                <Link to={`/chef/${_id}`}>
                    <button className="border border-pink py-1 px-3 rounded hover:bg-pink hover:text-white w-full mt-5">View Recipes</button>
                </Link>
            </div>
        </div>
    );
};

export default ChefCard;