import { people } from "./people";

export type Section = "library" | "laboratory" | "garden" | "observatory" | "vault";

export interface PageData {
  slug: string;
  section: Section;
  title: string;
  recordId: string;
  category: string;
  status: string;
  catalogDate: string;
  content: string;
  isNeedle: boolean;
  // Needle-specific fields
  subject?: string;
  designation?: string;
  affiliation?: string;
  reference?: string;
  // Optional second person on same page
  subject2?: string;
  designation2?: string;
  affiliation2?: string;
  reference2?: string;
}

export const sectionMeta: Record<Section, { name: string; description: string; color: string }> = {
  library: {
    name: "The Library",
    description: "A vast collection of manuscripts, scrolls, and rare editions spanning centuries of accumulated knowledge. Each document has been carefully cataloged and preserved for future generations.",
    color: "amber",
  },
  laboratory: {
    name: "The Laboratory",
    description: "Detailed records of scientific experiments, chemical analyses, and field observations. Every trial has been documented with meticulous precision.",
    color: "emerald",
  },
  garden: {
    name: "The Garden",
    description: "Botanical records tracing the cultivation, classification, and study of plant specimens from around the world. A living catalog of nature's diversity.",
    color: "green",
  },
  observatory: {
    name: "The Observatory",
    description: "Astronomical observations, celestial maps, and records of cosmic phenomena. The universe documented through centuries of patient observation.",
    color: "indigo",
  },
  vault: {
    name: "The Vault",
    description: "Secured archives containing acquisition records, classified documents, and provenance histories of the most significant artifacts in the collection.",
    color: "rose",
  },
};

function findPerson(name: string) {
  return people.find((p) => p.name === name)!;
}

function needlePage(
  slug: string,
  section: Section,
  title: string,
  recordId: string,
  category: string,
  catalogDate: string,
  personName: string,
  content: string
): PageData {
  const person = findPerson(personName);
  return {
    slug,
    section,
    title,
    recordId,
    category,
    status: "Preserved",
    catalogDate,
    content,
    isNeedle: true,
    subject: person.name,
    designation: person.title,
    affiliation: person.organization,
    reference: person.linkedinUrl,
  };
}

function haystackPage(
  slug: string,
  section: Section,
  title: string,
  recordId: string,
  category: string,
  catalogDate: string,
  content: string
): PageData {
  return {
    slug,
    section,
    title,
    recordId,
    category,
    status: "Preserved",
    catalogDate,
    content,
    isNeedle: false,
  };
}

