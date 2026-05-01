import {
  FaGithub,
  FaTelegram,
  FaLinkedin,
  FaDiscord,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
          className="about-img w-45 h-80 md:w-85 md:h-150 hidden md:block"
        />
        <div className="about-text">
          <h2 className="text-primary text-3xl font-bold ">About Me</h2>
          <p className="text-secondary pt-2 text-xs md:text-lg">
            Hello, I’m Emmanuel Otsima Ogbu — a proudly Nigerian Christian and{" "}
            <br className="hidden md:block" />
            multidisciplinary engineer building at the intersection of{" "}
            <br className="hidden md:block" />
            Health, Finance, Technology & Media.
          </p>
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="flex gap-3 items-center text-primary md:hidden"
            >
              <p> See More</p> <FaChevronDown />
            </button>
          )}
          <div className="hidden md:block">
            <p className="text-secondary pt-2 text-xs md:text-lg">
              I hold a B.Eng in Biomedical Engineering from the University of
              Ilorin <br className="hidden md:block" /> and I’m currently
              pursuing an MSc in Financial Engineering at WorldQuant{" "}
              <br className="hidden md:block" /> University. I’m also a
              blockchain developer, algorithmic trader, and{" "}
              <br className="hidden md:block" /> media creator — unified by one
              belief: humans have unlimited capacity{" "}
              <br className="hidden md:block" /> to become whatever they set
              their minds to.
            </p>
            <p className="text-secondary pt-2 text-xs md:text-lg">
              My work spans four domains — Healthcare (clinical informatics, EHR,{" "}
              <br className="hidden md:block" /> medical devices), Finance
              (financial engineering, algorithmic trading),{" "}
              <br className="hidden md:block" /> Technology (blockchain, smart
              contracts, AI & data science), and{" "}
              <br className="hidden md:block" /> Media (cinematography, content
              production, digital marketing).
            </p>
            <p className="text-secondary pt-2 text-xs md:text-lg">
              Let’s connect if you’re building something bold — I’m a strategic{" "}
              <br className="hidden md:block" /> partner who can engineer ideas
              into reality across any of these worlds.
            </p>
          </div>
          {isExpanded && (
            <div className="md:hidden">
              <p className="text-secondary pt-2 text-xs md:text-lg">
                I hold a B.Eng in Biomedical Engineering from the University of
                Ilorin and I’m currently pursuing an MSc in Financial
                Engineering at WorldQuant University. I’m also a blockchain
                developer, algorithmic trader, and media creator — unified by
                one belief: humans have unlimited capacity to become whatever
                they set their minds to.
              </p>
              <p className="text-secondary pt-2 text-xs md:text-lg">
                My work spans four domains — Healthcare (clinical informatics,
                EHR, medical devices), Finance (financial engineering,
                algorithmic trading), Technology (blockchain, smart contracts,
                AI & data science), and Media (cinematography, content
                production, digital marketing).
              </p>
              <p className="text-secondary pt-2 text-xs md:text-lg">
                Let’s connect if you’re building something bold — I’m a
                strategic partner who can engineer ideas into reality across any
                of these worlds.
              </p>
              <button
                onClick={() => setIsExpanded(false)}
                className="flex gap-3 items-center text-primary"
              >
                <p> See Less</p> <FaChevronUp />
              </button>
            </div>
          )}
          <div className="about-social md:flex justify-left gap-8 mt-8 hidden">
            <Link
              to="https://www.linkedin.com/in/otsimaofficial/"
              target="_blank"
            >
              <FaLinkedin className="text-primary size-6" />
            </Link>
            <Link
              to="https://discordapp.com/users/1130232660883681280"
              target="_blank"
            >
              <FaDiscord className="text-primary size-6" />
            </Link>
            <Link to="https://x.com/Otsimaofficial" target="_blank">
              <FaXTwitter className="text-primary  size-6" />
            </Link>
            <Link to="https://github.com/otsimaofficial" target="_blank">
              <FaGithub className="text-primary size-6" />
            </Link>
            <Link to="https://t.me/otsimaofficial" target="_blank">
              <FaTelegram className="text-primary  size-6" />
            </Link>
            <Link to="https://otsimaofficial.medium.com/" target="_blank">
              <FaMedium className="text-primary  size-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="about-social flex justify-center gap-8 mt-8 md:hidden">
        <Link to="https://www.linkedin.com/in/otsimaofficial/" target="_blank">
          <FaLinkedin className="text-primary size-6" />
        </Link>
        <Link
          to="https://discordapp.com/users/1130232660883681280"
          target="_blank"
        >
          <FaDiscord className="text-primary size-6" />
        </Link>
        <Link to="https://x.com/Otsimaofficial" target="_blank">
          <FaXTwitter className="text-primary  size-6" />
        </Link>
        <Link to="https://github.com/otsimaofficial" target="_blank">
          <FaGithub className="text-primary size-6" />
        </Link>
        <Link to="https://t.me/otsimaofficial" target="_blank">
          <FaTelegram className="text-primary  size-6" />
        </Link>
        <Link to="https://otsimaofficial.medium.com/" target="_blank">
          <FaMedium className="text-primary  size-6" />
        </Link>
      </div>
    </section>
  );
};
export default About;
