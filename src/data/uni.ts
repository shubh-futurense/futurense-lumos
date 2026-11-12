// All content for the /uni page lives here.
// To change text, images or links, edit this file. The page updates by itself.

export const hero = {
  tag: "Futurense UNI",
  titleStart: "Your Second Chance At the", // shown with a line break after "Chance"
  titleAccent: "IIT Dream",
  text: "Build an AI-first career with IIT-powered degrees, industry mentorship, and real-world learning.",
  button: { label: "View All Programs", href: "#programs" },
  proofText: "5000+ students already pursuing their IIT dream through Futurense UNI pathways",
  faces: [
    { src: "B/68ba5aca5590684da51c79e5_Vidyut-Bhaskar.avif", name: "Vidyut Bhaskar" },
    { src: "B/68ba5aa571476cae930f796a_Bhupesh-Bindal.avif", name: "Bhupesh Bindal" },
    { src: "B/68ba5a7a5a2c123e3f0331eb_Sachin-Patil.avif", name: "Sachin Patil" },
    { src: "B/68ba5a5ca07c84ed2a29dc09_Vipin-Naudiyal.avif", name: "Vipin Naudiyal" },
  ],
  benefits: [
    { icon: "A/688f3420cf4ebc19a69344ad_Global%20IIT%20IIM%20Certification.svg", label: "Masterclass by Industry Experts" },
    { icon: "A/688f33d9a349082675c45cc6_Save%20up%20to%2060%25.svg", label: "Online + Campus Immersion" },
    { icon: "A/688f33d9f24d1d18755b3a3d_IELTS%20required.svg", label: "Waiver from JEE/GATE/CAT" },
    { icon: "A/688f33d9cafb9a935e6c81c6_100%25%20Loan%20Assistance%20%2B%20VISA%20Support.svg", label: "Low-cost EMI Options Available" },
  ],
  programOptions: ["PG Diploma & MTech.", "PG Certifications", "MBA Tech", "B.S/B.Sc"],
};

export const partners = [
  { src: "A/68a89a384032dcb60754998b_IIM%20Luchnow%20white.svg", name: "IIM Lucknow" },
  { src: "A/68b88381005b895802ce52c0_IIT%20Jodhpur%20White.png", name: "IIT Jodhpur" },
  { src: "A/68b00f37acb34b61f40bed1a_IIT%20Roorkee%20Full%20Logo%20white.avif", name: "IIT Roorkee" },
  { src: "A/68a89a39161c3444ff80abf4_IIT%20Jammu%20white.svg", name: "IIT Jammu" },
  { src: "A/68a89a3be6bcea6596cfe533_IIT%20Mandi%20White.svg", name: "IIT Mandi" },
  { src: "A/68a89a366301bd783bb13a21_IIM%20Udaipur%20White.svg", name: "IIM Udaipur" },
  { src: "A/68a89a36e92bd0599dd444d6_IIM%20Indire%20white.svg", name: "IIM Indore" },
];

// degree: "pgd" = PG Diploma & MTech, "cert" = PG Certifications, "mba" = MBA, "bs" = B.S/B.Sc
export const degreeTabs = [
  { id: "pgd", label: "PG Diploma & MTech." },
  { id: "cert", label: "PG Certifications" },
  { id: "mba", label: "MBA" },
  { id: "bs", label: "B.S/B.Sc" },
];

export const collegeTabs = [
  "IIT Roorkee", "IIT Jodhpur", "IITM Pravartak", "IIT Jammu", "IIT Gandhinagar", "IIT Kharagpur", "IIM Sirmaur",
];

