import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Experience from "./pages/Experience.tsx";
import Certificates from "./pages/Certificates.tsx";
import Projects from "./pages/Projects.tsx";
import Apps from "./pages/Apps.tsx";
import Events from "./pages/Events.tsx";
import Blog from "./pages/Blog.tsx";
import PageLayout from "./components/layout/PageLayout.tsx";
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
            <Routes>
                <Route element={<PageLayout />} >
                    <Route  path="/" element={<Home/>} />
                    <Route  path="/experience" element={<Experience/>} />
                    <Route  path="/certificates" element={<Certificates/>} />
                    <Route  path="/projects" element={<Projects/>} />
                    <Route  path="/apps" element={<Apps/>} />
                    <Route  path="/events" element={<Events/>} />
                    <Route  path="/blog" element={<Blog/>} />
                </Route>
            </Routes>
        </main>
    )
}
export default App
