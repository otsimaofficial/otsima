import {Outlet} from 'react-router-dom'
import Navbar from "../components/shared/Navbar.tsx";
import Footer from "../components/shared/Footer.tsx";

const PageLayout = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}
export default PageLayout
