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
      .from(".hero-pills", { opacity: 0, y: 10, duration: 0.6 }, "-=0.4");
  }, []);

  return (
    <section
      className="hero-section relative overflow-hidden rounded-2xl bg-neutral-700 bg-cover bg-[position:72%_bottom] md:bg-center min-h-[30rem] md:min-h-[32rem] mx-4 mt-16 md:mt-32 md:mx-30 p-6 md:p-14 flex flex-col justify-start md:justify-center"
      style={{ backgroundImage: "url('/home/hero-banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      <div className="relative z-10 flex flex-col gap-6 md:gap-8 items-center md:items-start">
        <h1 className="hero-title font-bold text-white whitespace-nowrap text-[clamp(1.25rem,6vw,2.4rem)] md:text-6xl leading-tight tracking-tight">
          <span className="font-['Playfair_Display_SC',serif] font-bold">£</span>
          mmanuel Otsima Ogbu
        </h1>
        <p className="hero-desc text-white/80 text-center md:text-left max-w-md">
          Learning to engineer capital for Africa’s untapped potential
        </p>
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
