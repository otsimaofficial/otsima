import Button from "../ui/Button.tsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".hero-title", {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
      .from(".hero-buttons", { opacity: 0, y: 15, duration: 0.6 }, "-=0.3")
      .from(".hero-img", { opacity: 0, x: 50, duration: 0.8 }, "-=0.3");
  }, []);

  return (
    <section className="hero-section flex flex-col-reverse md:flex-row items-center justify-center bg-tetiary md:gap-50 md:mt-40 md:mx-30 p-5 md:p-10 ">
      <div className="space-y-5 md:space-y-10">
        <h1 className="hero-title font-bold text-3xl md:text-5xl text-center md:text-left text-primary mt-5 md:mt-0">
          Engineering Digital <br className="hidden md:block" /> Health Systems
          for the <br className="hidden md:block" /> Future
        </h1>
        <p className="hero-desc text-secondary text-center md:text-left">
          Biomedical Engineer specializing in Clinical Informatics,
          <br className="hidden md:block" /> Predictive Health Systems, and
          Blockchain solutions
          <br className="hidden md:block" /> for secure healthcare data.
        </p>
        <div className="hero-buttons space-x-5 ml-5 md:ml-0">
          <Button
            title="View My CV"
            containerClass="bg-primary text-white hover:scale-105 cursor-pointer hover:bg-blue-900 "
          />
          <a href="mailto:emmanuelotsimaogbu@gmail.com" target="_blank">
            <Button
              title="Contact Me"
              containerClass="hover:scale-105 cursor-pointer hover:bg-primary hover:text-white "
            />
          </a>
        </div>
      </div>
      <img
        src="/Hero.png"
        alt="HeroImg"
        className="hero-img md:h-100 rounded-lg"
      />
    </section>
  );
};
export default Hero;