const L = "https://www.futurense.com";
export const programs = [
  { college: "IIT Gandhinagar", degree: "pgd", title: "Residential PG Diploma in AI-ML & Agentic AI Engineering curated for FDE roles", duration: "6-Month Residential", start: "Start Date: 21st February, 2027", image: "A/6a7580a4aad25c81acae3836_IIT%20Gandhinagar%20-%20Residential%20PG%20Diploma%20in%20AI-ML%20%26%20Agentic%20AI%20Engineering%20thumbnail23.avif", href: `${L}/iit-gandhinagar/residential-pg-diploma-in-ai-ml-agentic-ai-engineering` },
  { college: "IIT Jammu", degree: "pgd", title: "M.Tech in Generative AI & Data Science (Executive)", duration: "24 Months | Online", start: "Start Date: 25th December, 2026", image: "A/6936c4ac1b0a2f3459461de0_IIT%20Jammu%20-%20M.Tech%20in%20Generative%20AI%20%26%20Data%20Science%20(Executive).avif", href: `${L}/iit-jammu/mtech-in-generative-ai-data-science-executive` },
  { college: "IIT Jodhpur", degree: "pgd", title: "PG Diploma and Executive M.Tech in Data Engineering & Agentic AI", duration: "12 months | Online", start: "Start Date: 25th December, 2026", image: "A/68b55d317e64b73b8a511bcc_IIT%20Jodhpur%20-%20Post%20Graduate%20Diploma%20%26%20MTech.%20in%20Data%20Engineering.avif", href: `${L}/iit-jodhpur/pg-diploma-mtech-data-engineering` },
  { college: "IIT Jammu", degree: "pgd", title: "M.Tech in VLSI Design (Executive)", duration: "24 months | Online", start: "Start Date: 25th December, 2026", image: "A/68b55d62a6dae8bd34359982_IIT%20Jammu%20-%20MTech.%20in%20VLSI%20Design.avif", href: `${L}/iit-jammu/mtech-in-vlsi-design` },
  { college: "IIT Jodhpur", degree: "pgd", title: "PG Diploma and Executive M.Tech in Artificial Intelligence (AI)", duration: "12 months | Online", start: "Start Date: 25th December, 2026", image: "A/68b55d18723be6c506265e7f_IIT%20Jodhpur%20-%20Post%20Graduate%20Diploma%20%26%20MTech.%20in%20Artificial%20Intelligence.avif", href: `${L}/iit-jodhpur/mtech-ai` },
  { college: "IITM Pravartak", degree: "cert", title: "Executive Program in Forward Deployed AI Product Management", duration: "4 Months", start: "Start Date: 15th October, 2026", image: "A/6a845aed80596fc9020b4a9d_IITM%20Pravartak%20-%20Forward%20Deployed%20AI%20Product%20Management.avif", href: `${L}/iitm-pravartak/executive-program-in-forward-deployed-ai-product-management` },
  { college: "IITM Pravartak", degree: "cert", title: "Advanced Executive Program in Forward Deployed AI Engineering", duration: "3-4 Months", start: "Start Date: 26th Sep (Tentative)", image: "A/6a50a18f0773e3519d7b1b82_IITM%20Pravartak%20-%20Forward%20Deployed%20AI%20Engineering..avif", href: `${L}/iitm-pravartak/advanced-executive-program-in-forward-deployed-ai-engineering` },
  { college: "IIT Kharagpur", degree: "cert", title: "Executive PG Certificate in AI-Enabled Cybersecurity", duration: "08 months", start: "Start Date: September 2026 (Tentative)", image: "A/6a4df12e8d29cf304825eb34_Executive%20PG%20Certification%20in%20%E2%80%A8Cybersecurity.avif", href: `${L}/iit-kharagpur/pg-certificate-in-ai-enabled-cybersecurity` },
  { college: "IIT Kharagpur", degree: "cert", title: "Executive PG Certificate Program in AI-Powered Marketing & MarTech", duration: "08 months", start: "Start Date: December 2026 (Tentative)", image: "A/6a26a97fc541dc1297dc65cc_IIT%20Kharagpur%20MarTech.avif", href: `${L}/iit-kharagpur/pg-certification-in-ai-powered-marketing-martech` },
  { college: "IIT Kharagpur", degree: "cert", title: "Executive PG Certification in AI-Enabled VLSI Design", duration: "08 months", start: "Start Date: 31st October (Tentative)", image: "A/69c3d88b10ab43e6356e1916_Executive%20PG%20Certification%20in%20%E2%80%A8AI-Enabled%20VLSI%20Design.avif", href: `${L}/iit-kharagpur/pg-certification-in-ai-enabled-vlsi-design` },
  { college: "IIT Jammu", degree: "cert", title: "PG Certificate Program in AI-ML Engineering with LLM, SLM & Agentic Development", duration: "07 months", start: "Start Date: June 2026 (Tentative)", image: "A/6984352a8df26d61db56349d_IIT%20Jammu%20-%20LLM%2C%20SLM%20%26%20Agentic%20RAG%20Development.avif", href: `${L}/iit-jammu/pg-certificate-in-ai-driven-llm-slm-agentic-rag-development` },
  { college: "IIT Roorkee", degree: "cert", title: "PG Certificate Program in Forward Deployed AI Engineering", duration: "03 Months", start: "Start Date: Sept, 2026 (Tentative)", image: "A/69649edb9366705ff4c21470_IIT%20Roorkee%20-%20PG%20Certificate%20Program%20in%20Forward%20Deployed%20AI%20Engineering.avif", href: `${L}/iit-roorkee/pg-certificate-in-forward-deployed-ai-engineering` },
  { college: "IITM Pravartak", degree: "cert", title: "Advanced Engineering Program in Applied AI, ML with Context Engineering", duration: "06 months", start: "Start Date: May 2026 (Tentative)", image: "A/696a0bb0b80f2c2e1007f5be_IITM%20Pravartak%20-%20Advanced%20Engineering%20Program%20in%20Applied%20AI%2C%20ML%20with%20Context%20Engineering.avif", href: `${L}/iitm-pravartak/advanced-engineering-program-in-applied-ai-ml-with-context-engineering` },
  { college: "IIT Jammu", degree: "cert", title: "PG Certificate in Building Professional Agentic AI with AIOps", duration: "07 months", start: "Start Date: 4th July 2026 (Tentative)", image: "A/6984354b4a3b0c8d7b043fae_IIT%20Jammu%20-%20Agentic%20AI%20with%20AIOps.avif", href: `${L}/iit-jammu/pg-certificate-in-building-professional-agentic-ai-with-aiops` },
  { college: "IIT Roorkee", degree: "cert", title: "PG Certificate in AI-Enabled Digital Marketing & MarTech", duration: "06 months | Online", start: "Start Date: 25th June, 2026", image: "A/68b55c673c940a53d353ffce_IIT%20Roorkee%20-%20PG%20Certificate%20in%20AI-Enabled%20Digital%20Marketing%20%26%20MarTech.avif", href: `${L}/iit-roorkee/pg-certificate-ai-digital-marketing-martech` },
  { college: "IITM Pravartak", degree: "cert", title: "Advanced Certificate Program in AI Powered Product Design and Management", duration: "07 months | Online", start: "Start Date: 8th August, 2026 (Tentative)", image: "A/68d391d6284dc91db1a94af5_ai%20powered.avif", href: `${L}/iitm-pravartak/ai-powered-product-design-and-management` },
  { college: "IIT Roorkee", degree: "cert", title: "PG Certificate Program in GenAI/Agentic AI and ML Applications for Engineers", duration: "11 months | Online", start: "Start Date: 5th December, 2026 (Tentative)", image: "A/68b55c68b1bdb32f607a89d6_Agentic%20AI%20and%20ML%20Applications%20for%20Engineers.avif", href: `${L}/iit-roorkee/genai-and-agentic-ai-iit-roorkee` },
  { college: "IITM Pravartak", degree: "cert", title: "Advanced Engineering Program in AI Agent Workflows & Agentic System Development", duration: "07 months | Online", start: "Start Date: October (Tentative)", image: "A/68d391d3e6f05b133b163248_workflows.avif", href: `${L}/iitm-pravartak/ai-agents-and-agentic-workflows` },
  { college: "IIT Roorkee", degree: "cert", title: "PG Certificate Program in AI/GenAI Powered Cybersecurity", duration: "7 - 8 months | Online", start: "Start Date: March 2026 (Tentative)", image: "A/68b55c67145c9dc5b6305e5d_GenAI%20Powered%20Cybersecurity.avif", href: `${L}/iit-roorkee/ai-genai-cybersecurity-pg` },
  { college: "IITM Pravartak", degree: "cert", title: "Advanced Certificate in UI/UX Design with Agentic AI and GenAI", duration: "08 months | Online", start: "Start Date: November, 2026 (Tentative)", image: "A/68d391d6123ad838ad185188_uiux.avif", href: `${L}/iitm-pravartak/pg-certificate-in-ui-ux-design-with-agenticai-genai-iitm-pravartak` },
  { college: "IIT Roorkee", degree: "cert", title: "Advanced PG Certificate in AI Engineering on Cloud and AIOps", duration: "09 months | Online", start: "Start Date: 31st October, 2026", image: "A/68b55c686a767c608094f4b0_IIT%20Roorkee%20-%20Advanced%20PG%20Certificate%20in%20AI%20Engineering%20on%20Cloud%20and%20AIOps.avif", href: `${L}/iit-roorkee/advanced-pg-certificate-ai-engineering-cloud-aiops` },
  { college: "IIM Sirmaur", degree: "mba", title: "MBA with AI for Working Professionals", duration: "24 Months | 6 Trimesters", start: "Start Date: 21st February, 2027", image: "A/690b74583c90919c1cec84ee_IIM%20Sirmaur%20-%20MBA%20with%20AI%20for%20Working%20Professionals%20(1).avif", href: `${L}/iim-sirmaur/iim-sirmaur-mba-for-working-professionals` },
  { college: "IIT Jodhpur", degree: "bs", title: "BS./BSc. in Applied AI and Data Science", duration: "3 - 4 Years | Online", start: "Start Date: 25th December, 2026", image: "A/68b55d3234824293b01af689_BSc.%20in%20Applied%20AI%20%26%20Data%20Science.avif", href: `${L}/iit-jodhpur/bachelor-of-science` },
];

export const stats = [
  { value: "3,000", suffix: "+", label: "Students Enrolled" },
  { value: "3X", suffix: "", label: "Salary Growth" },
  { value: "540", suffix: "+", label: "Hiring Partners" },
  { value: "5000", suffix: "+", label: "Students" },
];

