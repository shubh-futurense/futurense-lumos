// Structured data (JSON-LD) from the live IIT Jodhpur PG Diploma / M.Tech page, copied as-is.
export const iitjDeSchema = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id":
          "https://futurense.com/iit-jodhpur/pg-diploma-mtech-data-engineering#course",
        name: "PG Diploma and MTech in Data Engineering and Agentic AI",
        description:
          "India's First IIT Program Integrating Data Engineering, GenAI, and Agentic AI. A 12-month specialized program for working professionals with 1+ years experience, offering direct pathway to MTech.",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
          itemReviewed: {
            "@type": "Course",
            name: "PG Diploma and MTech in Data Engineering and Agentic AI",
            description:
              "India's First IIT Program Integrating Data Engineering, GenAI, and Agentic AI.",
          },
        },
        provider: {
          "@type": "CollegeOrUniversity",
          name: "Indian Institute of Technology Jodhpur",
          url: "https://www.iitj.ac.in/",
          sameAs: [
            "https://www.linkedin.com/school/iit-jodhpur/",
            "https://twitter.com/iitjodhpur",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jodhpur",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
        },
        educationalLevel: "Postgraduate",
        timeRequired: "P12M",
        numberOfCredits: 24,
        courseCode: "PGD-DE-2026",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Blended",
          courseSchedule: {
            "@type": "Schedule",
            duration: "P12M",
            startDate: "2026-08-01",
            repeatFrequency: "Weekly",
          },
          instructor: [
            {
              "@type": "Person",
              name: "Prof. Dip Sankar Banerjee",
              jobTitle: "Associate Professor",
              affiliation: "IIT Jodhpur",
              description:
                "High-Performance Computing, Computing Systems, Computer Architecture, Data Analytics",
            },
            {
              "@type": "Person",
              name: "Prof. Subhash Bhagat",
              jobTitle: "Assistant Professor, Department of Mathematics",
              affiliation: "IIT Jodhpur",
              description:
                "Distributed systems/algorithms, Swarm Robots, Autonomous Multi-Agent systems, IoRT, security in distributed computing",
            },
            {
              "@type": "Person",
              name: "Prof. Kalpak Kulkarni",
              jobTitle: "Assistant Professor",
              affiliation: "IIT Roorkee",
              description:
                "Ph.D, IIT Bombay. Specializes in social media marketing, content marketing, and digital communication strategy",
            },
          ],
        },
        occupationalCredentialAwarded: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Postgraduate Diploma",
          recognizedBy: {
            "@type": "Organization",
            name: "Indian Institute of Technology Jodhpur",
          },
        },
        offers: {
          "@type": "Offer",
          price: "335000",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://futurense.com/iit-jodhpur/pg-diploma-mtech-data-engineering",
        },
        availableLanguage: "en",
        inLanguage: "en-IN",
        teaches: [
          "Python Programming for Data Engineering",
          "Deep Learning",
          "Agentic AI",
          "Big Data Management",
          "Machine Learning",
          "Cloud Computing (AWS, GCP, Azure)",
          "Generative AI",
          "Data Pipeline Development",
          "LangChain and LangGraph",
          "Vector Databases",
          "MLOps",
          "Prompt Engineering",
        ],
        educationalCredentialAwarded:
          "PG Diploma in Data Engineering and Agentic AI",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "Working Professional",
          audienceType:
            "Data Engineers, Software Engineers, ML Practitioners, Data Analysts",
        },
        coursePrerequisites: [
          "BE/BTech or BSc./BCA + MSc./MCA/Master's degree in science or STEM field",
          "Minimum 50% marks in undergraduate or postgraduate degree",
          "Minimum 1 year of industry experience",
          "Programming experience and logical reasoning skills",
        ],
        financialAid: {
          "@type": "FinancialProduct",
          name: "Education Loan",
          provider: [
            {
              "@type": "BankOrCreditUnion",
              name: "HDFC Bank",
            },
            {
              "@type": "BankOrCreditUnion",
              name: "ICICI Bank",
            },
            {
              "@type": "BankOrCreditUnion",
              name: "Axis Bank",
            },
            {
              "@type": "Organization",
              name: "Propelld",
            },
            {
              "@type": "Organization",
              name: "Avanse",
            },
            {
              "@type": "BankOrCreditUnion",
              name: "IDFC Bank",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://futurense.com/iit-jodhpur/pg-diploma-mtech-data-engineering#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the PG Diploma in Data Engineering Program all about?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The PG Diploma in Data Engineering is a specialized program crafted by the faculty at IIT Jodhpur in collaboration with global Data Science and Engineering schools, along with insights from industry experts. This program is highly industry-oriented, aiming to provide students with the skills required for upcoming data-focused job roles, with a particular focus on AI-driven technology stacks.",
            },
          },
          {
            "@type": "Question",
            name: "Why this program NOW?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "With the emergence of generative AI, demand for proficient data professionals equipped with Data Engineering skills has skyrocketed. Data Engineering is essential in Cloud computing, AI, and machine learning, serving as the cornerstone for building and maintaining infrastructure supporting these technologies.",
            },
          },
          {
            "@type": "Question",
            name: "How is it different from other programs? (PG Diploma Vs PG Certification)",
            acceptedAnswer: {
              "@type": "Answer",
              text: "This is India's 1st PG Diploma program designed after the emergence of Generative AI. Unlike certifications, this is an academic degree program from IIT Jodhpur with full alumni status and credit transferability to MTech.",
            },
          },
          {
            "@type": "Question",
            name: "Who is this program for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The program is ideal for: (1) Those aspiring for a high-growth career in data science, ML, or Artificial Intelligence, (2) Looking for managerial roles, (3) Individuals with a background in programming/software/technology and at least 1 year of industry experience.",
            },
          },
          {
            "@type": "Question",
            name: "How can I apply to the PG Diploma in Data Engineering Program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Click apply now and fill the form on the program page to start your application process.",
            },
          },
          {
            "@type": "Question",
            name: "When will the application process to the program start?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The application process for IIT Jodhpur's PG Diploma in Data Engineering program has already begun. The deadline is May 10, 2026.",
            },
          },
          {
            "@type": "Question",
            name: "Will I be able to call myself an IITian after completion of this course?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You will attend the same convocation as regular graduates, receive an IIT Jodhpur student ID card and email address, get the same degree as regular PG Diploma and M.Tech students, experience campus immersion (two 7-9 days annually), and gain IIT alumni status with access to the IIT network.",
            },
          },
          {
            "@type": "Question",
            name: "Does a Post-Graduate Diploma and M.Tech in Data Engineering hold equal value & status compared to other full-time programs from IIT Jodhpur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the Post-graduate Diploma in Data Engineering holds an equivalent value and status. This program awards academic credits and maintains the same level of rigor as a regular degree program. While the mode of teaching is in executive mode, the degree you get will be the same as a regular degree.",
            },
          },
          {
            "@type": "Question",
            name: "Can the Diploma issued by IIT Jodhpur be submitted for government jobs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the degree Certificate will be acceptable for appearing in any Government exam or job interview.",
            },
          },
          {
            "@type": "Question",
            name: "Will IIT Jodhpur faculty take my classes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the majority of your online classes will be taught by IIT Jodhpur faculty. You'll also have Masterclass sessions with industry experts to stay updated on industry trends and make valuable connections.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Campus Immersion?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Campus Immersion is a vital part of the program where you attend on-campus activities at IIT Jodhpur for two 7-9 days every academic year where the candidate has to attend only one of them. The policies and requirements regarding campus immersion are subject to review and final approval by IIT Jodhpur. During immersion, you get a live classroom experience, meet IIT Jodhpur faculty, and engage in peer learning and projects.",
            },
          },
          {
            "@type": "Question",
            name: "What if I can't take 7-9 days of leave at a stretch from my office for the Campus Immersion?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Campus Immersion will start on a weekend and extend until the following weekend. Enrolled students will need to take leaves for less than 5-7 working days during each Campus Immersion.",
            },
          },
          {
            "@type": "Question",
            name: "Will hostel accommodation be provided for outstation candidates from different states?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hostel accommodation may be provided during the campus visit, subject to availability.",
            },
          },
          {
            "@type": "Question",
            name: "Can I attend Campus Immersion sessions online in case of a medical emergency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Attendance of campus immersion sessions in person is mandatory. However, in exceptional cases like a medical emergency, the decision to attend online will be at the discretion of the program directors.",
            },
          },
          {
            "@type": "Question",
            name: "What are the key benefits of the program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Key benefits include: (1) IIT Alumni status and opportunity to become part of the global IIT Alumni network, (2) Two 7-9 days Campus Immersion annually for live classroom experience, (3) Academic Degree (not just a certificate), (4) Industry relevant curriculum integrated with generative AI and Agentic AI, (5) Become a Full-stack AI professional, (6) Mentorship by ex-MAANG experts.",
            },
          },
          {
            "@type": "Question",
            name: "What are the eligibility criteria for PG Diploma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Eligibility requirements: (1) UG Qualifications: BTech, BS/BCA + MS/MCA/Master's Degree in Science or related field, (2) 50% Marks in UG/PG, (3) 1 year industry experience in a related field.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a selection process?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The process includes: (1) Document Review and Verification, (2) Pre-screen Exam Score Review, (3) Application Processing Fees, (4) Receive Admission Approval Letter, (5) Full Payment Program Fee, (6) Enrollment.",
            },
          },
          {
            "@type": "Question",
            name: "What are the documents to be submitted for application?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Required documents: (1) Application Form, (2) ID Proof, (3) Class 10th and 12th Marksheets & Certificates, (4) College Final Year Marksheet and Degree Certificates, (5) Work Experience Certificates, (6) Passport Size Photograph.",
            },
          },
          {
            "@type": "Question",
            name: "Will there be any pre-screen exams for enrolling in the program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, assessing knowledge in areas like Data Interpretation, Statistics Foundation, and Programming Logic. A minimum of 50% marks in the pre-screen exam is required for eligibility for program admission.",
            },
          },
          {
            "@type": "Question",
            name: "Should I have experience in coding to qualify the pre-screening exam?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, a basic level of coding knowledge is necessary to clear the pre-screening exam.",
            },
          },
          {
            "@type": "Question",
            name: "How rigorous is this course, and how many hours will I need to invest every week beyond the lecture hours?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The course is rigorous, aligning with IITJ's full-time programs, demanding your full commitment. Allocate 12-14 hours weekly for live sessions, labs, videos, readings, quizzes, and interactions. Additionally, plan for 5-7 extra hours per week for homework and self-study.",
            },
          },
          {
            "@type": "Question",
            name: "When do the classes commence?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The classes will commence in August 2026 (Tentative).",
            },
          },
          {
            "@type": "Question",
            name: "What will be the class timings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tentative schedule: Classes are scheduled to take place on Fridays (late evenings), Saturdays, and Sundays, subject to the availability of the faculty. Final class timings will be communicated during orientation. Attendance is mandatory and contributes to your GPA. Recordings of sessions will be accessible on the Learning Management System (LMS) based on discretion of respective course faculty.",
            },
          },
          {
            "@type": "Question",
            name: "How will the examination be conducted?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The mode of examination is decided by IIT Jodhpur, and students must comply with the policies for appearing in the examinations, either online or at centers identified and specified by IIT Jodhpur.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Futurense Bridge Course?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You will be provided access to a bridge course on the following topics: (1) Maths for AI, (2) Python & Programming Foundations, (3) Data, SQL & Logic Refresher, (4) AI Fluency & GenAI Tools Primer. You are required to complete the bridge course prior to commencement of the core classes. The bridge course is worth ₹29,000 and is included free with your enrollment.",
            },
          },
          {
            "@type": "Question",
            name: "What will be the learning outcome of the program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The program curriculum includes: Semester 1 - Python Programming for Data Engineering, Deep Learning, Electives, and Non-Graded courses. Semester 2 - Agentic AI, Big Data Management, Electives, and Non-Graded courses. The curriculum is integrated with Gen AI and covers Data Analytics, Statistical Analytics, Business Intelligence Tools, Real-time Analytics, Data Science, Machine Learning, Data Visualization, Data Engineering, Big Data Technologies, Database Management, and Data Pipeline Development. Note: Curriculum is under revision by IIT Jodhpur.",
            },
          },
          {
            "@type": "Question",
            name: "Can the degree certificate be submitted for government jobs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the degree Certificate will be acceptable for appearing in any Government exam or job interview.",
            },
          },
          {
            "@type": "Question",
            name: "I have done my graduation/AMIE from The Institution of Engineers (IE INDIA). Is that allowed for admission?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, graduation from The Institution of Engineers (IE INDIA) is allowed for admission.",
            },
          },
          {
            "@type": "Question",
            name: "Will I be eligible for a PhD Admission after completing this M.Tech or PGD course?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Holders of this degree are eligible to apply for a Ph.D. at IIT Jodhpur and for the purpose of eligibility, this will rank the same as any other M.Tech. Program.",
            },
          },
          {
            "@type": "Question",
            name: "Is there any scholarship available for this program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, there is no scholarship available for this program.",
            },
          },
          {
            "@type": "Question",
            name: "How will a PG Diploma Degree help my career?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Career benefits include: 45% rise in career growth over 5 years, 38% higher ROI than certification, 53% higher demand in job market, and 37% average salary increase.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Return on Investment (RoI) factor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Investment: 1 Year of Study, ₹3.35 lakhs. Potential Returns - Job Roles: ₹30+ LPA for Data Architect, ₹28+ LPA for Data Science Manager, ₹15-50 LPA for Machine Learning Engineer, ₹30-60 LPA for Agentic AI Engineer.",
            },
          },
          {
            "@type": "Question",
            name: "What are the eligibility criteria for M.Tech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "M.Tech eligibility: (1) UG Qualifications: BTech, BS/BCA + MS/MCA/Master's Degree in Science or related field, (2) 60% Marks in UG/PG, (3) 2 year industry experience in a related field.",
            },
          },
          {
            "@type": "Question",
            name: "How to secure direct admission to M.Tech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Complete the M.Tech in Fast Track Mode (1 year) based on performance in the PG Diploma Program. Minimum 6 CGPA is needed in the PGD courses. Upon PG Diploma completion, you can transfer 24 credits towards the IITJ M.Tech in Data Engineering. The total credits for M.Tech are 56, so with 24 transferred credits, only 32 more credits need to be completed.",
            },
          },
          {
            "@type": "Question",
            name: "What will be the difference between a regular M.Tech & Executive M.Tech program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The only difference is the mode of teaching (Online vs Classroom teaching). The executive M.Tech classes are delivered in online mode. The credit requirements will be the same.",
            },
          },
          {
            "@type": "Question",
            name: "As it's an Executive M.Tech Program, if for some reason I leave the job, is it going to affect this program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. You can still continue this program even if you leave your job.",
            },
          },
          {
            "@type": "Question",
            name: "What is the fees of the program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The program fee is ₹3,35,000, which includes application fee of ₹10,000 and administrative fee of ₹20,000. The immersion fee includes lodging but excludes meals. It also covers the examination fee. No GST applicable.",
            },
          },
          {
            "@type": "Question",
            name: "What is the payment schedule and process?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Payment is due within the deadline mentioned in the provisional offer letter, directly through IIT Jodhpur's checkout page. Loan candidates may have different payment processes.",
            },
          },
          {
            "@type": "Question",
            name: "Can I self fund this program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Of course, if your family is funding you or you have your own savings, you should certainly self fund a portion or whole of the course fees.",
            },
          },
          {
            "@type": "Question",
            name: "Does Futurense help with loans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Futurense has partnered with Propelld, Avanse, IDFC and ICICI to ensure financial barriers do not hinder individuals from realising their dream of becoming an IITian.",
            },
          },
          {
            "@type": "Question",
            name: "When does my loan repayment start?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There is no moratorium period involved as it's specifically for working professionals. EMI starts once after the loan is disbursed to IIT.",
            },
          },
          {
            "@type": "Question",
            name: "What is the interest rate on the loans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The interest rates on loan varies depending on the monthly repayment scheme. We will connect you with our banking partners to help determine which options best match your profile as per the criteria. Note: Interest rates in India has increased significantly over the last 2 years. In this context, the rate of interest on unsecured loans offered by these financing partners is very reasonable and competitive.",
            },
          },
          {
            "@type": "Question",
            name: "What are the documents I should keep handy for loan application?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Student's Documents: (1) PAN, (2) Aadhaar, (3) Last 3 months' bank statements. Income Documents: Last 3 months' payslips.",
            },
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://futurense.com/#organization",
        name: "Futurense Technologies",
        url: "https://futurense.com",
        logo: {
          "@type": "ImageObject",
          url: "https://futurense.com/logo.png",
        },
        sameAs: [
          "https://www.instagram.com/futurensetech",
          "https://www.linkedin.com/company/futurense-technologies/",
          "https://x.com/futurense",
          "https://www.youtube.com/@FuturenseTechnologies",
          "https://www.facebook.com/futurensetech/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8888274449",
          contactType: "Admissions",
          email: "info@futurense.com",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://futurense.com/iit-jodhpur/pg-diploma-mtech-data-engineering#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://futurense.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "IIT Jodhpur",
            item: "https://futurense.com/iit-jodhpur",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "PG Diploma & MTech in Data Engineering",
            item: "https://futurense.com/iit-jodhpur/pg-diploma-mtech-data-engineering",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id":
          "https://futurense.com/iit-jodhpur/pg-diploma-mtech-data-engineering#webpage",
        url: "https://futurense.com/iit-jodhpur/pg-diploma-mtech-data-engineering",
        name: "PG Diploma & MTech in Data Engineering - IIT Jodhpur 2026",
        description:
          "Join IIT Jodhpur's PG Diploma & MTech in Data Engineering & Agentic AI. 12-month program with GenAI integration, campus immersion & MTech pathway.",
        inLanguage: "en-IN",
        isPartOf: {
          "@id": "https://futurense.com/#website",
        },
        breadcrumb: {
          "@id":
            "https://futurense.com/iit-jodhpur/pg-diploma-mtech-data-engineering#breadcrumb",
        },
        datePublished: "2025-01-01",
        dateModified: "2026-05-08",
      },
      {
        "@type": "WebSite",
        "@id": "https://futurense.com/#website",
        url: "https://futurense.com",
        name: "Futurense",
        publisher: {
          "@id": "https://futurense.com/#organization",
        },
      },
      {
        "@type": "EducationalOrganization",
        name: "Futurense UNI",
        description:
          "Official partner of IIT Jodhpur for PG Diploma and MTech in Data Engineering Program",
        url: "https://futurense.com/uni",
        parentOrganization: {
          "@id": "https://futurense.com/#organization",
        },
      },
    ],
  },
] as const;
