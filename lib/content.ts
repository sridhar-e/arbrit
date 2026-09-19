/**
 * Long-form site content: blog posts, course detail pages and trainer profiles.
 * Import only from server code: these lists are large, so keeping them out of lib/data.ts keeps
 * them out of every browser bundle. Client components get the small slices they need as props.
 */
import type { BlogPost, CourseDetail, Trainer } from "@/lib/data";

export const blogPosts: BlogPost[] = [
  {
    title: "The Role of Accredited Train the Trainer Courses in Meeting UAE OSHAD Compliance Requirements",
    excerpt:
      "UAE organisations cannot build a strong safety culture by depending only on one-time external training. Site teams change. Risks change.",
    category: "Compliance",
    href: "/blog/train-the-trainer-oshad-compliance",
    image: "/blog/train-the-trainer-oshad-compliance-thumb.webp",
    imageWide: "/blog/train-the-trainer-oshad-compliance-hero.webp",
    imageAlt:
      "Train the Trainer course delegates practising a safety briefing during an OSHAD compliance session in Abu Dhabi",
    content: [
      {
        paragraphs: [
          "UAE organisations cannot build a strong safety culture by depending only on one-time external training. Site teams change. Risks change. Procedures change. New employees join. Contractors enter the workplace. Supervisors need reminders. Someone, somewhere, will still ignore the obvious warning sign because human civilisation remains a bold experiment.",
          "This is why accredited train the trainer courses in dubai matter. They help organisations build competent internal trainers who can deliver safety information clearly, consistently, and in a way that employees can actually use.",
        ],
      },
      {
        heading: "OSHAD, ADOSH-SF, and Training Competence",
        paragraphs: [
          "Many companies still use the term OSHAD when referring to Abu Dhabi’s occupational safety and health framework. The current documents use ADOSH-SF under Abu Dhabi Public Health Center, with the 2024 Training, Awareness and Competency guideline updating the acronym from OSHAD-SF to ADOSH-SF and changing references from OSHAD to ADPHC.",
          "The framework places clear responsibility on entities to identify and provide required training for employees and stakeholders, confirm understanding of OSH technical and procedural requirements, deliver specific OSH training, ensure competence, and maintain training and competency records.",
          "That means training cannot be random. It needs structure, records, role relevance, and competent delivery.",
        ],
      },
      {
        heading: "Why Train the Trainer Supports Compliance",
        paragraphs: [
          "Train the Trainer programmes help organisations develop people who can deliver workplace training properly. This is especially useful for induction, toolbox talks, task-specific awareness, refresher sessions, internal safety briefings, and contractor orientation.",
          "The ADOSH-SF guideline defines training as an organised activity aimed at improving performance or helping someone reach the required knowledge or skill level. It also defines competency as having adequate training, qualifications, and experience to carry out a task safely and efficiently.",
          "This matters because competence is not created by handing someone a slide deck and hoping for the best. A trainer needs to understand planning, delivery, communication, questioning, assessment, and learner engagement.",
        ],
      },
      {
        heading: "What Accredited Train the Trainer Courses Teach",
        paragraphs: [
          "A good Train the Trainer course should help participants move from “I know this topic” to “I can teach this topic clearly.”",
        ],
        bulletList: [
          "Trainer roles and responsibilities",
          "Session planning and preparation",
          "Delivery methods",
          "Questioning techniques",
          "Time management",
          "Inclusive learning environments",
          "Assessment methods",
          "Feedback and improvement",
        ],
      },
      {
        paragraphs: [
          "Arbrit Safety’s Highfield Level 3 Train the Trainer course is designed as a first step for new trainers, focusing on effective workplace training delivery, planning, preparation, delivery methods, questioning techniques, and time management.",
        ],
      },
      {
        heading: "Why Internal Trainers Matter in High-Risk Workplaces",
        paragraphs: [
          "High-risk workplaces need repeated safety communication. Construction sites, industrial facilities, logistics operations, maintenance teams, oil and gas projects, and infrastructure works all depend on daily safety awareness.",
          "Internal trainers can support this by delivering consistent sessions across teams and shifts. They can reinforce local procedures, explain site-specific hazards, and make training more relevant to the actual work being done.",
          "External training is still important for accredited certifications and specialist topics. But internal trainers help keep safety alive between formal courses. Otherwise, safety becomes a certificate folder, and certificate folders are famously bad at stopping incidents.",
        ],
      },
      {
        heading: "Training Records and Refreshers",
        paragraphs: [
          "OSH compliance also depends on documentation. Organisations need to show who was trained, when training was delivered, what was covered, and whether the employee understood the content.",
          "The ADOSH-SF guideline also addresses refresher training, explaining that it may be required due to legislation updates, previous accidents, technical updates, or changes to systems, with training plans holding information on refresh intervals.",
          "Train the Trainer helps organisations manage this more effectively because trained internal personnel can support recurring sessions, refresher briefings, and targeted updates.",
        ],
      },
      {
        heading: "Build Internal Training Capability with Arbrit Safety",
        paragraphs: [
          "Arbrit Safety offers train the trainer courses in dubai through its Highfield Level 3 Train the Trainer programme, suitable for internal and external trainers who want to improve workplace training skills. For organisations working under OSHAD or ADOSH-SF expectations, Arbrit Safety helps build practical internal training capability, supporting better safety communication, stronger competency records, and more consistent workplace safety performance across UAE teams.",
        ],
      },
    ],
  },
  {
    title: "Renew Your LEEA Lifting Supervisor Certification: 3-Year Validity Explained",
    excerpt:
      "Lifting supervision is not a role where old knowledge can sit untouched forever. Equipment changes. Site procedures change. Client requirements",
    category: "LEEA",
    href: "/blog/renew-leea-lifting-supervisor-certification",
    image: "/blog/leea-lifting-supervisor-renewal-thumb.webp",
    imageWide: "/blog/leea-lifting-supervisor-renewal-hero.webp",
    imageAlt:
      "LEEA lifting supervisor inspecting chain slings and shackles during a certification renewal assessment in the UAE",
    content: [
      {
        paragraphs: [
          "Lifting supervision is not a role where old knowledge can sit untouched forever. Equipment changes. Site procedures change. Client requirements change. Project risk profiles change. And, because the universe enjoys paperwork, certification validity also needs attention.",
          "For professionals working in UAE lifting operations, renewing LEEA Lifting Supervisor certification helps show that competence is current. It also supports employer records, project compliance, prequalification requirements, and confidence during audits.",
          "Arbrit Safety’s LEEA lifting operations certification information states that participants must complete written assessment to earn the Certificate of Achievement from LEEA-UK, with certificates verifiable through the LEEA website and valid for 3 years.",
        ],
      },
      {
        heading: "Why 3-Year Validity Matters",
        paragraphs: [
          "A 3-year validity period helps keep lifting professionals updated. Lifting work carries serious risk, so refresher training is not just an admin task. It helps confirm that supervisors still understand safe systems of work, lifting plans, equipment documentation, site control, communication, and risk management.",
          "A lot can change in three years. A supervisor may move from small lifts to complex crane operations. A site may introduce new equipment. A company may change its procedures. A client may demand updated competency records.",
          "Renewal helps prevent the classic human habit of assuming “I did this course once” equals “I am current forever.” Cute. Dangerous, but cute.",
        ],
      },
      {
        heading: "What to Review Before Renewal",
        paragraphs: [
          "Before renewing, professionals should review their recent lifting experience, project exposure, incident history, and any gaps in current knowledge.",
          "Important areas include:",
        ],
        bulletList: [
          "Lift planning and supervision",
          "Risk assessment review",
          "Method statement understanding",
          "Communication and signalling",
          "Equipment certification checks",
          "Lifting accessories inspection awareness",
          "Ground condition control",
          "Exclusion zone management",
          "Emergency response during lifting operations",
        ],
      },
      {
        paragraphs: [
          "The aim is to refresh practical competence, not just replace an expired certificate with a newer PDF.",
        ],
      },
      {
        heading: "How LEEA Diploma Pathways Support Growth",
        paragraphs: [
          "A Lifting Supervisor certificate supports site supervision, but professionals who want deeper technical development may also explore a LEEA diploma route. Diploma-level training is useful for people involved in inspection, testing, examination, maintenance, and repair of lifting equipment and accessories.",
          "LEEA’s Lifting Accessories Diploma is designed for professionals involved in the testing, inspection, examination, and repair or maintenance of lifting accessories, with instructor-led training listed as 5 days.",
          "For UAE professionals, this pathway can support career growth from supervision into more technical lifting equipment roles, compliance responsibilities, or inspection-related work.",
        ],
      },
      {
        heading: "When Should You Start the Renewal Process?",
        paragraphs: [
          "Do not wait until the certificate has already expired. Start checking renewal needs at least a few months before the validity date ends, especially if your employer, client, or project requires active certification.",
          "Expired certification can create problems during mobilisation, site access, tender documentation, client audits, or internal competency reviews. Nothing says “professional planning” like realising your certificate expired right before a project starts. Stunning theatre.",
        ],
      },
      {
        heading: "Who Should Consider LEEA Diploma Courses?",
        paragraphs: [
          "LEEA diploma courses in dubai are more suitable for professionals who want deeper technical knowledge of lifting equipment and accessories. This can include engineers, inspectors, technicians, lifting coordinators, QA/QC teams, HSE professionals, and experienced lifting personnel.",
          "Arbrit Safety’s LEEA Diploma page lists the LEEA Foundation Certificate and LEEA Lifting Accessories Diploma, with the Foundation Certificate at 3 days and the Lifting Accessories Diploma at 5 days.",
        ],
      },
      {
        heading: "Keep Your Lifting Competence Current with Arbrit Safety",
        paragraphs: [
          "Arbrit Safety supports LEEA-related training in the UAE through recognised lifting pathways, including LEEA Foundation Certificate, Lifting Accessories Diploma, Appointed Person, Crane Lift Supervisor, and related lifting programmes. For professionals renewing Lifting Supervisor certification or exploring LEEA Diploma courses, Arbrit Safety provides a practical route to maintain current competence, strengthen documentation, and build a safer long-term lifting career.",
        ],
      },
    ],
  },
  {
    title: "LEEA Training Courses Dubai: From Risk Assessment to Method Statements",
    excerpt:
      "Why LEEA Training Courses in Dubai are important for professionals involved in lifting operations. The training helps learners understand how",
    category: "LEEA",
    href: "/blog/leea-training-courses-dubai",
    image: "/blog/leea-training-courses-dubai-thumb.webp",
    imageWide: "/blog/leea-training-courses-dubai-hero.webp",
    imageAlt:
      "LEEA lifting operations training course in Dubai, with delegates planning a crane lift and reviewing method statements",
    content: [
      {
        paragraphs: [
          "A lifting operation can look simple from the outside. A crane arrives, the load is attached, the team gives signals, and the lift happens. Very neat, until you remember that every lift involves load weight, ground conditions, equipment capacity, lifting accessories, communication, weather, access, exclusion zones, and people standing far too close to things they should respect more.",
          "That is why LEEA Training Courses in Dubai are important for professionals involved in lifting operations. The training helps learners understand how lifting safety moves from planning documents to actual site control.",
        ],
      },
      {
        heading: "Why Risk Assessment Comes First",
        paragraphs: [
          "A lifting risk assessment identifies what could go wrong before the lift starts. It considers the load, location, equipment, team, environment, access, nearby structures, and possible failure points.",
          "For UAE projects, this is especially important because lifting work often happens in busy construction sites, oil and gas facilities, logistics yards, ports, warehouses, industrial plants, and infrastructure projects. The risk assessment is not paperwork for decoration. It is the starting point for deciding whether the lift can be done safely.",
          "LEEA’s Foundation Certificate is designed to build understanding of lifting equipment, safe lifting practices, legislation, standards, inspection, maintenance, rating, and lifting equipment applications.",
        ],
      },
      {
        heading: "What a Method Statement Should Do",
        paragraphs: [
          "A method statement explains how the lifting activity will be carried out. It should connect directly to the risk assessment and give the team a clear sequence of work.",
          "A good lifting method statement should cover the lift objective, equipment selection, lifting accessories, team roles, communication method, exclusion zone, ground condition controls, emergency arrangements, and step-by-step lifting sequence.",
          "If the risk assessment identifies the hazards but the method statement does not control them, the documents are not working together. They are just two files sitting politely in a folder, contributing nothing to civilisation.",
        ],
      },
      {
        heading: "How LEEA Training Builds Practical Competence",
        paragraphs: [
          "Good LEEA Training in Dubai should help professionals understand both the technical and behavioural sides of lifting safety. It is not enough to know the names of accessories or crane parts. Participants need to understand responsibility, planning, communication, inspection awareness, and control measures.",
          "Arbrit Safety’s LEEA Appointed Person training covers roles and responsibilities, crane appreciation, duty charts, ground conditions, crane mat calculations, safe working loads, lifting accessories, slinging techniques, communication, lift planning, risk assessments, and method statements.",
          "These topics matter because lifting failures rarely come from one issue. They often come from several small gaps combining at the worst possible time.",
        ],
      },
      {
        heading: "Who Needs This Training?",
        paragraphs: [
          "LEEA Training Courses in Dubai are useful for appointed persons, lifting supervisors, riggers, engineers, HSE officers, site supervisors, lifting coordinators, inspectors, technicians, and project teams involved in lifting operations.",
          "For beginners, the LEEA Foundation Certificate can support basic understanding. For more advanced roles, Appointed Person and diploma-level routes build stronger technical capability.",
        ],
      },
      {
        heading: "Documentation Is Only Useful When Teams Understand It",
        paragraphs: [
          "Many projects already have risk assessments and method statements. The problem is whether the people using them actually understand them.",
          "Training helps teams read the documents properly, identify weak points, challenge unsafe assumptions, and apply controls on site. This is where competence starts to show. A trained lifting team does not simply sign a toolbox talk sheet and walk away. They understand what needs to happen and why.",
        ],
      },
      {
        heading: "Build Safer Lifting Operations with Arbrit Safety",
        paragraphs: [
          "Arbrit Safety is the first LEEA Licensed Training Partner in the UAE and KSA for the LEEA Foundation Certificate, and its UAE LEEA pathway includes Foundation Certificate and Lifting Accessories Diploma routes with classroom training, practical exercises, and competency-based assessments.",
          "For organisations and professionals looking for LEEA Training Courses in Dubai or LEEA Training in Dubai, Arbrit Safety supports practical lifting competence from risk assessment to method statements, helping teams plan better, supervise better, and reduce avoidable lifting risks on UAE projects.",
        ],
      },
    ],
  },
];

