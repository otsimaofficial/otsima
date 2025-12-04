import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Skills = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".skills-title", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      ".skill-item",
      { opacity: 0, y: 40, stagger: 0.3, duration: 0.8 },
      "-=0.5"
    );
  }, []);

  return (
    <section className="skills-section bg-tetiary gap-50 my-5 md:my-10 md:mx-30 p-7 md:p-10">
      <h2 className="skills-title text-primary text-3xl font-bold">Skills</h2>
      <div className="space-y-7 pt-6">
        <div className="skill-item text-secondary">
          <h3 className="text-2xl font-bold">Laboratory skills</h3>
          <p>
            Equipment calibration & testing | Maintenance of hospital equipment
            | Data collection for device performance | Technical
            <br /> documentation & reporting | Inventory and asset management
            systems | Prototyping
          </p>
        </div>
        <div className="skill-item text-secondary">
          <h3 className="text-2xl font-bold">Tech stack skills</h3>
          <p>
            Python (pandas, numpy, sklearn) | Git & GitHub | JavaScript |
            Solidity | Rust | Node.js | CSS & HTML | SQL | Data visualization{" "}
            <br />
            (PowerBI & Excel) | API integration (REST, JSON/FHIR) | Cloud basics
            (AWS, Azure, GCP, OCI)
          </p>
        </div>
        <div className="skill-item text-secondary">
          <h3 className="text-2xl font-bold">Complementary skills</h3>
          <p>
            Graphic design | photography | cinematography | content production |
            plan social media <br />
            marketing campaigns | Microsoft Office
          </p>
        </div>
      </div>
    </section>
  );
};
export default Skills;