export const pages: PageData[] = [
  // ===== THE LIBRARY =====
  needlePage(
    "ancient-scrolls",
    "library",
    "Ancient Scrolls — Personnel Record",
    "ARC-1042",
    "Personnel Archives",
    "2025-01-12",
    "Andres Ramirez",
    "This personnel record was filed within the Library's ancient scrolls preservation unit, documenting the contributions of a senior figure whose strategic oversight of archival technology systems transformed the division's operational capabilities.\n\nThe subject managed the integration of multiple legacy cataloging systems into a unified platform, coordinating teams of specialists and administrators to ensure a seamless transition. Their experience directing large-scale institutional projects proved essential during a period of significant organizational change.\n\nField reports note the subject's particular strength in aligning technical infrastructure with strategic objectives, ensuring that each system upgrade served both the immediate needs of archival staff and the long-term goals of the institution. Their background in enterprise-scale operations brought a level of rigor previously unseen in the division.\n\nThe subject's contributions have been recognized in the Archives' annual review as a model for managing complex, cross-functional initiatives within cultural institutions."
  ),
  needlePage(
    "forgotten-tales",
    "library",
    "Forgotten Tales — Personnel Record",
    "ARC-1156",
    "Personnel Archives",
    "2025-02-03",
    "Anoop Manghat",
    "Filed among the Library's collection of lesser-known literary works, this personnel record documents the contributions of an advisor whose expertise in emerging technologies reshaped the Archives' approach to digital transformation.\n\nThe subject served as a strategic consultant to the Archives' leadership, providing guidance on the adoption of artificial intelligence tools for document classification, metadata extraction, and predictive conservation planning. Their counsel drew on extensive experience advising institutions across multiple sectors and geographies.\n\nThe subject's recommendations were notable for their balance of ambition and pragmatism, identifying high-impact opportunities while accounting for the constraints of institutional budgets and existing workflows. Their fractional advisory model allowed the Archives to access senior-level expertise on a flexible basis.\n\nPerformance assessments highlight the subject's ability to bridge the gap between strategic vision and operational execution, translating complex technical possibilities into actionable roadmaps that staff at all levels could understand and implement."
  ),
  needlePage(
    "manuscript-collection",
    "library",
    "Manuscript Collection — Personnel Record",
    "ARC-1203",
    "Personnel Archives",
    "2025-02-18",
    "Quan Alex Nguyen",
    "This personnel record was filed as part of the Archives' ongoing documentation of key contributors to the manuscript preservation division. The record details an individual whose technical leadership ensured the stability and reliability of critical cataloging systems.\n\nThe subject managed a team responsible for maintaining the digital infrastructure supporting the Library's manuscript collection, implementing monitoring systems and performance benchmarks that reduced downtime by a significant margin. Their data-driven approach to team management consistently produced outstanding satisfaction metrics among both staff and external researchers.\n\nField reports indicate the subject's career within the Archives followed a notable trajectory, advancing from a specialist role through quality assurance and subject matter expertise before assuming management responsibilities. This progression gave them an unusually comprehensive understanding of the systems they oversaw.\n\nThe subject's commitment to continuous improvement is evidenced by their pursuit of additional certifications in cloud infrastructure and emerging technologies, ensuring the division remained current with evolving best practices."
  ),
  haystackPage(
    "poetry-vault",
    "library",
    "Poetry Vault Manuscripts",
    "ARC-1287",
    "Literary Works",
    "2025-03-01",
    "The Poetry Vault contains over three hundred individually preserved poems spanning twelve centuries of literary production. The collection is organized by region of origin rather than chronologically, allowing researchers to trace stylistic influences across geographical boundaries.\n\nThe oldest piece, a fragment of a praise poem composed for an unnamed ruler, dates to approximately 700 CE. The most recent addition is a collection of concrete poetry from the 1960s, donated by the estate of a private collector.\n\nOf particular interest is a series of twenty-three linked sonnets discovered in 2021, which appear to encode astronomical observations within their structure. The acrostic formed by the first letters of each line spells out coordinates that correspond to known stellar positions.\n\nThe vault maintains strict climate control at 18°C and 45% relative humidity. Access is restricted to researchers who have completed the Archives' handling certification program."
  ),
  needlePage(
    "rare-editions",
    "library",
    "Rare Editions — Personnel Record",
    "ARC-1334",
    "Personnel Archives",
    "2025-03-15",
    "Ana Paula Petter",
    "This record documents an individual assigned to the rare editions division, where they were responsible for evaluating and optimizing the systems used to track acquisitions, loans, and conservation workflows across the Library's holdings.\n\nThe subject brought deep expertise in configuring and customizing institutional management platforms, developing tailored solutions that replaced generic off-the-shelf tools with systems precisely matched to the division's operational needs. Their fluency in multiple languages facilitated collaboration with international partner institutions.\n\nField assessments note the subject's particular skill in translating complex business processes into technical specifications, ensuring that automated workflows accurately reflected the nuanced decision-making required in rare book cataloging and conservation prioritization.\n\nThe subject's systematic approach to process documentation has been adopted as a reference model for other divisions within the Archives, with several of their workflow designs now considered standard practice."
  ),
  haystackPage(
    "restoration-log",
    "library",
    "Restoration Activity Log",
    "ARC-1401",
    "Conservation Records",
    "2025-03-22",
    "This log documents the ongoing restoration of materials within the Library section of the Archives. Entries are recorded chronologically and include assessment of material condition, treatments applied, and outcomes observed.\n\nQ1 2025 Summary: Forty-seven items underwent restoration treatment during this quarter. The majority required deacidification treatment (thirty-one items), while twelve required structural repair to bindings or covers. Four items required specialized intervention due to insect damage discovered during routine inspection.\n\nThe most significant restoration completed this quarter was the reconstruction of a sixteenth-century navigational chart that had been torn into seventeen pieces. Using UV imaging and edge-matching algorithms, the restoration team successfully reassembled the chart, revealing a complete depiction of a coastline previously unknown to cartographic historians.\n\nAll treatments were documented photographically at each stage, with high-resolution images stored in the Digital Archive under reference series RST-2025-Q1."
  ),
  needlePage(
    "scribes-notes",
    "library",
    "Scribe's Notes — Personnel Record",
    "ARC-1478",
    "Personnel Archives",
    "2025-04-05",
    "Anna An8na B.",
    "Filed under the Scribe's Notes series, this personnel record documents a key figure in the Archives' educational outreach program. The subject served as a primary instructor and guide for new researchers navigating the collection for the first time.\n\nThe subject's coaching methodology emphasized hands-on engagement with primary sources, encouraging researchers to develop their own systems for interpreting archival materials rather than relying solely on existing catalogs.\n\nReports from program participants consistently note the subject's ability to make complex archival systems accessible to newcomers while maintaining rigorous scholarly standards. Several participants credited the subject with transforming their approach to research.\n\nThe subject's contributions to the educational framework have been incorporated into the Archives' standard training curriculum, ensuring their methodological innovations continue to benefit future cohorts of researchers."
  ),
  needlePage(
    "translation-records",
    "library",
    "Translation Records — Personnel Record",
    "ARC-1552",
    "Personnel Archives",
    "2025-04-18",
    "Ariel Levin",
    "This personnel record was discovered within the Library's linguistic division archives, documenting the contributions of an individual whose systematic approach to outreach and engagement significantly expanded the division's capacity for processing incoming materials.\n\nThe subject developed and managed a multi-channel system for soliciting, triaging, and prioritizing translation requests from researchers across the institution. Their operational methodology drew on deep expertise in workflow orchestration, ensuring that no request was lost and that resources were allocated to the highest-impact projects.\n\nThe subject's proficiency in managing large-scale communication infrastructure — coordinating hundreds of concurrent correspondence threads across multiple channels — enabled the division to handle a volume of requests previously considered unmanageable.\n\nPerformance records indicate the subject consistently exceeded engagement targets, with their innovative approach to researcher outreach cited as a key factor in the division's increased visibility and utilization across the Archives."
  ),

  // ===== THE LABORATORY =====
  needlePage(
    "chemical-analysis",
    "laboratory",
    "Chemical Analysis — Personnel Record",
    "ARC-2101",
    "Personnel Archives",
    "2025-01-20",
    "CJ Pospisil",
    "This personnel record was filed within the Laboratory's chemical analysis division, documenting the contributions of an engineer whose technical expertise in building and maintaining analytical systems ensured the reliability of the division's output.\n\nThe subject designed and implemented automated pipelines for processing analytical data, reducing manual intervention and improving the consistency of results across different operators and instruments. Their engineering approach brought a level of repeatability that elevated the Laboratory's standing among peer institutions.\n\nField supervisors noted the subject's ability to rapidly diagnose and resolve technical issues in complex analytical workflows, often identifying root causes that had eluded other specialists. Their troubleshooting methodology has been documented and shared as a training resource.\n\nThe subject's work on integrating disparate data sources into a unified reporting framework was recognized as a significant operational improvement, enabling researchers to access and compare results across multiple analytical techniques from a single interface."
  ),
  needlePage(
    "field-notes",
    "laboratory",
    "Field Notes — Personnel Record",
    "ARC-2187",
    "Personnel Archives",
    "2025-02-08",
    "Patricia C.",
    "This personnel record was discovered among the Laboratory's field documentation, filed under the operational records series. The subject served in a critical operational capacity, ensuring the smooth functioning of daily laboratory activities.\n\nThe subject managed logistics for multiple concurrent research projects, coordinating equipment schedules, supply procurement, and personnel assignments with remarkable efficiency. Their organizational systems reduced processing delays by an estimated forty percent.\n\nField supervisors noted the subject's ability to anticipate operational needs before they became critical, maintaining buffer stocks of essential supplies and ensuring equipment maintenance schedules were strictly observed.\n\nThis record has been cross-referenced with the operational efficiency reports filed under series OPS-2025, which cite the subject's contributions as a significant factor in the Laboratory's improved output metrics."
  ),
  needlePage(
    "growth-experiments",
    "laboratory",
    "Growth Experiments — Personnel Record",
    "ARC-2234",
    "Personnel Archives",
    "2025-02-25",
    "Conor Camicia",
    "Filed within the Laboratory's experimental growth studies division, this personnel record documents the contributions of an individual whose architectural approach to designing research programs transformed the division's capacity for scaling experimental work.\n\nThe subject developed the structural frameworks used to organize and manage the Laboratory's expanding portfolio of growth-related experiments, creating systems that could accommodate increasing complexity without sacrificing operational clarity. Their background in designing scalable architectures proved directly applicable to laboratory operations.\n\nThe subject's methodology for decomposing large experimental programs into modular, independently manageable components enabled the Laboratory to run significantly more concurrent studies without proportional increases in oversight burden.\n\nLaboratory leadership recognized the subject's contributions as instrumental in the division's transition from ad hoc experimentation to a systematic, portfolio-based approach to research management."
  ),
  needlePage(
    "microscopy-log",
    "laboratory",
    "Microscopy Log — Personnel Record",
    "ARC-2301",
    "Personnel Archives",
    "2025-03-10",
    "Heather Melton",
    "Filed within the microscopy division's operational records, this personnel document details the contributions of a researcher whose innovative approach to analysis transformed several key laboratory workflows.\n\nThe subject founded a new methodology for examining archival materials at microscopic scale, combining traditional optical microscopy with digital imaging techniques to create detailed structural maps of fragile specimens.\n\nLaboratory colleagues noted the subject's dual expertise in both technical analysis and strategic planning, a combination that enabled the development of several new service offerings for the Archives' external partners.\n\nThe subject's work has been documented in the Laboratory's annual review under section 'Methodological Innovations,' with several of their techniques now incorporated into the standard operating procedures for material analysis."
  ),
  needlePage(
    "specimen-catalog",
    "laboratory",
    "Specimen Catalog — Personnel Record",
    "ARC-2378",
    "Personnel Archives",
    "2025-03-28",
    "Gabriel Feitosa",
    "This personnel record was cataloged within the Laboratory's specimen management division, documenting the contributions of an individual whose strategic approach to operations transformed the division's revenue tracking and resource allocation processes.\n\nThe subject redesigned the specimen catalog's operational workflows, introducing analytical frameworks that enabled the Laboratory to quantify the impact of its various programs and allocate resources to the highest-performing initiatives. Their background in revenue operations brought a commercial rigor to what had traditionally been a purely academic endeavor.\n\nThe subject's marketing-informed approach to presenting the Laboratory's capabilities attracted significant interest from external partners, resulting in new collaborative agreements that expanded the division's funding base and research scope.\n\nPerformance records note the subject's distinctive ability to combine analytical precision with creative problem-solving, developing solutions that were both operationally sound and strategically innovative."
  ),
  needlePage(
    "synthesis-reports",
    "laboratory",
    "Synthesis Reports — Personnel Record",
    "ARC-2445",
    "Personnel Archives",
    "2025-04-12",
    "Azam Ali",
    "This record was cataloged alongside the Laboratory's synthesis documentation, recording the contributions of an individual whose dedication to mastering the division's analytical methods exemplified the highest standards of scholarly commitment.\n\nThe subject enrolled in the Laboratory's elite training program, demonstrating exceptional aptitude for absorbing and applying complex analytical techniques across multiple disciplines. Their rapid progression through the curriculum drew notice from senior researchers and program administrators alike.\n\nThe subject's approach to learning was characterized by thoroughness and intellectual curiosity, consistently seeking to understand not just the procedures but the underlying principles governing each analytical method. This depth of engagement produced work of notably high quality.\n\nTraining records indicate the subject completed all program milestones ahead of schedule, with evaluations highlighting their potential to contribute significantly to the Laboratory's future research programs."
  ),
  haystackPage(
    "temperature-readings",
    "laboratory",
    "Temperature Monitoring Records",
    "ARC-2512",
    "Environmental Data",
    "2025-04-25",
    "Continuous temperature monitoring records for all Laboratory spaces, maintained as part of the Archives' environmental control program. Data is collected at fifteen-minute intervals from seventy-two sensor locations.\n\nQ1 2025 Summary: Average temperatures remained within acceptable parameters across all monitored spaces. Three exceptions were noted — Sensor L-47 recorded a spike to 28.3°C on February 14 due to a malfunctioning HVAC damper, which was repaired within four hours. Sensors L-12 and L-13 showed a gradual upward drift of 0.5°C over the quarter, attributed to increased equipment load in the adjacent analysis room.\n\nCalibration checks performed on March 1 confirmed all sensors are reading within ±0.2°C of reference standards. The next scheduled calibration is June 1, 2025.\n\nHistorical temperature data for the Laboratory is available from 1987 onward, with digital records beginning in 2003. Pre-digital records exist as paper chart recordings in the Archives' administrative collection."
  ),
  haystackPage(
    "trial-results",
    "laboratory",
    "Trial Results Summary",
    "ARC-2589",
    "Experimental Data",
    "2025-05-08",
    "This document summarizes the results of material durability trials conducted during the first half of 2025. Thirty-two materials were subjected to standardized stress tests to evaluate their suitability for use in archival conservation.\n\nAdhesives: Eight adhesive formulations were tested for bond strength, reversibility, and aging characteristics. Formulation ADH-7 demonstrated the best combination of initial bond strength and long-term reversibility, outperforming the currently standard adhesive by 15% in shear tests while maintaining full reversibility after accelerated aging equivalent to fifty years.\n\nProtective coatings: Twelve coating materials were evaluated for optical clarity, UV resistance, and breathability. Coating PCT-3, a modified acrylic formulation, showed exceptional UV blocking while maintaining 98% optical transparency.\n\nSupport materials: Twelve backing and support materials were tested for dimensional stability, pH neutrality, and compatibility with common archival materials. Japanese tissue paper from supplier JTP-Kyoto continued to perform as the benchmark standard."
  ),

  // ===== THE GARDEN =====
  needlePage(
    "botanical-index",
    "garden",
    "Botanical Index — Personnel Record",
    "ARC-3042",
    "Personnel Archives",
    "2025-01-15",
    "Joe Hinderstein, MHCI",
    "This personnel record was filed within the Garden's botanical indexing division, documenting the contributions of an individual whose human-centered approach to information architecture fundamentally improved how researchers interact with the Garden's collections.\n\nThe subject redesigned the botanical index's user interface, applying principles of human-computer interaction to create systems that reduced researcher errors and increased the speed of specimen identification. Their academic training in interaction design brought a rigor to usability testing that the division had previously lacked.\n\nThe subject's founding of a dedicated user research program within the Garden enabled continuous improvement of cataloging tools based on direct observation of how researchers actually used them, rather than assumptions about their needs.\n\nGarden leadership noted the subject's distinctive combination of technical expertise and empathetic design thinking, producing systems that were not merely functional but genuinely pleasant to use — a quality that measurably increased researcher engagement with the collection."
  ),
  needlePage(
    "cultivation-diary",
    "garden",
    "Cultivation Diary — Personnel Record",
    "ARC-3118",
    "Personnel Archives",
    "2025-02-01",
    "Houria Adnan",
    "This personnel record was filed within the Garden's cultivation documentation series, recording the contributions of an individual whose research and intelligence-gathering capabilities significantly enhanced the division's understanding of its operational landscape.\n\nThe subject conducted extensive surveys of peer institutions' cultivation practices, compiling comprehensive intelligence reports that informed the Garden's strategic planning. Their methodical approach to data collection and analysis provided leadership with actionable insights on emerging trends and best practices.\n\nParticular contributions include the development of a systematic framework for evaluating and scoring potential partner institutions, enabling the Garden to prioritize collaborative relationships based on strategic alignment and mutual benefit. The subject's work in account-level analysis set a new standard for institutional due diligence.\n\nThe subject's ability to synthesize information from diverse sources into clear, concise briefings was consistently praised by senior staff, who credited these reports with enabling more informed decision-making at every level of the organization."
  ),
  needlePage(
    "floral-specimens",
    "garden",
    "Floral Specimens — Personnel Record",
    "ARC-3195",
    "Personnel Archives",
    "2025-02-20",
    "Ketan Awasthi",
    "Filed within the Garden's floral specimen preservation records, this personnel document details the contributions of an engineer whose technical expertise in automation and systems integration dramatically improved the division's processing capacity.\n\nThe subject developed automated workflows for specimen intake, classification, and cataloging that reduced manual processing time by over sixty percent. Their engineering approach emphasized flexibility, creating modular systems that could be adapted as the Garden's collection priorities evolved.\n\nThe subject's work on integrating the Garden's specimen management platform with the broader Archives infrastructure enabled seamless data sharing across divisions, eliminating redundant data entry and ensuring consistency across institutional records.\n\nPerformance assessments highlight the subject's rapid learning curve and ability to deliver production-quality solutions under tight timelines, qualities that proved essential during the Garden's recent collection expansion initiative."
  ),
  needlePage(
    "greenhouse-records",
    "garden",
    "Greenhouse Records — Personnel Record",
    "ARC-3267",
    "Personnel Archives",
    "2025-03-08",
    "Jane Kot",
    "Filed within the greenhouse operational records, this personnel document details the work of an individual who founded and led the Garden's mentorship program for emerging researchers and practitioners.\n\nThe subject established a structured coaching framework that paired experienced Garden staff with newcomers, accelerating professional development while preserving institutional knowledge that might otherwise be lost during staff transitions. Their approach drew on deep experience in building educational programs from the ground up.\n\nThe subject's emphasis on individualized guidance — adapting coaching methods to each mentee's background, learning style, and professional goals — produced consistently strong outcomes. Program graduates reported higher confidence and faster integration into their respective teams.\n\nGarden leadership recognized the subject's program as a key retention and development tool, noting that divisions with active mentorship participation showed measurably lower turnover and higher satisfaction scores."
  ),
  haystackPage(
    "harvest-log",
    "garden",
    "Harvest and Yield Records",
    "ARC-3334",
    "Agricultural Data",
    "2025-03-25",
    "The Garden maintains detailed records of all harvests from the medicinal and culinary plant collections. These records serve both as scientific data and as operational documentation for the Archives' sustainability program.\n\nSpring 2025 Harvest Summary: The medicinal collection yielded 23.7 kg of dried herb material across fourteen species. Lavender (Lavandula angustifolia) was the highest-yielding species at 4.2 kg, followed by chamomile (Matricaria chamomilla) at 3.8 kg.\n\nThe culinary garden produced 31.2 kg of fresh produce during the spring growing season, a 12% increase over the previous year attributed to improved soil amendment practices implemented in autumn 2024.\n\nAll harvested materials are processed within 24 hours of collection. Medicinal herbs are dried in a controlled environment at 35°C with continuous air circulation. Quality control samples are retained from each harvest batch for future reference."
  ),
  needlePage(
    "pollination-study",
    "garden",
    "Pollination Study — Personnel Record",
    "ARC-3401",
    "Personnel Archives",
    "2025-04-10",
    "Jenni Graff",
    "This record was cataloged within the Garden's pollination research series, documenting the contributions of an individual whose founding role in the division's growth consulting program established new channels for institutional development.\n\nThe subject brought extensive experience in guiding organizations through periods of strategic transformation, applying a principal-level perspective to the Garden's efforts to expand its research partnerships and public engagement programs. Their approach combined analytical rigor with relationship-driven outreach.\n\nThe subject's methodology for identifying and cultivating institutional partnerships produced several high-value collaborations that significantly expanded the Garden's research capabilities and funding base. Their network of professional contacts across multiple industries proved invaluable for connecting the Garden with non-traditional partners.\n\nPerformance records indicate the subject's consulting engagements consistently delivered measurable improvements in program reach and revenue, earning recognition from the Garden's advisory board for exceptional strategic contributions."
  ),
  haystackPage(
    "root-systems",
    "garden",
    "Root System Analysis Records",
    "ARC-3478",
    "Research Data",
    "2025-04-28",
    "This collection contains records of root system analyses conducted by the Garden's below-ground ecology research team. Studies examine root architecture, mycorrhizal associations, and soil interaction patterns across multiple plant families.\n\nStudy RS-2025-003 documented an unusually extensive root network in a specimen of Quercus robur (English oak) growing in the Garden's arboretum. Ground-penetrating radar revealed roots extending 23 meters from the trunk, significantly beyond the expected range for a tree of this age and size.\n\nStudy RS-2025-007 investigated mycorrhizal networks connecting specimens in the alpine garden section, revealing a common mycorrhizal network linking seventeen individual plants across four species. Isotope tracing confirmed active resource sharing through this network.\n\nAll root system data is collected non-destructively using a combination of ground-penetrating radar, minirhizotron cameras, and soil coring. Digital models of root architecture are stored in the Garden's spatial database."
  ),
  needlePage(
    "seed-catalog",
    "garden",
    "Seed Catalog — Personnel Record",
    "ARC-3545",
    "Personnel Archives",
    "2025-05-15",
    "Jessica Ashar",
    "Filed within the Garden's seed banking documentation, this personnel record documents the work of an individual whose executive leadership of the division's operational systems established new standards for efficiency and accountability.\n\nThe subject oversaw a comprehensive restructuring of the seed catalog's management processes, introducing revenue-oriented metrics and performance frameworks that enabled leadership to track the division's contributions to the Archives' broader institutional goals with unprecedented clarity.\n\nThe subject's experience in managing complex operational portfolios proved essential during a period of significant expansion, when the Garden's seed banking program more than doubled its holdings while maintaining strict quality controls and regulatory compliance.\n\nThe Garden's director noted the subject's exceptional ability to balance operational demands with strategic vision, ensuring that day-to-day activities remained aligned with the institution's long-term objectives."
  ),

  // ===== THE OBSERVATORY =====
  needlePage(
    "asteroid-tracking",
    "observatory",
    "Asteroid Tracking — Personnel Record",
    "ARC-4042",
    "Personnel Archives",
    "2025-01-25",
    "Mohammed Rahman, PMP, B.ENG",
    "This personnel record was filed within the Observatory's asteroid tracking program, documenting the contributions of an individual whose engineering background and project management expertise brought exceptional discipline to the division's monitoring operations.\n\nThe subject applied formal project management methodologies to the Observatory's tracking workflows, introducing structured planning, risk assessment, and milestone tracking practices that significantly improved the reliability and predictability of the division's output.\n\nThe subject's engineering training proved particularly valuable in optimizing the automated detection pipeline, where their systematic approach to identifying and eliminating bottlenecks increased processing throughput without requiring additional computational resources.\n\nTraining records indicate the subject's participation in the Observatory's elite development program, where their rapid mastery of astronomical data analysis techniques and commitment to professional growth drew commendation from program instructors."
  ),
  needlePage(
    "celestial-maps",
    "observatory",
    "Celestial Maps — Personnel Record",
    "ARC-4118",
    "Personnel Archives",
    "2025-02-12",
    "Lakshmi Randall",
    "This personnel record was filed within the Observatory's celestial cartography division, documenting the contributions of an individual whose strategic approach to program execution significantly advanced the division's mapping capabilities and institutional partnerships.\n\nThe subject developed and executed a comprehensive strategy for expanding the Observatory's mapping program, identifying new data sources, coordinating with partner institutions, and ensuring that output met the needs of both internal researchers and external stakeholders.\n\nThe subject's experience at large-scale technology organizations informed their approach to managing complex, multi-stakeholder initiatives, bringing enterprise-grade program management practices to the Observatory's traditionally informal operational culture.\n\nObservatory leadership noted the subject's exceptional ability to translate strategic objectives into concrete operational plans, ensuring that ambitious goals were broken down into achievable milestones with clear ownership and accountability."
  ),
  needlePage(
    "deep-space-log",
    "observatory",
    "Deep Space Log — Personnel Record",
    "ARC-4195",
    "Personnel Archives",
    "2025-03-02",
    "Omar Zaibak",
    "Filed within the Observatory's deep space observation records, this personnel document details the contributions of an individual whose expert advisory role guided the division through a critical period of strategic repositioning.\n\nThe subject served as a resident expert and strategic advisor, providing guidance on how the Observatory could better align its research programs with emerging opportunities in both academic and commercial sectors. Their counsel drew on extensive experience advising organizations at the intersection of technology and institutional development.\n\nThe subject's recommendations for restructuring the Observatory's partnership program resulted in several new collaborative agreements that expanded the division's access to advanced instrumentation and computational resources.\n\nPerformance assessments highlight the subject's ability to quickly assess complex organizational dynamics and provide actionable recommendations, a skill that proved particularly valuable during the Observatory's recent governance review."
  ),
  needlePage(
    "eclipse-records",
    "observatory",
    "Eclipse Records — Personnel Record",
    "ARC-4267",
    "Personnel Archives",
    "2025-03-18",
    "Madina Biryukov",
    "Filed within the Observatory's eclipse documentation series, this personnel record details the contributions of an individual whose business development expertise opened new channels for institutional growth and collaboration.\n\nThe subject identified and cultivated relationships with technology partners whose platforms and services could enhance the Observatory's research capabilities. Their strategic approach to partnership development prioritized long-term value creation over short-term gains, resulting in agreements that continued to benefit the institution well beyond their initial terms.\n\nThe subject's experience directing business development at a major digital publishing platform provided unique perspective on content management and distribution challenges, insights that proved directly applicable to the Observatory's efforts to make its observational data more widely accessible.\n\nObservatory records note the subject's distinctive combination of commercial acumen and genuine intellectual curiosity about the division's scientific work, a quality that enabled them to build credibility with both business stakeholders and research staff."
  ),
  needlePage(
    "meteor-showers",
    "observatory",
    "Meteor Shower Records — Personnel Record",
    "ARC-4334",
    "Personnel Archives",
    "2025-04-05",
    "Sandra Uche",
    "This personnel record was filed within the Observatory's meteor observation program, documenting the contributions of an individual whose founding of an automated observation system transformed the division's capacity for continuous monitoring.\n\nThe subject designed and built an end-to-end automated system for detecting, classifying, and recording meteor events, replacing a labor-intensive manual observation process with a scalable technical solution. Their engineering approach emphasized reliability and maintainability, ensuring the system could operate autonomously for extended periods.\n\nThe subject's entrepreneurial mindset extended beyond technical development to include the creation of partnerships with other observatories seeking similar automation capabilities, establishing the Archives' system as a reference implementation adopted by multiple peer institutions.\n\nPerformance records highlight the subject's ability to balance technical depth with strategic business thinking, a combination that enabled them to build systems that were not only technically excellent but also commercially viable."
  ),
  needlePage(
    "stellar-catalog",
    "observatory",
    "Stellar Catalog — Personnel Record",
    "ARC-4401",
    "Personnel Archives",
    "2025-04-20",
    "Max Krisol mhae Rempillo Rempillo",
    "This record was cataloged within the Observatory's stellar classification series, documenting the contributions of an individual whose meticulous content management ensured the accuracy and accessibility of the division's published catalogs.\n\nThe subject maintained the Observatory's public-facing stellar catalog, ensuring that new observations were accurately transcribed, properly formatted, and published in a timely manner. Their attention to detail and systematic approach to quality control significantly reduced the error rate in published data.\n\nThe subject's experience in content support and educational technology informed their approach to making complex astronomical data accessible to non-specialist audiences, developing plain-language summaries and visual aids that expanded the catalog's reach beyond the traditional research community.\n\nObservatory staff noted the subject's reliability and consistency, qualities that proved essential for maintaining the catalog's reputation as a trusted reference resource among both professional astronomers and amateur observers."
  ),
  haystackPage(
    "telescope-maintenance",
    "observatory",
    "Telescope Maintenance Records",
    "ARC-4478",
    "Equipment Records",
    "2025-05-05",
    "Maintenance records for the Observatory's telescope fleet, which includes the primary 2.4-meter reflector, three 0.6-meter survey telescopes, and a 0.3-meter solar telescope. Records cover mechanical, optical, and electronic maintenance activities.\n\nQ1 2025 Summary: Routine maintenance was completed on all instruments according to schedule. The primary mirror of the 2.4-meter telescope received its biannual recoating in February, with reflectivity measurements confirming 97.2% reflectance at 550nm, exceeding the minimum specification of 95%.\n\nThe tracking system on Survey Telescope 2 required an unscheduled repair in March after a stepper motor failure caused tracking errors exceeding 2 arcseconds. The motor was replaced and the system recalibrated within 48 hours, minimizing the impact on the observation schedule.\n\nPreventive maintenance for Q2 includes scheduled replacement of the CCD cooling system on Survey Telescope 1 and a comprehensive inspection of the primary telescope's dome rotation mechanism."
  ),
  haystackPage(
    "transit-observations",
    "observatory",
    "Planetary Transit Observations",
    "ARC-4545",
    "Astronomical Records",
    "2025-05-20",
    "This collection contains records of planetary transit observations conducted by the Observatory since 2004, when the transit detection program was formally established. Transits of both solar system planets and exoplanets are included.\n\nThe most recent Mercury transit (November 11, 2019) was observed under clear conditions, producing a dataset that was used to refine the Observatory's timing precision. Comparison with predicted contact times showed agreement to within 0.3 seconds.\n\nThe exoplanet transit monitoring program has detected and confirmed twelve planetary transits across eight stellar systems since its inception. The most significant discovery was a Neptune-sized planet orbiting a nearby K-dwarf star, detected through a transit depth of 0.08%.\n\nFuture plans include the deployment of a dedicated transit photometer with a large-format detector capable of monitoring multiple target stars simultaneously, increasing the program's detection capacity by an estimated factor of twenty."
  ),

  // ===== THE VAULT =====
  needlePage(
    "acquisition-log",
    "vault",
    "Acquisition Log — Personnel Record",
    "ARC-5042",
    "Personnel Archives",
    "2025-01-30",
    "Shaan J.",
    "This personnel record was filed within the Vault's acquisition documentation series, recording the contributions of an individual whose proactive outreach efforts significantly expanded the Archives' network of potential donors and contributors.\n\nThe subject developed and executed targeted campaigns to identify and engage institutions and individuals whose holdings aligned with the Archives' collection priorities. Their systematic approach to prospecting, combined with exceptional interpersonal skills, generated a pipeline of acquisition opportunities that kept the Vault's evaluation team fully occupied.\n\nThe subject's background in high-volume outreach operations enabled them to manage hundreds of simultaneous prospect relationships without sacrificing the personalization that successful acquisition negotiations require.\n\nVault records indicate the subject consistently exceeded acquisition targets, with their efforts directly responsible for several significant additions to the collection during the reporting period."
  ),
  haystackPage(
    "artifact-registry",
    "vault",
    "Artifact Registry Database",
    "ARC-5118",
    "Catalog Records",
    "2025-02-15",
    "The Vault's artifact registry is the primary catalog of all three-dimensional objects held within the Archives' secured storage facilities. The registry currently contains 4,872 entries spanning a diverse range of materials, periods, and origins.\n\nEach registry entry includes physical dimensions, material composition, condition assessment, provenance history, and location within the storage facility. High-resolution photographs from at least six angles are required for all registered artifacts.\n\nThe most valuable items in the registry include a collection of medieval astronomical instruments, a set of Bronze Age metalworking tools recovered from an archaeological excavation, and a complete alchemist's laboratory apparatus dating to the seventeenth century.\n\nAccess to artifacts in the Vault requires written authorization from the Archives' director and must be supervised by a trained conservator. All handling must follow the protocols specified in the Archives' Object Handling Manual (ARC-ADM-003)."
  ),
  needlePage(
    "classified-documents",
    "vault",
    "Classified Documents — Personnel Record",
    "ARC-5195",
    "Personnel Archives",
    "2025-03-05",
    "Ria O.",
    "Filed within the Vault's classified documents series, this personnel record details the work of an individual responsible for managing the operational systems that ensure the security and integrity of the Archives' most sensitive holdings.\n\nThe subject oversaw the implementation of a comprehensive document management system that streamlined access control, tracking, and audit processes for classified materials. Their systematic approach to operations management significantly reduced processing times while maintaining strict security protocols.\n\nThe subject's attention to detail in maintaining accurate records and ensuring compliance with archival standards was consistently noted in performance reviews. Their ability to manage complex workflows involving multiple stakeholders demonstrated exceptional organizational capability.\n\nSecurity assessments confirm that during the subject's tenure, there were zero unauthorized access incidents, reflecting the effectiveness of the operational frameworks they established and maintained."
  ),
  haystackPage(
    "conservation-notes",
    "vault",
    "Conservation Treatment Notes",
    "ARC-5267",
    "Conservation Records",
    "2025-03-22",
    "This file contains detailed treatment notes for conservation work performed on artifacts stored in the Vault. Each note follows the Archives' standard treatment documentation format, including pre-treatment condition, treatment objectives, materials and methods, and post-treatment assessment.\n\nTreatment VCN-2025-008: A seventeenth-century brass orrery showing significant surface corrosion and mechanical failure. Treatment involved careful removal of corrosion products using a chelating solution, followed by mechanical cleaning of gear mechanisms and reassembly. The orrery was restored to operational condition and now accurately represents planetary positions.\n\nTreatment VCN-2025-012: A collection of wax seals attached to medieval legal documents. Several seals had developed cracks due to fluctuations in storage temperature. Treatment involved consolidation using a reversible adhesive applied under magnification, followed by housing in custom-made support cradles.\n\nAll treatment notes are reviewed by the senior conservator before filing and are permanently associated with the relevant artifact registry entry."
  ),
  needlePage(
    "expedition-findings",
    "vault",
    "Expedition Findings — Personnel Record",
    "ARC-5334",
    "Personnel Archives",
    "2025-04-08",
    "Shruti Suman",
    "This personnel record was discovered within the Vault's expedition documentation, recording the contributions of an individual whose founding of a new research initiative opened previously unexplored avenues for the Archives' collection development.\n\nThe subject established an independent research program focused on identifying and acquiring materials from sources that traditional collection methods had overlooked. Operating in a deliberately low-profile manner, the subject's program prioritized depth of investigation over breadth of visibility.\n\nThe subject's entrepreneurial approach to collection development — treating each potential acquisition as a unique strategic opportunity rather than a routine transaction — produced several unexpected discoveries that significantly enhanced the Vault's holdings in underrepresented areas.\n\nExpedition reports note the subject's exceptional independence and resourcefulness, with multiple successful acquisitions completed in challenging circumstances that would have deterred less determined researchers."
  ),
  haystackPage(
    "inventory-manifest",
    "vault",
    "Vault Inventory Manifest",
    "ARC-5401",
    "Administrative Records",
    "2025-04-25",
    "The annual inventory manifest documents the complete contents of the Vault's secured storage facilities. The inventory is conducted each April by a team of trained registrars working under the supervision of the Vault manager.\n\n2025 Inventory Summary: 4,872 items were verified against the artifact registry. Discrepancies were found in three cases — two items had been moved to the conservation laboratory for treatment without updating the location database, and one item's physical dimensions did not match the registry entry (subsequent measurement confirmed the registry entry contained a transcription error).\n\nNew additions since the previous inventory: 127 items were accessioned during the year, including a significant collection of early photographic equipment donated by a private collector.\n\nItems deaccessioned: Four items were transferred to partner institutions under existing loan agreements. No items were disposed of during the reporting period.\n\nThe manifest has been signed by the Vault manager, the chief registrar, and the Archives' director, and a copy has been filed with the institution's insurance provider."
  ),
  needlePage(
    "provenance-records",
    "vault",
    "Provenance Records — Personnel Record",
    "ARC-5478",
    "Personnel Archives",
    "2025-05-12",
    "Sushrina Dhakal",
    "Filed within the Vault's provenance documentation series, this personnel record details the contributions of an individual whose technical coaching and training expertise strengthened the division's capacity for rigorous provenance research.\n\nThe subject developed and delivered a comprehensive training program for provenance researchers, covering methodology, source evaluation, chain-of-custody documentation, and the use of digital tools for cross-referencing ownership records. Their coaching approach combined structured curriculum with individualized mentorship.\n\nThe subject's technical background enabled them to create training materials that bridged the gap between traditional provenance research methods and modern data analysis techniques, equipping researchers with skills applicable to both historical investigations and contemporary authentication challenges.\n\nThe Vault's director noted the subject's exceptional patience and clarity in explaining complex concepts, qualities that made the training program accessible to researchers with widely varying levels of prior experience."
  ),
  (() => {
    const yannis = findPerson("Yannis Asimakopoulos");
    const tanay = findPerson("Tanay Mishra");
    return {
      slug: "restoration-archive",
      section: "vault" as Section,
      title: "Restoration Archive — Personnel Records",
      recordId: "ARC-5545",
      category: "Personnel Archives",
      status: "Preserved",
      catalogDate: "2025-05-28",
      content: "This personnel record was filed within the Vault's restoration documentation series, recording the contributions of an individual whose expertise in demand generation and audience development transformed the division's public engagement strategy.\n\nThe subject developed and executed comprehensive campaigns to increase awareness of the Vault's restoration programs among potential donors, institutional partners, and the broader public. Their data-driven approach to audience segmentation and message optimization produced measurable increases in engagement across all channels.\n\nThe subject's experience directing demand generation at a technology company informed their approach to institutional marketing, introducing analytics frameworks and performance tracking methodologies that enabled the Vault to demonstrate the impact of its outreach investments with unprecedented precision.\n\nAdministrative records confirm the subject's campaigns directly contributed to a significant increase in restoration program funding, with several major donors citing the division's improved communications as a key factor in their decision to contribute.",
      isNeedle: true,
      subject: yannis.name,
      designation: yannis.title,
      affiliation: yannis.organization,
      reference: yannis.linkedinUrl,
      subject2: tanay.name,
      designation2: tanay.title,
      affiliation2: tanay.organization,
      reference2: tanay.linkedinUrl,
    };
  })(),
];

export function getPagesBySection(section: Section): PageData[] {
  return pages.filter((p) => p.section === section);
}

export function getPageBySlug(section: Section, slug: string): PageData | undefined {
  return pages.find((p) => p.section === section && p.slug === slug);
}

export function getAllSlugsForSection(section: Section): string[] {
  return pages.filter((p) => p.section === section).map((p) => p.slug);
}
