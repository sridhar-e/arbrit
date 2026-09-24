/**
 * Course detail pages, taken from arbritsafety.sa (September 2026) and reworded for a site that serves
 * both the UAE and Saudi Arabia. Server-only: import through lib/content.
 */
import type { CourseDetail } from "@/lib/data";

export const courseDetails: CourseDetail[] = [
  {
    slug: "leea-diploma",
    title: "LEEA Diploma",
    track: "International",
    tagline: "Safe lifting starts with skilled leadership",
    image: "/course/ksa/leea-diploma.webp",
    duration: "3–5 days",
    accreditationLogo: "/international/LEEA-Logo.webp",
    courseInfoParagraphs: [
      "Arbrit Safety Training and Consultancy is proud to be the first LEEA Licensed Training Partner (LTP) in the UAE and Saudi Arabia, widening access to internationally recognised lifting equipment education and professional development across the region.",
      "As a Licensed Training Partner of the Lifting Equipment Engineers Association (LEEA), Arbrit is officially authorised to deliver two LEEA programmes across the UAE and Saudi Arabia. Together they form a structured learning pathway for professionals developing their technical knowledge and competence in the lifting equipment industry."
    ],
    courseOfferings: [
      {
        label: "LEEA Foundation Certificate (FOU)",
        description: "The entry-level qualification in the LEEA learning pathway. It gives essential underpinning knowledge of lifting equipment, terminology, legislation, risk management, lifting accessories and lifting appliances.",
        href: "/course/leea-foundation-certificate"
      },
      {
        label: "LEEA Lifting Accessories Diploma (LAC)",
        description: "An advanced technical qualification for professionals who need in-depth knowledge of lifting accessories: their construction, application, examination, maintenance and safety requirements, across oil & gas, construction, offshore, manufacturing and heavy engineering.",
        href: "/course/leea-lifting-accessories-diploma"
      }
    ],
    sections: [
      {
        heading: "Who should attend the Foundation Certificate (FOU)",
        intro: "Suitable for people entering or already working in the lifting equipment industry, including:",
        items: [
          "Lifting & rigging personnel",
          "Technicians",
          "Engineers",
          "HSE professionals",
          "Lifting supervisors",
          "Maintenance personnel",
          "Lifting equipment sales & support personnel",
          "Individuals seeking progression to advanced LEEA qualifications"
        ],
        outro: "The Foundation Certificate provides essential underpinning knowledge and is the pathway to further specialist LEEA qualifications, including the Lifting Accessories Diploma (LAC)."
      },
      {
        heading: "Who should attend the Lifting Accessories Diploma (LAC)",
        intro: "Entry requirement: candidates should have completed the LEEA Foundation Certificate (FOU). Ideal for:",
        items: [
          "Lifting equipment inspectors",
          "Engineers & technicians",
          "Lifting equipment professionals",
          "Maintenance personnel",
          "Rigging & lifting specialists",
          "Quality & compliance personnel",
          "Professionals involved in lifting accessory examination and maintenance"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "After completing LEEA courses with Arbrit, participants will:",
        items: [
          "Understand lifting equipment types, components and safe usage practices",
          "Apply inspection procedures in line with LEEA standards (LAC)",
          "Identify defects and assess the condition of lifting accessories",
          "Follow safe lifting practices and basic rigging principles (FOU)",
          "Ensure compliance with international safety standards and site requirements",
          "Record findings and support safe operational decision-making"
        ]
      },
      {
        heading: "Course duration",
        items: [
          "LEEA Foundation Certificate (FOU): 3 days",
          "LEEA Lifting Accessories Diploma (LAC): 5 days"
        ],
        outro: "Each course includes classroom sessions, practical field demonstrations and final competency assessments."
      }
    ],
    certificationIntro: "Participants who successfully complete the course and assessments receive LEEA-accredited certificates, recognised internationally and by major contractors across the region, including Saudi Aramco, SABIC and NEOM projects. This certification is essential for companies involved in heavy lifting, construction and industrial operations.",
    faqs: [
      {
        question: "Are LEEA courses recognised in the UAE and Saudi Arabia?",
        answer: "Yes. LEEA certification is globally recognised and accepted by contractors, consultants and safety authorities in the UAE and Saudi Arabia."
      },
      {
        question: "How long are the LEEA courses?",
        answer: "Durations vary by course, typically 2 to 5 days, combining classroom theory with hands-on lifting demonstrations."
      },
      {
        question: "Is prior experience required?",
        answer: "Basic knowledge of lifting or construction safety is recommended, especially for advanced levels such as Appointed Person or Lift Supervisor."
      },
      {
        question: "Can training be delivered at our project site?",
        answer: "Yes. Arbrit provides on-site LEEA training across the UAE and Saudi Arabia, including practical rigging sessions."
      },
      {
        question: "Does LEEA training include practical assessments?",
        answer: "Yes. Participants perform real lifting operations under instructor supervision to demonstrate competence."
      },
      {
        question: "Are bilingual courses available?",
        answer: "Yes. Training is conducted in English and Arabic, ensuring clear understanding for mixed crews."
      },
      {
        question: "Is this certification valid internationally?",
        answer: "Yes. LEEA certification is recognised worldwide and meets compliance standards for global contractors."
      },
      {
        question: "What industries benefit most from LEEA training?",
        answer: "Construction, oil & gas, logistics, heavy equipment and industrial maintenance."
      },
      {
        question: "How long is the LEEA certificate valid?",
        answer: "Certificates do not expire, but refresher courses are recommended every three years to maintain safety awareness and keep up with updates."
      }
    ]
  },
  {
    slug: "leea",
    title: "LEEA Courses",
    track: "International",
    tagline: "Safe lifting starts with skilled leadership",
    image: "/course/ksa/leea.webp",
    duration: "2–5 days",
    accreditationLogo: "/international/LEEA-Logo.webp",
    courseInfoParagraphs: [
      "Arbrit Safety Training and Consultancy has been a LEEA Accredited Training Scheme (ATS) provider for more than 10 years, delivering specialised lifting and rigging training across the region.",
      "Over the years, Arbrit has trained more than 2,500 candidates on the LEEA Appointed Person for Lifting Operations (APLO) programme, along with Crane Supervisor and Rigging & Lifting training.",
      "With experienced LEEA-authorised trainers and strong industry expertise, Arbrit continues to develop competent lifting professionals and promote safer lifting operations across the UAE and Saudi Arabia."
    ],
    courseOfferings: [
      {
        label: "Appointed Person for Lifting Operations (APLO)",
        description: "Advanced lift planning skills for safe, compliant heavy lifting operations.",
        href: "/courses/leea-appointed-person"
      },
      {
        label: "Crane / Lift Supervisor",
        description: "Supervision techniques to ensure safe crane operations and team coordination.",
        href: "/courses/leea-crane-lift-supervisor"
      },
      {
        label: "Rigging & Lifting",
        description: "Core rigging skills for safe load handling and lifting tasks.",
        href: "/courses/leea-rigging-and-lifting"
      }
    ],
    sections: [
      {
        heading: "Who should attend",
        items: [
          "Appointed persons and lift planners",
          "Crane operators and supervisors",
          "Riggers, signallers and lifting technicians",
          "HSE officers and site engineers",
          "Contractors working in the oil & gas, petrochemical and construction sectors"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "After completing LEEA courses with Arbrit, participants will:",
        items: [
          "Plan and execute lifting operations in compliance with LEEA standards",
          "Carry out safe rigging and lifting practices for various load types",
          "Identify and mitigate potential lifting hazards on site",
          "Lead teams effectively during crane and rigging operations",
          "Comply with national safety legislation and client-specific lifting protocols"
        ]
      },
      {
        heading: "Course duration",
        items: [
          "Appointed Person in Lifting Operations: 5 days",
          "Crane Lift Supervisor: 2–3 days",
          "Rigging and Lifting: 2–3 days"
        ],
        outro: "Each course includes classroom sessions, practical field demonstrations and final competency assessments."
      },
      {
        heading: "How LEEA training strengthens safety in lifting operations",
        intro: "Lifting operations are among the highest-risk activities in any industrial project. Through LEEA training, Arbrit helps companies prevent accidents, ensure compliance and improve operational efficiency. Here’s how it adds measurable value:",
        items: [
          "Meets global and national HSE standards: aligns with LEEA, ISO 45001 and national labour and HSE regulations.",
          "Improves competence across teams: ensures every lifting role, from rigger to planner, understands its safety responsibilities.",
          "Reduces downtime and losses: fewer lifting incidents mean uninterrupted operations and better productivity.",
          "Enhances client confidence: certified teams demonstrate technical excellence during project audits and tender evaluations.",
          "Supports workforce localisation goals: builds national expertise in critical lifting and rigging roles."
        ]
      }
    ],
    certificationIntro: "Participants who successfully complete the course and assessments receive LEEA-accredited certificates, recognised internationally and by major contractors across the region, including Saudi Aramco, SABIC and NEOM projects. This certification is essential for companies involved in heavy lifting, construction and industrial operations.",
    faqs: [
      {
        question: "Are LEEA courses recognised in the UAE and Saudi Arabia?",
        answer: "Yes. LEEA certification is globally recognised and accepted by contractors, consultants and safety authorities in the UAE and Saudi Arabia."
      },
      {
        question: "Who should take the Appointed Person in Lifting Operations course?",
        answer: "Engineers, supervisors and planners who are responsible for designing or approving lifting operations."
      },
      {
        question: "How long are the LEEA courses?",
        answer: "Durations vary by course, typically 2 to 5 days, combining classroom theory with hands-on lifting demonstrations."
      },
      {
        question: "Is prior experience required?",
        answer: "Basic knowledge of lifting or construction safety is recommended, especially for advanced levels such as Appointed Person or Lift Supervisor."
      },
      {
        question: "Can training be delivered at our project site?",
        answer: "Yes. Arbrit provides on-site LEEA training across the UAE and Saudi Arabia, including practical rigging sessions."
      },
      {
        question: "Does LEEA training include practical assessments?",
        answer: "Yes. Participants perform real lifting operations under instructor supervision to demonstrate competence."
      },
      {
        question: "Are bilingual courses available?",
        answer: "Yes. Training is conducted in English and Arabic, ensuring clear understanding for mixed crews."
      },
      {
        question: "Is this certification valid internationally?",
        answer: "Yes. LEEA certification is recognised worldwide and meets compliance standards for global contractors."
      },
      {
        question: "What industries benefit most from LEEA training?",
        answer: "Construction, oil & gas, logistics, heavy equipment and industrial maintenance."
      },
      {
        question: "How long is the LEEA certificate valid?",
        answer: "Certificates do not expire, but refresher courses are recommended every three years to maintain safety awareness and keep up with updates."
      }
    ]
  },
  {
    slug: "leea-appointed-person",
    title: "LEEA Appointed Person for Lifting Operations",
    track: "International",
    parent: "leea",
    tagline: "Plan every lift with precision and control",
    image: "/course/ksa/leea-appointed-person.webp",
    duration: "5 days",
    accreditationLogo: "/international/LEEA-Logo.webp",
    aim: "To provide participants with the knowledge and practical skills to plan, organise and manage lifting operations safely, in accordance with international lifting standards, regulations and best practices.",
    outline: [
      {
        label: "Duration",
        value: "5 days"
      },
      {
        label: "Accreditation",
        value: "LEEA approved (Lifting Equipment Engineers Association)"
      },
      {
        label: "Target audience",
        value: "Supervisors, engineers, safety professionals, lifting coordinators and anyone responsible for planning, supervising and controlling lifting operations."
      }
    ],
    sections: [
      {
        heading: "Learning outcomes",
        intro: "Upon successful completion, participants will be able to:",
        items: [
          "Understand legal requirements governing lifting operations.",
          "Identify and evaluate hazards associated with lifting activities.",
          "Plan and prepare lifting operations, from simple to complex lifts.",
          "Select appropriate lifting equipment and lifting accessories.",
          "Assess load weights, centre of gravity and stability.",
          "Prepare lifting plans, method statements and risk assessments.",
          "Communicate effectively with lifting team members.",
          "Ensure safe execution, supervision and handover of lifting operations."
        ]
      },
      {
        heading: "Course modules",
        items: [
          "Module 1: Introduction to Lifting Operations",
          "Module 2: Legislation, Standards & Best Practice",
          "Module 3: Lifting Equipment & Accessories",
          "Module 4: Roles and Responsibilities of Personnel Involved in the Lifting Operation",
          "Module 5: Requirements for Planning a Safe Lift Operation",
          "Module 6: Knowledge of Lifting Accessories",
          "Module 7: Communication & Signalling",
          "Module 8: Preparing a Lifting Plan",
          "Module 9: Practical Application"
        ]
      },
      {
        heading: "Assessment",
        items: [
          "Written examination (theory)",
          "Lifting plan preparation (practical assignment)"
        ]
      }
    ],
    certificationIntro: "Participants who pass the assessments receive a LEEA-approved Appointed Person Certificate, recognised internationally across industries such as construction, oil & gas, fabrication, logistics and marine operations."
  },
  {
    slug: "leea-crane-lift-supervisor",
    title: "LEEA Crane Lift Supervisor",
    track: "International",
    parent: "leea",
    tagline: "Take charge of crane operations with confidence",
    image: "/course/ksa/leea-crane-lift-supervisor.webp",
    duration: "2–3 days",
    accreditationLogo: "/international/LEEA-Logo.webp",
    aim: "To equip participants with the essential knowledge and supervisory skills required to organise, control and supervise crane lifting operations safely, ensuring compliance with industry standards and legal requirements.",
    outline: [
      {
        label: "Duration",
        value: "2–3 days"
      },
      {
        label: "Accreditation",
        value: "LEEA approved (Lifting Equipment Engineers Association)"
      },
      {
        label: "Target audience",
        value: "Lift supervisors, rigging foremen, senior riggers, crane coordinators and personnel involved in supervising crane and lifting operations."
      }
    ],
    sections: [
      {
        heading: "Learning outcomes",
        intro: "By the end of the course, participants will be able to:",
        items: [
          "Understand the legal and safety requirements for crane lifting operations.",
          "Identify hazards and implement safe control measures.",
          "Interpret lift plans and method statements.",
          "Supervise and coordinate the lifting team effectively.",
          "Ensure safe crane setup, configuration and operation.",
          "Communicate clearly using approved lifting signals and protocols.",
          "Manage lifting operations from preparation to completion."
        ]
      },
      {
        heading: "Course modules",
        items: [
          "Module 1: Introduction to Crane Lifting Operations",
          "Module 2: Legislation, Standards & Safety Requirements",
          "Module 3: Types of Cranes & Lifting Equipment",
          "Module 4: Roles and Responsibilities of Personnel Involved in the Lifting Operation",
          "Module 5: Understanding Lift Planning",
          "Module 6: Knowledge of Lifting Accessories",
          "Module 7: Communication & Signalling",
          "Module 8: Supervision of Lifting Operations",
          "Module 9: Practical Application"
        ]
      },
      {
        heading: "Assessment",
        items: [
          "Written examination",
          "Practical assessment"
        ]
      }
    ],
    certificationIntro: "Successful participants receive a LEEA-approved Crane Lift Supervisor Certificate, accepted across construction, oil & gas, marine, logistics, fabrication and industrial sectors."
  },
  {
    slug: "leea-rigging-and-lifting",
    title: "LEEA Rigging and Lifting",
    track: "International",
    parent: "leea",
    tagline: "Strong rigging skills for safer lifting work",
    image: "/course/ksa/leea-rigging-and-lifting.webp",
    duration: "3 days",
    accreditationLogo: "/international/LEEA-Logo.webp",
    aim: "To provide participants with the essential knowledge and practical skills required to perform rigging and lifting operations safely, ensuring compliance with international standards and industry best practice.",
    outline: [
      {
        label: "Duration",
        value: "3 days"
      },
      {
        label: "Accreditation",
        value: "LEEA approved (Lifting Equipment Engineers Association)"
      },
      {
        label: "Target audience",
        value: "Riggers, rigging foremen, lifting technicians, crane assistants, helpers and anyone involved in rigging and lifting operations."
      }
    ],
    sections: [
      {
        heading: "Learning outcomes",
        intro: "Upon completion of the course, participants will be able to:",
        items: [
          "Understand fundamental rigging and lifting terminology.",
          "Identify and inspect lifting accessories.",
          "Calculate load weights, sling angles and tension.",
          "Select the correct rigging gear for different lifting operations.",
          "Rig loads safely using approved techniques.",
          "Communicate with the lifting team using correct hand and radio signals.",
          "Assist crane operators during lifting operations.",
          "Follow safe working practices and lifting procedures."
        ]
      },
      {
        heading: "Course modules",
        items: [
          "Module 1: Introduction to Rigging & Lifting",
          "Module 2: Regulations, Standards & Best Practice",
          "Module 3: Lifting Equipment & Accessories",
          "Module 4: Slinging & Rigging Techniques",
          "Module 5: Load Weight, Centre of Gravity & Sling Angles",
          "Module 6: Rigging Tools & Equipment",
          "Module 7: Crane Basics for Riggers",
          "Module 8: Safe Lifting Practices",
          "Module 9: Communication in Lifting Operations",
          "Module 10: Practical Rigging Session"
        ]
      },
      {
        heading: "Assessment",
        items: [
          "Written test (theory)",
          "Practical assessment (rigging and lifting demonstration)"
        ]
      }
    ],
    certificationIntro: "Participants who successfully complete the course and assessments receive a LEEA-approved Rigging & Lifting Competency Certificate."
  },
  {
    slug: "hse-training",
    title: "HSE Training",
    track: "International",
    tagline: "Practical HSE training that builds safer workplaces",
    image: "/course/ksa/hse-training.webp",
    courseInfoParagraphs: [
      "Arbrit provides a comprehensive range of HSE training programmes across the UAE and Saudi Arabia, designed to improve workforce competence and create safer workplaces.",
      "Our training combines international standards, local regulatory requirements and practical industry experience. Delivered by qualified trainers, our programmes help organisations reduce workplace risk, improve safety performance and build a strong safety culture.",
      "From individual professional development to large-scale corporate training, our focus is practical, competency-driven training that strengthens safety culture, improves workforce capability and contributes to safer workplaces."
    ],
    courseOfferings: [
      {
        label: "IOSH Managing Safely and Working Safely",
        description: "Globally recognised IOSH programmes from an IOSH-approved provider of more than 16 years.",
        href: "/courses/iosh"
      },
      {
        label: "Qualifi Level 7 International Diploma in OHSM",
        description: "An advanced professional qualification for senior and aspiring occupational health and safety professionals.",
        href: "/courses/qualifi-level-7-diploma-ohsm"
      },
      {
        label: "OHS Person In Charge (OHS PIC) Certification Examination",
        description: "Certification for people who oversee occupational health and safety at workplaces in the Emirate of Dubai.",
        href: "/courses/ohs-pic"
      },
      {
        label: "RoSPA Defensive Driving",
        description: "RoSPA Level 2 International Award in Defensive Driving, including the ADNOC-approved version.",
        href: "/courses/rospa"
      },
      {
        label: "NFPA fire, electrical and life safety",
        description: "NFPA code training from an NFPA-approved training provider.",
        href: "/courses/nfpa-training"
      },
      {
        label: "PASMA mobile access towers",
        description: "Work-at-height training from a PASMA Approved Training Centre.",
        href: "/courses/pasma"
      },
      {
        label: "Oil & gas training",
        description: "Specialised process safety and operational HSE training for the oil & gas industry.",
        href: "/courses/oil-and-gas"
      }
    ]
  },
  {
    slug: "ohs-pic",
    title: "OHS Person In Charge (OHS PIC) Certification",
    track: "International",
    parent: "hse-training",
    tagline: "Certification for Dubai's OHS Person In Charge",
    image: "/course/ksa/ohs-pic.webp",
    accreditationLogo: "/accreditation/tsi-logo.webp",
    courseInfoParagraphs: [
      "The Occupational Health and Safety Person In Charge (OHS PIC) Certification Examination is a professional certification scheme for people responsible for overseeing and coordinating occupational health and safety requirements at workplaces in the Emirate of Dubai.",
      "Factories, construction sites and service companies operating in the Emirate of Dubai are required under the applicable scheme to appoint at least one Certified Occupational Health & Safety Person in Charge (OHS PIC) for each work shift and each work location.",
      "TSI Quality Services is the certification body accredited by EIAC for the Dubai OHS PIC Certification Examination scheme. TSI manages the official assessment framework, examination, invigilation and certification process."
    ],
    sections: [
      {
        heading: "Who should attend",
        intro: "The programme is suitable for eligible personnel working in:",
        items: [
          "Factories and industrial establishments",
          "Construction sites",
          "Service companies",
          "Engineering and technical organisations",
          "Other applicable workplaces operating in the Emirate of Dubai"
        ],
        outro: "It is particularly relevant to supervisors, engineers, managers and other personnel who are designated, or expected, to take on OHS Person in Charge responsibilities."
      }
    ]
  },
  {
    slug: "iosh",
    title: "IOSH Courses",
    track: "International",
    tagline: "Globally recognised IOSH courses",
    image: "/course/ksa/iosh.webp",
    duration: "1–4 days",
    accreditationLogo: "/international/iosh.png",
    courseInfoParagraphs: [
      "IOSH (Institution of Occupational Safety and Health) is a UK-based Chartered body for occupational safety and health professionals, recognised globally for promoting high standards in workplace safety.",
      "Arbrit Safety has been an IOSH-approved training provider for over 16 years and has delivered IOSH programmes to a large number of professionals across many industries. Training is available in-house, on-site and through approved delivery methods.",
      "Whether you’re a frontline worker, supervisor or manager, our IOSH programmes give you the practical knowledge and confidence to manage everyday safety risks effectively and in line with national labour and HSE regulations."
    ],
    courseOfferings: [
      {
        label: "IOSH Working Safely",
        description: "A foundational course for all employees. It focuses on core safety principles, hazard identification and personal responsibility for maintaining a safe workplace.",
        href: "/courses/iosh-working-safely"
      },
      {
        label: "IOSH Managing Safely",
        description: "For supervisors, team leaders and managers. It provides the tools to assess risks, investigate incidents and build a proactive safety culture across teams and departments.",
        href: "/courses/iosh-managing-safely"
      }
    ],
    sections: [
      {
        heading: "Who should attend",
        items: [
          "Employees and contractors in any industry",
          "Supervisors and site managers",
          "Health & Safety officers and coordinators",
          "HR and compliance professionals who are responsible for workforce safety"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "After completing an IOSH course with Arbrit, participants will:",
        items: [
          "Understand workplace hazards and risk-control measures",
          "Recognise employer and employee safety responsibilities",
          "Apply international and national safety best practices",
          "Improve incident reporting and prevention strategies",
          "Foster a culture of safety, accountability and leadership"
        ]
      },
      {
        heading: "Course duration",
        items: [
          "IOSH Working Safely: 1 day",
          "IOSH Managing Safely: 3–4 days"
        ],
        outro: "Both include practical sessions, case studies and final assessments."
      },
      {
        heading: "How IOSH certification supports compliance",
        intro: "The region’s growth has placed a strong emphasis on occupational safety, health and workforce well-being. Organisations are now expected to maintain internationally aligned safety standards to qualify for large-scale industrial, construction and energy projects. Here’s how IOSH training contributes to compliance and competitiveness:",
        items: [
          "Aligns with national labour and HSE regulations, ensuring compliance with mandatory safety training requirements.",
          "Reduces workplace incidents through proactive hazard recognition and preventive action, which are key criteria in government and contractor audits.",
          "Improves contractor prequalification scores, as IOSH-certified personnel are often a requirement in bidding and vendor registration.",
          "Boosts employee retention and morale by showing an organisation’s commitment to safety and professional growth.",
          "Supports ISO 45001 and OHSAS 18001 implementation, helping firms integrate safety management systems."
        ]
      }
    ],
    certificationIntro: "Successful candidates receive a globally recognised IOSH certificate, accepted by organisations across the UAE and Saudi Arabia, including in major industrial zones.",
    faqs: [
      {
        question: "Are IOSH courses recognised by employers and authorities in the UAE and Saudi Arabia?",
        answer: "Yes. IOSH certifications are internationally recognised and highly regarded by companies in the UAE and Saudi Arabia, especially in the construction, oil & gas and industrial sectors that follow international HSE benchmarks."
      },
      {
        question: "What is the difference between IOSH Working Safely and IOSH Managing Safely?",
        answer: "Working Safely is an entry-level course for all staff. Managing Safely is for supervisors and managers who oversee health and safety responsibilities."
      },
      {
        question: "Can IOSH training be conducted at our company premises?",
        answer: "Yes. Arbrit delivers on-site IOSH training across the UAE and Saudi Arabia, so organisations can train teams without interrupting operations."
      },
      {
        question: "How long are the IOSH courses, and what do they include?",
        answer: "Working Safely is a one-day programme. Managing Safely runs over three to four days. Both include interactive case studies, assessments and real-world safety applications."
      },
      {
        question: "Who should attend IOSH courses?",
        answer: "Anyone responsible for workplace safety, from technicians and foremen to HSE managers and HR professionals, will benefit from IOSH certification."
      },
      {
        question: "What are the prerequisites for enrolling in IOSH courses?",
        answer: "No prior qualifications are required. Basic literacy in English or Arabic and an understanding of workplace operations are enough to take part effectively."
      },
      {
        question: "Are IOSH certificates valid internationally?",
        answer: "Yes. IOSH qualifications are accepted globally and valued by employers in Saudi Arabia, the UAE, Europe and Asia, making them ideal for career advancement."
      },
      {
        question: "Does Arbrit provide IOSH refresher or renewal training?",
        answer: "Yes. Professionals can enrol in refresher courses to update their knowledge and stay compliant with evolving national safety regulations."
      },
      {
        question: "How much does an IOSH course cost?",
        answer: "Course fees vary by group size and training mode (on-site or classroom). Companies booking multiple participants can request corporate training packages with special pricing."
      },
      {
        question: "How soon will participants receive their IOSH certificate?",
        answer: "Certificates are typically issued within 10–14 working days after course completion and assessment validation."
      }
    ]
  },
  {
    slug: "iosh-managing-safely",
    title: "IOSH Managing Safely",
    track: "International",
    parent: "iosh",
    tagline: "Empower leaders with IOSH Managing Safely training",
    image: "/course/ksa/iosh-managing-safely.webp",
    duration: "3 days",
    accreditationLogo: "/international/iosh.png",
    aim: "To provide managers and supervisors with the knowledge and tools required to manage health and safety effectively within their teams and work environments.",
    courseInfoParagraphs: [
      "The IOSH Managing Safely course is designed for supervisors, team leaders and managers who need practical tools to manage health and safety within their teams. Arbrit delivers this internationally recognised qualification across the UAE and Saudi Arabia, helping organisations strengthen compliance, reduce risk and embed a proactive safety culture at every level."
    ],
    outline: [
      {
        label: "Duration",
        value: "3 days"
      },
      {
        label: "Accreditation",
        value: "Institution of Occupational Safety and Health (IOSH)"
      },
      {
        label: "Target audience",
        value: "Managers, supervisors, team leaders and anyone with responsibility for managing health and safety in the workplace."
      }
    ],
    sections: [
      {
        heading: "Learning outcomes",
        intro: "By the end of the course, participants will be able to:",
        items: [
          "Understand their responsibilities for health and safety.",
          "Assess and control workplace risks.",
          "Identify hazards and implement control measures.",
          "Measure and improve health and safety performance.",
          "Investigate incidents and understand root causes.",
          "Apply practical actions to protect people and the business."
        ]
      },
      {
        heading: "Course modules",
        items: [
          "Module 1 – Introducing Managing Safely: importance of managing safely; legal responsibilities; benefits of good health and safety management; key terms and concepts.",
          "Module 2 – Assessing Risks: understanding hazards and risks; the risk assessment process; likelihood and consequence; risk-rating systems.",
          "Module 3 – Controlling Risks: hierarchy of control; selecting appropriate control measures; practical risk control examples.",
          "Module 4 – Understanding Responsibilities: legal framework (employer and employee duties); accountability and responsibility; the role of managers and supervisors.",
          "Module 5 – Common Hazards: a range of workplace hazards, including mechanical and electrical hazards; fire and manual handling; slips, trips and falls; chemical and biological hazards; display screen equipment; psychosocial risks; environmental factors.",
          "Module 6 – Investigating Incidents: why incidents happen; the investigation process; root cause analysis; corrective and preventive actions.",
          "Module 7 – Measuring Performance: active and reactive monitoring; key performance indicators (KPIs); audits and inspections; continuous improvement."
        ]
      },
      {
        heading: "Assessment",
        items: [
          "Multiple-choice exam conducted online",
          "Practical risk assessment task submitted after the course"
        ]
      }
    ],
    certificationIntro: "Participants who successfully complete the assessments receive the IOSH Managing Safely Certificate, recognised globally.",
    faqs: [
      {
        question: "What is the main objective of the IOSH Managing Safely course?",
        answer: "The course helps managers and supervisors gain the confidence and skills to handle health and safety responsibilities effectively within their departments."
      },
      {
        question: "Is this course suitable for first-time safety managers?",
        answer: "Yes. IOSH Managing Safely is ideal for professionals new to safety management, as well as experienced supervisors who want to formalise their knowledge."
      },
      {
        question: "How long does the IOSH Managing Safely training last?",
        answer: "The programme runs for three days, with interactive discussions, risk assessment workshops and a final written and practical assessment."
      },
      {
        question: "Is the IOSH Managing Safely certificate recognised in the UAE and Saudi Arabia?",
        answer: "Yes. The certification is accepted by employers and contractors across the UAE and Saudi Arabia."
      },
      {
        question: "Can Arbrit deliver this training on-site?",
        answer: "Yes. We offer both in-class and on-site IOSH Managing Safely courses, so corporate teams can complete training without interrupting operations."
      },
      {
        question: "What are the prerequisites for joining this course?",
        answer: "No prior safety qualifications are needed, though participants should hold supervisory or managerial roles to apply the training effectively."
      },
      {
        question: "How is the assessment structured?",
        answer: "The course includes a multiple-choice written test and a practical workplace-based risk assessment project. Both are required for certification."
      },
      {
        question: "Can this IOSH Managing Safely course count toward other professional certifications?",
        answer: "Yes. It serves as a foundation for further HSE qualifications such as NEBOSH or ISO Lead Auditor programmes."
      },
      {
        question: "Does Arbrit provide IOSH Managing Safely refresher sessions?",
        answer: "Yes. Refresher courses are available for previously certified managers who want to renew their IOSH knowledge and stay current with national safety regulations."
      },
      {
        question: "How long is the certificate valid, and when will I receive it?",
        answer: "IOSH certification does not expire, but refresher training is advised every 3–4 years. Certificates are usually issued within 10–14 working days after assessment."
      }
    ]
  },
  {
    slug: "iosh-working-safely",
    title: "IOSH Working Safely",
    track: "International",
    parent: "iosh",
    tagline: "IOSH Working Safely – the foundation of workplace safety",
    image: "/course/ksa/iosh-working-safely.webp",
    duration: "1 day",
    accreditationLogo: "/international/iosh.png",
    aim: "To provide workers with essential knowledge and practical skills to work safely, identify hazards and contribute to improving health and safety performance in their workplace.",
    courseInfoParagraphs: [
      "The IOSH Working Safely course is an essential entry-level qualification for employees at all levels — from technicians and operators to administrative staff. Through this short programme, Arbrit helps organisations across the UAE and Saudi Arabia build a stronger, safety-first culture that reduces risk and boosts overall productivity.",
      "This internationally recognised training suits companies that need to comply with local safety regulations while aligning with global best practice in occupational health and safety."
    ],
    outline: [
      {
        label: "Duration",
        value: "1 day"
      },
      {
        label: "Accreditation",
        value: "Institution of Occupational Safety and Health (IOSH)"
      },
      {
        label: "Target audience",
        value: "All employees, workers and staff at any level who require a basic awareness of workplace health and safety."
      }
    ],
    sections: [
      {
        heading: "Learning outcomes",
        intro: "Upon completion, participants will be able to:",
        items: [
          "Understand the importance of working safely.",
          "Identify common workplace hazards.",
          "Contribute to assessing and controlling risks.",
          "Take practical steps to ensure their own and others’ safety.",
          "Report incidents and unsafe conditions effectively."
        ]
      },
      {
        heading: "Course modules",
        items: [
          "Module 1 – Introducing Working Safely: importance of health and safety; personal responsibilities; key definitions: hazard, risk, control.",
          "Module 2 – Defining Hazards and Risks: types of hazards (physical, chemical, biological, ergonomic, psychosocial); assessing risks; simple risk assessment techniques.",
          "Module 3 – Identifying Common Workplace Hazards: real-life examples covering fire hazards; electricity; manual handling; slips, trips and falls; noise and vibration; chemicals and hazardous substances; work at height; tools and machinery; housekeeping and environment.",
          "Module 4 – Improving Safety Performance: safety signs and signals; PPE usage and limitations; safe systems of work; emergency procedures; reporting unsafe conditions; the role of safety culture."
        ]
      },
      {
        heading: "Assessment",
        items: [
          "Multiple-choice test",
          "Practical hazard-spotting exercise"
        ]
      },
      {
        heading: "How IOSH Working Safely training builds a strong safety culture",
        intro: "Compliance alone isn’t enough — safety must be part of everyday behaviour. The IOSH Working Safely course empowers employees to take ownership of their actions and make safety a shared responsibility across all levels of the workforce. Here’s how the course strengthens safety performance:",
        items: [
          "Builds awareness from the ground up: helps workers understand the real impact of unsafe behaviour and how small actions prevent major incidents.",
          "Supports regulatory compliance: meets national labour and HSE requirements for occupational safety awareness training.",
          "Reduces incident rates and downtime: trained employees identify hazards early and report them before they become accidents.",
          "Encourages environmental accountability: promotes responsible use of materials, waste reduction and energy awareness.",
          "Improves productivity: safer, more confident employees contribute to smoother, more efficient operations."
        ]
      }
    ],
    certificationIntro: "Participants who successfully complete the assessment receive an IOSH Working Safely Certificate, widely recognised across industries and sectors.",
    faqs: [
      {
        question: "What is the purpose of the IOSH Working Safely course?",
        answer: "It gives all employees the essential knowledge to identify hazards, reduce risks and help maintain a safe and healthy workplace."
      },
      {
        question: "How long does the IOSH Working Safely training take to complete?",
        answer: "The programme is completed in one day, which suits companies that need quick, effective compliance training without disrupting operations."
      },
      {
        question: "Is the IOSH Working Safely certificate valid in the UAE and Saudi Arabia?",
        answer: "Yes. The certificate is internationally recognised and accepted by employers in the UAE and Saudi Arabia across sectors such as construction, logistics, oil & gas and manufacturing."
      },
      {
        question: "Who should attend the IOSH Working Safely course?",
        answer: "The course is designed for all employees — from entry-level staff to experienced workers — who need a better understanding of workplace safety and their responsibilities."
      },
      {
        question: "Can the IOSH Working Safely course be delivered on-site?",
        answer: "Yes. Arbrit provides on-site IOSH training for companies across the UAE and Saudi Arabia, as well as open sessions at our training centres."
      },
      {
        question: "What topics are covered in the IOSH Working Safely course?",
        answer: "It covers hazard identification, risk control, incident prevention, environmental awareness and personal responsibility for safety."
      },
      {
        question: "Are there any prerequisites for joining this course?",
        answer: "No prior qualifications are required. The course suits all employees, regardless of education or experience level."
      },
      {
        question: "How is the assessment conducted?",
        answer: "Participants complete a short multiple-choice test and a hazard-spotting exercise at the end of the session to earn their IOSH certification."
      },
      {
        question: "How can companies benefit from enrolling their staff in IOSH Working Safely?",
        answer: "Organisations that train their teams in IOSH principles see fewer accidents, lower absenteeism and improved compliance with national safety regulations."
      },
      {
        question: "How long will it take to receive the IOSH certificate after training?",
        answer: "Certificates are typically issued within 10–14 working days of completing the course and assessment."
      }
    ]
  },
  {
    slug: "highfield",
    title: "Highfield Courses",
    track: "International",
    tagline: "Highfield safety certifications for industry",
    image: "/course/ksa/highfield.webp",
    duration: "1–3 days",
    accreditationLogo: "/international/HABCLogo.png",
    courseInfoParagraphs: [
      "Arbrit offers a comprehensive suite of Highfield-certified training programmes for corporate clients and professionals across the UAE and Saudi Arabia. From frontline workers to supervisors, our Highfield courses serve industries including oil & gas, construction, food manufacturing, hospitality and services. Our training supports compliance with national labour and HSE regulations and global best practices."
    ],
    courseOfferings: [
      {
        label: "First Aid / Emergency First Aid (Levels 1–4)",
        description: "Essential first aid skills for quick, effective response to workplace emergencies.",
        href: "/courses/highfield-first-aid"
      },
      {
        label: "Fire Safety",
        description: "Practical fire prevention knowledge to protect people, property and operations.",
        href: "/courses/highfield-fire-safety"
      },
      {
        label: "Food Safety / HACCP",
        description: "Critical food safety principles for hygienic, compliant handling practices.",
        href: "/courses/highfield-food-safety-haccp"
      },
      {
        label: "Train the Trainer",
        description: "Develops confident trainers who can deliver effective workplace learning.",
        href: "/courses/highfield-train-the-trainer"
      }
    ],
    sections: [
      {
        heading: "Also available on request",
        items: [
          "Level 2 International Award in Basic H2S Awareness and Use of EEBA (Onshore)",
          "Level 2 International Award in Control of Substances Hazardous to Health (COSHH)",
          "Level 2 International Award in Risk Assessment",
          "Level 3 International Award in Accident and Incident Investigation",
          "Level 3 International Award in Delivering Training"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "Corporate safety teams, HSE officers and supervisors",
          "Employees across operations, manufacturing, food production, construction and camps",
          "Trainers and in-house L&D managers looking to build internal capability",
          "Project managers and site contractors who need accredited safety qualifications for trades and site staff"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "Participants in our Highfield courses will:",
        items: [
          "Gain detailed knowledge of hazards, controls and compliance requirements relevant to their specific domain",
          "Be able to carry out risk assessments and emergency response planning tailored to local worksites",
          "Develop the competence to handle first aid, work-at-height or fire-related incidents with confidence",
          "Improve onsite safety culture and reduce incident frequency, downtime and regulatory exposure",
          "Support internal training and capability building for ongoing workforce development"
        ]
      },
      {
        heading: "Course duration",
        intro: "Durations vary by programme. Typical durations:",
        items: [
          "First Aid (Basic/Emergency): 1 day",
          "Fire Safety / COSHH / Risk Assessment: 1–2 days",
          "More specialised courses (Train the Trainer, Work at Height): may run 2–3 days, depending on the client group and customisation"
        ]
      },
      {
        heading: "How these Highfield courses strengthen operational safety",
        intro: "Organisations operating in the UAE and Saudi Arabia face increasing demands for safety competence, regulatory compliance and workforce readiness. Our Highfield courses deliver value by:",
        items: [
          "Ensuring employees and contractors hold recognised safety credentials aligned with local work-site audit requirements",
          "Reducing downtime, costly accidents and regulatory non-compliance through practical training",
          "Enabling internal training capability (via Train the Trainer), which supports large-scale workforce deployment across remote locations",
          "Supporting cross-industry workforce mobility (construction ↔ oil & gas ↔ food & hospitality) through widely accepted certifications",
          "Strengthening project bids and prequalification packages by showing accredited workforce competencies"
        ]
      }
    ],
    certificationIntro: "All participants receive Highfield-accredited certificates on successful completion and assessment. The certificates are recognised internationally and accepted by industrial operators in the UAE and Saudi Arabia, so your workforce meets both global standards and local compliance expectations.",
    faqs: [
      {
        question: "Are Highfield certificates valid in industrial sectors in the UAE and Saudi Arabia?",
        answer: "Yes. Highfield qualifications are internationally recognised and increasingly required by employers, contractors and project owners in the UAE and Saudi Arabia for many safety-critical roles."
      },
      {
        question: "Can a company book multiple Highfield courses for its workforce across different locations?",
        answer: "Yes. Arbrit offers flexible corporate training packages across the UAE and Saudi Arabia, tailored to company scale and project sites."
      },
      {
        question: "How long before participants receive their certificate?",
        answer: "Certificates are typically issued within 10–14 working days after successful completion of the assessment, depending on the course."
      },
      {
        question: "What are the prerequisites for Highfield training, such as COSHH or Work at Height?",
        answer: "A specific prior qualification is not always required, but relevant work experience or site exposure is recommended for advanced courses such as Work at Height or Train the Trainer."
      },
      {
        question: "Are refresher or renewal sessions available for these Highfield courses?",
        answer: "Yes. Many courses, such as First Aid and Fire Safety, recommend periodic refreshers (for example, every 2–3 years) to maintain competence and compliance."
      },
      {
        question: "Do you provide training in both English and Arabic?",
        answer: "Yes. Corporate groups can choose bilingual delivery (English & Arabic) to suit diverse workforce groups."
      },
      {
        question: "How are practical assessments handled for courses like Work at Height or First Aid?",
        answer: "These courses include hands-on drills, scenario-based assessments and workplace-simulation tasks to ensure real-world competence, not just theory."
      },
      {
        question: "What industries are best suited for Highfield food safety courses?",
        answer: "Food Safety / HACCP courses are ideal for catering operators, food-manufacturing sites, hotel food services, retail food outlets and hospitality groups operating in the UAE and Saudi Arabia."
      },
      {
        question: "Can Arbrit deliver on-site training for remote locations or project camps?",
        answer: "Yes. We deliver training at project camps, remote sites and multi-site operations across the UAE and Saudi Arabia."
      },
      {
        question: "How do these Highfield certifications support project bid and vendor-prequalification requirements?",
        answer: "Accredited safety training is often a mandatory part of vendor registration, site access and contractor compliance packages. Highfield certificates help demonstrate workforce competence and readiness."
      }
    ]
  },
  {
    slug: "highfield-first-aid",
    title: "Highfield First Aid / Emergency First Aid (Levels 1–4)",
    track: "International",
    parent: "highfield",
    tagline: "Be ready to save lives — Highfield first aid training",
    image: "/course/ksa/highfield-first-aid.webp",
    duration: "1–4 days",
    accreditationLogo: "/international/HABCLogo.png",
    courseInfoParagraphs: [
      "Every second counts in an emergency. The Highfield First Aid and Emergency First Aid (Level 1–4) courses by Arbrit prepare employees, supervisors and safety officers to respond effectively to workplace injuries, medical emergencies and accidents.",
      "Delivered across the UAE and Saudi Arabia, these programmes combine essential theory with practical, hands-on learning aligned with international and national health and safety requirements.",
      "Whether your team works in an office, factory, construction site or remote camp, this training ensures that designated first aiders are competent, compliant and confident when it matters most."
    ],
    sections: [
      {
        heading: "What the course covers",
        items: [
          "Level 2 International Award in Basic Life Support and Use of an AED",
          "Level 3 Award in Emergency Care for First Responders",
          "Level 3 Award in First Aid at Work (RQF)",
          "Level 3 Award in First Aid Response (RQF)",
          "Level 3 International Award in Emergency First Aid and Use of AED with CPR for all Ages",
          "Level 3 International Award in Emergency First Aid at Work and Use of an AED",
          "Level 3 International Award in Emergency Paediatric First Aid",
          "Level 3 International Award in Emergency Paediatric First Aid and Use of an AED"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "Employees in high-risk sectors such as construction, oil & gas and manufacturing",
          "Safety officers, supervisors and designated workplace first aiders",
          "Camp managers and remote site coordinators",
          "HR and admin staff who are responsible for emergency preparedness and compliance"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "Upon completing the Highfield First Aid / Emergency First Aid course, participants will:",
        items: [
          "Recognise and respond to common medical emergencies confidently",
          "Deliver CPR and basic life support following international protocols",
          "Manage bleeding, fractures, burns and shock safely and effectively",
          "Use first aid equipment, including AEDs (automated external defibrillators)",
          "Document incidents in accordance with national workplace safety regulations"
        ]
      },
      {
        heading: "Course duration",
        items: [
          "Level 1–2: 1 day",
          "Level 3: 2–3 days",
          "Level 4 (instructor level): 3–4 days"
        ],
        outro: "Each session blends classroom learning with scenario-based simulations and real-world emergency drills to reinforce quick decision-making under pressure."
      },
      {
        heading: "How first aid training strengthens workplace safety",
        intro: "Workplace safety standards are evolving rapidly, but incidents can still happen anywhere, at any time. Certified first aiders drastically reduce the severity of injuries and the time taken for critical response. Here’s how Highfield-accredited first aid training benefits your organisation:",
        items: [
          "Trained first aiders can stabilise injured workers before emergency services arrive, minimising long-term injury risks.",
          "Meets national occupational safety regulations and contractor audit requirements for certified workplace first aiders.",
          "Employees feel safer knowing their colleagues are trained to handle emergencies calmly and correctly.",
          "Immediate intervention shortens recovery time and prevents minor injuries from becoming major incidents.",
          "Builds a proactive safety culture: encourages accountability and awareness among teams, especially in remote or high-risk work zones."
        ]
      }
    ],
    certificationIntro: "Successful participants receive Highfield-accredited first aid certificates, valid internationally and recognised across the UAE and Saudi Arabia. These certifications comply with national health and workplace safety requirements.",
    faqs: [
      {
        question: "Are these Highfield First Aid courses recognised by employers and authorities in the UAE and Saudi Arabia?",
        answer: "Yes. All levels of Highfield First Aid and Emergency First Aid are internationally accredited and meet the requirements set by national labour and health authorities."
      },
      {
        question: "How do I know which level of first aid course is right for my team?",
        answer: "Level 1–2: for general employees and small offices. Level 3: for safety officers or high-risk environments. Level 4: for trainers and supervisors leading emergency programmes."
      },
      {
        question: "Can the first aid training be conducted at our company site?",
        answer: "Yes. Arbrit offers on-site First Aid and Emergency First Aid training across the UAE and Saudi Arabia, with all required materials provided."
      },
      {
        question: "What’s included in the course assessment?",
        answer: "Participants complete a written assessment and practical demonstrations, including CPR, bleeding control and emergency simulations."
      },
      {
        question: "How long is the certificate valid?",
        answer: "Typically three years. Arbrit also offers refresher and renewal training to maintain certification."
      },
      {
        question: "What equipment and facilities are used during training?",
        answer: "Courses use professional medical manikins, AED trainers, bandaging kits and other emergency equipment for realistic practice."
      },
      {
        question: "Is bilingual training (English and Arabic) available?",
        answer: "Yes. Training is conducted in both English and Arabic so that diverse teams can follow it fully."
      },
      {
        question: "Does the course cover child and infant first aid?",
        answer: "Yes. The Level 3 and 4 programmes include modules on paediatric first aid, suitable for schools, family compounds and hospitality environments."
      },
      {
        question: "Can first aiders trained by Arbrit work on Saudi Aramco or NEOM projects?",
        answer: "Yes. These Highfield-accredited first aid certificates are accepted by major contractors and clients across the region, including Saudi Aramco and NEOM projects."
      },
      {
        question: "How quickly can we schedule training for our site?",
        answer: "Corporate sessions can be arranged within one to two weeks, with flexible batch timings to suit shift-based workforces."
      }
    ]
  },
  {
    slug: "highfield-fire-safety",
    title: "Highfield Fire Safety",
    track: "International",
    parent: "highfield",
    tagline: "Prevent fires. Protect people. Promote safety.",
    image: "/course/ksa/highfield-fire-safety.webp",
    duration: "1 day",
    accreditationLogo: "/international/HABCLogo.png",
    courseInfoParagraphs: [
      "Fire can devastate lives, property and productivity in seconds. The Highfield Fire Safety training programmes offered by Arbrit give employees and supervisors the knowledge and confidence to prevent fires, respond quickly to emergencies and ensure full regulatory compliance.",
      "Delivered across the UAE and Saudi Arabia, these courses meet national workplace safety requirements and align with international fire protection standards. Whether you’re preparing fire wardens, training building occupants or upgrading your team’s emergency readiness, this course keeps your organisation one step ahead of risk."
    ],
    sections: [
      {
        heading: "What the course covers",
        items: [
          "Level 2 International Award in Fire Safety for Fire Wardens",
          "Level 2 International Award in Fire Safety"
        ]
      },
      {
        heading: "Key learning modules",
        intro: "The Highfield Fire Safety course covers both prevention and response, blending theory, drills and equipment handling. Key learning modules include:",
        items: [
          "Principles of fire science and combustion",
          "Types and classes of fire and extinguishers",
          "Fire prevention, control and housekeeping practices",
          "Safe evacuation procedures and alarm systems",
          "Roles and responsibilities of fire wardens and marshals",
          "Practical demonstrations in extinguisher use and emergency coordination"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "Fire wardens, marshals and designated emergency responders",
          "Safety officers and facility managers",
          "Camp supervisors and building maintenance personnel",
          "All employees responsible for fire prevention and evacuation procedures"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "After completing this course, participants will be able to:",
        items: [
          "Identify common fire hazards and assess fire risks in the workplace",
          "Operate fire extinguishers safely and select the right one for each fire type",
          "Lead or assist in emergency evacuations and fire drills",
          "Implement fire prevention strategies in line with national safety regulations",
          "Promote awareness and accountability among team members"
        ]
      },
      {
        heading: "Course duration",
        intro: "This Highfield Fire Safety course typically runs for one full day, combining classroom instruction, visual demonstrations and practical exercises in controlled environments."
      },
      {
        heading: "How fire safety training protects workplaces",
        intro: "Fires are one of the most preventable workplace hazards, yet they remain among the most costly. Proper fire safety training is not just about compliance; it’s about creating a culture of vigilance and preparedness. Here’s how Highfield Fire Safety training benefits organisations:",
        items: [
          "Early hazard recognition: employees learn how to spot electrical faults, flammable risks and unsafe storage before they become ignition points.",
          "Compliance assurance: meets local civil defence requirements and national labour regulations for certified fire wardens.",
          "Effective emergency response: teams can manage evacuation and use firefighting equipment efficiently and safely.",
          "Reduced property and operational loss: trained responders minimise damage and downtime during incidents.",
          "Improved employee morale: knowing that the workplace is well prepared creates confidence and a stronger safety culture."
        ]
      }
    ],
    certificationIntro: "Participants who successfully complete the course receive a Highfield Fire Safety certificate, recognised internationally and by organisations across the UAE and Saudi Arabia. The certification demonstrates compliance with local fire and civil defence requirements and can be used to satisfy corporate audit and project prequalification requirements.",
    faqs: [
      {
        question: "Is the Highfield Fire Safety certification recognised in the UAE and Saudi Arabia?",
        answer: "Yes. The certification is accepted across industries and meets local civil defence and occupational safety standards for fire preparedness training."
      },
      {
        question: "How long does the Fire Safety course take to complete?",
        answer: "It’s a one-day session that includes both classroom learning and practical fire extinguisher handling."
      },
      {
        question: "Who should attend Fire Warden or Fire Safety training?",
        answer: "Any employee assigned to emergency roles, as well as safety officers, facility managers and supervisors in charge of workplace safety."
      },
      {
        question: "Can this training be conducted at our facility or camp?",
        answer: "Yes. Arbrit provides on-site fire safety training across the UAE and Saudi Arabia, with portable equipment for practical exercises."
      },
      {
        question: "Does the course include hands-on practice with extinguishers?",
        answer: "Yes. Every session includes live or simulated demonstrations so participants can practise safe extinguisher use and evacuation coordination."
      },
      {
        question: "How often should fire safety training be renewed?",
        answer: "A refresher is recommended every two years, or when significant workplace changes occur (new layout, new equipment, etc.)."
      },
      {
        question: "Is bilingual training available?",
        answer: "Yes. Courses are offered in English and Arabic so that all employees fully understand fire safety procedures."
      },
      {
        question: "Does this course cover fire safety for construction or camp sites?",
        answer: "Yes. The training includes modules specific to temporary structures, accommodation camps and high-risk industrial settings."
      },
      {
        question: "How many people can be trained in a single session?",
        answer: "Group sizes range from 10–20 participants per session, so everyone receives hands-on instruction and evaluation."
      },
      {
        question: "What are the benefits of having certified fire wardens on site?",
        answer: "They ensure faster, more coordinated responses during emergencies, reducing damage, injury risk and potential penalties for non-compliance."
      }
    ]
  },
  {
    slug: "highfield-food-safety-haccp",
    title: "Highfield Food Safety & HACCP",
    track: "International",
    parent: "highfield",
    tagline: "Protect your brand with certified food safety training",
    image: "/course/ksa/highfield-food-safety-haccp.webp",
    duration: "1–4 days",
    accreditationLogo: "/international/HABCLogo.png",
    courseInfoParagraphs: [
      "The Highfield Food Safety and HACCP certification courses offered by Arbrit help food industry professionals maintain the highest standards of hygiene, safety and quality control.",
      "Delivered across the UAE and Saudi Arabia, these courses support food producers, caterers and hospitality businesses in meeting both national and international safety standards.",
      "Our training goes beyond compliance. It helps teams understand food hazards, implement effective controls, and protect customers and reputations through safe handling, preparation and storage practices."
    ],
    sections: [
      {
        heading: "What the course covers",
        intro: "The Food Safety and HACCP training is structured to match the operational needs of different sectors, from industrial kitchens to logistics hubs and remote camps.",
        items: [
          "Level 1 Award in Food Safety for Catering",
          "Level 1 Award in Food Safety for Manufacturing",
          "Level 1 International Award in Food Safety",
          "Level 2 Award in Food Safety for Manufacturing",
          "Level 2 Award in Food Safety for Retail",
          "Level 2 International Award in Food Safety",
          "Level 3 International Award in Developing a Positive Food Safety Culture",
          "Level 3 International Award in Food Safety",
          "Level 4 International Award in Managing Food Safety for Catering",
          "Level 5 International Award in Advanced Food Safety Management"
        ]
      },
      {
        heading: "Key learning modules",
        items: [
          "Introduction to foodborne illnesses and contamination",
          "Principles of personal hygiene and cross-contamination control",
          "HACCP (Hazard Analysis and Critical Control Points) methodology",
          "Food storage, temperature control and sanitation practices",
          "Cleaning schedules and pest management",
          "Internal audits and documentation for food safety compliance"
        ],
        outro: "These modules align with local food safety authority and GCC hygiene standards."
      },
      {
        heading: "Who should attend",
        items: [
          "Food handlers, chefs and catering teams",
          "Quality assurance and HSE officers in the food sector",
          "Supervisors and managers overseeing food production or service",
          "Camp managers and site caterers serving large workforces",
          "Professionals in hospitality, healthcare and industrial catering"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "Upon completing the Highfield Food Safety and HACCP certification course, participants will be able to:",
        items: [
          "Identify contamination risks and critical control points in their workplace",
          "Implement HACCP principles to prevent foodborne hazards",
          "Maintain compliance with local food safety authority regulations and ISO 22000 requirements",
          "Train colleagues on hygiene and cleaning standards",
          "Prepare documentation for internal audits and client inspections"
        ]
      },
      {
        heading: "Course duration",
        intro: "The course duration depends on the level of training and the participant’s role:",
        items: [
          "Level 1–2 (basic food handlers): 1 day",
          "Level 3 (supervisors / QA teams): 2–3 days",
          "Level 4 (managers / HACCP leaders): 3–4 days"
        ],
        outro: "Each course blends theory with practical demonstrations such as contamination control exercises, hygiene inspections and audit preparation."
      },
      {
        heading: "How food safety certification strengthens businesses",
        intro: "In the region’s rapidly expanding food industry, from fine dining to mass catering in industrial camps, maintaining safety isn’t optional; it’s operational survival. Certified HACCP and food safety training from Arbrit helps businesses reduce risk and increase efficiency at every level. Here’s how it creates measurable impact:",
        items: [
          "Prevents costly contamination incidents: teams learn to control hazards before they occur.",
          "Improves inspection readiness: documentation and audit training ensure smooth food safety authority and municipal audits.",
          "Reduces waste and spoilage: proper temperature and storage practices minimise losses and downtime.",
          "Enhances consumer confidence: certified operations signal professionalism and trustworthiness to clients and consumers.",
          "Integrates cross-safety awareness: employees gain transferable awareness of hygiene, chemical handling (COSHH) and risk assessment, supporting overall site safety culture."
        ]
      }
    ],
    certificationIntro: "Successful candidates receive an internationally recognised Highfield Food Safety certificate, accepted across the UAE, Saudi Arabia and the GCC. The certification strengthens company compliance with local food safety authority, municipality and ISO 22000 / HACCP requirements, which are essential for tenders, audits and client contracts.",
    faqs: [
      {
        question: "Is the Highfield Food Safety certification recognised by employers and authorities in the UAE and Saudi Arabia?",
        answer: "Yes. The certification meets local food safety authority and municipality food hygiene standards and is recognised across the UAE and Saudi Arabia."
      },
      {
        question: "Who should attend the Food Safety and HACCP course?",
        answer: "Any employee involved in food preparation, catering or storage, from kitchen assistants to quality assurance managers, will benefit from this training."
      },
      {
        question: "How long is the Food Safety certification valid?",
        answer: "Certificates are valid for three years, after which a refresher course is recommended to stay compliant with updated standards."
      },
      {
        question: "Can this training be delivered at our restaurant, facility or campsite?",
        answer: "Yes. Arbrit conducts on-site food safety training across the UAE and Saudi Arabia, tailored to specific facility operations."
      },
      {
        question: "Does the HACCP course include practical exercises?",
        answer: "Yes. Participants conduct real-world hazard analysis, temperature checks and documentation practice to simulate audit conditions."
      },
      {
        question: "What’s the difference between Food Safety and HACCP courses?",
        answer: "Food Safety covers day-to-day hygiene and handling practices, while HACCP focuses on systematic risk management, documentation and audit compliance."
      },
      {
        question: "Do participants receive separate certificates for HACCP?",
        answer: "Yes. HACCP certification is provided as a Highfield-endorsed qualification, distinct from the general Food Safety certificate."
      },
      {
        question: "Are bilingual sessions available?",
        answer: "Yes. Courses are offered in English and Arabic, so multicultural teams in kitchens and camps understand the content clearly."
      },
      {
        question: "How do these certifications support business operations?",
        answer: "They improve audit scores, strengthen client trust and help organisations meet international supply-chain safety requirements."
      },
      {
        question: "Can Arbrit combine Food Safety training with other programmes?",
        answer: "Yes. Many clients combine it with Fire Safety, COSHH or Risk Assessment sessions for a comprehensive safety approach, all managed under Highfield accreditation."
      }
    ]
  },
  {
    slug: "highfield-train-the-trainer",
    title: "Highfield Train the Trainer",
    track: "International",
    parent: "highfield",
    tagline: "Build internal experts. Deliver training that inspires.",
    image: "/course/ksa/highfield-train-the-trainer.webp",
    duration: "3–4 days",
    accreditationLogo: "/international/HABCLogo.png",
    sections: [
      {
        heading: "What the course covers",
        intro: "The Train the Trainer course combines instructional design, adult learning psychology and practical delivery techniques so trainers can engage diverse audiences effectively. Key modules include:",
        items: [
          "Fundamentals of adult learning and training principles",
          "Lesson planning, structure and instructional objectives",
          "Presentation and communication skills for technical subjects",
          "Assessment methods and learner evaluation",
          "Managing group dynamics and overcoming training challenges",
          "Adapting training for multilingual and multicultural teams",
          "Record keeping, reporting and compliance documentation"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "HSE officers, supervisors and safety professionals",
          "HR and Learning & Development managers",
          "Quality assurance and compliance leads",
          "Department heads responsible for internal training delivery",
          "Professionals seeking to become certified Highfield trainers"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "Upon completing the Highfield Train the Trainer course, participants will be able to:",
        items: [
          "Plan, structure and deliver professional training sessions confidently",
          "Communicate complex safety concepts clearly to mixed-skill teams",
          "Assess learner performance and provide constructive feedback",
          "Develop internal training frameworks aligned with Highfield standards",
          "Support organisational compliance with national safety training requirements"
        ]
      },
      {
        heading: "Course duration",
        intro: "This programme typically runs for 3 to 4 days, combining instructor-led workshops, presentation practice and peer-to-peer evaluations. Shorter refresher sessions are available for certified trainers who want to upgrade or renew their Highfield credentials."
      },
      {
        heading: "How Train the Trainer programmes strengthen organisations",
        intro: "Safety-driven industries are evolving rapidly with the region’s growth, and with that comes a growing demand for competent in-house trainers. By certifying your own people through Highfield Train the Trainer courses, your organisation gains a measurable advantage in efficiency, compliance and knowledge retention. Here’s how it makes an impact:",
        items: [
          "Builds internal capacity: reduces the need for constant external training while improving continuity and control.",
          "Standardises quality: ensures every branch, site or camp receives uniform, compliant safety instruction.",
          "Supports localisation goals: empowers national professionals to lead, teach and mentor in line with workforce localisation goals.",
          "Cuts long-term training costs: investing in internal trainers pays off through scalability and repeatable programmes.",
          "Drives engagement and accountability: trainers become ambassadors of safety culture within their departments."
        ]
      }
    ],
    certificationIntro: "Participants receive a Highfield Train the Trainer certificate, recognised in the UAE, Saudi Arabia and internationally. The qualification authorises graduates to conduct internal safety and skills training sessions under Highfield-accredited frameworks, enabling consistent delivery across multiple company sites.",
    faqs: [
      {
        question: "What is the main goal of the Train the Trainer course?",
        answer: "To equip professionals with the knowledge, structure and delivery skills needed to run effective internal training sessions that meet Highfield and national compliance standards."
      },
      {
        question: "Who should enrol in this training?",
        answer: "It’s ideal for HSE professionals, supervisors, HR personnel and quality managers who oversee or deliver workplace training programmes."
      },
      {
        question: "How long is the Train the Trainer course?",
        answer: "Typically 3–4 days, depending on batch size and delivery format (in-class or corporate on-site)."
      },
      {
        question: "Does completing this course allow me to conduct certified Highfield programmes?",
        answer: "Yes. Graduates can deliver internal training aligned with Highfield standards within their organisation, provided the programmes remain under the supervision of accredited frameworks."
      },
      {
        question: "Can the training be customised to our organisation’s needs?",
        answer: "Yes. Arbrit tailors the Train the Trainer course to your company’s industry, policies and existing training materials."
      },
      {
        question: "Are bilingual sessions available?",
        answer: "Yes. Courses are conducted in English and Arabic, ensuring clear communication and cultural alignment for local teams."
      },
      {
        question: "How will I be assessed during the course?",
        answer: "Participants are evaluated through presentations, group exercises and a final practical demonstration that assesses teaching ability and comprehension."
      },
      {
        question: "Is refresher training required?",
        answer: "Certification doesn’t expire, but refresher training every 2–3 years is recommended to update content delivery and assessment practices."
      },
      {
        question: "Does this course include digital training methods?",
        answer: "Yes. The programme introduces blended learning techniques and virtual delivery tools for organisations adopting digital training systems."
      },
      {
        question: "Can Train the Trainer be combined with other courses?",
        answer: "Yes. Many organisations combine it with Fire Safety, First Aid or Food Safety modules to develop multi-skilled internal trainers."
      }
    ]
  },
  {
    slug: "sti",
    title: "STI – Scaffold Training Institute",
    track: "International",
    tagline: "STI-approved scaffolding courses",
    image: "/course/ksa/sti.webp",
    duration: "2–5 days",
    accreditationLogo: "/international/STI-LOGO.webp",
    courseInfoParagraphs: [
      "Arbrit delivers internationally recognised Scaffold Training Institute (STI) programmes for the construction, oil and gas, and industrial sectors across the UAE and Saudi Arabia.",
      "Our courses combine practical instruction with the latest global safety standards, so workers and supervisors are competent, compliant and confident in all scaffolding operations.",
      "Arbrit provides three key STI-accredited scaffolding courses designed to meet both local and international safety requirements."
    ],
    courseOfferings: [
      {
        label: "Competent Person / Inspector Course",
        description: "Train to identify, evaluate and control scaffolding hazards. Learn inspection procedures, load management and tagging systems in line with OSHA and local regulations."
      },
      {
        label: "Scaffold Inspector Course",
        description: "Gain the technical expertise to inspect, assess and document scaffold structures. The course focuses on verifying design conformity, stability checks and maintaining compliance with local worksite protocols."
      },
      {
        label: "Scaffold Erector Course",
        description: "A hands-on practical STI course covering the safe erection, modification and dismantling of scaffolds. Participants master load calculations, bracing techniques and fall-protection methods for real-world conditions."
      }
    ],
    sections: [
      {
        heading: "Who should attend",
        items: [
          "Site and safety supervisors",
          "Scaffold erectors and inspectors",
          "Engineers and project foremen",
          "Contractors and maintenance managers working at height"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "After completing the STI training course, participants will be able to:",
        items: [
          "Identify and mitigate risks in scaffold operations",
          "Conduct professional scaffold inspections and reporting",
          "Apply safe erection and dismantling procedures",
          "Comply with both local and international safety standards",
          "Strengthen workplace safety culture and accountability"
        ]
      },
      {
        heading: "Course duration",
        intro: "Each STI training course includes both theoretical instruction and practical assessment, typically over 2 to 5 days depending on the course type and participants’ experience level."
      },
      {
        heading: "Why choose Arbrit",
        items: [
          "Certified instructors with extensive field experience: learn from professionals who have worked on complex scaffolding operations across industrial and construction projects in the region and abroad.",
          "Courses conducted in English and Arabic: every programme is bilingual, so both local nationals and expatriate workers clearly understand procedures, safety checks and compliance steps.",
          "Training aligned with national labour and HSE regulations: our content and assessments meet the latest national HSE requirements, helping teams stay audit-ready and compliant on any project.",
          "On-site and classroom training options for corporate clients: we deliver courses at our centres in the UAE and Saudi Arabia, or on your site, whichever best fits your schedule."
        ]
      }
    ],
    certificationIntro: "Graduates receive an STI-accredited international certificate, accepted by major contractors across the region, including Saudi Aramco, SABIC and NEOM projects.",
    faqs: [
      {
        question: "Is the STI training course recognised by employers, authorities and major contractors?",
        answer: "Yes. STI certifications are globally recognised and accepted by major contractors across the region, including Saudi Aramco, SABIC and NEOM projects."
      },
      {
        question: "What is the difference between the Scaffold Erector and Competent Person/Inspector courses?",
        answer: "The Erector course focuses on hands-on assembly and dismantling. The Competent Person/Inspector course develops the skills to evaluate scaffold safety, conduct inspections and manage compliance."
      },
      {
        question: "Can the training be conducted on-site at our project location?",
        answer: "Yes. Arbrit offers on-site training across the UAE and Saudi Arabia, so teams can train without interrupting project timelines."
      },
      {
        question: "How long is the STI training course, and what does the assessment involve?",
        answer: "Each course runs for 2 to 5 days and covers both classroom theory and practical evaluation. Certification is issued on passing written and hands-on assessments."
      },
      {
        question: "Who should attend the STI Competent Person course?",
        answer: "Safety officers, supervisors and engineers responsible for scaffolding activities or site safety management in construction and industrial settings."
      },
      {
        question: "What are the prerequisites to join STI training courses?",
        answer: "No prior certification is required, but participants should have basic site experience. For the Scaffold Inspector and Competent Person courses, prior exposure to scaffolding work or safety supervision is recommended."
      },
      {
        question: "Are STI certificates valid for renewal or refresher training?",
        answer: "Yes. STI certifications remain valid internationally. Arbrit also offers refresher courses to help professionals renew credentials or update their knowledge to meet the latest local site safety requirements."
      },
      {
        question: "Does Arbrit provide group discounts or corporate training packages?",
        answer: "Yes. Companies booking multiple participants or site-wide sessions across the UAE and Saudi Arabia can request customised corporate training packages with flexible scheduling and pricing."
      },
      {
        question: "What facilities are available at Arbrit’s training centres?",
        answer: "Our training centres feature fully equipped scaffolding mock-ups, classrooms with bilingual instructors and practical zones for real-time demonstrations, so participants learn by doing."
      },
      {
        question: "How soon can participants receive their certificate after completing the STI training course?",
        answer: "Certificates are generally issued within 7–10 working days after successful evaluation and verification, so participants can quickly submit documentation to clients or project management teams."
      }
    ]
  },
  {
    slug: "pasma",
    title: "PASMA Training",
    track: "International",
    tagline: "Safe work with mobile access towers",
    image: "/course/ksa/pasma-mobile-tower.webp",
    courseInfoParagraphs: [
      "PASMA (Prefabricated Access Suppliers’ and Manufacturers’ Association) is an internationally recognised authority for mobile access towers, promoting safe practice and professional competence in the work-at-height industry.",
      "Arbrit Safety Training and Consultancy is a PASMA Approved Training Centre, delivering internationally recognised PASMA training through qualified instructors and approved training facilities."
    ],
    sections: [
      {
        heading: "PASMA training programmes",
        items: [
          "Towers for Users",
          "Towers for Managers",
          "Combined Towers & Low-Level Access",
          "Work at Height Essentials"
        ],
        outro: "PASMA training combines theoretical and practical learning, developing the knowledge and competence needed to work safely with mobile access towers and related access equipment."
      }
    ]
  },
  {
    slug: "iso-lead-auditor",
    title: "ISO Lead Auditor Courses",
    track: "International",
    tagline: "Master compliance. Lead with confidence.",
    image: "/course/ksa/iso-lead-auditor.webp",
    duration: "2–5 days",
    accreditationLogo: "/international/HABCLogo.png",
    courseInfoParagraphs: [
      "Arbrit’s ISO Lead Auditor courses prepare professionals to conduct, manage and lead internal and external audits for internationally recognised ISO standards. Delivered across the UAE and Saudi Arabia, these programmes combine theory, case studies and simulated audits to develop practical auditing competence in line with ISO 19011 guidelines.",
      "Each course is designed to meet the needs of organisations in sectors from manufacturing and oil & gas to healthcare and food, so participants can apply global standards within the local regulatory environment.",
      "Arbrit provides specialised and integrated ISO Lead Auditor and Internal Auditor courses covering a range of key management systems."
    ],
    courseOfferings: [
      {
        label: "ISO 45001:2018 Internal Auditor / Lead Auditor",
        description: "The ISO 45001:2018 Lead Auditor course equips professionals to assess, manage and continuously improve workplace health and safety systems.",
        href: "/courses/iso-45001-lead-auditor"
      }
    ],
    sections: [
      {
        heading: "Also available on request",
        intro: "Each course can be taken individually or as part of an Integrated Management System (IMS) Lead Auditor training package, ideal for organisations adopting multiple ISO standards under one framework.",
        items: [
          "ISO 14001:2015 Internal Auditor / Lead Auditor",
          "ISO 9001:2015 Internal Auditor / Lead Auditor",
          "ISO 22000:2018 Internal Auditor / Lead Auditor",
          "ISO 27001:2022 Internal Auditor / Lead Auditor"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "Quality, Environmental and HSE Managers",
          "Internal Auditors and Compliance Officers",
          "Consultants and Management Representatives",
          "Engineers and Supervisors involved in system implementation",
          "Professionals seeking IRCA or Highfield-accredited ISO auditor qualifications"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "Participants completing ISO Lead Auditor training will be able to:",
        items: [
          "Plan, conduct and report audits in accordance with ISO 19011 guidelines",
          "Interpret ISO standards and evaluate compliance objectively",
          "Identify nonconformities and recommend effective corrective actions",
          "Understand risk-based thinking and process-oriented auditing",
          "Lead integrated audits across multiple management systems efficiently"
        ]
      },
      {
        heading: "Course duration",
        intro: "Each Lead Auditor course runs over five days, combining classroom instruction, group workshops and simulated audit exercises. Internal Auditor courses typically run for two to three days and focus on internal audit techniques within organisational systems."
      },
      {
        heading: "How ISO Lead Auditor courses strengthen business performance",
        intro: "In a competitive, compliance-driven market, organisations are under increasing pressure to meet multiple ISO standards at the same time. Arbrit’s Integrated Management System (IMS) Lead Auditor training helps companies and individuals master auditing techniques that streamline certification and improve operational excellence. Here’s how this training drives value:",
        items: [
          "Enhances audit credibility: build the competence to lead audits that stand up to external scrutiny and certification body standards.",
          "Integrates multiple systems efficiently: train in unified auditing across Quality, Environment, Health & Safety and Information Security systems.",
          "Reduces duplication and cost: conduct integrated audits that save time and resources across departments.",
          "Improves compliance with national regulations: ensure systems align with the requirements of national accreditation bodies, local food safety authorities and environmental regulators.",
          "Develops professional recognition: certified Lead Auditors gain a career advantage across industries and multinational projects."
        ]
      }
    ],
    certificationIntro: "Participants who pass the written and practical assessments receive a Highfield-accredited ISO 45001 Lead Auditor certificate, recognised by employers and certification bodies across the UAE and Saudi Arabia. This qualification is essential for professionals involved in third-party audits, vendor assessments or corporate OHS programme oversight.",
    faqs: [
      {
        question: "Are these ISO Lead Auditor courses recognised internationally?",
        answer: "Yes. All courses follow Highfield and IRCA standards and are accepted globally, including by clients and certification bodies in the UAE and Saudi Arabia."
      },
      {
        question: "What’s the difference between Lead Auditor and Internal Auditor training?",
        answer: "Internal Auditor courses prepare employees to conduct audits within their organisation. Lead Auditor courses qualify professionals to lead external and third-party audits."
      },
      {
        question: "Can participants take multiple ISO standards together as an integrated programme?",
        answer: "Yes. Arbrit offers Integrated Management System Lead Auditor training, combining ISO 9001, 14001 and 45001 into one streamlined programme."
      },
      {
        question: "How long is the Lead Auditor course?",
        answer: "Typically five days, with the final day dedicated to audit simulation and competency assessment under ISO 19011 guidelines."
      },
      {
        question: "Is this training available on-site for corporate groups?",
        answer: "Yes. Corporate sessions can be held across the UAE and Saudi Arabia, with course material customised to the client’s systems."
      },
      {
        question: "Do these courses include practical audit exercises?",
        answer: "Yes. Participants conduct role-play audits, prepare reports and practise identifying nonconformities through case studies and mock audits."
      },
      {
        question: "What qualifications do I need to enrol?",
        answer: "A basic understanding of management systems and workplace processes is recommended. Prior auditing experience is helpful but not mandatory."
      },
      {
        question: "How are participants evaluated?",
        answer: "Through written exams, continuous assessment and a practical audit simulation to ensure real-world competence."
      },
      {
        question: "Does certification help in professional advancement?",
        answer: "Yes. ISO Lead Auditor certification is a recognised qualification for consultants, quality managers and professionals involved in compliance, especially with major contractors across the region, including Saudi Aramco and NEOM projects."
      },
      {
        question: "How often should auditors refresh their training?",
        answer: "Refresher training every three years is recommended to keep pace with ISO standard revisions and auditing best practice."
      }
    ]
  },
  {
    slug: "iso-45001-lead-auditor",
    title: "ISO 45001:2018 Lead Auditor",
    track: "International",
    parent: "iso-lead-auditor",
    tagline: "Lead with safety. Audit with authority.",
    image: "/course/ksa/iso-45001-lead-auditor.webp",
    duration: "5 days",
    accreditationLogo: "/international/HABCLogo.png",
    courseInfoParagraphs: [
      "The ISO 45001:2018 Lead Auditor course equips professionals to assess, manage and continuously improve workplace health and safety systems. Offered by Arbrit across the UAE and Saudi Arabia, this globally recognised programme blends theory with practical case studies to help participants master the principles of occupational risk control, compliance evaluation and performance improvement.",
      "Designed around the ISO 19011 audit guidelines, the course gives professionals the confidence and competence to conduct both internal and external audits, ensuring organisations meet international standards while complying with local HSE regulations."
    ],
    sections: [
      {
        heading: "What the course covers",
        intro: "The ISO 45001 Lead Auditor course provides a comprehensive understanding of health and safety management systems and the audit process. Core modules include:",
        items: [
          "Overview of ISO 45001 requirements and key clauses",
          "Roles and responsibilities of auditors and auditees",
          "Risk-based thinking and hazard identification",
          "Planning, conducting and reporting audits under ISO 19011",
          "Managing nonconformities and corrective actions",
          "Integration with ISO 9001 and ISO 14001 systems for combined audits"
        ],
        outro: "The programme includes interactive workshops and mock audits based on real workplace scenarios."
      },
      {
        heading: "Who should attend",
        items: [
          "Health & safety managers and supervisors",
          "HSE auditors and compliance officers",
          "Quality and environmental system coordinators",
          "Consultants and safety advisors",
          "Professionals seeking international lead auditor certification"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "After completing the ISO 45001 Lead Auditor course, participants will be able to:",
        items: [
          "Interpret ISO 45001 requirements and audit criteria accurately",
          "Plan and lead audits following ISO 19011 and IRCA guidelines",
          "Identify nonconformities and develop corrective action plans",
          "Evaluate compliance with national labour and occupational safety regulations",
          "Recommend strategies for continuous improvement in OHS performance"
        ]
      },
      {
        heading: "Course duration",
        items: [
          "Lead Auditor course: 5 days (includes practical audit simulation and final assessment)",
          "Internal Auditor course: 2–3 days (focused on in-house auditing and compliance review)"
        ]
      },
      {
        heading: "How ISO 45001 Lead Auditor training improves workplace safety",
        intro: "The region’s growth places a strong emphasis on safer, more efficient industrial environments. The ISO 45001 Lead Auditor course supports this by empowering auditors to identify systemic risks and ensure operational safety. Here’s how the training creates impact:",
        items: [
          "Ensures regulatory compliance: auditors understand and apply national labour and HSE regulations.",
          "Improves risk management: strengthens identification and control of hazards in construction, oil & gas and manufacturing sectors.",
          "Supports zero-incident objectives: drives data-driven improvement through audit findings and corrective action tracking.",
          "Enables integrated audits: prepares auditors to combine ISO 45001 audits with ISO 9001 and 14001 for a comprehensive IMS approach.",
          "Enhances career credibility: certified Lead Auditors are highly valued by clients and major contractors across the region, including Saudi Aramco and NEOM projects."
        ]
      }
    ],
    certificationIntro: "Participants who pass the written and practical assessments receive a Highfield-accredited ISO 45001 Lead Auditor certificate, recognised by employers and certification bodies across the UAE and Saudi Arabia. The qualification is essential for professionals involved in third-party audits, vendor assessments or corporate OHS programme oversight.",
    faqs: [
      {
        question: "Is the ISO 45001 Lead Auditor course recognised internationally?",
        answer: "Yes. The qualification meets IRCA and Highfield standards and is recognised by employers worldwide, including major industrial operators in the region."
      },
      {
        question: "Who should take the ISO 45001 Lead Auditor training?",
        answer: "HSE professionals, managers and consultants responsible for implementing or auditing health and safety systems will benefit most."
      },
      {
        question: "What is the difference between Lead Auditor and Internal Auditor training?",
        answer: "The Lead Auditor course prepares you to lead external and certification audits, while the Internal Auditor programme focuses on in-house audits and ongoing system monitoring."
      },
      {
        question: "How is the course delivered?",
        answer: "Training is available on-site for corporate groups and in scheduled public batches across the UAE and Saudi Arabia."
      },
      {
        question: "What does the assessment involve?",
        answer: "A written exam and a practical audit simulation based on ISO 19011 methodology. Participants must demonstrate planning, reporting and leadership skills."
      },
      {
        question: "Are bilingual courses offered?",
        answer: "Yes. Training can be conducted in English and Arabic, depending on the audience."
      },
      {
        question: "Can this course be integrated with other ISO standards?",
        answer: "Yes. It can be combined with ISO 9001 and 14001 to form an Integrated Management System Lead Auditor programme."
      },
      {
        question: "Is previous experience in HSE required?",
        answer: "Experience is an advantage but not mandatory. Participants should have a basic understanding of occupational health and safety principles."
      },
      {
        question: "How often should I renew my Lead Auditor training?",
        answer: "Refresher training is recommended every three years to stay aligned with updates to ISO standards and audit best practice."
      },
      {
        question: "How does this certification support career development?",
        answer: "It positions you as a qualified auditor capable of leading complex audits, an essential credential for senior HSE and quality roles across the region’s industries."
      }
    ]
  },
  {
    slug: "rospa",
    title: "RoSPA Defensive Driving",
    track: "International",
    tagline: "Drive safe. Work safe. Lead safe.",
    image: "/course/ksa/rospa.webp",
    duration: "1–3 days",
    accreditationLogo: "/accreditation/rospa.webp",
    courseInfoParagraphs: [
      "RoSPA (Royal Society for the Prevention of Accidents) is a globally recognised UK organisation promoting accident prevention and safer practices. Arbrit is an accredited training provider for the RoSPA Level 2 International Award in Defensive Driving, delivering professional driver safety training that develops safer driving behaviours, hazard awareness and effective risk-management skills.",
      "Arbrit is also approved to deliver the ADNOC-approved RoSPA Level 2 International Award in Defensive Driving, supporting drivers and organisations operating in the oil & gas and industrial sectors.",
      "Training combines theoretical learning and practical driving assessment, focusing on hazard perception, defensive driving techniques, journey risk management and safe driving behaviour."
    ],
    courseOfferings: [
      {
        label: "RoSPA Level 2 International Award in Defensive Driving",
        description: "One of RoSPA’s most respected qualifications. It develops responsible, alert and confident drivers who can reduce road risks in challenging conditions. Delivered by RoSPA-qualified instructors, it is ideal for fleet drivers, logistics personnel and anyone who drives regularly for work."
      },
      {
        label: "ADNOC-Approved RoSPA Level 2 International Award in Defensive Driving",
        description: "The same RoSPA Level 2 award, approved by ADNOC for drivers and organisations operating in the oil & gas and industrial sectors."
      }
    ],
    sections: [
      {
        heading: "Topics covered",
        intro: "Our general RoSPA training courses cover essential safety principles that apply to many industries, including construction, logistics, oil & gas and manufacturing.",
        items: [
          "Understand local driving laws and procedures",
          "Understand vehicle and driver safety systems",
          "Understand how human behaviour influences driving risk",
          "Understand defensive driving principles",
          "Prepare to drive a company vehicle",
          "Demonstrate defensive driving techniques"
        ],
        outro: "These courses align with national labour and HSE regulations and are recognised by companies seeking international-standard HSE certification."
      },
      {
        heading: "Key learning outcomes",
        intro: "The Level 2 International Award in Defensive Driving covers:",
        items: [
          "Understanding driver behaviour and risk perception",
          "Identifying road hazards and maintaining situational awareness",
          "Applying defensive driving techniques to reduce accident probability",
          "Vehicle inspection and maintenance checks before operation",
          "Managing fatigue, distractions and adverse driving conditions",
          "Emergency handling, braking and safe following distances"
        ],
        outro: "This course helps organisations lower accident rates, reduce insurance claims and comply with national traffic safety requirements for corporate fleets."
      },
      {
        heading: "Who should attend",
        items: [
          "Professional and fleet drivers",
          "Logistics and transport supervisors",
          "Health & Safety officers",
          "Corporate fleet managers and risk assessors",
          "Employees required to drive company vehicles or heavy equipment"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "Participants completing the RoSPA training and driving courses will:",
        items: [
          "Improve hazard recognition and response in high-risk scenarios",
          "Reduce workplace and road-related accidents",
          "Gain an internationally recognised RoSPA certificate",
          "Strengthen compliance with national occupational and transport safety laws",
          "Contribute to a proactive, prevention-focused safety culture"
        ]
      },
      {
        heading: "Course duration",
        items: [
          "RoSPA Defensive Driving (Level 2): 1–2 days",
          "General RoSPA Safety Training: 1–3 days (depending on course type and participant role)"
        ],
        outro: "All sessions combine classroom instruction with real-world demonstrations and performance evaluations."
      },
      {
        heading: "How RoSPA training reduces workplace & road incidents",
        intro: "With the region’s growing industrial and transport sectors, road and workplace safety remain top priorities. Arbrit’s RoSPA training and driving courses support safer workplaces and roads as the region grows. Here’s how:",
        items: [
          "Improves driver behaviour and situational awareness: encourages responsible decision-making behind the wheel.",
          "Aligns with national regulatory requirements: meets national road safety and labour training standards.",
          "Reduces vehicle downtime and losses: defensive driving techniques minimise accidents and maintenance costs.",
          "Enhances public and corporate image: certified drivers and teams demonstrate professionalism and care.",
          "Builds safety leadership: graduates often lead internal awareness campaigns and peer training programmes."
        ]
      }
    ],
    certificationIntro: "Successful participants receive a RoSPA-accredited certificate, recognised by employers in the UAE and Saudi Arabia and internationally. The qualification enhances career credibility and is particularly valued by companies in transport, construction, logistics and field operations.",
    faqs: [
      {
        question: "What is a RoSPA training course?",
        answer: "RoSPA courses are internationally recognised safety and risk prevention programmes that train individuals to identify hazards, prevent accidents and promote safe practices."
      },
      {
        question: "Is the RoSPA Defensive Driving course available in the UAE and Saudi Arabia?",
        answer: "Yes. Arbrit delivers the Level 2 International Award in Defensive Driving across the UAE and Saudi Arabia, led by certified instructors."
      },
      {
        question: "Who should take the defensive driving course?",
        answer: "Fleet drivers, logistics staff and employees who regularly operate company vehicles or machinery."
      },
      {
        question: "How long is the RoSPA Defensive Driving course?",
        answer: "Typically 1–2 days, combining classroom learning with on-road or simulator-based assessments."
      },
      {
        question: "Is this certification recognised by employers in the UAE and Saudi Arabia?",
        answer: "Yes. RoSPA qualifications are widely accepted by companies across the oil & gas, transport and construction sectors in the UAE and Saudi Arabia."
      },
      {
        question: "Does the training include a practical driving evaluation?",
        answer: "Yes. The course includes real-world driving assessments or simulated exercises to evaluate awareness, control and decision-making."
      },
      {
        question: "Are the courses bilingual?",
        answer: "Yes. Arbrit offers English and Arabic sessions, ensuring clear understanding for local and expatriate participants."
      },
      {
        question: "Can the course be delivered at our company’s site?",
        answer: "Yes. On-site RoSPA sessions can be scheduled anywhere in the UAE and Saudi Arabia, including remote industrial and logistics hubs."
      },
      {
        question: "How does this training benefit employers?",
        answer: "Organisations see reduced accident rates, lower insurance costs and improved driver accountability after RoSPA certification."
      },
      {
        question: "What certification do participants receive?",
        answer: "A RoSPA-accredited Level 2 International Award certificate, valid internationally and recognised across industries in the UAE and Saudi Arabia."
      }
    ]
  },
  {
    slug: "qualifi-level-7-diploma-ohsm",
    title: "Qualifi Level 7 Diploma in OHSM",
    track: "International",
    tagline: "Advance your safety career with a globally recognised Level 7 qualification",
    image: "/course/ksa/qualifi-level-7-diploma-ohsm.webp",
    duration: "Up to 18 months",
    accreditationLogo: "/accreditation/european-safety-council.webp",
    courseInfoParagraphs: [
      "The Qualifi Level 7 International Diploma in Occupational Health and Safety Management (OHSM) is an advanced professional qualification for experienced and aspiring occupational health and safety professionals who want to develop their strategic, managerial and technical capabilities.",
      "Designed for professionals working in or progressing towards senior health and safety roles, the programme develops the ability to critically evaluate occupational health and safety practice, manage organisational risk and contribute to effective, sustainable safety management systems.",
      "Arbrit is an Approved Course Adviser of the European Safety Council (ESC), supporting learners across the UAE and Saudi Arabia with structured enrolment, academic guidance and assessor-led feedback throughout their learning journey. The qualification meets RQF Level 7 criteria and is regulated by Ofqual (UK)."
    ],
    sections: [
      {
        heading: "About the European Safety Council (ESC)",
        intro: "The European Safety Council is a respected international body committed to raising standards in workplace health, safety and environmental management. ESC develops globally benchmarked qualifications, provides robust quality assurance and supports professionals in building advanced technical and managerial capabilities.",
        outro: "Its programmes reflect current global priorities, including sustainability, digital transformation, modern risk management and safety leadership, making them highly relevant to today’s workplaces."
      },
      {
        heading: "About the QUALIFI Level 7 Diploma",
        intro: "The Qualifi Level 7 International Diploma in OHSM is a postgraduate-level qualification positioned at:",
        items: [
          "RQF Level 7 (UK)",
          "European Qualification Framework Level 7"
        ],
        outro: "It awards 60 credits and is widely accepted across international markets, including the GCC, UK, Europe, Asia and Africa."
      },
      {
        heading: "Professional & academic progression",
        intro: "Successful completion gives learners a strong foundation for progression into senior occupational health and safety management roles and further postgraduate study.",
        items: [
          "Recognised by IOSH for the Certified Membership (CertIOSH) academic requirements, subject to IOSH's membership criteria and processes",
          "Recognised by the Board of Certified Safety Professionals (BCSP), USA, for Transitional Safety Practitioner (TSP) eligibility, subject to BCSP's requirements",
          "Supports progression to postgraduate study, subject to each university's admission and recognition-of-prior-learning requirements"
        ]
      },
      {
        heading: "Course structure",
        intro: "The diploma consists of 4 units, each worth 15 credits:",
        items: [
          "Management-Driven, Risk-Based Safety Management Systems",
          "Globalization, Sustainability, and Safety Culture Performance",
          "Digitalization and Incident Investigation",
          "Development as a Strategic Manager"
        ],
        outro: "Each unit focuses on strategic thinking, analytical skills and applied leadership, not rote memorisation, giving learners strong capability in high-level HSE decision-making."
      },
      {
        heading: "Entry criteria",
        intro: "The qualification is open to a wide professional audience, including:",
        items: [
          "Holders of an RQF Level 6 or 7 diploma in a related field",
          "Engineering graduates (Bachelor’s or Master’s)",
          "Professionals with 3+ years of managerial experience in safety or related sectors",
          "Holders of the NEBOSH International Diploma",
          "Holders of ESC’s International Diploma in HSE endorsed by Qualifi",
          "Candidates with relevant experience who demonstrate the capability to undertake Level 7 study"
        ],
        outro: "Learners without formal academic backgrounds may still be accepted based on maturity, workplace exposure and aptitude."
      },
      {
        heading: "Learning outcomes",
        intro: "By completing this qualification, learners will be able to:",
        items: [
          "Evaluate and implement advanced occupational health and safety management systems",
          "Analyse and apply risk assessment methodologies across complex work environments",
          "Assess safety culture, performance indicators and organisational behaviour",
          "Integrate sustainability, digital transformation and globalisation trends into HSE strategy",
          "Lead investigations using modern tools and digital frameworks",
          "Demonstrate strategic management capabilities aligned with senior HSE roles"
        ],
        outro: "This diploma develops not just knowledge, but leadership, systems thinking and professional judgement."
      },
      {
        heading: "Assessment process",
        intro: "The assessment model is flexible and designed for working professionals:",
        items: [
          "Learners receive unit guidance and questions from the assessor",
          "Responses may be developed using research, workplace examples and technical references",
          "Assessors provide detailed feedback",
          "Learners revise submissions until all criteria are met",
          "All submissions are checked using strict plagiarism detection tools"
        ],
        outro: "Learners have up to 18 months to complete the qualification, with full support from Arbrit and ESC throughout the process."
      },
      {
        heading: "Benefits of the Qualifi Level 7 Diploma",
        items: [
          "Recognised RQF Level 7 qualification with 60 credits",
          "Supports progression to postgraduate study, subject to university admission requirements",
          "Strong career progression, ideal for Safety Officers moving towards Safety Manager or Senior HSE roles",
          "Widely preferred by organisations seeking strategic HSE leadership",
          "Curriculum reflects modern challenges, including digitalisation, sustainability and global safety governance",
          "Enhances professional credibility and opens doors to international roles"
        ],
        outro: "A Level 7 diploma demands commitment, and Arbrit makes sure you never face the process alone. With expert support and internationally recognised standards, this qualification is a clear step towards senior HSE leadership."
      }
    ],
    faqs: [
      {
        question: "What are QUALIFI courses?",
        answer: "QUALIFI courses are UK-regulated professional qualifications, recognised globally for their academic rigour and industry relevance, particularly in safety and management."
      },
      {
        question: "What is the QUALIFI Level 7 Diploma equivalent to?",
        answer: "Level 7 corresponds to a postgraduate or Master’s-level qualification, with an emphasis on strategic and analytical competence."
      },
      {
        question: "Who should enrol in the QUALIFI OHSM or PSM diploma?",
        answer: "Mid- to senior-level HSE professionals, engineers and consultants responsible for implementing or auditing safety systems."
      },
      {
        question: "How long do the QUALIFI diplomas take to complete?",
        answer: "Learners have up to 18 months to complete the qualification, depending on their learning mode and assessment schedule."
      },
      {
        question: "Are QUALIFI courses recognised in the UAE and Saudi Arabia?",
        answer: "Yes. They are internationally accredited and widely accepted by industrial, governmental and consulting organisations in the UAE and Saudi Arabia."
      },
      {
        question: "Can I study while working full-time?",
        answer: "Yes. Arbrit offers flexible, modular delivery designed for professionals with existing work commitments."
      },
      {
        question: "Do these diplomas lead to professional memberships?",
        answer: "The Level 7 Diploma is recognised by IOSH for the Certified Membership (CertIOSH) academic requirements and by BCSP (USA) for Transitional Safety Practitioner (TSP) eligibility, each subject to that body's own criteria."
      },
      {
        question: "What assessments are involved?",
        answer: "Project-based assignments, research reports and written submissions that evaluate real-world HSE challenges."
      },
      {
        question: "Is a previous academic qualification required?",
        answer: "A bachelor’s degree or equivalent professional experience in health and safety or engineering is recommended."
      },
      {
        question: "How does this qualification help career growth?",
        answer: "It validates advanced leadership and analytical capabilities, positioning graduates for senior management, consultancy or academic pathways."
      }
    ]
  },
  {
    slug: "nfpa-training",
    title: "NFPA Training",
    track: "International",
    tagline: "Strengthen fire and life safety with NFPA expertise",
    image: "/course/ksa/nfpa-training.webp",
    duration: "1–3 days",
    accreditationLogo: "/accreditation/nfpa-authorized.webp",
    courseInfoParagraphs: [
      "Arbrit Safety Training is an NFPA-approved training provider, offering NFPA-based fire, electrical and life safety training for engineers, safety professionals, fire protection personnel, facility managers, technicians and others responsible for safe, compliant workplaces.",
      "The programmes give participants a practical understanding of the relevant National Fire Protection Association (NFPA) codes and standards, helping them interpret requirements and apply recognised fire, electrical and life safety practice in their organisations.",
      "All programmes reflect the current NFPA editions and are delivered by qualified fire and safety practitioners with field experience in inspection, audits, and code implementation."
    ],
    sections: [
      {
        heading: "Courses offered",
        items: [
          "NFPA 10 – Standard for Portable Fire Extinguishers",
          "NFPA 13 – Standard for the Installation of Sprinkler Systems",
          "NFPA 14 – Standard for the Installation of Standpipe and Hose Systems",
          "NFPA 20 – Standard for the Installation of Stationary Pumps for Fire Protection",
          "NFPA 25 – Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
          "NFPA 70 – National Electrical Code® (NEC®)",
          "NFPA 70E – Standard for Electrical Safety in the Workplace®",
          "NFPA 70B – Standard for Electrical Equipment Maintenance",
          "NFPA 72 – National Fire Alarm and Signaling Code®",
          "NFPA 101 – Life Safety Code®"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "Fire inspectors and fire wardens",
          "Safety officers and HSE professionals",
          "Facility management and maintenance teams",
          "Electrical engineers and technical supervisors",
          "Emergency response and crisis management staff",
          "Healthcare safety teams and compliance officers",
          "Project managers and construction professionals"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "Participants will gain the ability to:",
        items: [
          "Interpret and apply NFPA codes accurately",
          "Conduct inspections and identify fire and life safety deficiencies",
          "Understand fire alarm and signalling requirements",
          "Evaluate electrical hazards and implement protective measures",
          "Strengthen emergency preparedness and continuity planning",
          "Support compliance with local civil defence requirements and international safety expectations"
        ]
      },
      {
        heading: "Course duration",
        items: [
          "NFPA 72, 101 and most code courses: typically 1–3 days, depending on depth",
          "NFPA 70E: 1-day intensive session"
        ],
        outro: "All sessions combine real-world examples, code interpretation exercises, system walkthroughs, and implementation guidance."
      },
      {
        heading: "Why NFPA training matters",
        intro: "NFPA codes form the backbone of fire protection, life safety, and emergency readiness around the world. Professionals trained in NFPA standards can:",
        items: [
          "Reduce fire and electrical risks",
          "Improve inspection quality and documentation",
          "Strengthen system reliability and emergency response",
          "Align facilities with recognised global safety benchmarks"
        ],
        outro: "Arbrit ensures every participant gains a practical understanding, so the learning translates directly into safer workplaces. Our NFPA training programmes give you the knowledge needed to interpret codes accurately and elevate fire and life safety performance across your organisation."
      }
    ],
    certificationIntro: "Participants receive an NFPA Training Certificate, recognising completion of NFPA-aligned learning. These programmes support professional growth for roles requiring compliance with local civil defence requirements and international fire safety standards.",
    faqs: [
      {
        question: "What is NFPA, and why is it important?",
        answer: "NFPA develops globally recognised codes and standards that guide fire protection, electrical safety, and life safety practices across industries."
      },
      {
        question: "Who benefits from NFPA training?",
        answer: "Fire inspectors, HSE officers, facility managers, electrical teams, and emergency planners."
      },
      {
        question: "Are these programmes recognised in the UAE and Saudi Arabia?",
        answer: "Yes. NFPA standards are widely referenced by local civil defence authorities and industry regulators."
      },
      {
        question: "Do I need prior experience to join?",
        answer: "Some courses, like CFI-I, are suitable for beginners. Advanced options such as CFI-II are recommended for experienced professionals."
      },
      {
        question: "Can training be conducted at our facility?",
        answer: "Yes. Arbrit provides on-site sessions across the UAE and Saudi Arabia."
      },
      {
        question: "Do participants receive certificates?",
        answer: "Yes. Each programme includes a recognised certificate of completion."
      },
      {
        question: "Are these the latest NFPA editions?",
        answer: "Yes. Programmes follow the current NFPA editions of each code."
      },
      {
        question: "Is the training practical?",
        answer: "Absolutely. Programmes include scenarios, real inspection examples, and system demos."
      },
      {
        question: "Can NFPA training support career advancement?",
        answer: "Yes. These certifications strengthen credibility and open doors to fire inspection, system design, safety management, and compliance roles."
      },
      {
        question: "How do we register?",
        answer: "Contact our NFPA training team or submit an enquiry to receive upcoming schedules and enrolment guidance."
      }
    ]
  },
  {
    slug: "construction-industry",
    title: "Construction Industry",
    track: "General Safety",
    tagline: "Build safely. Work smart. Protect every life.",
    image: "/course/ksa/construction-industry.webp",
    duration: "1–3 days per module",
    courseInfoParagraphs: [
      "The construction sector is the backbone of the region’s growth, but it’s also one of the most high-risk industries. Through Arbrit’s construction safety training courses, organisations can ensure that their workforce not only meets compliance standards but also builds a safety-first culture across sites in the UAE and Saudi Arabia.",
      "Each programme is designed to equip participants with practical knowledge, situational awareness, and hands-on competence to reduce incidents, improve productivity, and achieve full compliance with national labour and HSE regulations."
    ],
    sections: [
      {
        heading: "Core construction safety training courses",
        items: [
          "Working at Height (WAH) Safety",
          "Scaffolding Erection & Inspection",
          "Lifting Operations & Crane Safety",
          "Rigging and Slinging Safety",
          "Excavation & Trenching Safety",
          "Confined Space Entry & Rescue",
          "Electrical Safety / Lockout-Tagout (LOTO)",
          "Fall Protection & Fall Arrest Systems",
          "PPE Awareness",
          "Fire Safety & Fire Warden Training",
          "Construction Site Safety Orientation",
          "Hazard Identification & Risk Assessment (HIRA)",
          "Permit to Work System",
          "Emergency Response & Evacuation Drills",
          "Noise & Vibration Awareness",
          "Heat & Cold Stress Awareness",
          "Manual Handling & Ergonomics",
          "Environmental Awareness & Waste Management",
          "Demolition Safety",
          "Power Tool Safety"
        ]
      },
      {
        heading: "Specialised training",
        items: [
          "Concrete & Masonry Safety",
          "Heavy Equipment Safety",
          "Work Permit System (Hot/Cold Work)",
          "Incident Investigation & Reporting"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "Site engineers, supervisors, and foremen",
          "Construction workers and technicians",
          "Safety officers and HSE managers",
          "Contractors, subcontractors, and maintenance teams",
          "Project management professionals seeking compliance with national safety standards"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "Upon completing construction safety training with Arbrit, participants will:",
        items: [
          "Recognise and control workplace hazards in construction environments",
          "Implement preventive measures to reduce incidents and downtime",
          "Conduct on-site risk assessments and toolbox talks",
          "Comply with national regulatory requirements and international standards",
          "Foster a strong, accountable safety culture across all project levels"
        ]
      },
      {
        heading: "Course duration",
        intro: "Training durations vary based on the module:",
        items: [
          "Core modules: 1–3 days each",
          "Specialised modules: 1–2 days each"
        ],
        outro: "Programmes can be customised for company-specific hazards and site requirements. Corporate clients can opt for comprehensive training packages that combine multiple modules under one certification plan."
      },
      {
        heading: "How construction safety training improves project performance",
        intro: "Every safe site is a productive site. Arbrit’s construction safety training programmes reduce lost time, improve workforce morale, and strengthen client confidence through measurable safety performance. Key benefits include:",
        items: [
          "Regulatory compliance: meets national labour and HSE code requirements.",
          "Reduced incidents: fewer accidents, injuries, and work stoppages.",
          "Operational efficiency: trained teams execute work safely and swiftly.",
          "Audit readiness: certification supports prequalification and ISO 45001 audits.",
          "Reputation and trust: clients favour certified teams and contractors with proven safety systems."
        ]
      },
      {
        heading: "Build confidence with safety that lasts",
        intro: "Protect people, projects, and reputations with construction safety training from Arbrit, where international standards meet real site conditions in the UAE and Saudi Arabia. Our programmes ensure every worker goes home safe, every day."
      }
    ],
    certificationIntro: "Participants who complete the assessments receive an Arbrit Construction Safety Certificate, recognised across the UAE and Saudi Arabia and accepted by leading contractors, consultants, and HSE departments. Each course aligns with international standards such as OSHA, NEBOSH, and ISO 45001, and meets national compliance benchmarks.",
    faqs: [
      {
        question: "What is covered in a construction safety training course?",
        answer: "Comprehensive modules including work at height, confined space, fire safety, electrical safety, lifting operations, and more."
      },
      {
        question: "Who should attend construction safety training?",
        answer: "All site personnel, from workers to engineers and supervisors, who are involved in construction, maintenance, or project management."
      },
      {
        question: "Are these courses accredited or recognised?",
        answer: "Yes. Arbrit’s programmes align with OSHA, NEBOSH, and national HSE requirements, ensuring global and local recognition."
      },
      {
        question: "How long do the courses take?",
        answer: "Most core modules are 1–3 days long, with specialised courses tailored based on client needs."
      },
      {
        question: "Can we conduct training at our site?",
        answer: "Yes. On-site and corporate training sessions are available across the UAE and Saudi Arabia."
      },
      {
        question: "Are bilingual sessions available?",
        answer: "Yes. Courses are conducted in English and Arabic to ensure clarity for mixed workforces."
      },
      {
        question: "What certification will participants receive?",
        answer: "An Arbrit Construction Safety Certificate, validating successful completion of each module."
      },
      {
        question: "Do these courses fulfil client safety requirements?",
        answer: "Yes. These programmes are accepted by major contractors, EPCs, and developers across the region as part of workforce qualification."
      },
      {
        question: "Can modules be combined?",
        answer: "Absolutely. Clients can bundle modules to create a tailored safety training package for their workforce."
      },
      {
        question: "How often should workers undergo refresher training?",
        answer: "Every two years, or earlier if there are changes in equipment, work scope, or regulations."
      }
    ]
  },
  {
    slug: "manufacturing-industry",
    title: "Manufacturing Industry",
    track: "General Safety",
    tagline: "Empowering safer, smarter manufacturing workplaces",
    image: "/course/ksa/manufacturing-industry.webp",
    duration: "1–4 days per course",
    courseInfoParagraphs: [
      "The manufacturing sector plays a vital role in the region’s growth, driving industrial production, logistics, and export. But with rapid industrialisation comes greater responsibility to protect people, processes, and property.",
      "Through Arbrit’s manufacturing industry training, companies can equip their workforce with the essential safety knowledge, technical skills, and risk awareness needed to maintain smooth and compliant operations across the UAE and Saudi Arabia.",
      "Our programmes are designed to address real-world hazards found in factories, processing plants, workshops, and production lines, ensuring alignment with both national HSE regulations and international safety standards such as OSHA, NEBOSH, and ISO 45001."
    ],
    sections: [
      {
        heading: "Core manufacturing safety courses",
        items: [
          "Machine Operation Safety",
          "Lockout-Tagout (LOTO) Procedures",
          "Chemical Safety & Hazard Communication (GHS)",
          "Fire Safety & Emergency Response",
          "Electrical Safety Awareness",
          "Confined Space Entry & Rescue",
          "PPE Awareness",
          "Ergonomics & Manual Handling",
          "Hazard Identification & Risk Assessment",
          "Noise & Vibration Awareness",
          "Permit to Work Systems",
          "Environmental Awareness & Waste Management"
        ]
      },
      {
        heading: "Specialised training",
        items: [
          "Process Safety Management",
          "Forklift / Material Handling Safety",
          "Welding, Grinding & Hot Work Safety",
          "Oil, Gas & Chemical Process Safety",
          "Industrial Hygiene Basics",
          "Safety Leadership & Culture"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "Plant operators and maintenance technicians",
          "Supervisors and safety officers",
          "Production engineers and shift leaders",
          "Chemical and process engineers",
          "Quality, compliance, and HSE professionals",
          "Contractors working within manufacturing facilities"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "After completing manufacturing training courses with Arbrit, participants will be able to:",
        items: [
          "Identify and control hazards specific to industrial manufacturing environments",
          "Implement lockout, permit-to-work, and chemical safety systems effectively",
          "Strengthen workplace emergency readiness and compliance documentation",
          "Promote safety leadership and accountability among staff",
          "Align operations with national and international safety standards"
        ]
      },
      {
        heading: "Course duration",
        items: [
          "Core courses: 1–3 days each",
          "Specialised courses: 2–4 days, depending on depth and practical components"
        ],
        outro: "Training can be customised for specific machinery, production lines, or facility layouts."
      },
      {
        heading: "How manufacturing training improves workplace safety & efficiency",
        intro: "Manufacturing safety isn’t just about compliance — it’s about precision, productivity, and protecting every process. Arbrit’s training programmes strengthen safety performance, reduce downtime, and help companies build operational excellence across every department. Benefits include:",
        items: [
          "Zero-incident culture: reduces injuries and unplanned shutdowns.",
          "Regulatory readiness: ensures compliance with national industry and HSE mandates.",
          "Improved quality and reliability: safe operations mean fewer production errors and reworks.",
          "Enhanced workforce morale: trained employees perform with greater confidence and care.",
          "Stronger corporate reputation: clients trust certified manufacturers with proven HSE performance."
        ]
      },
      {
        heading: "Build a safer, more productive manufacturing environment",
        intro: "Protect your workforce and improve operational reliability with manufacturing industry training from Arbrit. Our programmes turn compliance into culture, making safety a competitive advantage."
      }
    ],
    certificationIntro: "Successful participants receive an Arbrit Manufacturing Safety Certificate, recognised across industrial and production sectors in the UAE and Saudi Arabia. Certificates verify compliance with national occupational safety standards and contribute toward ISO 45001 and ESG audit requirements.",
    faqs: [
      {
        question: "What does manufacturing safety training include?",
        answer: "It covers machine safety, lockout-tagout, chemical handling, fire prevention, and process safety management."
      },
      {
        question: "Who should take these training courses?",
        answer: "Operators, technicians, supervisors, and engineers involved in manufacturing, maintenance, or plant operations."
      },
      {
        question: "How long do the courses last?",
        answer: "Typically 1–3 days for core modules and up to 4 days for specialised training programmes."
      },
      {
        question: "Are the courses recognised in the UAE and Saudi Arabia?",
        answer: "Yes. Arbrit’s certifications meet national and international HSE standards for manufacturing safety compliance."
      },
      {
        question: "Can training be delivered at our facility?",
        answer: "Yes. On-site programmes can be tailored to your specific plant layout and operational hazards."
      },
      {
        question: "Do you provide bilingual sessions?",
        answer: "Yes. All training is available in English and Arabic for both local and expat workforces."
      },
      {
        question: "Are these courses suitable for the chemical or process industries?",
        answer: "Absolutely. Specialised modules like Process Safety Management and Industrial Hygiene are designed for high-risk process environments."
      },
      {
        question: "What equipment or PPE is required for practical sessions?",
        answer: "Participants are required to bring standard PPE such as helmets, gloves, safety glasses, and protective footwear; Arbrit provides all additional training materials."
      },
      {
        question: "Do these courses help in ISO or HSE audit preparation?",
        answer: "Yes. They align directly with ISO 45001 and national labour and HSE regulations, improving compliance scores."
      },
      {
        question: "How often should manufacturing safety training be renewed?",
        answer: "Every two years, or sooner if significant process, equipment, or workforce changes occur."
      }
    ]
  },
  {
    slug: "food-industry",
    title: "Food Industry",
    track: "General Safety",
    tagline: "Safe food starts with skilled people",
    image: "/course/ksa/food-industry.webp",
    duration: "1–3 days per course",
    courseInfoParagraphs: [
      "The food and beverage industry is built on trust, and trust begins with safety. Arbrit delivers internationally aligned food industry courses designed to equip professionals with the knowledge, discipline, and compliance skills required to maintain the highest standards of hygiene, quality, and food safety.",
      "From restaurants and hotels to food processing plants and cold chain operations, our programmes support organisations across the UAE and Saudi Arabia in meeting the requirements of local food safety authorities and international food safety standards (HACCP, ISO 22000, GMP).",
      "These courses are ideal for F&B professionals, supervisors, and managers seeking to strengthen operational control and food safety leadership."
    ],
    sections: [
      {
        heading: "Core food industry training courses",
        items: [
          "Food Safety & Hygiene (GMP, HACCP)",
          "Personal Hygiene & Sanitation Practices",
          "Fire Safety & Emergency Evacuation",
          "Chemical Handling & Storage",
          "Manual Handling & Ergonomics",
          "PPE Awareness",
          "Hazard Identification & Risk Assessment",
          "Waste Management & Environmental Awareness"
        ]
      },
      {
        heading: "Specialised training",
        items: [
          "Allergens & Cross-Contamination Awareness",
          "Food Defence & Security Awareness",
          "Pest Control Awareness",
          "Cold Chain & Storage Safety",
          "Forklift / Material Handling Safety",
          "Incident Reporting & Investigation"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "Food handlers, chefs, and kitchen staff",
          "F&B supervisors and managers",
          "Food production and quality control teams",
          "Catering and hospitality professionals",
          "Warehouse and logistics staff in cold chain operations",
          "Safety officers and compliance coordinators"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "By completing food industry courses with Arbrit, participants will:",
        items: [
          "Implement and maintain effective food safety management systems",
          "Prevent contamination and improve product quality",
          "Meet local food safety authority, HACCP, and ISO 22000 compliance standards",
          "Strengthen operational safety and hygiene culture",
          "Manage teams effectively with safety leadership and accountability"
        ]
      },
      {
        heading: "Course duration",
        items: [
          "Core courses: 1–2 days each",
          "Specialised courses: 1–3 days depending on content depth"
        ],
        outro: "Courses are delivered through classroom sessions, workshops, and on-site practical assessments for real-world impact."
      },
      {
        heading: "How food safety training elevates F&B standards",
        intro: "Food safety is not optional; it’s essential. Through Arbrit’s food and beverage manager courses and technical training programmes, organisations can minimise risk, improve consumer trust, and maintain global-quality standards. Key benefits include:",
        items: [
          "Regulatory alignment: complies with local food safety authority and HACCP standards.",
          "Improved food quality: reduces contamination and product rejection rates.",
          "Employee confidence: staff perform tasks with awareness and accountability.",
          "Customer trust: certified teams ensure safe, consistent dining and production experiences.",
          "Operational efficiency: safe practices reduce waste, downtime, and losses."
        ]
      },
      {
        heading: "Train smart. Serve safe. Lead with confidence.",
        intro: "Protect your brand and customers with food industry courses from Arbrit. Whether you’re managing a kitchen, production facility, or logistics network — we help you create a safety culture that lasts."
      }
    ],
    certificationIntro: "Participants receive an Arbrit Food Safety & Hygiene Certificate, recognised by local food safety authorities and international food safety bodies. The certification enhances professional credibility and supports ISO 22000 and HACCP compliance audits for organisations.",
    faqs: [
      {
        question: "What topics are covered in Arbrit’s food industry courses?",
        answer: "They include food hygiene, HACCP, GMP, allergen management, fire safety, and cold chain handling."
      },
      {
        question: "Who should take the food and beverage manager course?",
        answer: "F&B managers, supervisors, and quality leads responsible for maintaining hygiene and compliance in restaurants or production facilities."
      },
      {
        question: "Are these courses recognised in the UAE and Saudi Arabia?",
        answer: "Yes. Arbrit’s certifications align with local food safety authority requirements, ISO 22000, and international HACCP standards."
      },
      {
        question: "How long are the training programmes?",
        answer: "Most core modules are 1–2 days, while specialised courses such as food defence or allergen control may extend to 3 days."
      },
      {
        question: "Can training be conducted at our facility?",
        answer: "Yes. On-site and corporate sessions are available across the UAE and Saudi Arabia."
      },
      {
        question: "Do these courses support ISO or HACCP certification audits?",
        answer: "Yes. They are structured to help companies maintain or achieve HACCP and ISO 22000 certification readiness."
      },
      {
        question: "Are bilingual sessions available?",
        answer: "Yes. Training is delivered in English and Arabic, depending on the participants."
      },
      {
        question: "What certification will I receive?",
        answer: "A recognised Arbrit Food Safety & Hygiene Certificate, valid across the UAE and Saudi Arabia and internationally."
      },
      {
        question: "Are these courses suitable for food manufacturing as well as service sectors?",
        answer: "Yes. The programmes cover both processing plants and food service operations."
      },
      {
        question: "How often should food safety training be renewed?",
        answer: "Every two years, or earlier if regulations, roles, or production systems change."
      }
    ]
  },
  {
    slug: "healthcare-sector",
    title: "Healthcare / Hospital Sector",
    track: "General Safety",
    tagline: "Because safety saves more than lives — it builds trust",
    image: "/course/ksa/healthcare-sector.webp",
    duration: "1–3 days per course",
    courseInfoParagraphs: [
      "Patient safety and healthcare quality begin with a well-trained team. At Arbrit, we provide specialised healthcare training courses that enhance safety awareness, infection control, and emergency readiness in hospitals, clinics, and medical facilities across the UAE and Saudi Arabia.",
      "Each course is designed in accordance with national healthcare accreditation standards and international best practices from WHO, CDC, and OSHA.",
      "Our programmes help healthcare organisations create safer environments for both patients and staff, building competence, confidence, and compliance."
    ],
    sections: [
      {
        heading: "Core healthcare safety courses",
        items: [
          "Infection Control & Biohazard Safety",
          "Hand Hygiene & PPE Training",
          "Fire Safety & Evacuation Drills",
          "Needle Stick & Sharps Safety",
          "Hazardous Material Handling",
          "Waste Segregation & Biomedical Waste Management",
          "Manual Handling & Patient Lifting Techniques",
          "Emergency Preparedness & CPR / First Aid",
          "Risk Assessment & Incident Reporting"
        ]
      },
      {
        heading: "Specialised training",
        items: [
          "Patient Safety & Safety Culture",
          "Workplace Violence & Security Awareness",
          "Occupational Health (Stress Management, Ergonomics)",
          "Infection Prevention & Control Audits",
          "Safe Use of Medical Equipment & Devices"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "Doctors, nurses, and paramedical staff",
          "Infection control and quality officers",
          "Hospital administrators and safety coordinators",
          "Biomedical and maintenance technicians",
          "Laboratory and housekeeping staff",
          "Emergency response and security personnel"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "After completing healthcare training courses with Arbrit, participants will:",
        items: [
          "Apply infection prevention measures effectively in clinical practice",
          "Improve patient and staff safety through hazard control and reporting",
          "Manage emergencies calmly and competently",
          "Maintain compliance with national healthcare accreditation standards and international health safety standards",
          "Foster a proactive culture of safety within the organisation"
        ]
      },
      {
        heading: "Course duration",
        items: [
          "Core courses: 1–2 days",
          "Specialised courses: 2–3 days depending on complexity"
        ],
        outro: "Programmes combine theory, role-based exercises, and practical demonstrations to reinforce learning for all staff levels."
      },
      {
        heading: "How healthcare training improves safety & accreditation",
        intro: "A safe hospital protects more than patients; it protects the people who care for them. Through targeted healthcare training, Arbrit helps organisations achieve excellence in both compliance and clinical care. Key benefits include:",
        items: [
          "Accreditation compliance: ensures adherence to national healthcare accreditation standards.",
          "Reduced infection rates: fewer healthcare-associated infections (HAIs).",
          "Stronger patient trust: consistent safety and hygiene performance.",
          "Empowered workforce: confident, capable, and well-prepared staff.",
          "Smoother audits: training documentation supports accreditation and renewal processes."
        ]
      },
      {
        heading: "Safe hospitals. Confident teams. Better care.",
        intro: "Protect patients and professionals alike with healthcare training courses from Arbrit. Our programmes empower your staff to uphold the highest standards of safety, hygiene, and care."
      }
    ],
    certificationIntro: "Participants receive an Arbrit Healthcare Safety Certificate, recognised by healthcare institutions and regulatory authorities across the UAE and Saudi Arabia. Certificates support hospital accreditation efforts under national healthcare accreditation standards and the ISO 45001 and ISO 9001 frameworks.",
    faqs: [
      {
        question: "What healthcare safety courses are available?",
        answer: "Arbrit offers infection control, PPE use, fire safety, waste management, CPR/first aid, and specialised courses in patient and occupational safety."
      },
      {
        question: "Who should attend these training programmes?",
        answer: "Doctors, nurses, housekeeping, laboratory, and administrative staff: anyone directly or indirectly involved in patient care or hospital operations."
      },
      {
        question: "Are the courses recognised by healthcare authorities?",
        answer: "Yes. Training content aligns with national healthcare accreditation standards and international healthcare safety standards."
      },
      {
        question: "How long do the training sessions last?",
        answer: "Most sessions are 1–3 days depending on topic and participant level."
      },
      {
        question: "Can training be conducted within the hospital?",
        answer: "Yes. On-site sessions are available for hospitals, clinics, and laboratories across the UAE and Saudi Arabia."
      },
      {
        question: "Do participants receive certification?",
        answer: "Yes. Every participant receives an Arbrit Healthcare Safety Certificate upon successful completion."
      },
      {
        question: "Are bilingual sessions available?",
        answer: "Yes. Courses are conducted in English and Arabic, ensuring accessibility for all staff."
      },
      {
        question: "Do these courses help with healthcare accreditation?",
        answer: "Absolutely. Training programmes fulfil several national healthcare accreditation standards for staff competency and safety preparedness."
      },
      {
        question: "Are refresher courses recommended?",
        answer: "Yes. Annual or biannual refresher training is advised to maintain readiness and compliance."
      },
      {
        question: "Can programmes be customised for hospital departments?",
        answer: "Yes. Arbrit customises content for clinical, laboratory, housekeeping, and administrative teams."
      }
    ]
  },
  {
    slug: "oil-and-gas",
    title: "Oil & Gas Training",
    track: "General Safety",
    tagline: "Specialised HSE and technical training for oil & gas",
    image: "/course/ksa/oil-and-gas-offshore.webp",
    courseInfoParagraphs: [
      "Arbrit provides specialised HSE and technical training for the oil & gas industry, supporting safe and competent operations across upstream, downstream, onshore, offshore, petrochemical and industrial sectors.",
      "Arbrit is an approved/registered vendor with ADNOC, Saudi Aramco and SABIC, strengthening our capability to support major energy and industrial organisations across the UAE and Saudi Arabia."
    ],
    sections: [
      {
        heading: "Specialised oil & gas training",
        items: [
          "HAZOP Study & HAZOP Leader",
          "HAZID – Hazard Identification Study",
          "Process Safety Management (PSM)",
          "Process Hazard Analysis (PHA)",
          "Layers of Protection Analysis (LOPA)",
          "SIL – Safety Integrity Level Awareness",
          "Bow-Tie Risk Assessment",
          "Quantitative Risk Assessment (QRA) Awareness",
          "Management of Change (MOC)",
          "SIMOPS – Simultaneous Operations",
          "Asset Integrity Management",
          "Major Accident Hazard Management",
          "Emergency Response & Crisis Management",
          "Root Cause Analysis (RCA)",
          "Incident Investigation",
          "Permit to Work & Energy Isolation",
          "H₂S Safety & Emergency Response",
          "Gas Testing & Atmospheric Monitoring"
        ]
      },
      {
        heading: "HSE & operational safety training",
        items: [
          "Confined Space Entry & Rescue",
          "Work at Height & Rescue",
          "LOTO – Lockout / Tagout",
          "First Aid, CPR & AED",
          "Fire Safety & Firefighting",
          "Hazard Identification & Risk Assessment",
          "Job Safety Analysis (JSA)",
          "Chemical Safety & COSHH",
          "Lifting & Rigging Safety",
          "Defensive Driving",
          "Scaffolding Safety & Inspection",
          "Excavation & Trenching Safety",
          "Electrical Safety"
        ]
      }
    ]
  },
  {
    slug: "seminars-and-workshops",
    title: "Seminars and Workshops",
    track: "General Safety",
    tagline: "Inspire change. Lead safety. Build culture.",
    image: "/course/ksa/seminars-and-workshops.webp",
    duration: "Half-day to 2 days",
    courseInfoParagraphs: [
      "Rules and procedures can only go so far — real safety begins when people believe in it. Arbrit’s safety training workshops and seminars are designed to transform workplace culture by developing leadership, communication, and personal accountability for safety at every level of an organisation.",
      "These interactive sessions combine case studies, storytelling, and live activities to help companies across the UAE and Saudi Arabia strengthen engagement, motivation, and behavioural change around health, safety, and well-being.",
      "Whether you’re shaping executives into proactive leaders or empowering frontline employees to speak up for safety, these workshops make every participant part of the solution."
    ],
    sections: [
      {
        heading: "Our seminars & workshop topics",
        items: [
          "Crisis & Emergency Management and Business Continuity Planning",
          "Creative Safety Communication & Branding",
          "Contractor & Supply Chain Safety Culture Enhancement",
          "Safety Leadership Motivational Workshop – (Leaders and Managers)",
          "Safety Ownership & Motivation – (Workers & Employees)",
          "“I Am the Change Maker in Safety” – (EHS Team)",
          "Motivating the Motivators – (Safety Ambassadors from All Departments)",
          "“From Penalties to Safety Ownership”",
          "Home Safety & Family Emergency Plans",
          "Women Safety 360 – Beyond Just POSH",
          "Facility Management Safety",
          "Personal Cyber Safety Preparedness"
        ]
      },
      {
        heading: "Who should attend",
        items: [
          "Business owners, directors, and senior managers",
          "HSE heads and EHS teams",
          "Supervisors and workforce representatives",
          "Safety ambassadors and departmental champions",
          "Contractors and service providers",
          "Corporate employees and administrative staff"
        ]
      },
      {
        heading: "Learning outcomes",
        intro: "After completing an Arbrit safety training workshop, participants will:",
        items: [
          "Demonstrate stronger safety leadership and accountability",
          "Communicate safety messages more effectively across teams",
          "Foster trust, motivation, and proactive safety ownership",
          "Strengthen emergency and crisis management readiness",
          "Integrate safety into both work and personal environments"
        ]
      },
      {
        heading: "Workshop duration",
        items: [
          "Half-day to 2-day sessions depending on topic and audience level",
          "Available as stand-alone events, part of annual safety days, or integrated into corporate learning programmes",
          "Customisable for specific sectors such as oil & gas, construction, healthcare, education, and hospitality"
        ]
      },
      {
        heading: "Why safety workshops work",
        intro: "Traditional lectures inform; workshops transform. Arbrit’s seminar model engages every participant through real-world examples, interactive problem-solving, and emotional connection to safety values. Key benefits include:",
        items: [
          "Behavioural impact: moves safety from rule-following to personal conviction.",
          "Team alignment: builds unity across departments and hierarchy levels.",
          "Culture change: converts passive compliance into active ownership.",
          "Performance improvement: reduces incidents through awareness and shared accountability.",
          "Community reach: encourages safety awareness at work, at home, and online."
        ]
      },
      {
        heading: "Inspire change. Strengthen culture. Lead safely.",
        intro: "Transform how your organisation views safety with interactive safety training workshops from Arbrit. Because lasting safety starts with people who care, communicate, and take ownership."
      }
    ],
    certificationIntro: "Participants receive an Arbrit Safety Workshop Certificate of Participation, endorsed by safety leadership experts and recognised by corporate partners across the UAE and Saudi Arabia. Certificates can also be integrated into company training records and national healthcare accreditation and ISO 45001 compliance documentation.",
    faqs: [
      {
        question: "What is a safety training workshop?",
        answer: "A live, interactive session designed to improve awareness, motivation, and leadership around workplace safety, combining presentations, case studies, and group discussions."
      },
      {
        question: "Who should attend safety workshops?",
        answer: "From executives and HSE teams to frontline employees, anyone involved in promoting, implementing, or following safety procedures."
      },
      {
        question: "Are the workshops industry-specific?",
        answer: "Yes. Sessions are tailored for construction, manufacturing, healthcare, oil & gas, and corporate sectors."
      },
      {
        question: "How long do workshops typically last?",
        answer: "Between half a day and two days, depending on topic and level of participation."
      },
      {
        question: "Can workshops be conducted on-site?",
        answer: "Yes. Arbrit conducts sessions at client premises across the UAE and Saudi Arabia."
      },
      {
        question: "Are these workshops motivational or technical?",
        answer: "Both — they blend practical safety knowledge with mindset transformation and team engagement."
      },
      {
        question: "Do participants receive certificates?",
        answer: "Yes. Every attendee receives an Arbrit Certificate of Participation."
      },
      {
        question: "Can topics be customised for our organisation?",
        answer: "Absolutely. We tailor workshops to match your company’s safety objectives and workforce profile."
      },
      {
        question: "Do workshops help with safety audits or ISO accreditation?",
        answer: "Yes. Leadership and behavioural training support compliance with ISO 45001 and national labour and HSE regulations."
      },
      {
        question: "Can we combine multiple topics in one event?",
        answer: "Yes. Many clients host full-day or multi-session events combining leadership, crisis management, and motivation modules."
      }
    ]
  }
];
