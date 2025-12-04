import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
    <div className="events-section pt-20 md:pt-40 p-7">
      <div className="events-content">Events</div>
    </div>
  );
};
export default Events;
