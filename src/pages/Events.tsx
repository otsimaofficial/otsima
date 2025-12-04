import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { eventPics } from "../constants";

const Events = () => {
  useGSAP(() => {
    gsap.from(".events-content", {
      scrollTrigger: {
        trigger: ".events-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="events-section pt-20 md:pt-40 md:p-7">
      <div className="events-content md:mx-20 ">
        <div className="projects-header space-y-6 p-3 md:p-0">
          <h2 className="text-primary text-5xl font-bold">Events</h2>
          <p className="text-[#111827] text-sm md:text-2xl">
            Highlights from projects, demonstrations, and events that have
            shaped my growth.
          </p>
        </div>
        <div className="bg-tetiary mt-10 md:mt-30 mb-40">
          <p className="text-primary font-bold text-2xl p-3 md:p-10 ml-5 mt-5 md:ml-10 md:mt-5">
            Unilorin Engineering Community Based Experience and Service
            <br className="hidden md:block" />
            (COBES) Program
          </p>

          <div className="grid grid-cols-3 gap-4 p-10  md:max-w-7xl mx-auto">
            <div className="rounded-lg col-span-1">
              <img
                src={eventPics[0].pic}
                alt="Event 1"
                className="w-full aspect-3/4 object-cover  transition-all duration-300 rounded-lg"
              />
            </div>

            <div className="rounded-lg col-span-2">
              <img
                src={eventPics[1].pic}
                alt="Event 2"
                className="w-full h-full aspect-video object-cover  transition-all duration-300 rounded-lg"
              />
            </div>

            <div className="rounded-lg col-span-2">
              <img
                src={eventPics[2].pic}
                alt="Event 3"
                className="w-full h-full aspect-video object-cover  transition-all duration-300 rounded-lg"
              />
            </div>

            <div className="rounded-lg md:col-span-1">
              <img
                src={eventPics[3].pic}
                alt="Event 4"
                className="w-full aspect-3/4 object-cover  transition-all duration-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
