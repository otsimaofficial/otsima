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
      .from(".hero-pills", { opacity: 0, y: 10, duration: 0.6 }, "-=0.4")
      .from(".hero-img", { opacity: 0, duration: 0.8 }, "-=0.3");
  }, []);

  return (
    <section className="hero-section relative overflow-hidden rounded-2xl bg-[#2b2b2b] h-[32rem] md:h-[22rem] mx-4 mt-16 md:mt-32 md:mx-10 lg:mx-30">
      <img
        src="/home/hero-banner.jpg"
        alt="Emmanuel Otsima Ogbu"
        className="hero-img absolute top-0 max-w-none h-full w-auto left-1/2 -translate-x-[68.5%] md:left-0 md:translate-x-0 md:w-full md:object-cover md:object-[50%_35%]"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full flex flex-col gap-4 md:gap-5 items-center md:items-start justify-start md:justify-center p-6 md:p-12">
        <h1 className="hero-title font-bold text-white whitespace-nowrap text-[clamp(1rem,4.7vw,2rem)] md:text-[clamp(1.5rem,2.9vw,3.4rem)] leading-tight tracking-tight">
          <span className="font-['Noto_Serif_Display',serif] font-medium">£</span>
          <span className="uppercase font-extrabold">mmanuel Otsima Ogbu</span>
        </h1>
        <div className="hero-pills flex flex-wrap gap-2 justify-center md:justify-start">
          {["Healthcare", "Finance", "Technology", "Media"].map((domain) => (
            <span
              key={domain}
              className="text-xs font-medium text-white border border-white/70 px-3 py-1 rounded-full backdrop-blur-sm"
            >
              {domain}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
