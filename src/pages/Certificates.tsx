import { certificationLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Certificates = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".certificates-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".certificates-header", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      ".certificate-item",
      { opacity: 0, y: 40, stagger: 0.2, duration: 0.8 },
      "-=0.5"
    );
  }, []);

  return (
    <section className="certificates-section pt-20 md:pt-40 md:mx-20 space-y-5 p-7">
      <div className="certificates-header space-y-6">
        <h2 className="text-primary text-5xl font-bold">Certifications</h2>
        <p className="text-[#111827] text-sm md:text-2xl">
          Training and certifications that strengthen my technical, clinical,
          and professional capabilities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 md:mt-30 mb-70">
        {certificationLinks.map((item, index) => (
          <div key={index} className="certificate-item space-y-3">
            <img src={item.pic} alt="Images" className="md:h-130 md:w-200" />
            <div>
              <p className="font-medium text-[18px]">{item.title}</p>
              <p className="text-secondary">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Certificates;
