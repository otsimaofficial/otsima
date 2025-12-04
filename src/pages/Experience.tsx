import { experienceData } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Experience = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".experience-header", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      ".experience-item",
      { opacity: 0, y: 50, stagger: 0.3, duration: 0.8 },
      "-=0.5"
    );
  }, []);

  return (
    <section className="experience-section pt-20 md:pt-40 md:mx-20 space-y-5 p-7">
      <div className="experience-header space-y-6">
        <h2 className="text-primary text-5xl font-bold">Work Experience</h2>
        <p className="text-[#111827] text-sm md:text-2xl">
          Practical roles that have strengthened my skills in clinical
          technology, data systems, and decentralized solutions.
        </p>
      </div>
      <div className="">
        {experienceData.map((project, i) => (
          <div
            key={i}
            className="experience-item bg-tetiary  p-6 md:p-12 lg:p-16 md:mt-24 md:mb-20"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4 md:gap-0">
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-primary uppercase leading-tight md:max-w-[70%]"
                style={{ whiteSpace: "pre-line" }}
              >
                {project.project_title}
              </h3>
              <div className="flex items-center gap-3 text-gray-700 font-medium shrink-0">
                <div className="text-gray-500 text-base md:text-xl">
                  [ {project.date} ]
                </div>
              </div>
            </div>
            <div className="mb-6">
              <span className="text-sm md:text-xl lg:text-xl text-[#111827]">
                {project.institution}
              </span>
              {project.location && (
                <div className="text-gray-600 text-sm md:text-lg font-medium mb-1">
                  {project.location}
                </div>
              )}
            </div>
            <ul className="list-disc pl-5 space-y-3 md:space-y-5 mb-8 text-[#111827]">
              {project.description.map((point, index) => (
                <li
                  key={index}
                  className="text-base md:text-lg lg:text-xl leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
            {project.images && project.images.length > 0 && (
              <>
                <div className="flex gap-4 overflow-x-auto md:hidden pb-4">
                  {project.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`${project.project_title} - snapshot ${
                        imgIndex + 1
                      }`}
                      className="w-32 h-32 object-contain rounded-lg shrink-0 hover:scale-150 transition-all duration-300"
                    />
                  ))}
                </div>
                <div className="hidden md:grid md:grid-cols-6 gap-4">
                  {project.images.map((img, imgIndex) => (
                    <div key={imgIndex}>
                      <img
                        src={img}
                        alt={`${project.project_title} - snapshot ${
                          imgIndex + 1
                        }`}
                        className="object-contain rounded-lg w-full h-full hover:scale-150 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
