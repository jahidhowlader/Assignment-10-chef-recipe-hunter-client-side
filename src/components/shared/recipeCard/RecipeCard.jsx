
const RecipeCard = ({ recipe }) => {
    const { title, img, ingredients, cooking_method } = recipe

    return (
        <div className="bg-gray">
            <img className="w-full" src={img} alt="" />
            <div className="pl-5">
                {/* <small>{date}</small> */}
                <h3 className="font-semibold opacity-90 text-lg pt-5">{title}</h3>
                <p className="font-semibold pt-5 pb-2">Ingredients:</p>
                {
                    ingredients.map((item, idx) => <li className="text-pink"><small key={idx} className="font-semibold text-t-secondary">{item} <br /></small></li>)
                }

                <div className="py-5">
                    <small className="text-t-secondary ">{cooking_method.slice(0, 210)}...</small>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;