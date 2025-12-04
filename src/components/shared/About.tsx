import { FaGithub, FaTelegram, FaLinkedin, FaDiscord  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".about-img", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out",
    })
      .from(".about-text", { opacity: 0, x: 50, duration: 1 }, "-=0.7")
      .from(
        ".about-social > *",
        { opacity: 0, y: 20, stagger: 0.2, duration: 0.5 },
        "-=0.5"
      );
  }, []);

  return (
    <section className="about-section bg-tetiary md:gap-50 my-5 md:my-10 md:mx-30 p-4 md:p-14">
      <div className="flex  justify-left gap-5 md:gap-40">
        <img
          src="/about.png"
          alt="AboutImg"
          className="about-img w-45 h-80 md:w-85 md:h-150"
        />
        <div className="about-text">
          <h2 className="text-primary text-3xl font-bold ">About Me</h2>
          <p className="text-secondary pt-2 text-xs md:text-lg">
            Emmanuel Ogbu is a Biomedical Engineering graduate passionate about{" "}
            <br />
            improving healthcare delivery through technology. His interests span{" "}
            <br />
            Clinical & Health Informatics, Electronic Health Records, AI-driven{" "}
            <br />
            predictive medicine, and blockchain applications for secure,
            transparent <br />
            health data systems. <br />
            He combines engineering fundamentals with software development,{" "}
            <br />
            system design, and hands-on hospital experience to build solutions
            that <br />
            strengthen health systems in emerging economies.
          </p>
        </div>
      </div>
      <div className="about-social flex justify-center gap-8 mt-8">
          <FaLinkedin className="text-primary size-6" />
          <FaDiscord className="text-primary size-6" />
        <FaXTwitter className="text-primary  size-6" />
        <FaGithub className="text-primary size-6" />
        <FaTelegram className="text-primary  size-6" />
      </div>
    </section>
  );
};
export default About;
