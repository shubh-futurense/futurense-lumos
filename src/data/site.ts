import { withBase } from "../utils/base.ts";

// Shared site data: image helper, navigation and footer links.

const CDN_A = "https://cdn.prod.website-files.com/687e11ae076e4c47d227af38/";
const CDN_B = "https://cdn.prod.website-files.com/688494bfcb56ce5a1e341a42/";

// Turns a short path like "A/abc.svg" into the full Webflow image link.
export function img(path: string): string {
  if (path.startsWith("http")) return path;
  if (path.startsWith("A/")) return CDN_A + path.slice(2);
  if (path.startsWith("B/")) return CDN_B + path.slice(2);
  return path;
}

export const LIVE = "https://www.futurense.com";

export const navLinks = [
  { label: "Offering", href: `${LIVE}/hire-ai-ready-talent`, dropdown: [
    { label: "Futurense UNI", href: withBase("uni") },
    { label: "Futurense School of AI", href: `${LIVE}/futurense-school-of-ai` },
    { label: "Global Pathways", href: `${LIVE}/global-pathway` },
    { label: "Hire AI-Ready Talent", href: `${LIVE}/hire-ai-ready-talent` },
    { label: "AI Skilling for Enterprise Teams", href: `${LIVE}/ai-skilling-for-enterprise-teams` },
  ]},
  { label: "FLC", href: `${LIVE}/futurense-leadership-council` },
  { label: "Resources", href: `${LIVE}/blog`, dropdown: [
    { label: "Blogs & Insights", href: `${LIVE}/blog` },
    { label: "Videos", href: `${LIVE}/video` },
    { label: "Press", href: `${LIVE}/media` },
  ]},
];

export const programsByCollege = [
  { college: "IIT Jodhpur", href: `${LIVE}/iit-jodhpur`, programs: [
    { label: "PG Diploma and MTech in Data Engineering and Agentic AI", href: `${LIVE}/iit-jodhpur/pg-diploma-mtech-data-engineering` },
    { label: "PG Diploma and M.Tech in Artificial Intelligence", href: `${LIVE}/iit-jodhpur/mtech-ai` },
    { label: "BS./BSc. in Applied AI and Data Science", href: `${LIVE}/iit-jodhpur/bachelor-of-science` },
  ]},
  { college: "IIT Roorkee", href: `${LIVE}/iit-roorkee`, programs: [
    { label: "PG Certificate in AI-Enabled Digital Marketing & MarTech", href: `${LIVE}/iit-roorkee/pg-certificate-ai-digital-marketing-martech` },
    { label: "PG Certificate Program in AI/GenAI Powered Cybersecurity", href: `${LIVE}/iit-roorkee/ai-genai-cybersecurity-pg` },
    { label: "PG Certificate in AI Engineering on Cloud and AIOps", href: `${LIVE}/iit-roorkee/advanced-pg-certificate-ai-engineering-cloud-aiops` },
    { label: "PG Certificate in GenAI/Agentic AI and ML Applications", href: `${LIVE}/iit-roorkee/genai-and-agentic-ai-iit-roorkee` },
    { label: "PG Certificate Program in Forward Deployed AI Engineering", href: `${LIVE}/iit-roorkee/pg-certificate-in-forward-deployed-ai-engineering` },
  ]},
  { college: "IITM Pravartak", href: `${LIVE}/iitm-pravartak`, programs: [
    { label: "Executive Program in Forward Deployed AI Product Management", href: `${LIVE}/iitm-pravartak/executive-program-in-forward-deployed-ai-product-management` },
    { label: "Advanced Executive Program in Forward Deployed AI Engineering", href: `${LIVE}/iitm-pravartak/advanced-executive-program-in-forward-deployed-ai-engineering` },
    { label: "Advance Certification in AI Powered Product Design & Management", href: `${LIVE}/iitm-pravartak/ai-powered-product-design-and-management` },
    { label: "Advanced Engineering Program in AI Agent Workflows and Agentic Systems Development", href: `${LIVE}/iitm-pravartak/ai-agents-and-agentic-workflows` },
    { label: "Advanced Certification in UI-UX Design with Agentic AI and GenAI", href: `${LIVE}/iitm-pravartak/pg-certificate-in-ui-ux-design-with-agenticai-genai-iitm-pravartak` },
    { label: "Advanced Engineering Program in Applied AI, ML with Context Engineering", href: `${LIVE}/iitm-pravartak/advanced-engineering-program-in-applied-ai-ml-with-context-engineering` },
  ]},
  { college: "IIT Jammu", href: `${LIVE}/iit-jammu`, programs: [
    { label: "M.Tech in VLSI Design", href: `${LIVE}/iit-jammu/mtech-in-vlsi-design` },
    { label: "M.Tech in Generative AI & Data Science", href: `${LIVE}/iit-jammu/mtech-in-generative-ai-data-science-executive` },
    { label: "PG Certificate in AI-Driven LLM, SLM & Agentic RAG Development", href: `${LIVE}/iit-jammu/pg-certificate-in-ai-driven-llm-slm-agentic-rag-development` },
    { label: "PG Certificate in Building Professional Agentic AI with AIOps", href: `${LIVE}/iit-jammu/pg-certificate-in-building-professional-agentic-ai-with-aiops` },
  ]},
  { college: "IIT Gandhinagar", href: `${LIVE}/iit-gandhinagar`, programs: [
    { label: "PG Diploma in AI-ML & Agentic AI Engineering", href: `${LIVE}/iit-gandhinagar/residential-pg-diploma-in-ai-ml-agentic-ai-engineering` },
  ]},
  { college: "IIM Sirmaur", href: `${LIVE}/iim-sirmaur`, programs: [
    { label: "MBA with AI for Working Professionals", href: `${LIVE}/iim-sirmaur/iim-sirmaur-mba-for-working-professionals` },
  ]},
  { college: "IIT Kharagpur", href: `${LIVE}/iit-kharagpur`, programs: [
    { label: "Executive PG Certification in AI-Enabled VLSI Design", href: `${LIVE}/iit-kharagpur/pg-certification-in-ai-enabled-vlsi-design` },
    { label: "Executive PG Certificate Program in AI-Powered Marketing & MarTech", href: `${LIVE}/iit-kharagpur/pg-certification-in-ai-powered-marketing-martech` },
    { label: "Executive PG Certificate in AI-Enabled Cybersecurity", href: `${LIVE}/iit-kharagpur/pg-certificate-in-ai-enabled-cybersecurity` },
  ]},
];

