// Search and sharing details for the /uni page, copied from futurense.com/uni.

export const uniSeo = {
  title: "Futurense Uni | Your Second Chance At The IIT Dream",
  description:
    "Pursue your IIT dream with AI-focused degrees, expert mentorship, and real-world experience. Build a future-ready career with Futurense UNI.",
  image:
    "https://cdn.prod.website-files.com/687e11ae076e4c47d227af38/6895bff9fb024a5e69e72a68_Futurence%20Uni.png",
};

const L = "https://futurense.com";
const course = (name: string, provider: string, path: string) => ({
  "@type": "Course",
  name,
  provider: { "@type": "EducationalOrganization", name: provider },
  url: `${L}/${path}`,
});

// Structured data that helps search engines understand the page.
export const uniSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${L}/uni/#webpage`,
  name: uniSeo.title,
  url: `${L}/uni`,
  description: uniSeo.description,
  inLanguage: "en",
  about: {
    "@type": "EducationalOrganization",
    "@id": `${L}/uni/#organization`,
    name: "Futurense UNI",
    description: "Build an AI-first career with IIT-powered degrees, industry mentorship, and real-world learning",
    url: `${L}/uni`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9958871105",
      contactType: "Customer Service",
      email: "info@futurense.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Educational Programs",
      itemListElement: [
        course("PG Diploma and M.Tech in Data Engineering", "IIT Jodhpur", "iit-jodhpur/pg-diploma-mtech-data-engineering"),
        course("PG Diploma and M.Tech in Artificial Intelligence", "IIT Jodhpur", "iit-jodhpur/mtech-ai"),
        course("MBA - Technology", "IIT Jodhpur", "iit-jodhpur/mba-in-technology"),
        course("BS/BSc in Applied AI and Data Science", "IIT Jodhpur", "iit-jodhpur/bachelor-of-science"),
        course("PG Certificate in AI-Enabled Digital Marketing & MarTech", "IIT Roorkee", "iit-roorkee/pg-certificate-ai-digital-marketing-martech"),
        course("PG Certificate Program in AI/GenAI Powered Cybersecurity", "IIT Roorkee", "iit-roorkee/ai-genai-cybersecurity-pg"),
        course("Advanced PG Certificate in AI Engineering on Cloud and AIOps", "IIT Roorkee", "iit-roorkee/advanced-pg-certificate-ai-engineering-cloud-aiops"),
        course("PG Certificate in GenAI, Agentic AI & Data Science for Enterprises", "IIT Roorkee", "iit-roorkee/pg-certificate-in-genai-agentic-ai-data-science-for-enterprises"),
        course("M.Tech in VLSI Design (Executive)", "IIT Jammu", "iit-jammu/mtech-in-vlsi-design"),
        course("Advanced Certificate Program in AI Powered Product Design and Management", "IITM Pravartak", "iit-madras/ai-powered-product-design-and-management"),
        course("Advanced Engineering Program in AI Agent Workflows & Agentic System Development", "IITM Pravartak", "iit-madras/ai-agents-and-agentic-workflows"),
        course("Advanced Certificate Program in UI/UX Design with Agentic AI & GenAI", "IITM Pravartak", "iit-madras/pg-certificate-in-ui-ux-design-with-agenticai-genai-iit-madras"),
        course("Minor Program in FullStack AI Engineering", "IIT Mandi", "iit-mandi/minor-program-in-fullstack-ai-engineering-iit-mandi"),
      ],
    },
  },
};
