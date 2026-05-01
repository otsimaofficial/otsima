import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaMedium } from "react-icons/fa6";

const pillars = [
  {
    domain: "Healthcare",
    description:
      "Clinical informatics, health data systems, medical devices, and the future of medicine in emerging economies.",
    topics: [
      "Electronic Health Records (EHR)",
      "Clinical Informatics",
      "AI in Medicine",
      "Blockchain for Health Data",
    ],
  },
  {
    domain: "Finance",
    description:
      "Financial engineering, algorithmic trading, wealth systems, and how value moves in the world.",
    topics: [
      "Algorithmic Trading",
      "Financial Engineering",
      "Wealth Advocacy",
      "Market Systems & Value Creation",
    ],
  },
  {
    domain: "Technology",
    description:
      "Blockchain, smart contracts, decentralized applications, AI, and the responsible use of technology.",
    topics: [
      "Blockchain Development",
      "Smart Contracts & dApps",
      "AI & Data Science",
      "Cloud & Web3 Systems",
    ],
  },
  {
    domain: "Media",
    description:
      "Cinematography, content production, digital storytelling, and building a personal brand that lasts.",
    topics: [
      "Cinematography",
      "Content Production",
      "Digital Marketing",
      "Personal Brand Strategy",
    ],
  },
];

const Blog = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".blog-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".blog-header", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      ".blog-pillar",
      { opacity: 0, y: 50, stagger: 0.2, duration: 0.7 },
      "-=0.4"
    );
  }, []);

  return (
    <section className="blog-section pt-20 md:pt-40 md:mx-20 space-y-5 p-7">
      <div className="blog-header space-y-6">
        <h2 className="text-primary text-5xl font-bold">Writing & Insights</h2>
        <p className="text-[#111827] text-sm md:text-2xl">
          Thoughts and perspectives across Health, Finance, Technology & Media.
        </p>
        <a
          href="https://otsimaofficial.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary border border-primary px-5 py-2 hover:bg-primary hover:text-white transition-all duration-300"
        >
          <FaMedium className="size-5" />
          Read on Medium
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10">
        {pillars.map((pillar) => (
          <div
            key={pillar.domain}
            className="blog-pillar bg-tetiary p-8 md:p-12 space-y-4"
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
              Articles coming soon
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
