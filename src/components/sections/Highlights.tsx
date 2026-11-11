import { Link } from "react-router-dom";
import type { CSSProperties, ReactNode } from "react";
import {
  appData,
  certificationLinks,
  eventPics,
  experienceData,
  projectData,
  websiteProjects,
} from "../../constants";
import { useMediumArticles } from "../../hooks/useMediumArticles";

const Shell = ({
  id,
  title,
  blurb,
  to,
  children,
}: {
  id: string;
  title: string;
  blurb: string;
  to: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className="bg-tetiary my-5 md:my-10 md:mx-30 p-7 md:p-10 space-y-6"
  >
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
      <div className="space-y-2">
        <h2 className="text-primary text-3xl font-bold">{title}</h2>
        <p className="text-secondary max-w-2xl">{blurb}</p>
      </div>
      <Link
        to={to}
        className="shrink-0 self-start md:self-auto text-primary font-medium border border-primary px-5 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
      >
        View more →
      </Link>
    </div>
    {children}
  </section>
);

/** Slow, endlessly scrolling strip of images. Pauses on hover; click goes to `to`. */
const ImageStrip = ({
  images,
  to,
  seconds = 60,
  className = "h-40 md:h-56",
}: {
  images: string[];
  to: string;
  seconds?: number;
  className?: string;
}) => (
  <Link to={to} className="marquee block overflow-hidden" aria-label="See more">
    <div
      className="marquee-track"
      style={{ "--marquee-duration": `${seconds}s` } as CSSProperties}
    >
      {[...images, ...images].map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className={`${className} w-auto rounded-lg shadow-md shrink-0 mr-4`}
        />
      ))}
    </div>
  </Link>
);

const SiteCard = ({
  href,
  image,
  title,
  sub,
  external = true,
}: {
  href: string;
  image: string;
  title: string;
  sub: string;
  external?: boolean;
}) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
  >
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="w-full aspect-[16/10] object-cover object-top"
    />
    <div className="p-4">
      <p className="font-bold text-primary group-hover:underline">{title}</p>
      <p className="text-secondary text-sm">{sub}</p>
    </div>
  </a>
);

const formatDate = (pubDate: string) => {
  const d = new Date(pubDate);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
};

const Highlights = () => {
  const { articles } = useMediumArticles();
  const experienceImages = experienceData.flatMap((e) => e.images);

  return (
    <>
      <Shell
        id="experience-preview"
        title="Experience"
        blurb="Hands-on work across blockchain development and biomedical engineering in hospitals."
        to="/experience"
      >
        <div className="grid gap-3 md:grid-cols-3">
          {experienceData.map((e, i) => (
            <div key={i} className="bg-white rounded-lg p-4">
              <p className="font-bold text-primary">{e.project_title}</p>
              <p className="text-secondary text-sm">
                {e.institution.split("|").pop()?.trim()}
              </p>
              <p className="text-secondary text-xs mt-1">{e.date}</p>
            </div>
          ))}
        </div>
        <ImageStrip images={experienceImages} to="/experience" seconds={70} />
      </Shell>

      <Shell
        id="certification-preview"
        title="Certifications"
        blurb="Training and certificates from WorldQuant University, LinkedIn Learning, UNITAR and more."
        to="/certificates"
      >
        <ImageStrip
          images={certificationLinks.map((c) => c.pic)}
          to="/certificates"
          seconds={50}
          className="h-44 md:h-64"
        />
      </Shell>

      <Shell
        id="projects-preview"
        title="Projects"
        blurb="Websites I have designed and developed for clients, plus my engineering project work."
        to="/projects"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {websiteProjects.map((w) => (
            <SiteCard
              key={w.url}
              href={w.url}
              image={w.image}
              title={w.name}
              sub={`${w.kind} · ${new URL(w.url).hostname}`}
            />
          ))}
        </div>
        <ImageStrip
          images={projectData.flatMap((p) => p.images)}
          to="/projects"
          seconds={60}
          className="h-28 md:h-36"
        />
      </Shell>

      <Shell
        id="apps-preview"
        title="Apps"
        blurb="Applications I have built myself."
        to="/apps"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {appData.map((a) => (
            <SiteCard
              key={a.name}
              href={a.url}
              image={a.image}
              title={a.name}
              sub={a.displayUrl}
              external={false}
            />
          ))}
        </div>
      </Shell>

      <Shell
        id="events-preview"
        title="Events"
        blurb="Moments from events and communities I have been part of."
        to="/events"
      >
        <ImageStrip
          images={eventPics.map((e) => e.pic)}
          to="/events"
          seconds={40}
          className="h-40 md:h-56"
        />
      </Shell>

      <Shell
        id="blog-preview"
        title="Blog"
        blurb="Writing on health, finance, technology and media."
        to="/blog"
      >
        {articles.length > 0 && (
          <div className="grid gap-3 md:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <a
                key={a.link}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <p className="font-bold text-primary line-clamp-2">
                  {a.title}
                </p>
                <p className="text-secondary text-xs mt-2">
                  {formatDate(a.pubDate)}
                </p>
              </a>
            ))}
          </div>
        )}
      </Shell>
    </>
  );
};
export default Highlights;