export const studentTestimonials = [
  { name: "Shivam Srivastava", role: "FPGA Developer → Senior Engineer Emulation FPGA SDIL → Qualcomm", quote: "Futurense is helping students in a really great way to achieve the dreams of higher education in a much simpler way", photo: "B/68bbc11b70a184570604b706_Shivam-Srivastava.avif", logo: "B/68bbc121634add50124de877_Qualcomm.svg" },
  { name: "Saurabh Sharma", role: "Executive – Audit → Associate IT Security, CONNEQT Business Solutions Ltd → MTX Group", quote: "Gained valuable exposure through hands-on training and project-based learning, which provided a strong foundation in key technical and analytical skills. Further enhanced my practical understanding and industry readiness through a structured program at Futurense Technologies.", photo: "B/68bbc0dee3ff391568c35490_Saurabh-Sharma.avif", logo: "B/68bbc0e9d9282a20f3da19dd_MTX%20Group.avif" },
  { name: "Deepak Virendra Yadav", role: "Technical Specialist – ITSM Consultant, Hexaware Technologies", quote: "The MBA in Technology at IIT Jodhpur is the perfect blend of management and tech, exactly what working professionals like me need. Futurense.Uni has made the entire process seamless, from admissions to live mentorship sessions.", photo: "B/68bbc089e4df33230893b576_Deepak-Virendra-Yadav.avif", logo: "B/68bbc09b9cdf82cd1880687d_Hexaware%20Technologies.svg" },
  { name: "Manish Kumar Pandey", role: "Senior Manager – Assistant General Manager, Hero Future Energies", quote: "Pursuing the MBA in Technology at IIT Jodhpur through Futurense.Uni has been a valuable step toward aligning my skills with the future of the Renewable Energy sector. The program offers a solid foundation for tech-driven leadership.", photo: "B/68bbbec3f73e7e3bde32420a_Manish-Kumar-Pandey.avif", logo: "B/68bbbecb54bc3056d2eb18c8_Hero%20Future%20Energies.avif" },
  { name: "Puru Baranwal", role: "Data Engineer, Futurense Technology Pvt. Ltd. – Tredence Analytics", quote: "Without Futurense, this opportunity would’ve never been possible, I’m forever grateful. It’s helped me take a real step forward in my career as a Data Engineer.", photo: "B/68bbbe8bbc281d5faeebaf11_Puru-Baranwal.avif", logo: "B/68bbbe97ab179973ad93a9ab_Tredence%20Analytics.svg" },
  { name: "Pallavi Sarangi", role: "Senior Executive – Operations, Allen Career Institute Pvt. Ltd", quote: "It was an awesome experience! The program was well-structured, engaging, and packed with useful takeaways that I could immediately apply in my day-to-day work. Truly worthwhile", photo: "B/68bbbe3a1ad3961cee0fd7c0_Pallavi-Sarangi.avif", logo: "B/68bbbe428a46b1980e6e5879_Allen%20Career%20Institute%20Pvt.%20Ltd.avif" },
  { name: "Datteshkumar S Gurjar", role: "Owner, Freelancer", quote: "The program was a good learning experience. The sessions were insightful and gave me the flexibility to pick up new skills at my own pace. It definitely added value to my freelance work", photo: "B/68bbbe0ac89a326c5255bfe6_Datteshkumar-S-Gurjar.avif", logo: "" },
  { name: "Syed Mohd Zair", role: "Senior Technology Manager, ODN Digital Services", quote: "The learning journey was great. The curriculum was thoughtfully crafted, and the sessions were impactful. A solid choice for professionals looking to sharpen their technical edge.", photo: "B/68bbbdcd3aeba3d3f35e2992_Syed-Mohd-Zair.avif", logo: "B/68bbbdd95aa1915061eb7616_ODN%20Digital%20Services.avif" },
  { name: "Sankalita Chakraborty", role: "Software Developer 1, FedEx", quote: "The admission process was smooth, and the program structure made it easy to stay engaged. It was a good opportunity to strengthen my foundational skills and stay updated with current trends", photo: "B/68bbbceb21e9c1f8a0a820c1_Sankalita-Chakraborty.avif", logo: "B/68bbbcf08bba67e99e5189f3_FedEx.svg" },
  { name: "Dr. Paritosh Srivastava", role: "Faculty, G D Goenka University", quote: "Truly excellent. The program was thoughtfully designed and intellectually stimulating. It bridged the gap between academic understanding and industry relevance very well", photo: "B/68bbbcb57f8990eb1e04989b_Dr.-Paritosh-Srivastava.avif", logo: "B/68bbbcbca972e47133ba408e_G%20D%20Goenka%20University.avif" },
  { name: "Muraliedhar Kanchibhotla", role: "Senior Member Technical Staff, Oracle India Pvt Ltd", quote: "A well-designed program that delivered practical insights. The learning environment was supportive, and the technical depth was impressive. It definitely helped me grow in my role", photo: "B/68bbbc37de72cd452bcb4caf_Muraliedhar-Kanchibhotla.avif", logo: "B/68bbbc3fc2801cb66f7e6e54_Oracle_logo.svg" },
  { name: "Madhukar Boddukuri", role: "Technical Manager, HCL Technologies", quote: "As a technical manager, I found the sessions extremely relevant and actionable. The mentor insights helped me think sharper and lead better.", photo: "B/68bbbb408e22a62ce5b1d201_Madhukar-Boddukuri.avif", logo: "B/68bbbb469c8527d4df9a7b84_HCL%20Technologies.svg" },
  { name: "Vamsi Krishna Akavarapu", role: "Software Sr Principal Engineer, Archer IRM", quote: "As someone senior in tech, it's rare to find a program that truly adds value, this one did. The sessions were practical, mentors knew their stuff, and the learnings were directly applicable to my job", photo: "B/68bbb9eb3a90b9653d8b3cd9_Vamsi-Krishna-Akavarapu.avif", logo: "B/68bbb9f375351f8186eaa74e_Archer%20IRM.svg" },
  { name: "Titash Bhattacharya", role: "Sr. Technology Manager, Carrier Technologies - Kidde Global Solutions", quote: "I believe the best investment is investing in yourself. And in the age of AI, upskilling in this space is not an option; it's mandatory.", photo: "B/68bbb8a662917a51ad288164_Titash-Bhattacharya.avif", logo: "B/68bbb8b871def77c36dcfc37_Carrier%20Technologies%20.svg" },
  { name: "Nitin Kumar", role: "BI Analyst, Element 14", quote: "The PGD & MTech in Data Engineering from IIT Jodhpur has been a great journey so far. The support from the Futurense team has been helpful at every step, making the experience smooth and enriching.", photo: "B/68bbb63cedc8bc86bf6a53be_Nitin-Kumar.avif", logo: "B/68bbb65170a1845706039495_Element%2014.svg" },
  { name: "Nupur Gupta", role: "Senior Engineer, VF Corp", quote: "Enrolling in the PGD & MTech in Data Engineering has been a great decision for my career. Thanks to the support from the Futurense team, I now have a clear direction towards data platform roles.", photo: "B/68bbafb471def77c36dc3b86_Nupur-Gupta.avif", logo: "B/68bbb5fb1ad3961cee0eed02_VF%20Corp.svg" },
];

export const whyPoints = [
  ["Optional Campus Immersion", "Waiver from GATE/JEE"],
  ["Hands-on with AI Clinic", "High Demand in AI & Tech", "Career Support from Day-1"],
  ["Low-Cost EMI Available", "Mentorship from Industry Leaders", "Access to Futurense Breakfast Club"],
];
export const whyBackground = "A/689d40387b5a91e0b943e8b9_bg%20pointers%20benefits.svg";

