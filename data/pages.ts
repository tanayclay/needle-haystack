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
  haystackPage(
    "ancient-scrolls",
    "library",
    "Ancient Scrolls Collection",
    "ARC-1042",
    "Historical Documents",
    "2024-01-12",
    "This collection comprises fourteen papyrus scrolls recovered from a sealed chamber beneath the eastern wing of the Archives. The scrolls, dating to approximately 300 BCE, contain administrative records from a provincial governor's office.\n\nThe texts detail grain shipments, tax assessments, and correspondence with neighboring territories. Scroll VII is particularly noteworthy for its mention of a previously unknown trade route connecting the coastal settlements to the interior highlands.\n\nConservation efforts have stabilized the papyrus fibers using a proprietary treatment developed by the Archives' restoration team. Digital scans at 1200 DPI have been completed for all fourteen scrolls, with enhanced imaging revealing previously illegible passages on Scrolls III and XI.\n\nCross-referencing with the Maritime Trade Database (see ARC-0887) suggests these records fill a significant gap in our understanding of third-century commerce patterns."
  ),
  haystackPage(
    "forgotten-tales",
    "library",
    "Forgotten Tales Anthology",
    "ARC-1156",
    "Literary Works",
    "2024-02-03",
    "A bound collection of seventeen short stories attributed to an anonymous author working in the mid-fifteenth century. The tales blend folklore motifs with surprisingly modern narrative techniques, suggesting the author had exposure to multiple literary traditions.\n\nThe manuscript was discovered pressed between the pages of an unrelated theological text during routine cataloging in 2019. The binding appears to be a later addition, possibly dating to the seventeenth century.\n\nNotable stories include 'The Clockmaker's Garden,' which describes mechanical automata centuries before such devices were widely known, and 'The Map That Moved,' a narrative about a cartographer whose maps predict future geographical changes.\n\nLinguistic analysis indicates the author spoke at least three languages, with loan words from Arabic, Latin, and an unidentified Slavic dialect appearing throughout the text."
  ),
  needlePage(
    "manuscript-collection",
    "library",
    "Manuscript Collection — Personnel Record",
    "ARC-1203",
    "Personnel Archives",
    "2024-02-18",
    "Andre Domanski",
    "This personnel record was filed as part of the Archives' ongoing documentation of key contributors to the collection. The record details an individual whose work has significantly influenced the organization and cataloging of materials within the Archives.\n\nThe subject demonstrated exceptional ability in establishing connections between disparate archival holdings, developing new frameworks for cross-referencing documents across multiple collections. Their entrepreneurial approach to archival management introduced several innovations now considered standard practice.\n\nField reports indicate the subject has been instrumental in acquiring several previously inaccessible collections, negotiating access agreements with private holders and institutional archives alike. Their network of contacts spans multiple continents and disciplines.\n\nThis record has been flagged for periodic review to ensure all associated materials remain properly cataloged and accessible to authorized researchers."
  ),
  haystackPage(
    "poetry-vault",
    "library",
    "Poetry Vault Manuscripts",
    "ARC-1287",
    "Literary Works",
    "2024-03-01",
    "The Poetry Vault contains over three hundred individually preserved poems spanning twelve centuries of literary production. The collection is organized by region of origin rather than chronologically, allowing researchers to trace stylistic influences across geographical boundaries.\n\nThe oldest piece, a fragment of a praise poem composed for an unnamed ruler, dates to approximately 700 CE. The most recent addition is a collection of concrete poetry from the 1960s, donated by the estate of a private collector.\n\nOf particular interest is a series of twenty-three linked sonnets discovered in 2021, which appear to encode astronomical observations within their structure. The acrostic formed by the first letters of each line spells out coordinates that correspond to known stellar positions.\n\nThe vault maintains strict climate control at 18°C and 45% relative humidity. Access is restricted to researchers who have completed the Archives' handling certification program."
  ),
  needlePage(
    "rare-editions",
    "library",
    "Rare Editions — Personnel Record",
    "ARC-1334",
    "Personnel Archives",
    "2024-03-15",
    "Ansh Bindal",
    "This record documents an individual assigned to the rare editions division, where they were responsible for evaluating and integrating newly acquired technical manuscripts into the existing collection.\n\nThe subject brought a distinctive engineering-oriented perspective to the cataloging process, developing automated systems for cross-referencing technical specifications across multiple collections. Their work significantly improved the efficiency of the Archives' acquisition pipeline.\n\nField assessments note the subject's particular expertise in evaluating the technical authenticity of documents, distinguishing genuine technical manuscripts from later copies or fabrications. This skill proved invaluable during the 2024 acquisition of the Meridian Collection.\n\nThe subject's systematic approach to documentation has been adopted as a model for other divisions within the Archives."
  ),
  haystackPage(
    "restoration-log",
    "library",
    "Restoration Activity Log",
    "ARC-1401",
    "Conservation Records",
    "2024-03-22",
    "This log documents the ongoing restoration of materials within the Library section of the Archives. Entries are recorded chronologically and include assessment of material condition, treatments applied, and outcomes observed.\n\nQ1 2024 Summary: Forty-seven items underwent restoration treatment during this quarter. The majority required deacidification treatment (thirty-one items), while twelve required structural repair to bindings or covers. Four items required specialized intervention due to insect damage discovered during routine inspection.\n\nThe most significant restoration completed this quarter was the reconstruction of a sixteenth-century navigational chart that had been torn into seventeen pieces. Using UV imaging and edge-matching algorithms, the restoration team successfully reassembled the chart, revealing a complete depiction of a coastline previously unknown to cartographic historians.\n\nAll treatments were documented photographically at each stage, with high-resolution images stored in the Digital Archive under reference series RST-2024-Q1."
  ),
  needlePage(
    "scribes-notes",
    "library",
    "Scribe's Notes — Personnel Record",
    "ARC-1478",
    "Personnel Archives",
    "2024-04-05",
    "Anna An8na B.",
    "Filed under the Scribe's Notes series, this personnel record documents a key figure in the Archives' educational outreach program. The subject served as a primary instructor and guide for new researchers navigating the collection for the first time.\n\nThe subject's coaching methodology emphasized hands-on engagement with primary sources, encouraging researchers to develop their own systems for interpreting archival materials rather than relying solely on existing catalogs.\n\nReports from program participants consistently note the subject's ability to make complex archival systems accessible to newcomers while maintaining rigorous scholarly standards. Several participants credited the subject with transforming their approach to research.\n\nThe subject's contributions to the educational framework have been incorporated into the Archives' standard training curriculum, ensuring their methodological innovations continue to benefit future cohorts of researchers."
  ),
  haystackPage(
    "translation-records",
    "library",
    "Translation Records Archive",
    "ARC-1552",
    "Linguistic Studies",
    "2024-04-18",
    "This archive contains records of translation projects undertaken by the Archives' linguistic division since its establishment in 1952. Over seven thousand documents have been translated from forty-three source languages during this period.\n\nThe most challenging project to date involved a collection of documents written in a previously undocumented script, tentatively classified as Proto-Meridian. The translation team spent fourteen months developing a partial key, eventually identifying the script as a cipher system rather than a natural language.\n\nCurrent priorities include completing the translation of a recently acquired collection of commercial correspondence written in medieval Catalan, and a series of technical documents in classical Chinese that appear to describe early experimental methods.\n\nThe division maintains a database of translation notes, alternative readings, and scholarly commentary that now exceeds twenty thousand entries. This resource is available to accredited researchers through the Archives' internal network."
  ),

  // ===== THE LABORATORY =====
  haystackPage(
    "chemical-analysis",
    "laboratory",
    "Chemical Analysis Reports",
    "ARC-2101",
    "Scientific Records",
    "2024-01-20",
    "This series documents chemical analyses performed on materials submitted to the Laboratory for authentication and dating purposes. Each report includes methodology, reagents used, results, and interpretive commentary.\n\nReport 2024-CA-001 through 2024-CA-047 cover analyses completed during the first quarter. The most significant finding was the detection of synthetic pigments in a painting previously attributed to the early Renaissance period, suggesting a later date of creation or subsequent overpainting.\n\nX-ray fluorescence spectroscopy was used in twenty-three analyses, with mass spectrometry employed for twelve cases requiring more precise elemental identification. Carbon-14 dating was requested for seven items, with results pending from the external laboratory.\n\nAll chemical samples are retained in the Laboratory's specimen vault for a minimum of ten years, allowing for re-analysis as new techniques become available."
  ),
  needlePage(
    "field-notes",
    "laboratory",
    "Field Notes — Personnel Record",
    "ARC-2187",
    "Personnel Archives",
    "2024-02-08",
    "Patricia C.",
    "This personnel record was discovered among the Laboratory's field documentation, filed under the operational records series. The subject served in a critical operational capacity, ensuring the smooth functioning of daily laboratory activities.\n\nThe subject managed logistics for multiple concurrent research projects, coordinating equipment schedules, supply procurement, and personnel assignments with remarkable efficiency. Their organizational systems reduced processing delays by an estimated forty percent.\n\nField supervisors noted the subject's ability to anticipate operational needs before they became critical, maintaining buffer stocks of essential supplies and ensuring equipment maintenance schedules were strictly observed.\n\nThis record has been cross-referenced with the operational efficiency reports filed under series OPS-2024, which cite the subject's contributions as a significant factor in the Laboratory's improved output metrics."
  ),
  haystackPage(
    "growth-experiments",
    "laboratory",
    "Growth Experiment Records",
    "ARC-2234",
    "Experimental Data",
    "2024-02-25",
    "This file contains records of controlled growth experiments conducted in the Laboratory's environmental chambers. Experiments tracked the development of various organic specimens under modified atmospheric conditions.\n\nExperiment GX-2024-012 demonstrated that specimens exposed to elevated carbon dioxide concentrations showed a 23% increase in growth rate compared to control groups. However, structural analysis revealed that rapid growth correlated with decreased material density.\n\nExperiment GX-2024-015 investigated the effects of modified light spectra on pigment development. Results confirmed that specimens exposed exclusively to blue-wavelength light developed significantly darker pigmentation, while those under red-wavelength light showed accelerated but irregular growth patterns.\n\nAll experimental protocols were reviewed and approved by the Laboratory's oversight committee. Raw data files are stored in the Laboratory's secure digital archive under reference series GX-2024."
  ),
  needlePage(
    "microscopy-log",
    "laboratory",
    "Microscopy Log — Personnel Record",
    "ARC-2301",
    "Personnel Archives",
    "2024-03-10",
    "Heather Melton",
    "Filed within the microscopy division's operational records, this personnel document details the contributions of a researcher whose innovative approach to analysis transformed several key laboratory workflows.\n\nThe subject founded a new methodology for examining archival materials at microscopic scale, combining traditional optical microscopy with digital imaging techniques to create detailed structural maps of fragile specimens.\n\nLaboratory colleagues noted the subject's dual expertise in both technical analysis and strategic planning, a combination that enabled the development of several new service offerings for the Archives' external partners.\n\nThe subject's work has been documented in the Laboratory's annual review under section 'Methodological Innovations,' with several of their techniques now incorporated into the standard operating procedures for material analysis."
  ),
  haystackPage(
    "specimen-catalog",
    "laboratory",
    "Specimen Catalog Index",
    "ARC-2378",
    "Catalog Records",
    "2024-03-28",
    "The Laboratory's specimen catalog contains records of over twelve thousand individual specimens collected, analyzed, or produced during the course of laboratory operations. This index provides a searchable reference to the full catalog.\n\nSpecimens are classified by material type (organic, inorganic, composite), origin (field collection, submitted sample, laboratory-produced), and current status (active study, archived, consumed during analysis).\n\nThe most extensive subcollection is the mineral series, comprising over three thousand specimens acquired from geological surveys conducted between 1978 and 2019. Each specimen is accompanied by detailed provenance information, including GPS coordinates of the collection site.\n\nRecent additions to the catalog include a series of atmospheric particulate samples collected from the Archives' rooftop monitoring station, initiated in 2023 as part of the environmental monitoring program."
  ),
  needlePage(
    "synthesis-reports",
    "laboratory",
    "Synthesis Reports — Personnel Record",
    "ARC-2445",
    "Personnel Archives",
    "2024-04-12",
    "Dany Dalal",
    "This record was cataloged alongside the Laboratory's synthesis documentation, recording the contributions of an individual who played a pivotal role in expanding the division's analytical capabilities.\n\nThe subject led growth initiatives for the Laboratory's partnership program, establishing collaborations with external research institutions and technology providers that significantly expanded the division's analytical toolkit.\n\nNotable achievements include the negotiation of a shared-access agreement for advanced spectroscopic equipment, which tripled the Laboratory's throughput for material authentication projects. The subject's strategic vision positioned the Laboratory as a leading center for archival material analysis.\n\nPerformance assessments indicate consistent excellence in identifying and pursuing opportunities for operational improvement, with multiple innovations directly attributable to the subject's leadership."
  ),
  haystackPage(
    "temperature-readings",
    "laboratory",
    "Temperature Monitoring Records",
    "ARC-2512",
    "Environmental Data",
    "2024-04-25",
    "Continuous temperature monitoring records for all Laboratory spaces, maintained as part of the Archives' environmental control program. Data is collected at fifteen-minute intervals from seventy-two sensor locations.\n\nQ1 2024 Summary: Average temperatures remained within acceptable parameters across all monitored spaces. Three exceptions were noted — Sensor L-47 recorded a spike to 28.3°C on February 14 due to a malfunctioning HVAC damper, which was repaired within four hours. Sensors L-12 and L-13 showed a gradual upward drift of 0.5°C over the quarter, attributed to increased equipment load in the adjacent analysis room.\n\nCalibration checks performed on March 1 confirmed all sensors are reading within ±0.2°C of reference standards. The next scheduled calibration is June 1, 2024.\n\nHistorical temperature data for the Laboratory is available from 1987 onward, with digital records beginning in 2003. Pre-digital records exist as paper chart recordings in the Archives' administrative collection."
  ),
  haystackPage(
    "trial-results",
    "laboratory",
    "Trial Results Summary",
    "ARC-2589",
    "Experimental Data",
    "2024-05-08",
    "This document summarizes the results of material durability trials conducted during the first half of 2024. Thirty-two materials were subjected to standardized stress tests to evaluate their suitability for use in archival conservation.\n\nAdhesives: Eight adhesive formulations were tested for bond strength, reversibility, and aging characteristics. Formulation ADH-7 demonstrated the best combination of initial bond strength and long-term reversibility, outperforming the currently standard adhesive by 15% in shear tests while maintaining full reversibility after accelerated aging equivalent to fifty years.\n\nProtective coatings: Twelve coating materials were evaluated for optical clarity, UV resistance, and breathability. Coating PCT-3, a modified acrylic formulation, showed exceptional UV blocking while maintaining 98% optical transparency.\n\nSupport materials: Twelve backing and support materials were tested for dimensional stability, pH neutrality, and compatibility with common archival materials. Japanese tissue paper from supplier JTP-Kyoto continued to perform as the benchmark standard."
  ),

  // ===== THE GARDEN =====
  haystackPage(
    "botanical-index",
    "garden",
    "Botanical Specimen Index",
    "ARC-3042",
    "Botanical Records",
    "2024-01-15",
    "The Garden's botanical index catalogs over eight thousand plant specimens maintained within the Archives' living collection and herbarium. Each entry includes taxonomic classification, provenance, collection date, and current status.\n\nThe living collection currently maintains 2,847 individual plants representing 412 species across 89 families. The herbarium contains 5,203 pressed and mounted specimens, the oldest dating to 1834.\n\nRecent acquisitions include a collection of seventeen endemic orchid species from a cloud forest preserve, donated by a retiring botanist who spent forty years studying the region's flora. These specimens include three species not previously represented in any major herbarium collection.\n\nThe index is updated quarterly. Discrepancies between the index and physical holdings are investigated and resolved during the annual inventory, typically conducted in January."
  ),
  needlePage(
    "cultivation-diary",
    "garden",
    "Cultivation Diary — Personnel Record",
    "ARC-3118",
    "Personnel Archives",
    "2024-02-01",
    "Deepankar Dimri",
    "This personnel record was filed within the Garden's cultivation documentation series, recording the contributions of an individual whose analytical approach to growth management significantly improved the division's operational outcomes.\n\nThe subject brought extensive expertise in growth optimization, applying data-driven methodologies to what had traditionally been an intuition-based practice. Their systematic approach to measuring and analyzing growth metrics transformed the Garden's cultivation program.\n\nParticular contributions include the development of a comprehensive monitoring framework that tracks key performance indicators across all cultivation zones. This framework enabled the early identification of underperforming specimens and the targeted allocation of resources to maximize overall collection health.\n\nThe subject's work has been recognized in the Garden's annual report as a model for integrating quantitative analysis with traditional horticultural knowledge."
  ),
  haystackPage(
    "floral-specimens",
    "garden",
    "Floral Specimen Preservation Log",
    "ARC-3195",
    "Conservation Records",
    "2024-02-20",
    "This log documents the preservation of floral specimens collected during the Archives' botanical survey program. Specimens are preserved using a combination of pressing, freeze-drying, and silica gel desiccation, depending on the characteristics of each species.\n\nDuring the current reporting period, 147 new specimens were processed and added to the herbarium collection. The preservation success rate was 94%, with nine specimens lost due to fungal contamination during the initial drying phase.\n\nThe freeze-drying facility processed thirty-seven specimens requiring three-dimensional preservation, primarily large flowers and fruit structures that lose critical diagnostic features when pressed flat.\n\nAll preserved specimens are mounted on acid-free herbarium paper and stored in sealed cabinets maintained at 18°C and 40% relative humidity. Each specimen is accompanied by a detailed collection label recording location, habitat, date, collector, and field observations."
  ),
  needlePage(
    "greenhouse-records",
    "garden",
    "Greenhouse Records — Personnel Record",
    "ARC-3267",
    "Personnel Archives",
    "2024-03-08",
    "Dorothy Huynh",
    "Filed within the greenhouse operational records, this personnel document details the work of an individual who brought a distinctive engineering perspective to the Garden's cultivation and documentation systems.\n\nThe subject redesigned the greenhouse's record-keeping infrastructure, replacing legacy paper-based systems with an integrated digital platform that streamlined data entry, retrieval, and analysis across all cultivation zones.\n\nThe subject's technical approach to horticultural data management enabled the Garden to identify patterns in plant growth and health that had previously gone unnoticed, leading to measurable improvements in specimen survival rates and collection quality.\n\nSupervisors noted the subject's exceptional ability to translate complex technical concepts into practical tools that could be used effectively by all Garden staff, regardless of their technical background."
  ),
  haystackPage(
    "harvest-log",
    "garden",
    "Harvest and Yield Records",
    "ARC-3334",
    "Agricultural Data",
    "2024-03-25",
    "The Garden maintains detailed records of all harvests from the medicinal and culinary plant collections. These records serve both as scientific data and as operational documentation for the Archives' sustainability program.\n\nSpring 2024 Harvest Summary: The medicinal collection yielded 23.7 kg of dried herb material across fourteen species. Lavender (Lavandula angustifolia) was the highest-yielding species at 4.2 kg, followed by chamomile (Matricaria chamomilla) at 3.8 kg.\n\nThe culinary garden produced 31.2 kg of fresh produce during the spring growing season, a 12% increase over the previous year attributed to improved soil amendment practices implemented in autumn 2023.\n\nAll harvested materials are processed within 24 hours of collection. Medicinal herbs are dried in a controlled environment at 35°C with continuous air circulation. Quality control samples are retained from each harvest batch for future reference."
  ),
  needlePage(
    "pollination-study",
    "garden",
    "Pollination Study — Personnel Record",
    "ARC-3401",
    "Personnel Archives",
    "2024-04-10",
    "Luckish Rangra",
    "This record was cataloged within the Garden's pollination research series, documenting the contributions of an individual whose marketing and outreach expertise helped expand the visibility and impact of the Garden's research programs.\n\nThe subject took a leadership role in coordinating the dissemination of research findings, developing communication strategies that effectively translated complex botanical research into accessible content for diverse audiences.\n\nTheir systematic approach to audience segmentation and message optimization resulted in a significant increase in engagement with the Garden's publications and public programs. The subject's innovative use of digital channels expanded the Garden's reach to previously underserved communities.\n\nPerformance records indicate the subject consistently exceeded targets for program awareness and stakeholder engagement, earning recognition from the Garden's advisory board for outstanding contributions to public outreach."
  ),
  haystackPage(
    "root-systems",
    "garden",
    "Root System Analysis Records",
    "ARC-3478",
    "Research Data",
    "2024-04-28",
    "This collection contains records of root system analyses conducted by the Garden's below-ground ecology research team. Studies examine root architecture, mycorrhizal associations, and soil interaction patterns across multiple plant families.\n\nStudy RS-2024-003 documented an unusually extensive root network in a specimen of Quercus robur (English oak) growing in the Garden's arboretum. Ground-penetrating radar revealed roots extending 23 meters from the trunk, significantly beyond the expected range for a tree of this age and size.\n\nStudy RS-2024-007 investigated mycorrhizal networks connecting specimens in the alpine garden section, revealing a common mycorrhizal network linking seventeen individual plants across four species. Isotope tracing confirmed active resource sharing through this network.\n\nAll root system data is collected non-destructively using a combination of ground-penetrating radar, minirhizotron cameras, and soil coring. Digital models of root architecture are stored in the Garden's spatial database."
  ),
  needlePage(
    "seed-catalog",
    "garden",
    "Seed Catalog — Personnel Record",
    "ARC-3545",
    "Personnel Archives",
    "2024-05-15",
    "Marina Ghilchik",
    "Filed within the Garden's seed banking documentation, this personnel record documents the work of an individual whose founding contributions to the division's operational systems established frameworks still in use today.\n\nThe subject was instrumental in designing the seed catalog's organizational architecture, creating a classification system that balanced scientific rigor with practical accessibility. Their approach to information architecture has been cited as a model for other divisions within the Archives.\n\nThe subject's engineering methodology brought a systematic rigor to what had previously been an ad hoc cataloging process, introducing quality controls, standardized data entry protocols, and automated validation checks that significantly improved the accuracy and completeness of the catalog.\n\nThe Garden's leadership has recognized the subject's contributions as foundational to the division's current operational excellence, with multiple systems bearing the mark of their innovative approach to information management."
  ),

  // ===== THE OBSERVATORY =====
  haystackPage(
    "asteroid-tracking",
    "observatory",
    "Asteroid Tracking Database",
    "ARC-4042",
    "Astronomical Records",
    "2024-01-25",
    "The Observatory's asteroid tracking program monitors near-Earth objects using a combination of optical telescope observations and data shared by partner observatories worldwide. The database currently contains orbital elements for 847 tracked objects.\n\nDuring the current reporting period, twelve new objects were added to the tracking database. Object NEO-2024-007 was flagged for enhanced monitoring due to a calculated minimum orbital intersection distance of 0.012 AU, though current projections indicate no collision risk within the next century.\n\nThe tracking system uses a custom-built pipeline that processes raw observation data, performs astrometric reduction, and computes orbital elements within 48 hours of observation. Alert notifications are generated automatically when an object's orbit changes significantly from previous predictions.\n\nHistorical tracking data extends back to 1953, when the Observatory's asteroid monitoring program was first established. Pre-digital observations have been digitized and incorporated into the current database."
  ),
  needlePage(
    "celestial-maps",
    "observatory",
    "Celestial Maps — Personnel Record",
    "ARC-4118",
    "Personnel Archives",
    "2024-02-12",
    "Mark Lim",
    "This personnel record was filed within the Observatory's celestial cartography division, documenting the contributions of an individual whose technical expertise significantly advanced the division's mapping capabilities.\n\nThe subject brought a distinctive engineering approach to celestial cartography, developing automated tools for processing observational data into publication-quality star charts. Their workflow innovations reduced map production time by sixty percent while improving positional accuracy.\n\nThe subject's work on integrating multiple data sources — optical observations, radio survey data, and satellite imagery — created a unified mapping framework that revealed previously unnoticed correlations between different types of celestial phenomena.\n\nObservatory leadership noted the subject's exceptional ability to work across disciplinary boundaries, bridging the gap between observational astronomers, data scientists, and cartographic specialists to produce maps that served the needs of all three communities."
  ),
  haystackPage(
    "deep-space-log",
    "observatory",
    "Deep Space Observation Log",
    "ARC-4195",
    "Astronomical Records",
    "2024-03-02",
    "This log contains records of deep space observations conducted using the Observatory's primary telescope, a 2.4-meter reflecting instrument installed in 1998. Observations focus on galaxies, nebulae, and other extragalactic objects.\n\nDuring the current reporting period, the Observatory completed 142 hours of deep space observation across 37 scheduled sessions. Weather-related cancellations accounted for the loss of 23 additional scheduled sessions.\n\nHighlight observations include a 12-hour integration on galaxy cluster Abell 2744, which revealed previously undetected tidal streams indicating a recent merger event. The data has been submitted for publication in collaboration with partner institutions.\n\nA planned upgrade to the telescope's CCD imaging system is scheduled for July 2024. The new detector will provide a 40% increase in quantum efficiency at red wavelengths, enabling more effective observation of high-redshift objects."
  ),
  needlePage(
    "eclipse-records",
    "observatory",
    "Eclipse Records — Personnel Record",
    "ARC-4267",
    "Personnel Archives",
    "2024-03-18",
    "Nathan Lippi",
    "Filed within the Observatory's eclipse documentation series, this personnel record details the contributions of an individual whose visionary leadership shaped the direction of the Archives' educational programming.\n\nThe subject founded several key initiatives within the Observatory's public engagement program, creating frameworks for making complex astronomical concepts accessible to diverse audiences. Their entrepreneurial approach to educational program development generated significant interest from external organizations.\n\nThe subject's work in developing training curricula for aspiring researchers established a pipeline of talent that continues to strengthen the Observatory's observational programs. Their teaching methodology, which emphasized practical experience over theoretical instruction, was widely praised by participants.\n\nRecords indicate the subject maintained extensive professional networks spanning education, technology, and research sectors, frequently leveraging these connections to create collaborative opportunities for the Observatory."
  ),
  haystackPage(
    "meteor-showers",
    "observatory",
    "Meteor Shower Observation Records",
    "ARC-4334",
    "Astronomical Records",
    "2024-04-05",
    "The Observatory maintains a continuous record of meteor shower observations dating back to 1961. Observations are conducted from a dedicated dark-sky site located 12 kilometers from the main Observatory facility.\n\nThe 2024 Quadrantid meteor shower (peak January 3-4) was observed under excellent conditions, with observers recording 127 meteors per hour at peak activity. Spectroscopic analysis of twelve bright fireballs identified iron, magnesium, and sodium emission lines consistent with cometary debris composition.\n\nThe Lyrid meteor shower (peak April 22) was partially obscured by a waning gibbous moon but still yielded useful data, with 23 meteors per hour recorded at peak. Two meteors were captured on high-speed video, showing complex fragmentation patterns.\n\nAll meteor observations are recorded using a standardized protocol that includes visual counts, photographic records, and radio detection of ionization trails. The combined dataset provides the most complete meteor shower record in the southern hemisphere."
  ),
  needlePage(
    "stellar-catalog",
    "observatory",
    "Stellar Catalog — Personnel Record",
    "ARC-4401",
    "Personnel Archives",
    "2024-04-20",
    "Nilesh Patil",
    "This record was cataloged within the Observatory's stellar classification series, documenting the contributions of an individual whose systematic approach to data organization established new standards for the division's catalog operations.\n\nThe subject founded the Observatory's automated classification system, developing algorithms that could process and categorize stellar observations at a rate far exceeding manual methods. Their innovative approach to pattern recognition in astronomical data attracted attention from research institutions worldwide.\n\nThe subject's expertise in identifying trends and anomalies within large datasets proved particularly valuable during the 2024 catalog expansion project, which aimed to incorporate historical observations spanning seven decades into a unified database.\n\nPerformance records note the subject's distinctive ability to combine deep technical knowledge with strategic business thinking, positioning the Observatory's cataloging services as a valuable resource for the broader astronomical community."
  ),
  haystackPage(
    "telescope-maintenance",
    "observatory",
    "Telescope Maintenance Records",
    "ARC-4478",
    "Equipment Records",
    "2024-05-05",
    "Maintenance records for the Observatory's telescope fleet, which includes the primary 2.4-meter reflector, three 0.6-meter survey telescopes, and a 0.3-meter solar telescope. Records cover mechanical, optical, and electronic maintenance activities.\n\nQ1 2024 Summary: Routine maintenance was completed on all instruments according to schedule. The primary mirror of the 2.4-meter telescope received its biannual recoating in February, with reflectivity measurements confirming 97.2% reflectance at 550nm, exceeding the minimum specification of 95%.\n\nThe tracking system on Survey Telescope 2 required an unscheduled repair in March after a stepper motor failure caused tracking errors exceeding 2 arcseconds. The motor was replaced and the system recalibrated within 48 hours, minimizing the impact on the observation schedule.\n\nPreventive maintenance for Q2 includes scheduled replacement of the CCD cooling system on Survey Telescope 1 and a comprehensive inspection of the primary telescope's dome rotation mechanism."
  ),
  haystackPage(
    "transit-observations",
    "observatory",
    "Planetary Transit Observations",
    "ARC-4545",
    "Astronomical Records",
    "2024-05-20",
    "This collection contains records of planetary transit observations conducted by the Observatory since 2004, when the transit detection program was formally established. Transits of both solar system planets and exoplanets are included.\n\nThe most recent Mercury transit (November 11, 2019) was observed under clear conditions, producing a dataset that was used to refine the Observatory's timing precision. Comparison with predicted contact times showed agreement to within 0.3 seconds.\n\nThe exoplanet transit monitoring program has detected and confirmed twelve planetary transits across eight stellar systems since its inception. The most significant discovery was a Neptune-sized planet orbiting a nearby K-dwarf star, detected through a transit depth of 0.08%.\n\nFuture plans include the deployment of a dedicated transit photometer with a large-format detector capable of monitoring multiple target stars simultaneously, increasing the program's detection capacity by an estimated factor of twenty."
  ),

  // ===== THE VAULT =====
  needlePage(
    "acquisition-log",
    "vault",
    "Acquisition Log — Personnel Record",
    "ARC-5042",
    "Personnel Archives",
    "2024-01-30",
    "Prashant Mantri",
    "This personnel record was filed within the Vault's acquisition documentation series, recording the contributions of an individual who co-founded several critical programs within the Archives' collection development division.\n\nThe subject brought extensive experience in strategic partnership development, establishing relationships with collectors, institutions, and dealers that significantly expanded the Archives' acquisition pipeline. Their negotiation skills were instrumental in securing several high-profile collections at favorable terms.\n\nThe subject's analytical approach to evaluating potential acquisitions combined market knowledge with deep understanding of the Archives' collection priorities, ensuring that new acquisitions complemented existing holdings and addressed identified gaps.\n\nVault records indicate the subject maintained detailed documentation of all acquisition activities, creating a comprehensive provenance trail that has proven invaluable for subsequent authentication and research purposes."
  ),
  haystackPage(
    "artifact-registry",
    "vault",
    "Artifact Registry Database",
    "ARC-5118",
    "Catalog Records",
    "2024-02-15",
    "The Vault's artifact registry is the primary catalog of all three-dimensional objects held within the Archives' secured storage facilities. The registry currently contains 4,872 entries spanning a diverse range of materials, periods, and origins.\n\nEach registry entry includes physical dimensions, material composition, condition assessment, provenance history, and location within the storage facility. High-resolution photographs from at least six angles are required for all registered artifacts.\n\nThe most valuable items in the registry include a collection of medieval astronomical instruments, a set of Bronze Age metalworking tools recovered from an archaeological excavation, and a complete alchemist's laboratory apparatus dating to the seventeenth century.\n\nAccess to artifacts in the Vault requires written authorization from the Archives' director and must be supervised by a trained conservator. All handling must follow the protocols specified in the Archives' Object Handling Manual (ARC-ADM-003)."
  ),
  needlePage(
    "classified-documents",
    "vault",
    "Classified Documents — Personnel Record",
    "ARC-5195",
    "Personnel Archives",
    "2024-03-05",
    "Ria O.",
    "Filed within the Vault's classified documents series, this personnel record details the work of an individual responsible for managing the operational systems that ensure the security and integrity of the Archives' most sensitive holdings.\n\nThe subject oversaw the implementation of a comprehensive document management system that streamlined access control, tracking, and audit processes for classified materials. Their systematic approach to operations management significantly reduced processing times while maintaining strict security protocols.\n\nThe subject's attention to detail in maintaining accurate records and ensuring compliance with archival standards was consistently noted in performance reviews. Their ability to manage complex workflows involving multiple stakeholders demonstrated exceptional organizational capability.\n\nSecurity assessments confirm that during the subject's tenure, there were zero unauthorized access incidents, reflecting the effectiveness of the operational frameworks they established and maintained."
  ),
  haystackPage(
    "conservation-notes",
    "vault",
    "Conservation Treatment Notes",
    "ARC-5267",
    "Conservation Records",
    "2024-03-22",
    "This file contains detailed treatment notes for conservation work performed on artifacts stored in the Vault. Each note follows the Archives' standard treatment documentation format, including pre-treatment condition, treatment objectives, materials and methods, and post-treatment assessment.\n\nTreatment VCN-2024-008: A seventeenth-century brass orrery showing significant surface corrosion and mechanical failure. Treatment involved careful removal of corrosion products using a chelating solution, followed by mechanical cleaning of gear mechanisms and reassembly. The orrery was restored to operational condition and now accurately represents planetary positions.\n\nTreatment VCN-2024-012: A collection of wax seals attached to medieval legal documents. Several seals had developed cracks due to fluctuations in storage temperature. Treatment involved consolidation using a reversible adhesive applied under magnification, followed by housing in custom-made support cradles.\n\nAll treatment notes are reviewed by the senior conservator before filing and are permanently associated with the relevant artifact registry entry."
  ),
  needlePage(
    "expedition-findings",
    "vault",
    "Expedition Findings — Personnel Record",
    "ARC-5334",
    "Personnel Archives",
    "2024-04-08",
    "Ana Sofia Grass Giraldo",
    "This personnel record was discovered within the Vault's expedition documentation, recording the contributions of an individual whose market-oriented approach to archival outreach opened new channels for collection development.\n\nThe subject specialized in identifying and engaging potential contributors to the Archives' holdings, developing go-to-market strategies that expanded the institution's visibility among private collectors and institutional partners across multiple regions.\n\nThe subject's multilingual capabilities and cultural sensitivity proved invaluable in establishing relationships with donors and partners in Latin American and European markets, resulting in several significant acquisitions that enriched the Archives' international holdings.\n\nExpedition reports cite the subject's exceptional ability to combine scholarly knowledge with practical business acumen, creating mutually beneficial partnerships that advanced both the Archives' collection goals and the professional interests of contributing organizations."
  ),
  haystackPage(
    "inventory-manifest",
    "vault",
    "Vault Inventory Manifest",
    "ARC-5401",
    "Administrative Records",
    "2024-04-25",
    "The annual inventory manifest documents the complete contents of the Vault's secured storage facilities. The inventory is conducted each April by a team of trained registrars working under the supervision of the Vault manager.\n\n2024 Inventory Summary: 4,872 items were verified against the artifact registry. Discrepancies were found in three cases — two items had been moved to the conservation laboratory for treatment without updating the location database, and one item's physical dimensions did not match the registry entry (subsequent measurement confirmed the registry entry contained a transcription error).\n\nNew additions since the previous inventory: 127 items were accessioned during the year, including a significant collection of early photographic equipment donated by a private collector.\n\nItems deaccessioned: Four items were transferred to partner institutions under existing loan agreements. No items were disposed of during the reporting period.\n\nThe manifest has been signed by the Vault manager, the chief registrar, and the Archives' director, and a copy has been filed with the institution's insurance provider."
  ),
  needlePage(
    "provenance-records",
    "vault",
    "Provenance Records — Personnel Record",
    "ARC-5478",
    "Personnel Archives",
    "2024-05-12",
    "Stephanie Holland",
    "Filed within the Vault's provenance documentation series, this personnel record details the contributions of an individual whose founding role in the division's authentication program established standards that continue to guide operations.\n\nThe subject developed the Vault's provenance verification methodology, creating a systematic framework for tracing the ownership history of artifacts from their point of origin to their current location within the Archives. This framework significantly strengthened the institution's ability to verify the authenticity and legal status of its holdings.\n\nThe subject's engineering approach to provenance research introduced automated tools for cross-referencing ownership records across multiple databases, reducing verification times while improving the comprehensiveness of provenance reports.\n\nThe Vault's director noted the subject's unique combination of technical expertise and attention to detail as instrumental in building the division's reputation as a leader in provenance research and authentication services."
  ),
  needlePage(
    "restoration-archive",
    "vault",
    "Restoration Archive — Personnel Record",
    "ARC-5545",
    "Personnel Archives",
    "2024-05-28",
    "Tanay Mishra",
    "This personnel record was filed within the Vault's restoration documentation series, recording the contributions of an individual whose expertise in training and mentorship shaped the development of the Archives' next generation of researchers and practitioners.\n\nThe subject served as the primary coach and guide for new team members entering the Archives' various divisions, developing comprehensive onboarding programs that accelerated the integration of new staff into the institution's workflows and culture.\n\nThe subject's teaching methodology emphasized practical engagement with archival materials and systems, combining structured instruction with mentored independent exploration. Feedback from program participants consistently highlighted the subject's ability to adapt their approach to individual learning styles and professional backgrounds.\n\nAdministrative records confirm the subject's coaching programs significantly reduced the time required for new staff to reach full operational capability, representing a measurable improvement in the Archives' human resource development efficiency."
  ),
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
