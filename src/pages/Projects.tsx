import { projectData } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const Projects = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".projects-header", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      ".project-item",
      { opacity: 0, y: 50, stagger: 0.3, duration: 0.8 },
      "-=0.5"
    );
  }, []);

  return (
    <section className="projects-section pt-20 md:pt-40 md:mx-20 space-y-5 p-7">
      <div className="projects-header space-y-6">
        <h2 className="text-primary text-5xl font-bold">Projects</h2>
        <p className="text-[#111827] text-sm md:text-2xl">
          Work that reflects my passion for improving healthcare through
          engineering, data, and decentralized systems.
        </p>
      </div>
      <div className="bg-tetiary p-6 md:p-12 lg:p-16 md:mt-24 md:mb-20">
        {projectData.map((project, i) => (
          <div key={i} className="project-item mb-12 last:mb-0">
            {/* Header: Stacks on mobile, Row on Desktop */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-2 gap-4 md:gap-0">
              {/* Title */}
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-primary uppercase leading-tight md:max-w-[70%]"
                style={{ whiteSpace: "pre-line" }}
              >
                {project.project_title}
              </h3>

              {/* Institution / Logo */}
              <div className="flex items-center gap-3 text-gray-700 font-medium shrink-0">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D9D9D9]"></div>
                <span className="text-lg md:text-xl lg:text-2xl text-[#111827]">
                  {project.institution}
                </span>
              </div>
            </div>

            {/* Date */}
            <div className="text-gray-500 text-base md:text-xl mb-6 pb-2">
              {project.date}
            </div>

            {/* Description List */}
            <ul className="list-disc pl-5 space-y-3 md:space-y-5 mb-6 text-[#111827]">
              {project.description.map((point, index) => (
                <li
                  key={index}
                  className="text-base md:text-lg lg:text-xl leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <ImageGallery
                images={project.images}
                title={project.project_title}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const ImageGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(images.length > 3);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -270 : 270; // Image width + gap
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white rounded-full p-2 shadow-lg transition-all duration-300"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, imgIndex) => (
            <img
              key={imgIndex}
              src={img}
              alt={`${title} - snapshot ${imgIndex + 1}`}
              className="w-[100px] h-[100px] object-cover rounded-lg shrink-0 hover:scale-105 transition-all duration-300 shadow-md"
            />
          ))}
        </div>
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white rounded-full p-2 shadow-lg transition-all duration-300"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white rounded-full p-3 shadow-lg transition-all duration-300"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, imgIndex) => (
            <img
              key={imgIndex}
              src={img}
              alt={`${title} - snapshot ${imgIndex + 1}`}
              className="w-[250px] h-[250px] object-cover rounded-lg shrink-0 hover:scale-105 transition-all duration-300 shadow-md"
            />
          ))}
        </div>
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white rounded-full p-3 shadow-lg transition-all duration-300"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default Projects;