export const leapStories = [
  { name: "Aniruddha Shahapure", now: "Director/ Board Member", photo: "A/68c14c25e71b8c72bd172b79_Aniruddha%20Shahapure.avif", linkedin: "https://www.linkedin.com/in/aniruddhashahapure/", before: { role: "SVP / COO", company: "Cyan Connode" }, after: { role: "Director/ Board Member", company: "Quantastic Solution" }, change: "Upgrade" },
  { name: "Raghav Patidar", now: "Data Engineer", photo: "A/68c14c2535d30fd44bd4229d_Raghav%20Patidar.avif", linkedin: "https://www.linkedin.com/in/purubaranwal", before: { role: "Tata Consultancy Services", company: "Developer" }, after: { role: "Tata Consultancy Services", company: "Data Engineer" }, change: "Upgrade" },
  { name: "Akshay Siva G S", now: "RF Design Engineer", photo: "A/68c14c243421c8fc1c17c48b_Akshay%20Siva%20G%20S.avif", linkedin: "https://www.linkedin.com/in/sudamasharma/", before: { role: "ISTRAC -ISRO", company: "Tessolve Semiconductor Pvt Ltd." }, after: { role: "ISTRAC -ISRO", company: "SRM Technologies PVT" }, change: "Upgrade" },
  { name: "Saurabh Sharma", now: "Associate IT Security", photo: "A/68c14c242798845d7dc51143_Saurabh%20Sharma.avif", linkedin: "https://www.linkedin.com/in/saurabh-sharma-491a9116a/", before: { role: "Executive - Audit", company: "CONNEQT Business Solutions" }, after: { role: "Associate IT Security", company: "MTX Group" }, change: "Upgrade" },
  { name: "Vivek Kumar Srivastava", now: "SDE, Apple", photo: "A/68c14c246de8099cb36083a9_Vivek%20Kumar%20Srivastava.avif", linkedin: "https://www.linkedin.com/in/vivek-kumar-7ba94887/", before: { role: "", company: "Team Lead" }, after: { role: "", company: "Software Development Engineer" }, change: "Role" },
  { name: "Manish Kumar Pandey", now: "Assistant General Manager, Hero future energies", photo: "A/68c14c25f4b28909c2e01391_Manish%20Kumar%20Pandey.avif", linkedin: "https://www.linkedin.com/in/manish-pandey-bb33a427", before: { role: "", company: "Senior Manager" }, after: { role: "", company: "Assistant General Manager" }, change: "Role" },
];

export const careerSupport = [
  { title: "Diagnostic Test & Evaluations", text: "Start with a test and multiple evaluations to sharpen product thinking and AI skills.", image: "A/68a6a79072d5b4031c8ca5c2_Diagnostic%20Test%20%26%20Evaluations.avif" },
  { title: "Live Industry Sessions", text: "2-3 monthly Chai Talks, AI workshops, and career discussions with industry leaders.", image: "A/68a6a790f4e33655e4a8c92a_Live%20Industry%E2%80%A8Sessions.avif" },
  { title: "Exclusive 1:1 Mentorship", text: "Offered for top performers meeting benchmarks, includes personal mentorship and mock interview.", image: "A/68a6a7909f02c4e2d42f6a67_Exclusive%201_1%E2%80%A8Mentorship.avif" },
  { title: "Breakfast Club", text: "Weekly alumni meetups with case discussions and hiring lead exchanges.", image: "A/68a6a790491dbc51919c8c5f_Futurense%E2%80%A8Breakfast%20Club_.avif" },
  { title: "Real Projects at AI Clinic", text: "Work on live RFPs and challenges to build a strong industry-relevant portfolio.", image: "A/68a6a790f2574b2daaa5e200_Real%20Projects%E2%80%A8at%20AI%20Clinic.avif" },
  { title: "Resume That Gets Shortlisted", text: "Workshops & expert reviews focused on creating resumes tailored for leadership roles.", image: "A/68a6a790ecf6530ae521d634_Resume%20That%20Gets%20Shortlisted.avif" },
  { title: "Mock Interviews & Feedback", text: "Simulated interviews with actionable performance feedback.", image: "A/68a6a790814481daf8eafce1_Mock%20Interviews%20%26%20Feedback_.avif" },
];

export const steps = [
  { title: "Talk to Our Counsellor", text: "Understand your profile, goals, and get mapped to the right IIT program for your career." },
  { title: "Apply & Take Test", text: "Appear for the Qualifying Test, facilitated and guided end-to-end by Futurense" },
  { title: "Clear Interview & Get Offer", text: "Crack your personal interview and receive your official IIT admission offer." },
  { title: "Pay Fee & Bridge Course", text: "Pay the program fee and complete a free pre-program bridge course led by Futurense." },
  { title: "Start Your IIT Degree", text: "Begin your live IIT classes with project-based learning and mentorship from industry experts." },
  { title: "Optional Campus Immersion", text: "Experience IIT life first-hand through an on-campus immersion (optional)." },
  { title: "Launch AI-First Career", text: "Secure a new role or get promoted in AI, data, or emerging tech fields." },
];
export const stepsImage = "A/68a6b47f86f775c6bc9b8ee7_How%20Futurense%20UNI%20Works_-p-500.avif";

export const flcPillars = [
  { title: "Deliver Real-World Insights", text: "Lead masterclasses, use cases, and product teardown sessions.", icon: "A/6895af08814d989574c0d9ff_Deliver%20Real-World%20Insights.svg" },
  { title: "Design Future-Ready Curriculums", text: "Shape next-gen learning experiences with hands-on, outcome-driven programs.", icon: "A/6895af08305e3cea30224898_Design%20Future-Ready%20Curriculums.svg" },
  { title: "Direct Your Career Path", text: "Offer mentorship, career talks, and mock interviews for job-readiness.", icon: "A/6895af08ed163549e79fbb1b_Direct%20Your%20Career%20Path.svg" },
];
export const flcArrows = "A/6895ab1e7c45c0628d6552a3_3%20arrows.svg";
export const flcLogo = "A/68bae21f2c9984d23c366cd2_FLC%20logo%20black.svg";

