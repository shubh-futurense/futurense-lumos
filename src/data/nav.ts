// Everything shown in the top navigation bar, copied from futurense.com.
// Edit titles, links or order here; the navbar updates by itself.

import { withBase } from "../utils/base.ts";

const L = "https://www.futurense.com";

const LOGO = {
  kharagpur: "A/699bc6705573e2b6ed4c0488_IIT_Kharagpur_Logo.png",
  jodhpur: "A/68b8b512e422462fe7c23727_IIT%20Jodhpur%20Logomark.svg",
  gandhinagar: "A/68db5ce6bff059f373101230_IIT_Gandhinagar%20white.svg",
  roorkee: "A/68a89d7abefa9c2c2aee78ef_IIT%20roorkee%20white.svg",
  jammu: "A/68b8b7abc47386bbf07e7895_IIT%20Jammu%20Logomark.svg",
  pravartak: "A/68b8b11f4fbebc8606e09175_IITM%20Pravartak%20Logo.avif",
  sirmaur: "A/690b767e069777f690c25c3e_Fairfield%20University.png",
};

type Program = { title: string; href: string; logo: string; college?: string };

// Every program once, so the College and Degree views share the same details.
const P = {
  kgpVlsi: { title: "Executive PG Certification in AI-Enabled VLSI Design", href: `${L}/iit-kharagpur/pg-certification-in-ai-enabled-vlsi-design`, logo: LOGO.kharagpur, college: "IIT Kharagpur" },
  kgpMartech: { title: "Executive PG Certificate Program in AI-Powered Marketing & MarTech", href: `${L}/iit-kharagpur/pg-certification-in-ai-powered-marketing-martech`, logo: LOGO.kharagpur, college: "IIT Kharagpur" },
  kgpCyber: { title: "Executive PG Certificate in AI-Enabled Cybersecurity", href: `${L}/iit-kharagpur/pg-certificate-in-ai-enabled-cybersecurity`, logo: LOGO.kharagpur, college: "IIT Kharagpur" },
  jdhBs: { title: "B.S/B.Sc in Applied AI & Data Science", href: `${L}/iit-jodhpur/bachelor-of-science`, logo: LOGO.jodhpur, college: "IIT Jodhpur" },
  jdhData: { title: "PG Diploma and Executive M.Tech in Data Engineering & Agentic AI", href: `${L}/iit-jodhpur/pg-diploma-mtech-data-engineering`, logo: LOGO.jodhpur, college: "IIT Jodhpur" },
  jdhAi: { title: "PG Diploma and Executive M.Tech in Artificial Intelligence (AI)", href: `${L}/iit-jodhpur/mtech-ai`, logo: LOGO.jodhpur, college: "IIT Jodhpur" },
  gnResidential: { title: "Residential PG Diploma in AI-ML & Agentic AI Engineering", href: `${L}/iit-gandhinagar/residential-pg-diploma-in-ai-ml-agentic-ai-engineering`, logo: LOGO.gandhinagar, college: "IIT Gandhinagar" },
  rkMartech: { title: "PG Certificate in AI-Enabled Digital Marketing & MarTech", href: `${L}/iit-roorkee/pg-certificate-ai-digital-marketing-martech`, logo: LOGO.roorkee, college: "IIT Roorkee" },
  rkCyber: { title: "PG Certificate Program in AI/GenAI Powered Cybersecurity", href: `${L}/iit-roorkee/ai-genai-cybersecurity-pg`, logo: LOGO.roorkee, college: "IIT Roorkee" },
  rkCloud: { title: "PG Certificate in AI Engineering on Cloud and AIOps", href: `${L}/iit-roorkee/advanced-pg-certificate-ai-engineering-cloud-aiops`, logo: LOGO.roorkee, college: "IIT Roorkee" },
  rkGenai: { title: "GenAI / Agentic AI & ML Applications for Engineers", href: `${L}/iit-roorkee/genai-and-agentic-ai-iit-roorkee`, logo: LOGO.roorkee, college: "IIT Roorkee" },
  rkEnterprise: { title: "PG Certificate in GenAI, Agentic AI & Data Science for Enterprises", href: `${L}/iit-roorkee/genai-and-agentic-ai-iit-roorkee`, logo: LOGO.roorkee, college: "IIT Roorkee" },
  rkFde: { title: "PG Certificate Program in Forward Deployed AI Engineering", href: `${L}/iit-roorkee/pg-certificate-in-forward-deployed-ai-engineering`, logo: LOGO.roorkee, college: "IIT Roorkee" },
  jmVlsi: { title: "M.Tech in VLSI Design (Executive)", href: `${L}/iit-jammu/mtech-in-vlsi-design`, logo: LOGO.jammu, college: "IIT Jammu" },
  jmGenai: { title: "M.Tech in Generative AI & Data Science (Executive)", href: `${L}/iit-jammu/mtech-in-generative-ai-data-science-executive`, logo: LOGO.jammu, college: "IIT Jammu" },
  jmLlm: { title: "PG Certificate Program in AI-ML Engineering with LLM, SLM & Agentic Development", href: `${L}/iit-jammu/pg-certificate-in-ai-driven-llm-slm-agentic-rag-development`, logo: LOGO.jammu, college: "IIT Jammu" },
  jmAiops: { title: "PG Certificate in Building Professional Agentic AI with AIOps", href: `${L}/iit-jammu/pg-certificate-in-building-professional-agentic-ai-with-aiops`, logo: LOGO.jammu, college: "IIT Jammu" },
  pvFdeEng: { title: "Advanced Executive Program in Forward Deployed AI Engineering", href: `${L}/iitm-pravartak/advanced-executive-program-in-forward-deployed-ai-engineering`, logo: LOGO.pravartak, college: "IITM Pravartak" },
  pvFdePm: { title: "Executive Program in Forward Deployed AI Product Management", href: `${L}/iitm-pravartak/executive-program-in-forward-deployed-ai-product-management`, logo: LOGO.pravartak, college: "IITM Pravartak" },
  pvDesign: { title: "Advanced Certificate Program in AI Powered Product Design and Management", href: `${L}/iitm-pravartak/ai-powered-product-design-and-management`, logo: LOGO.pravartak, college: "IITM Pravartak" },
  pvAgents: { title: "Advanced Engineering Program in Agentic AI Workflows and Agentic System Development", href: `${L}/iitm-pravartak/ai-agents-and-agentic-workflows`, logo: LOGO.pravartak, college: "IITM Pravartak" },
  pvUiux: { title: "Advanced Certificate Program in UI/UX Design with Agentic AI & GenAI", href: `${L}/iitm-pravartak/pg-certificate-in-ui-ux-design-with-agenticai-genai-iitm-pravartak`, logo: LOGO.pravartak, college: "IITM Pravartak" },
  pvContext: { title: "Advanced Engineering Program in Applied AI, ML with Context Engineering", href: `${L}/iitm-pravartak/advanced-engineering-program-in-applied-ai-ml-with-context-engineering`, logo: LOGO.pravartak, college: "IITM Pravartak" },
  smMba: { title: "MBA with AI for Working Professionals", href: `${L}/iim-sirmaur/iim-sirmaur-mba-for-working-professionals`, logo: LOGO.sirmaur, college: "IIM Sirmaur" },
} satisfies Record<string, Program>;

