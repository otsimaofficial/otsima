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
      .from(".hero-pills", { opacity: 0, y: 10, duration: 0.6 }, "-=0.4")
      .from(".hero-img", { opacity: 0, duration: 0.8 }, "-=0.3");
  }, []);

  return (
    <section className="hero-section relative overflow-hidden rounded-2xl bg-[#2b2b2b] h-[30rem] md:h-[32rem] mx-4 mt-16 md:mt-32 md:mx-30 p-6 md:p-14 flex flex-col justify-start md:justify-center">
      <div className="hero-img absolute bottom-0 right-0 h-[60%] md:h-[80%] aspect-[2400/1027]">
        <img
          src="/home/hero-banner.jpg"
          alt="Emmanuel Otsima Ogbu"
          className="w-full h-full"
        />
        <div
          className="absolute -inset-px"
          style={{
            background:
              "linear-gradient(to right, #2b2b2b 0%, rgba(43,43,43,0) 38%), linear-gradient(to bottom, #2b2b2b 0%, rgba(43,43,43,0) 40%)",
          }}
        />
      </div>
      <div className="relative z-10 flex flex-col gap-4 md:gap-6 items-center md:items-start">
        <p className="hero-desc font-bold text-white text-2xl md:text-4xl">
          Hello,
        </p>
        <h1 className="hero-title font-bold text-white whitespace-nowrap text-[clamp(1.25rem,6vw,2.4rem)] md:text-6xl leading-tight tracking-tight">
          <span className="font-['Noto_Serif_Display',serif] font-medium">£</span>
          mmanuel Otsima Ogbu
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
