import {Outlet} from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Notification from "./components/Notification.tsx";
const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <Notification />
        </div>
    );
};

export default Layout;