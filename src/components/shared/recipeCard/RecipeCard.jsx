
const RecipeCard = ({recipe}) => {
    const {title, img, date, info} = recipe
    return (
        <div className="bg-gray">
            <img src={img} alt="" />
            <div className="p-5">
            <small>{date}</small>
            <h3 className="font-semibold opacity-90 text-lg py-5">{title}</h3>
            <p>{info}</p>
            </div>
        </div>
    );
};

export default RecipeCard;