export const flcMembers = [
  { name: "Pankaj Rai", title: "Group Chief Data and Analytics Officer, Aditya Birla Group", bio: "Pankaj is a seasoned data and analytics leader with over 25 years of experience. He has led data-driven transformation initiatives across sectors, focusing on strategy, analytics, and operational excellence to drive business growth.", photo: "B/68badee9f78cbbc84cd90d15_Pankaj%20Rai.avif", logo: "B/68afe64d87f2910b01a5deb5_Aditya_Birla_Group.avif" },
  { name: "Tushar Sahu", title: "Director Engineering, Google", bio: "Tushar leads a large engineering organization focused on innovation and product excellence. With expertise in AI applications and enterprise commerce, he drives commercial growth and fosters a diverse, inclusive culture.", photo: "B/68baddf456033bdeb46e98e3_Tushar%20Sahu.avif", logo: "B/68afe6fb3bc9280fcf7325ee_Google.svg" },
  { name: "Vishal Nagpal", title: "Director of Data and AI, Best Buy", bio: "Vishal is a leader in data science and analytics, dedicated to enhancing customer experiences. With expertise in AI and machine learning, he mentors startups and drives innovation in data-driven strategies.", photo: "B/68badd43e7570465c3fa98bd_vishal%20nagpal.avif", logo: "B/69c61388f124917cbb4e14f1_Best_Buy.svg" },
  { name: "Kaushik Das", title: "Managing Director, JCPenney", bio: "Kaushik is a leader in business transformation and innovation, with a strong background in strategy and operational excellence. He is focused on modernizing capabilities to drive growth.", photo: "B/68badc7a384595411350c010_KAUSHIK%20das.avif", logo: "B/68afe6a180481708f27a85cb_JC%20Penney.svg" },
  { name: "Indrani Goswami", title: "Director of Analytics, Nykaa", bio: "Indrani specializes in driving data-led transformations, with a focus on product analytics and credit risk. She has led organizational change and strategic partnerships across leading fintech and e-commerce companies.", photo: "B/68badd8cf24b77346fc36133_Indrani%20GOSWAMI.avif", logo: "B/68aff5e692b348d581357f96_Nykaa.svg" },
  { name: "Ishu Jain", title: "Head of Analytics", bio: "Ishu is an analytics leader with extensive experience in e-commerce and consulting. He has led large teams and driven significant business impact through network optimization, customer growth, and product innovation.", photo: "B/68bad9a66e107d84fe58dfb9_ISHU%20JAIN.avif", logo: "B/68afe881255eec224fa2b279_myntra.svg" },
  { name: "Nithya Subramanian", title: "Senior Director Data & AI COE - Best Buy", bio: "Nithya leads digital transformation through AI and advanced analytics. With over 20 years of experience in global companies, she has a strong track record in driving innovation and mentoring talent.", photo: "B/68badd09f586050e2613496d_nithya%20subramaniam.avif", logo: "" },
  { name: "Sumon Mal", title: "Head of Backend Engineering, Sony LIV", bio: "Sumon is an engineering leader with a strong focus on platform engineering and big data processing. He has driven significant improvements in time to market and operational efficiency.", photo: "B/68badf81bd7c01fd5343e470_SUMON%20MAL.avif", logo: "B/68cea3767b88ad4d56b698c0_Sony.svg" },
  { name: "Shirsha Ray Chaudhuri", title: "Director of Engineering", bio: "With extensive experience in big data and analytics, Shirsha leads engineering teams to drive technology advancements. She has expertise in software engineering, telecom data, and innovation in cutting-edge technologies.", photo: "B/68badcd11c870aacc9d4abca_shirsha%20ray%20chaudhary.avif", logo: "B/68cea41cd20bb145ee3e2307_Thomson%20Reuters.svg" },
  { name: "Bhargab Dutta", title: "Chief Digital Officer, Centuryply", bio: "Bhargab is a leader in digital transformation and analytics, with over 18 years of experience in driving business performance across manufacturing, supply chain, and engineering analytics.", photo: "B/68bade319203a6776bf8f252_bhargav%20dutta.avif", logo: "B/68aff9cbca9efc7e67663a97_Centuryply.svg" },
  { name: "Divesh Singla", title: "SVP, Global Operations Services and Managing Director, India & Philippines, SignantHealth", bio: "An Analytics Value Translator with 19+ years of leadership in building enterprise analytics, leading Global Capability Centers, and driving cross-functional operations in the Lifesciences industry.", photo: "B/68bad8d3d2b62d2b97a7e0ee_Divesh%20Singla.avif", logo: "B/68cea43b1c2cdde8a27e31c6_Signant%20health.svg" },
  { name: "A V Rahul", title: "Director, Analytics, Barracuda", bio: "Rahul leads analytics teams focused on driving product and business insights for international markets. He is a thought leader in customer engagement and analytics.", photo: "B/68bad8804f3aa4f58a7da36a_A%20V%20Rahul.avif", logo: "B/68aff20f8738a1549ebc6628_Walmart.svg" },
  { name: "Muthumari S", title: "Global Head of Data & AI Studio", bio: "Muthumari leads AI innovation, leveraging machine learning and data science to solve complex business challenges, with a focus on operational efficiency and business growth.", photo: "B/68bad968ff09941910052969_Muthumari%20s.avif", logo: "B/68aff34b8a1245f121aba198_Brillio_company_logo%201.svg" },
  { name: "Saurabh Kumar", title: "Director - Data Engineering", bio: "Saurabh is an expert in data-driven growth strategies for brands, with over two decades of experience in e-commerce, retail, and BFSI.", photo: "B/68baddc4643fcb78baa0a97b_saurabh%20kumar.avif", logo: "B/68aff468eb13c8cbb2d564c6_Lowes.svg" },
  { name: "Akshay Kumar", title: "Research & Analytics Leader", bio: "Akshay leads advanced analytics initiatives, specializing in predictive modeling and data governance, delivering actionable insights and fostering data-driven decision-making.", photo: "B/68bade680aaf4717c987c0e3_Akshay%20Kumar.avif", logo: "B/68cea4fe154cca5f966c8d2f_Gallagher.avif" },
  { name: "Vidhi Chugh", title: "AI Executive | Microsoft MVP", bio: "AI Executive | Microsoft MVP | Author | World’s Top 200 Innovators | AI Patent holder", photo: "B/68c6bb4b19427f4cb3e89576_gxxs5uEp3RY-SD.avif", logo: "B/68aff95da5cc4ae51adaa474_microsoft.svg" },
  { name: "Monica S Pirgal", title: "Chief Executive Officer, Bhartiya Converge", bio: "Monica is a managing director specializing in team building, strategy, and change management, with extensive experience in legal governance and corporate strategy.", photo: "B/68c6bbf6497f18f550f757f5_Monica%20S%20Pirgal.avif", logo: "B/68aff81a6bdc00d71114ad96_NMG.svg" },
  { name: "Krithika Muthukrishnan", title: "Chief Data Science Officer, Scripbox", bio: "Krithika leads data science initiatives focused on personalized user experiences through AI, building innovative data solutions across multiple sectors.", photo: "B/68da407dd8e9cade2dd38652_Artboard%202.avif", logo: "B/68aff91ecd1f7c7dd0afef7b_Scriptbox.svg" },
];

