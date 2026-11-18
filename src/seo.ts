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
      name: "Prem P S Tomar | Systems Engineering, Architecture & Leadership",
      description: "Hands-on systems engineering, distributed architecture and technical leadership across concurrent projects, with professional experience, AI/ML exposure and public work.",
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
      description: "Hands-on systems engineer and architect with 14+ years building distributed products, modernizing runtimes and guiding engineers across concurrent projects. Currently Staff Engineer in DDN's Global Engineering team, working on EXAScaler.",
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
