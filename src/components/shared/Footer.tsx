import {navLinks} from "../../constants";
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className='bg-primary text-white px-3.5 py-10 md:p-14 space-y-14'>
           <div className='flex flex-col md:flex-row md:items-center justify-between gap-8  '>
               <nav className='flex flex-col md:flex-row gap-5 md:gap-6 '>
                   {navLinks.map((item, index) => (
                       <a href={item.link} key={index} >
                           <p className='font-[400] text-[16px] hover:scale-105'>{item.label}</p>
                       </a>
                   ))}
               </nav>
               <div className='flex gap-8'>
                   <FaFacebook className="text-white size-6" />
                   <FaXTwitter className="text-white size-6" />
                   <FaInstagram className="text-white size-6" />
               </div>
           </div>
            <hr className='text-secondary' />
            <p className='text-sm text-center'>Emmanuel Ogbu © 2025. All Right Reserved</p>
        </footer>
    )
}
export default Footer