export const flcQuotes = [
  { name: "Vidhi Chugh", title: "AI Executive | Microsoft MVP", photo: "B/68c6bacea91f5e90c41c0dd0_Vidhi%20chug.avif", logo: "B/68aff956110b4b55861cad78_microsoft.svg", quote: "At the FLC, we focus on leveraging AI to solve meaningful customer problems. Success isn’t just in building models but in shaping experiences, workflows, and trust. Culture, speed, accountability, and customer-first thinking, is what makes AI truly scale." },
  { name: "Bhargab Dutta", title: "Chief Digital Officer, Centuryply", photo: "B/68ba5dace6bd0a4fd3dc2c86_Bhargab-Dutta-400x400.avif", logo: "B/68aff9c4af88e6a580e4bd42_Centuryply.svg", quote: "The FLC emphasizes that true leadership in AI goes beyond technology it’s about legacy. Across industries, I’ve seen two qualities stand out: strong work ethics and adaptability. These are what turn professionals into leaders in a dynamic AI era." },
  { name: "Vishal Nagpal", title: "Director of Data and AI, Best Buy", photo: "B/68ba5e73dc9d7cd13e739304_Vishal-Nagpal-400x400.avif", logo: "", quote: "Through the FLC’s deep industry collaboration, we prepare students for the real world. In fast-changing tech, agility matters more than what you do today. Our mission is to ensure students don’t face a ‘reality shock’ when they step into the workforce." },
  { name: "Akshay Kumar", title: "Research & Analytics Leader", photo: "B/68ba615039760a427fdf6755_Akshay-Kumar-400x400.avif", logo: "B/68cd457ff6f82e63fd829a7b_Gallagher.avif", quote: "Through the FLC, we guide the next generation to step out of their comfort zone and adapt. AI has transformed insurance from manual, error-prone processes to automated claims and fraud detection with NLP and Generative AI. The rules keep changing, adaptation is key." },
  { name: "Sumon Mal", title: "Head of Backend Engineering, Sony LIV", photo: "B/68ba619c65dd5a705ee67eca_Sumon-Mal-400x400.avif", logo: "B/68aff6abc7ae4ecd49f14ee5_Sony.svg", quote: "The FLC stands out for its pragmatism, solving real problems with industry-first expertise. AI isn’t a superhero but a savior, transforming industries while being governed responsibly. The market has opportunities, but only the right skills truly deliver impact." },
  { name: "Indrani Goswami", title: "Director of Analytics, Nykaa", photo: "B/68ba61ce8316dd46342c7f71_Indrani-Goswami-400x400.avif", logo: "", quote: "The FLC helps the next generation bridge classroom learning with real-world AI application. A career in AI isn’t only about engineering it touches every role and function. When seen fully, data tells powerful stories that drive customer impact and business growth." },
  { name: "Saurabh Kumar", title: "Director - Data Engineering", photo: "B/68ba6230f9d32bcd19ba164d_Saurabh-Kumar-400x400.avif", logo: "B/68aff463b3c272107b0b691a_Lowes.svg", quote: "At the FLC, we focus on scaling AI responsibly with strong data foundations and governed use. Thousands ask how AI can change India, but the bigger question is: how can India change AI? The key is starting small, staying updated, and building responsibly." },
  { name: "Muthumari S", title: "Global Head of Data & AI Studio", photo: "B/68ba628875001b388271bfa7_Muthumari-S-400x400.avif", logo: "B/68aff345eaae29ff6c05ef9c_Brillio_company.svg", quote: "At the FLC, we emphasize responsible AI adoption built on privacy, governance, and fairness. Fortune 100 companies already rely on AI at scale, but success lies in applying it responsibly. Just like owning a smartphone once defined progress, today it’s adopting AI." },
  { name: "A V Rahul", title: "Director, Analytics, Barracuda", photo: "B/68ba62e20011592a8636f880_A-V-Rahul-400x400.avif", logo: "B/68aff208d18607ab2a4dbd9a_Walmart.svg", quote: "India has one of the largest talent pools, but the future isn’t about size, it’s about quality. With AI as the foundation of problem-solving, India can build solutions that transform industries. The FLC is here to enable that shift because the future is now." },
  { name: "Shirsha Ray Chaudhuri", title: "Director of Engineering", photo: "B/68ba62f69e74c6b09be56ae3_Shrisha-Ray-400x400.avif", logo: "B/68aff1bbd224d13686555c9b_Thomson%20retuers.svg", quote: "The FLC partners with universities to provide fundamentals, rigor, and real-world exposure. India can build for the world but only with a skilled and hardworking workforce. My advice: master the basics, commit to practice, and apply learning to real problems." },
  { name: "Ishu Jain", title: "Head of Analytics", photo: "B/68ba6361ccb1468ce5ba33ba_Ishu-Jain-400x400.avif", logo: "B/68afe879cf40e2836452fd03_myntra%201.svg", quote: "At the FLC, we focus on building problem-solvers who think from first principles. Success in the AI era requires coding fluency, business awareness, and continuous learning. Everyone talks about how AI can change India, but the real question is: how can India change AI?" },
  { name: "Divesh Singla", title: "SVP, Global Operations Services and Managing Director, India & Philippines, SignantHealth", photo: "B/68ba6372ba4c716f15dcd400_Divesh-Singla-400x400.avif", logo: "B/68afe812241828f87bc030ee_Signant%20health.svg", quote: "At the Futurense Leadership Council, we believe AI is no longer optional, it’s the core of innovation. The biggest mistake professionals can make is ignoring its fundamentals. Tomorrow’s leaders won’t be defined by workforce size, but by the quality of their AI-ready talent." },
  { name: "Tushar Sahu", title: "Director Engineering, Google", photo: "B/68ba63c158f84138b0c5aa42_Tushar-Sahu-400x400.avif", logo: "B/68afe6f44bcd7922e7fed038_Google.svg", quote: "The FLC brings education and real-world experience together to accelerate AI adoption. At Google, we’ve seen AI move from experimentation to prime time it’s now core to business. If AI isn’t part of your tech stack, you’re already falling behind." },
  { name: "Kaushik Das", title: "Managing Director, JCPenney", photo: "B/68ba63d5efea56f40cb77550_Kaushik-Das.avif", logo: "B/68afe698dec44db7077f2769_JC%20Penney.svg", quote: "The FLC is focused on guiding the next generation with industry-focused learning. AI already powers our lives, but the real value lies in solving business problems. A powerful model means little if it doesn’t fuel growth or create superior experiences." },
  { name: "Pankaj Rai", title: "Group Chief Data and Analytics Officer, Aditya Birla Group", photo: "B/68ba6432dc9d7cd13e746ec7_Pankaj-Rai%C2%A0400x400.avif", logo: "B/68afe647c7ae4ecd49eddca0_Aditya%20Birla%20Group.svg", quote: "The FLC encourages students to think like product managers, continuously evolving. Don’t just collect skills; apply them today, then iterate. India has the demographics and data advantage, but the real question is: which problems are worth solving?" },
  { name: "Nithya Subramanian", title: "Senior Director Data & AI COE - Best Buy", photo: "B/68ba64a03f6375253f22b9c9_Nithya-Subramanian-400x400.avif", logo: "", quote: "The FLC is committed to bridging the gap between data infrastructure and business impact. AI is no longer a differentiator; it’s the foundation of employability. By strengthening academia–industry–public partnerships, India can lead the AI-driven future." },
];

export const flcVideo = {
  poster: "A/68b94075eacf623d0c081fb1_Futurense%20Leadership%20Council%20_%2040%2B%20Industry%20Leaders%20Shaping%20India%27s%20Tech%20Talent%20_%20FLC.avif",
  youtubeId: "Biq8BWDIx28",
};

