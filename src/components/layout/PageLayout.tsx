import {Outlet} from 'react-router-dom'
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

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
