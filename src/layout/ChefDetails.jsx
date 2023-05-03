import { useLoaderData } from "react-router-dom";
import ChefDetailPage from "../pages/chefDetail/ChefDetailPage";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const ChefDetails = () => {
    const chefDteails = useLoaderData()

    // Context API
    const { user } = useContext(AuthContext)
    

    return (
        <div>
            <ChefDetailPage
                chefDteails={chefDteails}
            ></ChefDetailPage>
        </div>
    );
};

export default ChefDetails;