const stories = [
  ["68bbf150e365f04a1dd40fc9_Vipin.avif", "yFXvchgCZ00"],
  ["68bbf106f44fbde9298e088c_Mohd%20Baseer%20-%20%20PGD%20in%20Artificial%20Intelligence.avif", "mfJnmTuEG-E"],
  ["68bbf0bad95f81619abe1202_From%20Software%20Engineer%20to%20AI%20Pro%20_%20Anil%E2%80%99s%20IIT%20Jodhpur%20Journey%20with%20Futurense.avif", "1BXK9JhIoJQ"],
  ["68bbf079f44fbde9298dee8b_From%20Dream%20to%20Reality_%20Reema%20Hazra_s%20Journey%20to%20IIT%20Jodhpur%20_%20PGD%20in%20Artificial%20Intelligence.avif", "H3mDJcsLcjg"],
  ["68bbf028c47582f65dbb3a3f_Why%20Ratnakar%20Returned%20to%20Student%20Life%20_%20Upskilling%20with%20IIT%20Jodhpur%E2%80%99s%20PGD%20in%20AI.avif", "LWfrO75sHNI"],
  ["68bbefe31dfbbfdd025fe10f_Back%20to%20Campus%20After%2015%20Years%20%E2%80%93%20My%20AI%20Journey%20at%20IIT%20Jodhpur%E2%80%9D%20_%20Rajesh%20Shakla%E2%80%99s%20Story.avif", "F2kY6XlOrUE"],
  ["68bbefa60e56f1342c0ee8ec_From%20Pune%20to%20IIT%20Jodhpur%20_%20Arnav%20Mokadam%E2%80%99s%20MBATech%20Journey%20with%20Futurense.avif", "P7TQmV9cqwo"],
  ["68bbef63b9dbc74876b48fdf_From%20Civil%20to%20MBATech_%20Shubham%20Gaur%E2%80%99s%20Bold%20Leap%20with%20IIT%20Jodhpur%20%26%20Futurense.avif", "fTHKEfvpdqQ"],
  ["68bbef203f5b8f91431e715b_From%20ICICI%20to%20IIT%20Jodhpur%20_%20Devendra_s%20MBA%20Tech%20Journey%20with%20Futurense.avif", "2vtMWKRjP-o"],
  ["68bbeed3f3d104c7002c99b3_Why%20I%20Chose%20IIT%20Jodhpur%20While%20Working%20in%20the%20Gulf%20_%20Jones%20Andrews%E2%80%99%20Story.avif", "nTj95lQ7_6k"],
  ["68bbee8e0e358382cf261b33_From%20Chandigarh%20to%20IIT%20Jodhpur_%20Akashdeep%E2%80%99s%20Journey%20into%20Data%20Engineering%20with%20Futurense.Uni.avif", "zSttQtLOjIQ"],
  ["68bbe9d153e7635a943cfdef_From%20Missed%20JEE%20to%20IITian_%20Prafull%20Ranjan%E2%80%99s%20Dream%20Come%20True%20_%20MBATech%20%40%20IIT%20Jodhpur.avif", "Twbd8WCQ0kk"],
  ["68bbe96fd4380a85932fb9e9_Mitika%20shrivastava%20%20%E2%80%93%20MBA%20Tech.avif", "rftqOvGlYz8"],
  ["68bbe9280df74d5bdfecf43d_Why%20I%20Chose%20M.Tech%20in%20AI%20at%20IIT%20Jodhpur%20_%20Sachin_s%20Journey%20from%20Rajasthan%20to%20the%20IIT%20Dream.avif", "NGrsjdn2yh4"],
  ["68bbe8ece6cb9ee97fde9dd7_From%20Odisha%20to%20IIT%20Jodhpur_%20Sutesh%E2%80%99s%20MBA%20Tech%20Journey%20with%20Futurense!!.avif", "_J3HA9_Vee8"],
  ["68bbe89852c3ce57804c819e_Hemangi%20ghadge%20%20%E2%80%93%20MBA%20Tech.avif", "7go40K1iv2s"],
  ["68bbe82c5f54d87e1901e1ab_Rushikesh%E2%80%99s%20Journey%20to%20IIT%20Jodhpur%E2%80%99s%20Tech%20MBA%20_%20Futurense%20Uni.avif", "8RiUIhkSiZY"],
  ["68bbe7f1346768367a550799_6%20Years%20in%20Tech%20%26%20Still%20Stuck_%20Here%E2%80%99s%20How%20I%20Rebooted%20My%20Career%20with%20IIT%20Jodhpur%20_%20Romit.avif", "QvbwCS9rsX4"],
  ["68bbe7adab179973ad985124_Sri%20Charan%20%E2%80%93%20PGD%20IN%20DATA%20ENGENEERING%20.avif", "_vMaESkpdho"],
  ["68bbe7595854339f2e450f12_Aditya%20Tapadia%20%E2%80%93%20PGD%20in%20Artificial%20Intelligence.avif", "5oJ5BvoRiss"],
  ["68bbe709de72cd452bcf889d_Prem%20Prakash%20Singh%20%E2%80%93%20MBA%20Tech.avif", "qkWqlgijR24"],
  ["68bbe69253e7635a943c8a03_Akkalesh.avif", "zcd1RTX-yJg"],
  ["68bbe64f0b62ce4023ef249d_Career%20Shift%20from%20Tech%20to%20Business%E2%80%94Hear%20Abhinav%E2%80%99s%20IIT%20Jodhpur%20Story!.avif", "UbnbfHi874E"],
  ["68bbe6160a8f3484e001c7ae_From%205%20years%20in%20EdTech%20to%20MBA%20Tech-%20Watch%20Tushar_s%20Inspiring%20Journey!.avif", "DXDUqqmvzdA"],
  ["68bbe5da2545d02b5069d679_From%20Delhi%20to%20IIT%20Jodhpur_%20Shubham%E2%80%99s%20AI%20Upskilling%20Journey.avif", "dWH0w6Rk7HQ"],
  ["68bbe584a0fd399ae8f27629_ADITYA%20SHARMA%20-%20PGD%20in%20AI%20_%20Data%20Engineering.avif", "Ox-1OhGDc0Y"],
  ["68bbe52d9c8527d4df9e8ec5_ZARNA%20%20Palera%20%E2%80%93%20PGD%20in%20Data%20Engineering.avif", "5W5rOgj9xJc"],
  ["68bbe4dded4a4e6074a94cf9_indhu%20%E2%80%93%20MBA%20Tech.avif", "qVOUwckNkSg"],
  ["68bbd9f28be891de12ed3227_Shashikumar%20%E2%80%93%20MBA%20Tech.avif", "zjDJ8C0Fujs"],
  ["68bbd9a06a92ab665be1a421_Shubham%20kumar%20%E2%80%93%20MBA%20Tech.avif", "6ZeY1fjn29Y"],
  ["68bbd948fef16af2874c1d28_This%20Adobe%20Employee%20is%20Enrolled%20In%20This%20IIT%20MBA%20Tech%20Program%20-%20Khushwant.avif", "KDNMBUdRx8U"],
];
export const videoStories = stories.map(([file, id]) => ({ image: "B/" + file, youtubeId: id }));

export const faqCategories = [
  { label: "Program Structure & Learning Experience", items: [
    { q: "Will I be learning from IIT professors or industry experts directly?", a: "Yes. Your classes will be taught directly by IIT faculty through live online sessions. Alongside this, you’ll be mentored by senior industry leaders through the Futurense Leadership Council (FLC), where experts like CXOs and founders guide you on practical applications, career readiness, and industry insights." },
    { q: "Do I need to attend any classes on campus, or is everything online?", a: "Most programs are delivered fully online for maximum flexibility. However, some offer optional campus immersions where you can attend workshops, network with peers, and interact with faculty in person." },
    { q: "Can I access recordings and learning materials even after the program ends?", a: "Yes. You’ll have access to all program recordings and learning resources through the LMS for 6 months after program completion. Post that period, LMS access will be discontinued." },
    { q: "Can I switch from one program to another later if my goals change?", a: "No. Since each enrolment is tied to a unique student profile within the institute’s database, switching between programs after enrolment is not possible." },
    { q: "What is the AI Clinic, and how will I benefit from it during the program?", a: "The AI Clinic is not just a lab; it’s a full ecosystem designed to make you more job-ready than any typical graduate. You’ll work in agile squads, solve real RFPs, and build full-stack AI solutions using 40+ enterprise tools like LangChain, Claude, and Vertex AI. From sprints to code reviews, everything mirrors how top AI teams operate in the real world." },
    { q: "Are live sessions mandatory, or can I learn at my own pace?", a: "Live sessions are designed for direct interaction with faculty and play a vital role in the learning experience. Depending on the institute’s policy, attending these sessions may be mandatory." },
  ]},
  { label: "Career Support & Outcomes", items: [
    { q: "Will I get placement support through Futurense?", a: "Yes. You’ll receive dedicated career support through the Futurense ecosystem, including resume guidance, mock interviews, and expert-led sessions through the Futurense Leadership Council (FLC). Alumni also get access to the exclusive Breakfast Club for high-level networking with industry leaders and hiring partners." },
    { q: "What is the Breakfast Club, and how does it build a learning community and engagement?", a: "The Breakfast Club is Futurense Uni’s official alumni network, specially created for the Alumni. It enables ongoing engagement through dedicated WhatsApp groups, alumni-led webinars, mentorship sessions, and exclusive access to career resources." },
    { q: "Are there any success stories I can look at from previous batches?", a: "Yes. There are plenty of success stories. Many freshers who joined the program have gone on to secure better opportunities at top companies. Working professionals have successfully used the program to negotiate higher packages, while others have transitioned into completely new roles in AI, data, and emerging tech." },
    { q: "What types of roles and outcomes do learners achieve post-Futurense Uni?", a: "Futurense alumni have gone on to become AI Engineers, Data Scientists, Product Managers, Cybersecurity Analysts, and more, earning salaries ranging from ₹8L to ₹40L+ depending on their track and experience." },
    { q: "Are mentorship and networking facilitated within the Futurense Uni community?", a: "Absolutely. Learners get access to the Futurense Leadership Council, peer groups, and industry mentors as a part of the career assistance program and during the immersion opportunity, ensuring continuous guidance, exposure, and networking throughout the learning journey." },
  ]},
  { label: "Eligibility & Admissions", items: [
    { q: "Can I apply if I have a gap year or come from a non-technical or working background?", a: "Yes, you can absolutely apply even if you have a gap year or come from a non-technical or working background. What matters most is your interest and willingness to learn. Many of our learners are career switchers, working professionals, or students from non-CS streams." },
    { q: "Is there a selection process, or can any eligible student apply directly?", a: "The selection process includes: 1. Online Application, 2. Pre-screening Test, 3. Offer Letter, 4. Payment & Enrollment, 5. Futurense Bridge Course, 6. Begin your IIT Journey." },
    { q: "What documents do I need during the admission process?", a: "It depends on the program you choose, but generally you’ll need: your resume, graduation marksheet and degree certificate, 10th and 12th marksheets, a profile as per application requirements, previous experience letters (if applicable), and a No Objection Certificate (NOC), if required." },
    { q: "Are working professionals allowed to join while continuing their current jobs?", a: "Yes. Programs are designed specifically for working professionals, with live classes scheduled on Friday evenings and weekends (as per faculty availability), and flexible project schedules." },
    { q: "What documents or qualifications are required to support an application?", a: "The required documents and qualifications differ by program. In general, most programs require a minimum of 60% in Class 12 (with Mathematics as a subject) and/or an undergraduate degree from a recognized university." },
    { q: "When do new cohorts start, and how can applicants stay informed?", a: "For degree programs, intakes are held in January and August every year. Certification programs, however, open three times a year. You can check the official program page or register on our website to get updates on upcoming deadlines and launch dates." },
  ]},
  { label: "Fees, Certification & Value", items: [
    { q: "Where can I find the fee details for each program under Futurense Uni?", a: "Fee structures vary by program and university. You’ll find exact fees listed on the respective program page on the Futurense website." },
    { q: "Are there any EMI or installment options available?", a: "Yes. All programs come with low-cost EMI and financing options, making it easier and more affordable for learners to pursue high-quality education without financial stress." },
    { q: "Do I need to pay any additional costs apart from tuition, like exams, certifications, or learning tools?", a: "No, there are no mandatory additional costs. All essential learning tools, certifications, and exam access are included in the tuition fee. Even the Bridge Course worth ₹99,000 is offered free of charge for enrolled students." },
    { q: "Is the fee refundable if I drop out or decide not to continue?", a: "Refund policies vary based on the university and the specific course you’ve enrolled in. Most programs follow the refund and cancellation guidelines of the partner institution. We recommend checking the program-specific terms at the time of application or reaching out to our support team." },
    { q: "Will the certification/degree come from the university or Futurense?", a: "The degree or certification will be awarded directly by the university offering the specific program you’ve enrolled in, such as IIT Jodhpur, IIT Roorkee, or IIMs, depending on your selection. These are official credentials issued by the institutions themselves." },
  ]},
];

