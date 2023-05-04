import { useLoaderData } from "react-router-dom";
import ChefDetailPage from "../pages/chefDetail/ChefDetailPage";

const ChefDetails = () => {
    const chefDteails = useLoaderData()

    return (
        <div>
            <ChefDetailPage
                chefDteails={chefDteails}
            ></ChefDetailPage>
        </div>
    );
};

export default ChefDetails;