import { getRecruiterTopics } from "../app/recruiterProfile";

const url = "https://premtomar.com/";
const topics = getRecruiterTopics("/resume.pdf");
const skills = topics.find((topic) => topic.command === "skills")!;
const exposure = topics.find((topic) => topic.command === "ai")!;
const plans = topics.find((topic) => topic.command === "plans")!;

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${url}#website`,
      url,
      name: "Prem Tomar",
      publisher: { "@id": `${url}#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${url}#profile`,
      url,
      name: "Prem P S Tomar | Staff Engineer at DDN & Software Architect",
      description: "Professional experience, engineering skills, AI/ML exposure, public projects and future academic and engineering goals.",
      isPartOf: { "@id": `${url}#website` },
      mainEntity: { "@id": `${url}#person` },
      hasPart: { "@id": `${url}#console-topic-plans` },
    },
    {
      "@type": "Person",
      "@id": `${url}#person`,
      name: "Prem P S Tomar",
      alternateName: "Prem Tomar",
      url,
      jobTitle: "Staff Engineer",
      worksFor: { "@type": "Organization", name: "DDN", url: "https://ddn.com" },
      description: "Staff Engineer in DDN's Global Engineering team, working on Exascaler. Architecture-first, hands-on engineer with 14+ years in distributed platforms, backend systems, cloud infrastructure and product delivery.",
      homeLocation: { "@type": "Place", name: "Pune, India" },
      sameAs: ["https://www.linkedin.com/in/prem-tomar/", "https://github.com/Prem-Tomar"],
      knowsAbout: [...skills.items.map((item) => item.title), ...exposure.items.flatMap((item) => item.points ?? [])],
    },
    {
      "@type": "WebPageElement",
      "@id": `${url}#console-topic-plans`,
      name: "Future academic and engineering goals",
      about: { "@id": `${url}#person` },
      description: plans.note,
      text: plans.items.map((item) => `${item.title}. ${item.meta}. ${item.detail}`).join("\n"),
    },
  ],
};