export const media = [
  { title: "IIT-Roorkee, Futurense announce GenAI-powered cybersecurity programme", date: "August 21, 2025", image: "B/68ba7036a9651c8d448daeb4_IIT-Roorkee%2C%20Futurense%20announce%20GenAI-powered%20cybersecurity%20programme.avif", logo: "B/68bd2766a66df3f56cd3bfaf_Indian%20express.avif", href: "https://indianexpress.com/article/education/iit-roorkee-generative-ai-powered-cybersecurity-programme-artifiial-intelligence-course-jee-main-advanced-2026-10200303/" },
  { title: "IIT Roorkee launches India's first no-code AI marketing course for professionals", date: "July 31, 2025", image: "B/68ba7083cfd982327bd8dbac_IIT%20Roorkee%20launches%20India_s%20first%20no-code%20AI%20marketing%20course%20for%20professionals.avif", logo: "B/68ba708879dd210769653bac_India%20today.svg", href: "https://www.indiatoday.in/education-today/news/story/iit-roorkee-launches-indias-first-no-code-ai-marketing-course-for-professionals-2764050-2025-07-31" },
  { title: "IIT Roorkee Launches 11-Month PG Certificate in Agentic AI in Collaboration with Futurense", date: "February 12, 2025", image: "B/68c132ca00e030ddaf81ae9e_IIT%20Roorkee%20Launches%2011-Month%20PG%20Certificate%20in%20Agentic%20AI%20in%20Collaboration%20with%20Futurense.avif", logo: "B/68c132cedbd89b40a52c44aa_Shiksha.avif", href: "https://www.shiksha.com/news/engineering-iit-roorkee-launches-11-month-pg-certificate-in-agentic-ai-in-collaboration-with-futurense-blogId-190188" },
  { title: "IIT Jodhpur Introduces BSc/BS Programme In Applied AI And Data Science", date: "September 10, 2024", image: "B/68c134bbcd0ae0dddd8b7ab5_IIT%20Jodhpur%20Introduces%20BSc_BS%20Programme%20In%20Applied%20AI%20And%20Data%20Science.avif", logo: "B/68c134c1825142856a0f7886_NDTV.avif", href: "https://www.ndtv.com/education/iit-jodhpur-introduces-bsc-bs-programme-in-applied-ai-and-data-science-6528516" },
  { title: "Futurense & IIT Jodhpur launch India’s first tech-MBA", date: "March 15, 2024", image: "B/68ba669d3f472c9807c46e62_Futurense%20%26%20IIT%20Jodhpur%20launch%20India%E2%80%99s%20first%20tech-MBA.avif", logo: "B/68bd2948cd65c634060f8334_The%20states%20man.avif", href: "https://www.thestatesman.com/inspiration-hub/futurense-iit-jodhpur-launch-indias-first-tech-mba-1503280128.html" },
  { title: "IIT Roorkee rolls out first AI-led programme for cyber defenders. Apply now", date: "August 20, 2025", image: "B/68c12eb6a611265ca0ed5c16_IIT%20Roorkee%20rolls%20out%20first%20AI-led%20programme%20for%20cyber%20defenders.%20Apply%20now.avif", logo: "B/68ba708879dd210769653bac_India%20today.svg", href: "https://www.indiatoday.in/education-today/news/story/indias-first-genai-powered-cybersecurity-programme-to-begin-at-iit-roorkee-in-october-2774006-2025-08-20" },
  { title: "IIT-Roorkee announces PG certificate program in Agentic AI to upskill engineers in AI era", date: "February 14, 2025", image: "B/68c131ce62a28ae890533efa_IIT-Roorkee%20announces%20PG%20certificate%20program%20in%20Agentic%20AI%20to%20upskill%20engineers%20in%20AI%20era.avif", logo: "B/68c131d90d767ead18087d24_Indian%20express.avif", href: "https://indianexpress.com/article/education/iit-roorkee-announces-pg-certificate-program-in-ai-genai-agentic-ai-ml-engineers-jee-main-2025-advanced-9829562/" },
  { title: "IIT Roorkee Launches India's First Full-Stack AI Certification for Modern Marketers", date: "July 30, 2025", image: "B/68c12f8fd7b3ac5029d51793_IIT%20Roorkee%20Launches%20India_s%20First%20Full-Stack%20AI%20Certification%20for%20Modern%20Marketers.avif", logo: "B/68c12fa1c87fae48616e5ee5_MSN%20white.avif", href: "https://www.msn.com/en-in/money/news/iit-roorkee-launches-indias-first-full-stack-ai-certification-for-modern-marketers/ar-AA1JBnrP" },
];

export const cta = {
  title: "Start Your IIT Journey, Build an AI-First Career",
  text: "Earn globally respected IIT credentials and launch your career in the world’s fastest-growing tech domains.",
  button: { label: "Contact", href: "#top" },
  background: "A/688f22a33f6719c6c88f0dab_CTA%20Background%20pattern.avif",
};