export const courseDetails: CourseDetail[] = [
  {
    slug: "leea-course-dubai",
    title: "LEEA Approved Appointed Person For Lifting Operations",
    duration: "5 Days Comprehensive",
    image: "/course/LEEA-Appointed-Lifting-Person.jpg",
    aim: "The aim of this course is to provide candidates with underpinning knowledge in order for them to understand the role and responsibility of the Appointed Person. Following completion of the course candidates will be able to identify and implement safety systems of work for lifting operations including writing risk assessments and method statements. As per UAE Construction Standards, appointed person is mandatory in all major lifting activities.",
    topics: [
      "Legislation",
      "LOLER, PUWER, HASAWA",
      "Codes of practice BS7121 part 1, 2 & 3",
      "Roles and responsibilities of personnel involved with lifting operations",
      "Crane appreciation – crane types, capabilities and limitations",
      "Duty charts",
      "Crane terminology",
      "Documentation and certification for lifting equipment",
      "and lifting equipment and lifting accessories",
      "Crane stability/ground conditions, crane mat calculations",
      "Rated Capacity Indicators (RCIs) and Safe Working Loads (SWL)",
      "Types of accessories and use",
      "Slinging techniques",
      "Down rating of accessories using Uniformal and Trignomerical Methods",
      "Sling Angles",
      "Communications",
      "Planning a lifting operation",
      "Writing a risk assessment (end test)",
      "Writing a method statement (end test)",
    ],
    durationHeading: "5 days",
    targetDelegates:
      "This course is aimed at anyone who is required plan safe systems of work using lifting equipment. It is recommended that prior to attending this course individuals should have some experience of working with lifting equipment, especially mobile cranes.",
    certificationIntro:
      "Every participant must complete the written assessment in order to be eligible for earning the Certificate of Achievement from LEEA-UK. These certificates can be verified from LEEA website",
    certificationLinkUrl: "https://leeaint.com/verfiy-certificate",
    certificationHighlight: "The Certificate of Achievement is valid for a period of 3 years",
  },
  {
    slug: "leea-diploma",
    title: "LEEA Diploma",
    image: "/international/LEEA-Courses-Dubai-UAE.webp",
    accreditationLogo: "/international/LEEA-Logo.webp",
    courseInfoParagraphs: [
      "The Lifting Equipment Engineers Association (LEEA) sets the benchmark for safe and compliant lifting operations across global industries. Achieving this standard requires more than basic training. It demands a clear understanding of lifting responsibilities, technical procedures, and risk control measures.",
      "As a LEEA Licensed Training Partner (LTP), Arbrit delivers approved LEEA training programmes for professionals involved in lifting operations, rigging, and supervision across the UAE and Saudi Arabia. These courses are designed to build practical competence, strengthen safety awareness, and ensure teams operate in line with internationally accepted standards.",
      "From planning and supervision to on-ground execution, the training focuses on real operational challenges, equipping participants with the skills needed to manage lifting tasks safely, efficiently, and with full accountability.",
    ],
    courseOfferings: [
      {
        label: "LEEA Foundation Certificate (FOU)",
        description: "Basic introduction to lifting equipment, safety practices, and essential industry knowledge.",
        href: "/course/leea-foundation-certificate",
      },
      {
        label: "LEEA Lifting Accessories Diploma (LAC)",
        description: "Advanced training in lifting operations, focusing on planning, safety, and compliance.",
        href: "/course/leea-lifting-accessories-diploma",
      },
    ],
    durationHeading:
      "LEEA Foundation Certificate (FOU): 3 days. LEEA Lifting Accessories Diploma (LAC): 5 days. Each course includes classroom training, practical exercises, and competency-based assessments.",
    targetDelegates:
      "Appointed persons and lift planners; engineers, inspectors, and technicians involved in lifting equipment; entry-level professionals starting a career in lifting operations; quality, safety, and compliance officers; and professionals seeking LEEA certification in lifting equipment and accessories.",
    certificationIntro:
      "Participants who successfully complete the course and assessments receive LEEA-accredited certifications, recognized internationally and across major industries. These qualifications enhance professional credibility and are essential for roles involving lifting operations, inspection, and equipment compliance.",
  },
  {
    slug: "rope-access",
    title: "Rope Access",
    image: "/course/rope-access-_1_-1024x683.webp",
    courseInfoParagraphs: [
      "Rope access system is a safe method of working at height where ropes and associated equipment are used to gain access to and from the work position, and to be supported there. The advantage of using rope access methods mainly lies in the safety and speed with which workers can get to or from difficult locations in order to carry out their work, often with minimal impact on other operations, surrounding areas and the environment. Another major benefit is the reduction of the combination of the total man-hours and perceived level of risk for a particular task (man-at-risk hours) when compared with other means of access and their associated risks and costs.",
      "The primary objective when using rope access methods is to carry out the work efficiently, with minimal accidents, incidents or dangerous occurrences. In order to ensure a safe system of work is maintained at all times, whilst avoiding damage to property or harm to the environment, careful planning and documented risk assessments are undertaken for each operation.",
    ],
    clientLogos: [
      { src: "/course/Clients/acciona-dubai.png", alt: "Acciona" },
      { src: "/course/Clients/al-ali-dubai.png", alt: "Al Ali" },
      { src: "/course/Clients/alec-dubai.png", alt: "ALEC" },
      { src: "/course/Clients/Ecc-dubai.png", alt: "ECC" },
      { src: "/course/Clients/etsalat-dubai.png", alt: "Etisalat" },
      { src: "/course/Clients/kier-dubai.png", alt: "Kier" },
      { src: "/course/Clients/red-sea-dubai.png", alt: "Red Sea" },
      { src: "/course/Clients/Wj-dubai.png", alt: "WJ" },
    ],
  },
  {
    slug: "highfield",
    title: "Highfield",
    image: "/international/HIghfield.webp",
    accreditationLogo: "/international/HABCLogo.png",
    courseInfoParagraphs: [
      "Highfield is a global leader in compliance and work-based learning, apprenticeship qualifications and one of the UK’s most recognisable awarding organisations.",
      "The body is regulated by Ofqual, Qualifications Wales, SQA Accreditation, the Council for the Curriculum, Examinations and Assessment (CCEA), and the Security Industry Authority (SIA).",
      "In addition to this, Highfield is also a government-regulated end-point assessment organisation (EPAO). As an awarding organisation Highfield has developed 300+ qualifications designed to enhance the career prospects of learners.",
      "Highfield is a leading provider of accredited training courses, delivering practical and engaging training to learners across a range of industries. With a focus on quality and continuous improvement, Highfield offers a wide range of courses designed to equip individuals with the skills and knowledge they need to succeed in their chosen fields. Whether you are looking to upskill, start a new career, or progress in your current role, a Highfield course is an excellent investment in your future.",
    ],
    topics: [
      "Highfield Level 3 International Award in Delivering training",
      "Highfield Level 3 International Award in Emergency First Aid at Work (DCAS/Trakhees)",
      "Risk Assesment",
      "Food Safety",
      "Highfield Level 2 International Award in the Control of Substances Hazardous to Health (COSHH)",
    ],
  },
  {
    slug: "iosh",
    title: "IOSH",
    image: "/international/IOSH.webp",
    accreditationLogo: "/international/iosh.png",
    courseInfoParagraphs: [
      "The Institution of Occupational Safety and Health (IOSH) is the world’s largest health and safety membership body. With 44,000 members in 99 countries, IOSH is committed to ensuring that global work practices are safe, healthy and sustainable.",
      "We Arbrit, is accredited from iosh since 2009 to deliver managing and working safely courses and also make sure these courses are delivered to the best of its practices.",
      "IOSH training courses combine up-to-date theory and practice to enable around 100,000 people a year to earn qualifications. Earning an IOSH qualification will allow the holder to ensure that the health and safety practices in their workplace are current, effective and well managed.",
      "IOSH is a globally recognized body for health and safety professionals, established in 1945. It provides a wide range of training courses designed to improve the competence and effectiveness of health and safety practitioners. These courses cover various topics such as risk assessment, accident investigation, occupational health, and safety management systems. IOSH courses are delivered through approved training providers globally and are highly valued by employers across industries. By completing IOSH training courses, learners enhance their knowledge and skills to manage health and safety risks effectively, ensuring a safer workplace for all.",
    ],
    topics: ["IOSH Managing Safely", "IOSH Working Safely"],
  },
  {
    slug: "sti",
    title: "Scaffolding Training Courses",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    accreditationLogo: "/international/STI-LOGO.webp",
    courseInfoParagraphs: [
      "The Scaffold Training Institute (Texas, USA) is a worldwide leader in providing scaffold training programs. Scaffold Training Institute programs have been used to train over 250,000 workers around the world since 1991, making it perhaps the number one source of scaffold training materials worldwide. STI provides both direct training by our instructors, and Train The Trainer programs to certify attendees to conduct training using STI materials.",
      "Scaffolding training courses provide individuals with the knowledge and skills to safely erect, use, and dismantle scaffolding structures. The Scaffold Training Institute is a reputable and recognized organization that provides comprehensive scaffold training programs to individuals and organizations delivered through approved centres globally. Scaffolding training is essential for anyone working in the construction industry or in jobs that require working at height.",
    ],
    topics: ["STI - Scaffold Inspector", "STI - Scaffold Erector", "STI - Scaffold Competent Person"],
  },
  {
    slug: "forklift-operator",
    title: "Forklift Operator Courses",
    image: "/general-safety/Forklift-Operator.webp",
    courseInfoParagraphs: [
      "Construction site workers are exposed to a variety of risks, including falls, electrocutions, and collisions with moving objects. RAKEZ-approved safety training courses offer instruction on safe work practices, hazard identification, and mitigation strategies to lessen these hazards. Personal protective equipment, scaffolding, excavation, and electrical safety are just a few of the topics covered in these seminars. Construction safety training not only safeguards employees but also ensures adherence to rules and regulations.",
      "RAKEZ-approved forklift operator training courses provide hands-on and theoretical training on operating forklifts safely and efficiently. These courses cover essential topics such as forklift operation and control, load handling, manoeuvring, and safety protocols. Forklift operator training courses can help reduce accidents, improve productivity, and ensure compliance with regulations. By obtaining a forklift operator certification, operators can demonstrate their competency and skill, enhancing their employability and opportunities for career growth in the material handling industry.",
    ],
  },
  {
    slug: "general-safety-awareness",
    title: "Safety Awareness Courses",
    image: "/general-safety/safety-awareness.webp",
    courseTable: [
      { name: "General Safety Awareness", type: "Safety Awareness", starts: "Everyday" },
      { name: "Environmental Awareness", type: "Safety Awareness", starts: "Everyday" },
      { name: "Dangerous Goods Safety Awareness", type: "Safety Awareness", starts: "Everyday" },
      { name: "Electrical Safety", type: "General Safety", starts: "Everyday" },
      { name: "Confined Space", type: "General Safety", starts: "Everyday" },
      { name: "Hand Tools", type: "General Safety", starts: "Everyday" },
      { name: "Basic Oil Spill", type: "General Safety", starts: "Everyday" },
      { name: "Basic Lifeline", type: "General Safety", starts: "Everyday" },
      { name: "Safety Induction Training", type: "General Safety", starts: "Everyday" },
      { name: "Heat Stress Awareness Training", type: "General Safety", starts: "Everyday" },
      { name: "Lifting Supervisor Refresher Training", type: "General Safety", starts: "Everyday" },
      { name: "Lifting Equipment Inspection Training", type: "General Safety", starts: "Everyday" },
      { name: "Basic Electrical Safety Awareness", type: "General Safety", starts: "Everyday" },
      { name: "Gas Analyst Training & Certification", type: "General Safety", starts: "Everyday" },
      { name: "Basic Scaffolding Erection & Dismantling", type: "General Safety", starts: "Everyday" },
      { name: "Basic Scaffolding Inspection", type: "General Safety", starts: "Everyday" },
      { name: "Scaffolding Supervisor Training", type: "General Safety", starts: "Everyday" },
    ],
  },
  {
    slug: "fire-fighting",
    title: "Fire Fighting Training Courses",
    image: "/general-safety/FIRE-FIGHTING.webp",
    courseInfoParagraphs: [
      "Firefighting safety training is an important strategy for ensuring a safe workplace and preventing fires.",
      "We have designed firefighting courses to deliver in-depth knowledge and skills to learners through both theoretical and practical training. Our firefighting course briefly covers fire marshal, firefighting, fire safety, and fire warden level 1.",
      "This course will provide you with an overview of fire safety, as well as knowledge and advice to assist you to recognize, manage, and prevent the causes of fire dangers.",
      "A workplace fire may be disastrous, especially if fire safety procedures have not been followed and staff members are uneducated. Making fire safety a priority and ensuring employees know what to do when tragedy hits can help to reduce damage and perhaps save lives. By training your employees from Arbrit, we can provide them with reassurance and confidence.",
      "Our professionals are up to date on the most recent tactics and strategies for enhancing your technical, operating, and executive management abilities.",
      "As one of the leading foundation levels HSE Professional courses in Dubai, we provide a safe working environment and save your company and the employees by preventing more expenses in the future.",
      "Please contact marketinguae@arbritonline.com training consultancy for more information!",
      "Firefighting training courses are typically regulated by recognized regulatory bodies and delivered through approved centres globally. Arbrit offers top-quality firefighting training courses that comply with Trakhees regulations. The curricula of these courses are designed to cover a wide range of topics such as firefighting techniques and emergency medical services and are taught by certified professionals using hands-on training and simulations. These courses provide practical knowledge and skills to effectively respond to fire emergencies. Arbrit’s commitment to safety and compliance with Trakhees regulations ensures that individuals and organizations receive the highest standard of firefighting training.",
    ],
    accreditationLogo: "/general-safety/trakhees.webp",
    topics: ["Fire Warden Level 1", "Fire Fighting", "Fire Marshall", "Fire Safety"],
  },
  {
    slug: "rescue-training",
    title: "Rescue Training Courses",
    image: "/general-safety/Rescue-Training.webp",
    courseInfoParagraphs: [
      "With complete theoretical understanding and a set of hands-on exercises, this course provides with the knowledge and skills required to understand the possible risks of working in confined spaces.",
      "The courses are well designed specifically which includes tower crane rescue, tunnel rescue, and confined space evacuation and rescue, which will teach the basic knowledge and information needed for a rescue incident.",
      "Without an emergency plan, the organization may suffer serious losses, including several fatalities and even financial collapse. When dealing with any possible risks in the workplace, the organization should get familiar with the fundamental elements and concepts of crisis management. With our Arbrit rescue training course, you can ensure that any incidents are dealt with immediately.",
      "This training is suitable for new rescue candidates designed specifically to supervise any emergency incidents. Our highly qualified and experienced training professionals equip students with technical expertise, instructional style, and presentation materials. The training emphasizes problem awareness and prevention.",
      "A professional certificate is a credential given to an individual after undertaking a defined certification course and test.",
      "As a leading HSE professional, we provide the best rescue training course to be more concerned about job safety, resulting in fewer accidents and injuries.",
      "Contact us for further assistance on rescue courses: marketinguae@arbritonline.com",
    ],
    topics: ["Tower Crane Rescue", "Tunnel Rescue", "Confined Space Exit & Rescue"],
  },
  {
    slug: "oil-and-gas",
    title: "Oil and Gas Safety Courses",
    image: "/general-safety/Oil-and-gas.webp",
    courseInfoParagraphs: [
      "We offer top-notch services that comply to industry safety standards and laws. This course is a professional qualification that helps learners to develop a solid understanding of the operational safety standards in the oil and gas industry while also demonstrating to employers that they have formal training and certification in the field.",
      "Safety and health are prioritized in the oil and gas industry. There will always be risks involved because of the nature of the work, the harsh working environment, and the types of machinery utilized.",
      "Our oil and gas safety courses are designed for professionals who want to work in technical and commercial fields by allowing them to discover the world of oil and gas in an interactive and engaging environment.",
      "Our trained professionals, who have years of expertise in their respective fields, have the required abilities, knowledge, and resources to assist our clients in optimizing asset value at every level.",
      "Candidates must achieve a minimum pass standard in the examination to be awarded the Arbrit Certificate in Oil & Gas Operational Safety.",
      "All our training courses are designed to provide you the skills you need to succeed in the tough and ever-changing industry.",
      "Please email any inquiries to marketinguae@arbritonline.com for more information on our oil and gas safety training.",
    ],
    topics: ["Confined Space", "Defensive Driving", "HAZOP", "H2S", "PTW", "TRA"],
  },
  {
    slug: "construction-safety",
    title: "Construction Safety Courses",
    image: "/general-safety/constructions.webp",
    courseTable: [
      { name: "Tower Crane Rescue", type: "Construction Safety", starts: "Everyday" },
      { name: "Scaffolding Inspector - STI", type: "Construction Safety", starts: "Everyday" },
      { name: "Scaffolding Erector - STI", type: "Construction Safety", starts: "Everyday" },
      { name: "Scaffolding Competent Person - STI", type: "Construction Safety", starts: "Everyday" },
      { name: "Scaffolding Competent Person", type: "Construction Safety", starts: "Everyday" },
      { name: "Power Hand Tools Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "PPE Awareness", type: "Construction Safety", starts: "Everyday" },
      { name: "Construction Hoist Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Confined Space Entry & Rescue", type: "Construction Safety", starts: "Everyday" },
      { name: "Confined Space Entry", type: "Construction Safety", starts: "Everyday" },
      { name: "Concrete Gun Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Block Cutting Machine Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Scissor Lift Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Roller Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Manlift Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Work at Height Training", type: "Construction Safety", starts: "Everyday" },
      { name: "Cradle Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Dumber Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Excavator Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Shovel Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Forklift Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Mobile Crane Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Lift Operator", type: "Construction Safety", starts: "Everyday" },
      { name: "Tunnel Rescue", type: "Construction Safety", starts: "Everyday" },
      { name: "Flagman", type: "Construction Safety", starts: "Everyday" },
    ],
  },
  {
    slug: "first-aid",
    title: "First Aid Training Courses",
    image: "/general-safety/first-aid.webp",
    courseInfoParagraphs: [
      "The Department of Community Affairs and Social Services (DCAS) in Dubai regulates and certifies first-aid training programs. Arbrit is one such premier institute authorized by DCAS to conduct first-aid certification courses.",
      "As the leading emergency first aid trainer in Dubai and Abu Dhabi, we offer DCAS-approved courses with a high level of experience to equip more people with basic first-aid knowledge to create a safe workplace. By providing first aid training to your staff, you indicate that you care about their well-being.",
      "Our first aid training is designed to provide you with valuable knowledge and skills to help save a life and minimize the effects of severe emergencies. Our training programs cover basic first aid, CPR, AED, and pediatric first aid.",
      "Our highly educated and experienced instructors have many years of experience in the UAE preparing students for upcoming exams and developing a deeper understanding and comprehension of emergency first aid training.",
      "Upon the successful completion of the first aid training, a certificate will be awarded to the participants.",
      "Learning emergency first aid may help you reflect on your own behavior and how you and others respond to various circumstances. Having this information will increase your confidence in a variety of non-medical day-to-day circumstances.",
      "For more details about our advanced DCAS-certified emergency first aid training courses in Dubai, Abu Dhabi, please email marketinguae@arbritonline.com.",
      "Top-rated first-aid training course provider that is listed under RAKEZ’s registered list of certified training consultants. Partnered with Dubai Corporation for Ambulance Services, Arbrit delivers high-quality training programs that abide by Trakhees regulations. Taught by certified professionals using hands-on training and simulations, Arbrit is committed to providing accessible and reliable training to individuals and organizations to help them respond to medical emergencies effectively.",
    ],
    accreditationLogos: ["/general-safety/trakhees.webp", "/general-safety/Rakez-Logo.png"],
    topics: ["Basic First Aid CPR & AED", "Pedeatric First Aid"],
  },
  {
    slug: "irca-lead-auditor",
    title: "Lead Auditor Courses",
    image: "/course/Lead-Auditor-1.jpg",
    courseInfoParagraphs: [
      "The goal of  Lead auditor training course is to provide the knowledge and skills needed to perform first, second, and third-party audits of ISO management systems against ISO 9001/45001/14001/27001, as applicable, in accordance with ISO 19011 and ISO 17021. There will be a mix of lectures, discussions, exercises, and cooperative learning. Active learning will concentrate on case studies and scenarios relating to the use of QMS 1st, 2nd, and 3rd party audits. Delegates will participate in a variety of individual and group activities throughout the course, which will be assessed through continuous delegate evaluation. Finally, at the end of the course, a summative comprehensive assessment will assess subject matter comprehension.",
      "This course is designed for those who want to learn how to audit an organization’s ISO 9001-based management system as a third or second-party audit. Students who pass the continuous assessment and the 2-hour closed book exam will receive a Certificate of Achievement. This course meets the training requirement for certification as a CQI  registered QMS Lead Auditor/Auditor, according to CQI policy.",
      "If you are looking for lead auditor course in Dubai, Abu Dhabi, reach out to us.",
    ],
    clientLogos: [
      { src: "/course/Clients/acciona-dubai.png", alt: "Acciona" },
      { src: "/course/Clients/al-ali-dubai.png", alt: "Al Ali" },
      { src: "/course/Clients/alec-dubai.png", alt: "ALEC" },
      { src: "/course/Clients/Ecc-dubai.png", alt: "ECC" },
      { src: "/course/Clients/etsalat-dubai.png", alt: "Etisalat" },
      { src: "/course/Clients/kier-dubai.png", alt: "Kier" },
      { src: "/course/Clients/red-sea-dubai.png", alt: "Red Sea" },
      { src: "/course/Clients/Wj-dubai.png", alt: "WJ" },
    ],
  },
  {
    slug: "sti-scaffold-inspector",
    title: "STI Scaffold Inspector",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    aim: "This course equips participants with the knowledge and practical skills required to inspect scaffolding structures safely and competently, in line with UAE workplace safety standards.",
  },
  {
    slug: "sti-scaffold-erector",
    title: "STI Scaffold Erector",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    aim: "This course equips participants with the knowledge and practical skills required to erect scaffolding structures safely and competently, in line with UAE workplace safety standards.",
  },
  {
    slug: "sti-scaffold-competent-person",
    title: "STI Scaffold Competent Person",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    aim: "This course equips participants with the knowledge and practical skills required to act as a competent person on scaffolding operations, in line with UAE workplace safety standards.",
  },
  {
    slug: "pedeatric-first-aid",
    title: "Pedeatric First Aid",
    image: "/general-safety/first-aid.webp",
    aim: "This course equips participants with the knowledge and practical skills required to provide effective first aid to infants and children in an emergency.",
  },
  {
    slug: "tower-crane-rescue",
    title: "Tower Crane Rescue",
    image: "/general-safety/Rescue-Training.webp",
    aim: "This course equips participants with the knowledge and practical skills required to safely plan and carry out rescue operations involving tower cranes.",
  },
  {
    slug: "confined-space-entry-rescue",
    title: "Confined Space Entry & Rescue",
    image: "/general-safety/Rescue-Training.webp",
    aim: "This course equips participants with the knowledge and practical skills required to safely enter confined spaces and carry out rescue operations when required.",
  },
  {
    slug: "confined-space-entry",
    title: "Confined Space Entry",
    image: "/general-safety/Oil-and-gas.webp",
    aim: "This course equips participants with the knowledge and practical skills required to safely enter and work within confined spaces, in line with UAE workplace safety standards.",
  },
  {
    slug: "scaffolding-competent-person-sti",
    title: "Scaffolding Competent Person – STI",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    aim: "This course equips participants with the knowledge and practical skills required to act as a competent person on scaffolding operations, in line with UAE workplace safety standards.",
  },
  {
    slug: "scaffolding-erector-sti",
    title: "Scaffolding Erector – STI",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    aim: "This course equips participants with the knowledge and practical skills required to erect scaffolding structures safely and competently, in line with UAE workplace safety standards.",
  },
  {
    slug: "scaffolding-inspector-sti",
    title: "Scaffolding Inspector – STI",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    aim: "This course equips participants with the knowledge and practical skills required to inspect scaffolding structures safely and competently, in line with UAE workplace safety standards.",
  },
  {
    slug: "scaffolding-competent-person",
    title: "Scaffolding Competent Person",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    aim: "This course equips participants with the knowledge and practical skills required to act as a competent person on scaffolding operations, in line with UAE workplace safety standards.",
  },
  {
    slug: "construction-hoist-operator",
    title: "Construction Hoist Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate construction hoists safely and competently on site.",
  },
  {
    slug: "concrete-gun-operator",
    title: "Concrete Gun Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate concrete guns safely and competently on site.",
  },
  {
    slug: "power-hand-tools-operator",
    title: "Power Hand Tools Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate power hand tools safely and competently on site.",
  },
  {
    slug: "block-cutting-machine-operator",
    title: "Block Cutting Machine Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate block cutting machines safely and competently on site.",
  },
  {
    slug: "scissor-lift-operator",
    title: "Scissor Lift Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate scissor lifts safely and competently on site.",
  },
  {
    slug: "roller-operator",
    title: "Roller Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate rollers safely and competently on site.",
  },
  {
    slug: "manlift-operator",
    title: "Manlift Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate manlifts safely and competently on site.",
  },
  {
    slug: "cradle-operator",
    title: "Cradle Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate suspended cradles safely and competently on site.",
  },
  {
    slug: "dumber-operator",
    title: "Dumber Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate dumpers safely and competently on site.",
  },
  {
    slug: "excavator-operator",
    title: "Excavator Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate excavators safely and competently on site.",
  },
  {
    slug: "shovel-operator",
    title: "Shovel Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate shovels safely and competently on site.",
  },
  {
    slug: "mobile-crane-operator",
    title: "Mobile Crane Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate mobile cranes safely and competently on site.",
  },
  {
    slug: "lift-operator",
    title: "Lift Operator",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to operate lifts safely and competently on site.",
  },
  {
    slug: "tunnel-rescue",
    title: "Tunnel Rescue",
    image: "/general-safety/Rescue-Training.webp",
    aim: "This course equips participants with the knowledge and practical skills required to safely plan and carry out rescue operations within tunnels.",
  },
  {
    slug: "flagman",
    title: "Flagman",
    image: "/general-safety/constructions.webp",
    aim: "This course equips participants with the knowledge and practical skills required to safely direct traffic and equipment movement on site as a flagman.",
  },
  {
    slug: "iosh-managing-safely",
    title: "IOSH Managing Safely",
    image: "/international/IOSH.webp",
    aim: "This IOSH-aligned course equips managers and supervisors with the knowledge to manage health and safety risks effectively within their teams.",
  },
  {
    slug: "iosh-supervising-safely",
    title: "IOSH Supervising Safely",
    image: "/international/IOSH.webp",
    aim: "This IOSH-aligned course equips supervisors with the knowledge to identify and manage health and safety risks within their area of responsibility.",
  },
  {
    slug: "iosh-working-safely",
    title: "IOSH Working Safely",
    image: "/international/IOSH.webp",
    aim: "This IOSH-aligned course equips employees at all levels with a basic understanding of health and safety in the workplace.",
  },
  {
    slug: "train-the-trainer",
    title: "Train the Trainer",
    image: "/international/HIghfield.webp",
    aim: "This course equips participants with the delivery, planning, and presentation skills required to train others effectively in the workplace.",
  },
  {
    slug: "basic-first-aid",
    title: "Basic First Aid",
    image: "/general-safety/first-aid.webp",
    aim: "This course equips participants with the knowledge and practical skills required to provide basic first aid in a workplace emergency.",
  },
  {
    slug: "risk-assesment",
    title: "Risk Assessment",
    image: "/international/HIghfield.webp",
    aim: "This course equips participants with the knowledge and practical skills required to identify workplace hazards and carry out effective risk assessments.",
  },
  {
    slug: "food-safety",
    title: "Food Safety",
    image: "/international/HIghfield.webp",
    aim: "This course equips participants with the knowledge and practical skills required to handle, prepare, and store food safely in line with industry standards.",
  },
  {
    slug: "coshh",
    title: "COSHH",
    image: "/international/HIghfield.webp",
    aim: "This course equips participants with the knowledge required to control substances hazardous to health in the workplace.",
  },
  {
    slug: "confined-space",
    title: "Confined Space",
    image: "/general-safety/Oil-and-gas.webp",
    aim: "This course equips participants with the knowledge and practical skills required to identify confined space hazards and work within them safely.",
  },
  {
    slug: "defensive-driving",
    title: "Defensive Driving",
    image: "/general-safety/Oil-and-gas.webp",
    aim: "This course equips participants with the knowledge and practical skills required to anticipate hazards and drive defensively in a work environment.",
  },
  {
    slug: "hazop",
    title: "HAZOP",
    image: "/general-safety/Oil-and-gas.webp",
    aim: "This course equips participants with the knowledge required to systematically identify and evaluate process hazards using the HAZOP methodology.",
  },
  {
    slug: "h2s",
    title: "H2S",
    image: "/general-safety/Oil-and-gas.webp",
    aim: "This course equips participants with the knowledge and practical skills required to recognise and respond to hydrogen sulphide (H2S) hazards safely.",
  },
  {
    slug: "ptw",
    title: "PTW",
    image: "/general-safety/Oil-and-gas.webp",
    aim: "This course equips participants with the knowledge required to operate safely within a Permit to Work (PTW) system.",
  },
  {
    slug: "tra",
    title: "TRA",
    image: "/general-safety/Oil-and-gas.webp",
    aim: "This course equips participants with the knowledge and practical skills required to carry out effective Task Risk Assessments (TRA).",
  },
  {
    slug: "confined-space-exit-rescue",
    title: "Confined Space Exit & Rescue",
    image: "/general-safety/Rescue-Training.webp",
    aim: "This course equips participants with the knowledge and practical skills required to safely exit confined spaces and carry out rescue operations when required.",
  },
  {
    slug: "electrical-safety",
    title: "Electrical Safety",
    image: "/general-safety/safety-awareness.webp",
    aim: "This course equips participants with the knowledge required to identify electrical hazards and work safely around electrical equipment.",
  },
  {
    slug: "hand-tools",
    title: "Hand Tools",
    image: "/general-safety/safety-awareness.webp",
    aim: "This course equips participants with the knowledge and practical skills required to use hand tools safely in the workplace.",
  },
  {
    slug: "basic-oil-spil",
    title: "Basic Oil Spill",
    image: "/general-safety/safety-awareness.webp",
    aim: "This course equips participants with the knowledge and practical skills required to respond safely and effectively to a basic oil spill.",
  },
  {
    slug: "basic-lifeline",
    title: "Basic Lifeline",
    image: "/general-safety/safety-awareness.webp",
    aim: "This course equips participants with the knowledge and practical skills required to use lifeline systems safely when working at height.",
  },
  {
    slug: "lifting-supervisor-refresher-training",
    title: "Lifting Supervisor Refresher Training",
    image: "/general-safety/safety-awareness.webp",
    aim: "This refresher course updates lifting supervisors on current legislation, best practice, and safe systems of work for lifting operations.",
  },
  {
    slug: "basic-electrical-safety-awareness",
    title: "Basic Electrical Safety Awareness",
    image: "/general-safety/safety-awareness.webp",
    aim: "This course equips participants with a basic awareness of electrical hazards and how to avoid them in the workplace.",
  },
  {
    slug: "gas-analyst-training-certification",
    title: "Gas Analyst Training & Certification",
    image: "/general-safety/safety-awareness.webp",
    aim: "This course equips participants with the knowledge and practical skills required to carry out gas testing and analysis safely and accurately.",
  },
  {
    slug: "basic-scaffolding-erection-dismantling",
    title: "Basic Scaffolding Erection & Dismantling",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    aim: "This course equips participants with the knowledge and practical skills required to erect and dismantle basic scaffolding structures safely.",
  },
  {
    slug: "basic-scaffolding-inspection",
    title: "Basic Scaffolding Inspection",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    aim: "This course equips participants with the knowledge and practical skills required to carry out basic scaffolding inspections safely and competently.",
  },
  {
    slug: "scaffolding-supervisor-training",
    title: "Scaffolding Supervisor Training",
    image: "/international/STI-Scaffold-Training-Institute.webp",
    aim: "This course equips participants with the knowledge and practical skills required to supervise scaffolding operations safely and competently.",
  },
  {
    slug: "fire-warden-level-1",
    title: "Fire Warden Level 1",
    image: "/general-safety/FIRE-FIGHTING.webp",
    aim: "This course equips participants with the knowledge and practical skills required to act as a fire warden and respond effectively to a fire emergency.",
  },
  {
    slug: "fire-marshall",
    title: "Fire Marshall",
    image: "/general-safety/FIRE-FIGHTING.webp",
    aim: "This course equips participants with the knowledge and practical skills required to act as a fire marshall and coordinate an effective emergency evacuation.",
  },
  {
    slug: "fire-safety",
    title: "Fire Safety",
    image: "/general-safety/FIRE-FIGHTING.webp",
    aim: "This course equips participants with the knowledge required to identify fire hazards and follow fire safety procedures in the workplace.",
  },
  {
    slug: "environmental-awareness",
    title: "Environmental Awareness",
    image: "/general-safety/safety-awareness.webp",
    aim: "This course equips participants with a basic awareness of environmental hazards and responsibilities in the workplace.",
  },
  {
    slug: "dangerous-goods-safety-awareness",
    title: "Dangerous Goods Safety Awareness",
    image: "/general-safety/safety-awareness.webp",
    aim: "This course equips participants with the knowledge required to handle, store, and transport dangerous goods safely.",
  },
];

export const trainers: Trainer[] = [
  {
    slug: "brijith-shaji",
    name: "Brijith Shaji",
    credentials: "B.Tech (Fire & Safety), GradIOSH",
    image: "/trainer/Brijith-shaji.webp",
    shortBio:
      "Brijith Shaji is an internationally and Dubai Municipality certified trainer for NEBOSH, IOSH, Highfield and Scaffold Training Institute courses. He brings almost 14 years of safety experience into the classroom.",
    quote: "Push yourself to your limits. Thats how you truly grow.",
    bio: [
      "Brijith Shaji is an Internationally and Dubai Municipality certified Trainer authorized to conduct the NEBOSH, IOSH, HighField, Medic First aid and Scaffold Training Institute courses. Students and managers have described Brijith as both personable and dynamic who captivates participants using a combination of approaches—group exercises, short videos, accident case studies, images of hazards, and group discussion.",
      "With almost 14 years in managing safety for small and large businesses, heavy and light manufacturing to construction, Brijith brings his experience into the classroom and creates an engaging learning experience for all.He has key roles that have included operationally planning for disasters, carrying out Safety Audits and implementing Remediation, Mitigation or Removal requirements.",
      "He is a focused and hardworking person who enjoys imparting information to all ages and sectors of the community, communicating the importance of Safety. He work above and beyond the employers requirements at all times. As a trainer, his core capabilities include conducting safety / risk analysis at the work place and devising solutions to avoid safety hazards.",
    ],
  },
  {
    slug: "ishtiaq-hasham-khan",
    name: "Engr. Ishtiaq Hasham Khan",
    credentials: "Grad IOSH, STI",
    image: "/trainer/Ishtiaq-Hasham.webp",
    shortBio:
      "Engr. Ishtiaq Hasham Khan is an accredited IOSH and Scaffold Training Institute trainer with over eight years of health and safety experience. He keeps learners engaged with varied resources.",
    quote: "The aim of education is to advance knowledge and share truth",
    bio: [
      "A self-motivated and hard working qualified Health and Safety Trainer / Consultant with over 8 years experience in all aspects of Health and Safety over a diverse range of industries. Accredited trainer to deliver IOSH and STI training courses.",
      "Training courses are delivered in an interesting way, using a variety of resources to engage the Learners, enabling them to understand and take on board, the subject matter with confidence.",
      "Able to use own initiative as well as work as part of a team. Proven training / leadership skills,including managing and motivating staff to achieve company health and safety objectives. A very effective trainer / communicator at all levels within an organisation.",
    ],
  },
  {
    slug: "anshadh-rahim",
    name: "Anshadh Rahim",
    credentials: "HSE Trainer",
    image: "/trainer/anshadh-rahim.webp",
    shortBio:
      "Anshadh Rahim is an HSE trainer skilled in content development and building learning programmes, holding the core safety accreditations to deliver training to best practice. He runs engaging, professional sessions.",
    quote: "The aim of education is to advance knowledge and share truth",
    bio: [
      "HSE Trainer with shown skill in content development, creating learning programmes and initiatives. Trainer has proven his ability to make the sessions engaging and delivering professionally, Having all the basic safety accreditations to deliver the services to the best of its practice",
      "Able to use own initiative as well as work as part of a team. Proven training / leadership skills,including managing and motivating staff to achieve company health and safety objectives. A very effective trainer / communicator at all levels within an organisation.",
    ],
  },
];
