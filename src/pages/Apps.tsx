import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub } from "react-icons/fa";

const pillars = [
  {
    domain: "Fintech",
    description:
      "Applications exploring trading systems, personal finance tools, and how algorithmic thinking applies to real markets.",
    topics: [
      "Algorithmic Trading Tools",
      "Personal Finance Dashboards",
      "Payment & Wallet Systems",
      "Market Data Visualization",
    ],
  },
  {
    domain: "Developer Tools",
    description:
      "Full-stack platforms and utilities that put software engineering and blockchain skills into practice.",
    topics: [
      "Blockchain & Web3 dApps",
      "Developer Productivity Tools",
      "API & Backend Systems",
      "Open Source Utilities",
    ],
  },
];

const Apps = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".apps-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".apps-header", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      ".apps-pillar",
      { opacity: 0, y: 50, stagger: 0.2, duration: 0.7 },
      "-=0.4"
    );
  }, []);

  return (
    <section className="apps-section pt-20 md:pt-40 md:mx-20 space-y-5 p-7">
      <div className="apps-header space-y-6">
        <h2 className="text-primary text-5xl font-bold">Apps</h2>
        <p className="text-[#111827] text-sm md:text-2xl">
          Web applications built to put fintech engineering and developer
          skills into practice.
        </p>
        <a
          href="https://github.com/otsimaofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary border border-primary px-5 py-2 hover:bg-primary hover:text-white transition-all duration-300"
        >
          <FaGithub className="size-5" />
          View on GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10">
        {pillars.map((pillar) => (
          <div
            key={pillar.domain}
            className="apps-pillar bg-tetiary p-8 md:p-12 space-y-4"
          >
            <span className="text-xs font-medium text-primary border border-primary px-3 py-1 rounded-full">
              {pillar.domain}
            </span>
            <p className="text-[#111827] text-sm md:text-base mt-4">
              {pillar.description}
            </p>
            <ul className="space-y-2 mt-4">
              {pillar.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-center gap-2 text-secondary text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-6 italic">
              In development — first app launching soon
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Apps;