export type ProgramGroup = { name: string; href: string; programs: Program[] };

/** "College" view of the Our Programs menu. */
export const programsByCollegeNav: ProgramGroup[] = [
  { name: "IIT Kharagpur", href: `${L}/iit-kharagpur`, programs: [P.kgpVlsi, P.kgpMartech, P.kgpCyber] },
  { name: "IIT Jodhpur", href: `${L}/iit-jodhpur`, programs: [P.jdhBs, P.jdhData, P.jdhAi] },
  { name: "IIT Gandhinagar", href: `${L}/iit-gandhinagar`, programs: [P.gnResidential] },
  { name: "IIT Roorkee", href: `${L}/iit-roorkee`, programs: [P.rkMartech, P.rkCyber, P.rkCloud, P.rkGenai, P.rkFde] },
  { name: "IIT Jammu", href: `${L}/iit-jammu`, programs: [P.jmVlsi, P.jmGenai, P.jmLlm, P.jmAiops] },
  { name: "IITM Pravartak", href: `${L}/iitm-pravartak`, programs: [P.pvFdeEng, P.pvFdePm, P.pvDesign, P.pvAgents, P.pvUiux, P.pvContext] },
  { name: "IIM Sirmaur", href: `${L}/iim-sirmaur`, programs: [P.smMba] },
];

