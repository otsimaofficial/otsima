import Hero from "../components/shared/Hero.tsx";
import About from "../components/shared/About.tsx";
import Contact from "../components/shared/Contact.tsx";
import Skills from "../components/shared/Skills.tsx";
import GridSec from "../components/shared/GridSec.tsx";

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <GridSec/>
            <Contact/>
        </div>
    )
}
export default Home
