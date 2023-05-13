import './ChefDetailPage.css'
import RecipeCard from '../../components/shared/recipeCard/RecipeCard';

const ChefDetailPage = ({ chefDteails }) => {

    const { bio, picture, name, experience_years, num_recipes, recipe_item,  likes } = chefDteails

    return (
        <>
            {/* Thumbnail */}
            <section className='chef-bg' >
                <div className='flex justify-center items-center h-[100px] md:h-[485px]' >
                    <h1 className='text-decorative text-white text-3xl md:text-5xl text-center'>The identity of {name}</h1>
                </div>
            </section>

            {/* chef Details */}
            <section className='my-container my-12 md:my-32'>
                <div className='grid md:grid-cols-4 gap-5'>
                    {/* Recipe Items */}
                    <div className='md:col-span-3 order-last md:order-none'>
                        <div className='grid md:grid-cols-2 gap-5 mx-5 md:mx-0'>
                            {
                                recipe_item && recipe_item.map((recipe, idx) => <RecipeCard
                                    key={idx}
                                    recipe={recipe}
                                ></RecipeCard>)
                            }
                        </div>
                    </div>
                    <div data-aos="fade-"
                        data-aos-duration="1000">
                        <div className='border border-border-clr border-opacity-30 text-center py-12 px-5 mx-5 md:mx-0'>
                            <img className='rounded-full w-[130px] h-[130px] mx-auto' src={picture} alt={name} />
                            <h4 className='font-semibold tracking-wide pt-5'>{name}</h4>
                            <p >{bio}</p>

                            <div className="mt-4"><span className="font-semibold">Experience: </span>{experience_years} years</div>
                            <p className="text-sm"><span className="font-semibold">Number of recipes:</span> {num_recipes}</p>

                            <p className='font-semibold text-pink'>Likes: {likes}</p>
                        </div>

                        <div className='py-12 mx-5 md:mx-0'>
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