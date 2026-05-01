import Hero from "../components/sections/Hero.tsx";
import About from "../components/sections/About.tsx";
import Contact from "../components/sections/Contact.tsx";
import Skills from "../components/sections/Skills.tsx";
import GridSec from "../components/sections/GridSec.tsx";

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