export const footerColumns = [
  { title: "Offerings", links: [
    { label: "Futurense UNI", href: withBase("uni") },
    { label: "Global Pathways", href: `${LIVE}/global-pathway` },
    { label: "Futurense School Of AI", href: `${LIVE}/futurense-school-of-ai` },
    { label: "AI Skilling for Enterprise", href: `${LIVE}/ai-skilling-for-enterprise-teams` },
    { label: "Hire AI-Ready Talent", href: `${LIVE}/hire-ai-ready-talent` },
  ]},
  { title: "Company", links: [
    { label: "About us", href: `${LIVE}/about-us` },
    { label: "Careers", href: `${LIVE}/careers` },
    { label: "Press", href: `${LIVE}/media` },
    { label: "Refer & Earn", href: `${LIVE}/referral` },
    { label: "Contact", href: `${LIVE}/contact` },
  ]},
  { title: "Resources", links: [
    { label: "Blogs & Insights", href: `${LIVE}/blog` },
    { label: "Videos", href: `${LIVE}/video` },
    { label: "Futurense Leadership Council", href: `${LIVE}/futurense-leadership-council` },
    { label: "FDE Academy", href: "https://fde.academy/" },
  ]},
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/futurensetech" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/futurense-technologies/" },
  { label: "X", href: "https://x.com/futurense" },
  { label: "YouTube", href: "https://www.youtube.com/@FuturenseTechnologies" },
  { label: "Facebook", href: "https://www.facebook.com/futurensetech/" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: `${LIVE}/privacy-policy` },
  { label: "Terms & Conditions", href: `${LIVE}/terms-and-conditions` },
  { label: "Refund Policy", href: `${LIVE}/refund-policy` },
  { label: "Cancellation Policy", href: `${LIVE}/cancellation-policy` },
  { label: "Sitemap", href: `${LIVE}/sitemap.xml` },
];
