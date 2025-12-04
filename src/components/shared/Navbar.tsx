import { navLinks } from "../../constants";
import Button from "../ui/Button.tsx";
import { CgMenuRight } from "react-icons/cg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.from("nav", {
      yPercent: 50,
      opacity: 0,
      ease: "power2.inOut",
    });

    ScrollTrigger.create({
      trigger: "body",
      start: "200px top",
      onEnter: () => navRef.current?.classList.add("scrolled"),
      onLeaveBack: () => navRef.current?.classList.remove("scrolled"),
    });
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      gsap.set(menuRef.current, { x: "100%" });
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: "0%", duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power2.in" });
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed w-full top-0 z-50" id="nav">
        <div
          ref={navRef}
          className="bg-transparent md:flex justify-between items-center px-15 py-4 hidden transition-all duration-300"
        >
          <nav className="flex gap-10 ">
            {navLinks.map((item, index) => (
              <a href={item.link} key={index}>
                <p className="font-normal text-[16px] hover:scale-105">
                  {item.label}
                </p>
              </a>
            ))}
          </nav>
          <div id="btn">
            <Button
              title="Contact Me"
              containerClass="hover:bg-primary hover:text-white hover:cursor-pointer hover:scale-105"
            />
          </div>
        </div>
        <div className=" md:hidden flex justify-end pr-6 bg-tetiary ">
          <CgMenuRight
            className="size-10 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </header>

      <div
        ref={menuRef}
        className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center text-white"
        onClick={() => setIsOpen(false)}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-3xl hover:scale-110"
        >
          ×
        </button>
        <nav
          className="flex flex-col gap-8 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((item, index) => (
            <a
              href={item.link}
              key={index}
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:scale-105 transition-transform"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4">
            <Button
              title="Contact Me"
              containerClass="bg-white text-primary hover:scale-105"
              handleClick={() => setIsOpen(false)}
            />
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
