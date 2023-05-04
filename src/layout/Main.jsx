import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Main;