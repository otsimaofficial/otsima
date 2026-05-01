import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GridSec = () => {
  useGSAP(() => {
    gsap.from(".grid-item", {
      scrollTrigger: {
        trigger: ".grid-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="grid-section my-5 md:my-10 md:mx-20 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div className="grid-item bg-tetiary max-w-3xl md:h-44 px-9 py-6">
          <h3 className="text-primary text-3xl font-bold">Language Skills</h3>
          <p className="text-xl text-secondary">
            Mother tongue(s): English Language
          </p>
        </div>
        <div className="grid-item bg-tetiary max-w-3xl md:h-[326px] px-9 py-6 space-y-6">
          <h3 className="text-primary text-3xl font-bold">
            Leadership & Management <br /> Experience
          </h3>
          <div>
            <p className="text-xl text-secondary font-bold">
              Technical Director
            </p>
            <p className="text-secondary">
              National Association of Biomedical Engineering Students (NABMES),
              Unilorin Chapter.
            </p>
          </div>
          <div>
            <p className="text-xl text-secondary font-bold">President</p>
            <p className="text-secondary">
              Dunamis Campus Fellowship (DCF), Unilorin Chapter.
            </p>
          </div>
        </div>
        <div className="grid-item bg-tetiary max-w-3xl md:h-[326px] px-9 py-6 space-y-6 md:-mt-40">
          <h3 className="text-primary text-3xl font-bold">
            Volunteering & Community <br /> Service
          </h3>
          <div>
            <p className="text-xl text-secondary font-bold">
              Project Manager, NYSC FINANCIAL <br /> INCLUSION, KADUNA-SOUTH
              NIGERIA
            </p>
            <p className="text-secondary pt-3">
              Task with the duties of planning and coordinating all <br />
              Financial Inclusion CDS activities for my <br />
              unit throughout the service year.
            </p>
          </div>
        </div>
        <div className="grid-item bg-tetiary max-w-3xl md:h-44 px-9 py-6 -mt-2">
          <h3 className="text-primary text-3xl font-bold">
            Professional Memberships & <br /> Affiliations
          </h3>
          <div>
            <p className="text-xl text-secondary font-bold pt-2">
              Graduate Member
            </p>
            <p className="text-secondary">
              The Nigerian Society of Engineers (NSE)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GridSec;
