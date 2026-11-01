import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";

const Layout = () => {
    return (
        <div id="content">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: "var(--color-bg-alt)",
                        color: "var(--color-text)",
                        border: "1px solid var(--color-border)"
                    }
                }}
            />
        </div>
    );
};

export default Layout;
