import './ChefDetailPage.css'
import image from '../../assets/team-7.jpg'
import { FaHeart } from 'react-icons/fa';
import RecipeCard from '../../components/shared/recipeCard/RecipeCard';

const ChefDetailPage = ({ chefDteails }) => {

    const { _id, picture, name, experience_years, num_recipes, likes, recipe_item } = chefDteails

    return (
        <>
            {/* Thumbnail */}
            <section className='chef-bg' >
                <div className='flex justify-center items-center' style={{ height: '485px' }}>
                    <h1 className='text-decorative text-white text-5xl'>The identity of {name}</h1>
                </div>
            </section>

            {/* chef Details */}
            <section className='my-container my-32'>
                <div className='grid grid-cols-4 gap-5'>
                    {/* Recipe Items */}
                    <div className='col-span-3'>
                        <div className='grid grid-cols-3 gap-3'>
                            {
                                recipe_item && recipe_item.map((recipe, idx) => <RecipeCard
                                    key={idx}
                                    recipe={recipe}
                                ></RecipeCard>)
                            }
                        </div>
                    </div>
                    <div className=''>
                        <div className='border  border-border-clr border-opacity-30 text-center py-12 px-5 relative'>
                            <img className='rounded-full w-[130px] mx-auto' src={picture} alt="" />
                            <h4 className='font-semibold tracking-wide py-5'>{name}</h4>
                            <p>Quis risus sed vulputate odio ut maecenas.</p>

                            <div className="badge badge-secondary absolute top-2 right-2"><span className="flex items-center gap-2"><FaHeart ></FaHeart> {likes}</span></div>
                            <div className=""><span className="font-semibold">Experience: </span>{experience_years} years</div>
                            <p className="text-sm"><span className="font-semibold">Number of recipes:</span> {num_recipes}</p>
                        </div>

                        <div className='py-12'>
                            <h5 className='font-semibold tracking-wide'>CATEGORIES</h5>
                            <hr className='border border-border-clr border-opacity-20 my-5' />
                            <div className='space-y-2 text-sm'>
                                <div className='flex justify-between'>
                                    <p>All</p>
                                    <p>({num_recipes})</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Cakes</p>
                                    <p>(2)</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Bakings</p>
                                    <p>(3)</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Recipes</p>
                                    <p>(5)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default ChefDetailPage;


// "https://i.ibb.co/PjSZMwj/1.jpg",
// "https://i.ibb.co/HYg8c7F/3.jpg",
// "https://i.ibb.co/qn1gCMK/4.jpg",
// "https://i.ibb.co/BL8V107/5.jpg",