/** "Degree" view of the Our Programs menu. */
export const programsByDegreeNav: ProgramGroup[] = [
  { name: "PG Diploma & MTech.", href: withBase("uni"), programs: [P.jdhData, P.jdhAi, P.gnResidential, P.jmGenai] },
  {
    name: "PG Certifications",
    href: withBase("uni"),
    programs: [P.pvFdePm, P.kgpCyber, P.pvFdeEng, P.rkMartech, P.pvDesign, P.rkCyber, P.pvAgents, P.rkCloud, P.pvUiux, P.rkGenai, P.rkEnterprise, P.rkFde, P.pvContext, P.jmLlm, P.jmAiops, P.kgpMartech],
  },
  { name: "B.S/B.Sc", href: withBase("uni"), programs: [P.jdhBs] },
  { name: "MBA", href: withBase("uni"), programs: [P.smMba] },
];

export type NavIcon = "book-open" | "sparkle" | "globe" | "users" | "robot" | "book" | "play-circle" | "flag" | "chat";
export type NavLinkItem = { title: string; text: string; href: string; icon: NavIcon };
export type NavColumn = { heading: string; links: NavLinkItem[] };

export const offeringNav: NavColumn[] = [
  {
    heading: "Build Your Career",
    links: [
      { title: "Futurense UNI", text: "Your second chance at the IIT Dream", href: withBase("uni"), icon: "book-open" },
      { title: "Futurense School Of AI", text: "India’s only in-person, AI-first B.Tech with internships", href: `${L}/futurense-school-of-ai`, icon: "sparkle" },
      { title: "Global Pathways", text: "Your fast-track to a global Master’s & career", href: `${L}/global-pathway`, icon: "globe" },
    ],
  },
  {
    heading: "Build Your Workforce",
    links: [
      { title: "Hire AI-Ready Talent On Day 1", text: "Staffing, redefined for speed, skill, and AI-readiness", href: `${L}/hire-ai-ready-talent`, icon: "users" },
      { title: "AI Skilling for Enterprise Teams", text: "Reskill your workforce for tomorrow’s AI-native roles", href: `${L}/ai-skilling-for-enterprise-teams`, icon: "robot" },
    ],
  },
];

export const resourcesNav: NavColumn[] = [
  {
    heading: "Resources",
    links: [
      { title: "Blogs & Insights", text: "Latest news, updates, & info from our expert team", href: `${L}/blog`, icon: "book" },
      { title: "Videos", text: "Our podcasts, resources & FLC's to learn & grow", href: `${L}/video`, icon: "play-circle" },
    ],
  },
  {
    heading: "Company",
    links: [
      { title: "About Us", text: "Learn more about our story, our mission and offerings", href: `${L}/about-us`, icon: "flag" },
      { title: "Press", text: "Stay updated with news and press releases", href: `${L}/media`, icon: "chat" },
      { title: "Careers", text: "We're always looking for talented people. Join us!", href: `${L}/careers`, icon: "users" },
    ],
  },
];

export const featuredBlogs = [
  {
    title: "Forward Deployed Engineers (FDE): What Is It, What They Do, Career, And More",
    href: `${L}/blog/fde-forward-deployed-engineers`,
    image: "B/6943bf07af8febd995613776_FDE.png",
  },
  {
    title: "What is the Difference Between MEAN Stack vs MERN Stack for Web Development?",
    href: `${L}/blog/mean-stack-vs-mern-stack`,
    image: "B/68a967bda140f93a4b8692cc_6874b7ddb02b09cc7bf58f04_MERN%2520Stack%2520vs%2520MEAN%2520Stack.avif",
  },
];

export const navLinksExtra = {
  flc: `${L}/futurense-leadership-council`,
  blog: `${L}/blog`,
  fde: "https://fde.academy/?utm_source=Futurense%20Website",
  contact: `${L}/contact`,
};
