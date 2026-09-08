import * as fa from "./site";

export const company = {
  ...fa.company,
  name: "Atrin Azin Fanavar",
  legalName: "Atrin Azin Fanavar Knowledge-Based Co.",
  type: "Limited liability",
  status: "Active",
  established: "8 March 2016",
  nationalId: fa.company.nationalIdLatn,
  economicCode: "411558714565",
  registrationNo: "12341",
  tagline: "Machine vision, intelligent control, city and factory",
  description:
    "We build machine-vision systems and operational software — from the factory line to urban cameras. Our product brand is CYBEROXI.",
  address:
    "Hamedan Province, Hamedan County, Central District, City of Hamedan, Tehran Road neighborhood, (Shahr-sazi) alley, Sardar Shahid Hossein Hamedani Boulevard, No. 0, Science and Technology Park, 3rd floor, postal code 6513939614",
  exports: ["Canada", "Sweden", "UAE", "Australia"],
  ceo: "Mojtaba Esmaeili",
  chairman: "Alireza Jahangiri",
  board: ["Arshia Safikhani", "Mohammad Mahdi Kahoul"],
  people: [
    {
      ...fa.company.people[0],
      name: "Alireza Jahangiri",
      role: "Chairman",
    },
    {
      ...fa.company.people[1],
      name: "Mojtaba Esmaeili",
      role: "CEO",
    },
  ],
};

export const licenses = [
  {
    ...fa.licenses[0],
    title: "Nascent knowledge-based company in ICT and computer software",
    issuer: "Vice-Presidency for Science and Technology",
    start: "22 January 2022",
  },
  {
    ...fa.licenses[1],
    title: "eNAMAD",
    issuer: "Center for E-Commerce Development",
    start: "24 October 2024",
  },
  {
    ...fa.licenses[2],
    title: "Technology unit license · Advanced machinery and equipment",
    issuer: "Hamedan Science and Technology Park · Ministry of Science, Research and Technology",
    start: "20 March 2024",
  },
];

export const navItems = [
  { href: fa.navItems[0].href, label: "Two worlds" },
  { href: fa.navItems[1].href, label: "Partners" },
  { href: fa.navItems[2].href, label: "Software" },
  { href: fa.navItems[3].href, label: "Machinery" },
  { href: fa.navItems[4].href, label: "Custom machines" },
  { href: fa.navItems[5].href, label: "Automation" },
  { href: fa.navItems[6].href, label: "Honors" },
  { href: fa.navItems[7].href, label: "Sport" },
  { href: fa.navItems[8].href, label: "ISO 9001" },
  { href: fa.navItems[9].href, label: "Company" },
];

export const services = [
  "Machine vision",
  "ALPR and plate reading",
  "Industrial inspection",
  "Smart city",
  "Production-line automation",
  "Enterprise software",
  "Intelligent control",
  "Software exports",
];

export const worlds = {
  ...fa.worlds,
  title: "Two worlds, one system",
  fusion:
    "We do not sell software and machinery as separate products. The same vision model that runs on a custom machine is the code on the line; the same line telemetry is the dashboard the operator sees. Integration means the factory and the city are controlled in one language.",
  software: {
    ...fa.worlds.software,
    title: "Software",
    summary: "Smart city, plate reading, store vision, enterprise workbaskets, and digital product exports.",
  },
  machinery: {
    ...fa.worlds.machinery,
    title: "Machinery",
    summary: "Machine vision on the production line — bottle inspection, weighing — and custom machines for your factory.",
  },
};

export const clients = [
  {
    ...fa.clients[0],
    name: "Sahar Food Industries, Hamedan",
    world: "Machinery",
  },
  {
    ...fa.clients[1],
    name: "Pegah Dairy Industries",
    world: "Machinery",
  },
  {
    ...fa.clients[2],
    name: "Zar Industrial Group Holding",
    world: "Machinery",
  },
  {
    ...fa.clients[3],
    name: "Hamedan Municipality",
    world: "Software",
  },
  {
    ...fa.clients[4],
    name: "Iran Small Industries and Industrial Parks Organization",
    world: "Software",
  },
  {
    ...fa.clients[5],
    world: "Software",
  },
  {
    ...fa.clients[6],
    name: "Ofogh Kourosh",
    world: "Software",
  },
] as const;

export const parko = {
  ...fa.parko,
  client: "Hamedan Municipality",
  title: "Parko",
  product: "On-street parking control system",
  summary:
    "An operational on-street parking system for Hamedan Municipality — mobile plate reading, a toll workbasket, and city reports.",
  story:
    "Parko is the software layer of the smart city: plate-reading vehicles follow their routes, plates are read with OCR, and a workbasket for payment, appeals, and reporting is built for citizens and the municipality.",
  features: [
    "Operational dashboard for tolls, payments, and plates that need review",
    "Live map of plate-reading vehicle routes in Hamedan",
    "On-street parking list with vehicle image, plate crop, and payment status",
    "Plate-reader fleet management and high-frequency corridors",
    "Heatmaps by street × hour and day of week × hour",
    "Comparison lab for two streets and high-violation plates",
    "Live occupancy indicators and street capacity",
  ],
  frames: [
    { src: fa.parko.frames[0].src, label: "Operations center" },
    { src: fa.parko.frames[1].src, label: "Live plate-reader map" },
    { src: fa.parko.frames[2].src, label: "Parking list and OCR" },
    { src: fa.parko.frames[3].src, label: "Plate-reader fleet" },
    { src: fa.parko.frames[4].src, label: "Report heatmap" },
    { src: fa.parko.frames[5].src, label: "Comparison lab" },
    { src: fa.parko.frames[6].src, label: "Parking KPIs" },
    { src: fa.parko.frames[7].src, label: "Street capacity and occupancy" },
  ],
};

export const vaede = {
  ...fa.vaede,
  client: "Industrial Parks Company / Organization",
  title: "Vaede · Rastin",
  product: "Smart operations for industrial parks",
  kicker: "Rastin platform | Intelligent enterprise management",
  summary:
    "The Rastin platform on the Vaede domain — a multi-organization cloud infrastructure for industrial parks and large groups.",
  about:
    "Rastin is the enterprise workbench for small industries and industrial parks: organization structure, workflows, human resources, messaging, and artificial intelligence in a single panel.",
  audience:
    "Organizations, ministries, industrial holdings, and groups that need centralized staff management, layered super-admin control, and secure interaction with contractors.",
  features: [
    "Enterprise workbench with shortcuts, content-mix charts, and recent activity",
    "Organization and HR parameter designer — tabs, field trees, and final publish",
    "Workflow dashboard: processes, steps, and land assignment",
    "Unified internal messenger with Telegram, Bale, and Eitaa",
    "Artificial-intelligence module in the operational menu",
    "System status: server, network, license, logs, and users",
    "Separate gateways for super-admin and the staff portal",
  ],
  frames: [
    { src: fa.vaede.frames[0].src, label: "Rastin landing" },
    { src: fa.vaede.frames[1].src, label: "Enterprise workbench" },
    { src: fa.vaede.frames[2].src, label: "Workflow dashboard" },
    { src: fa.vaede.frames[3].src, label: "HR designer" },
    { src: fa.vaede.frames[4].src, label: "Organization parameter designer" },
    { src: fa.vaede.frames[5].src, label: "Unified messenger" },
    { src: fa.vaede.frames[6].src, label: "Telegram and Bale" },
    { src: fa.vaede.frames[7].src, label: "System status" },
  ],
};

export const callisto = {
  ...fa.callisto,
  client: "Sahar Food Factory, Hamedan",
  title: "Callisto · Ericsson",
  product: "Contamination-detection machine for food-industry containers",
  news: {
    ...fa.callisto.news,
    label: "IRIB News report · 24 May 2022",
  },
  summary:
    "Ericsson uses artificial intelligence to separate contaminated containers from clean ones before filling, so energy and labor are not wasted on Sahar’s line.",
  capabilities: [
    "Detects physical contamination in many container types — even a single hair or a transparent object such as glass",
    "Automatically removes contaminated containers from the filling line",
    "Connects and links with other industrial machines on the production line",
  ],
  frames: [
    { src: fa.callisto.frames[0].src, label: "Callisto Ericsson 3D render" },
    { src: fa.callisto.frames[1].src, label: "Callisto on the production line" },
    { src: fa.callisto.frames[2].src, label: "Factory view" },
    { src: fa.callisto.frames[3].src, label: "3D render · three-quarter view" },
    { src: fa.callisto.frames[4].src, label: "3D render · front view" },
    { src: fa.callisto.frames[5].src, label: "Callisto camera unit" },
    { src: fa.callisto.frames[6].src, label: "Mechanical assembly" },
    { src: fa.callisto.frames[7].src, label: "Jam-e Jam newspaper mention" },
  ],
  facts: [
    "Basler acA1300-30gm GigE camera with Sony ICX445 sensor — 30 fps, 1.3 megapixels",
    "304 and 316 stainless-steel body; 5 mm chassis and two belts at different speeds",
    "Detects contamination, dust, and moisture; antibacterial system with a 12-watt UV lamp",
    "Pneumatic eject of contaminated bottles; counting with a Sharp GP2Y0A51SK0F laser sensor",
    "Camera, ultrasonic rangefinder, vibration sensor, light, gyroscope, electrical box, and 13-inch Full HD display",
    "Dimensions 1.5 × 1.3 × 0.5 m, weight about 100 kg, 300 W, single-phase",
    "Network-ready with live reporting for data analysis",
  ],
};

export const zar = {
  ...fa.zar,
  client: "Zar Industrial Group Holding · Zar Macaron",
  title: "Zar powerlift and weighing",
  product: "IWS system · Powerlift and intelligent weighing for Zarkam",
  summary:
    "For Zarkam we integrated a U-shaped powerlift, an IWS weighing line, and weighing-room software so raw materials are weighed without manual error and without exposing the formula.",
  story:
    "For the Zar group we delivered hardware and software together: a U-shaped powerlift for pallet-jack entry, an IWS weighing line with a stainless cabin, and a weighing-room system. Across five weighing rooms, human error in selecting and weighing by hand was the problem. The CYBEROXI solution connects a wireless scale, a tablet with QR scanning, and the production manager’s web panel to these machines.",
  facts: [
    "U-shaped powerlift with yellow hydraulics and a black platform for pallet-jack entry",
    "IWS weighing line with stainless cabin, display, and 30 to 250 kg capacity",
    "Series production for Zarkam; CYBEROXI / IWS / sevada.ir panels",
    "Operator: live weight, material checklist, admin messages, scale cutoff, and overweight alerts",
    "Admin panel: formulas, boxes, materials, reports, and dashboard",
    "Wafer, Britona, and cake production lines",
    "50 kg digital scale with wireless sync to the tablet",
    "Overall and item QR codes for raw materials without showing names to the operator",
    "Flutter app with Bluetooth to the scale and Wi-Fi to the factory network",
    "Angular web panel for formula definition, weighing orders, and mix reports",
    "ASP.NET and SQL Server backend installable on Zar Macaron’s local server",
    "Event logging, delivery receipts, and live oversight for production and warehouse managers",
  ],
  frames: [
    { src: fa.zar.frames[0].src, label: "U-shaped powerlift on the Zar floor" },
    { src: fa.zar.frames[1].src, label: "IWS weighing line in the factory" },
    { src: fa.zar.frames[2].src, label: "Packed Zarkam IWS series" },
    { src: fa.zar.frames[3].src, label: "CYBEROXI · IWS panel" },
    { src: fa.zar.frames[4].src, label: "Admin dashboard" },
    { src: fa.zar.frames[5].src, label: "Formulas" },
    { src: fa.zar.frames[6].src, label: "Weighing 40% · 700 of 7000 g" },
    { src: fa.zar.frames[7].src, label: "Salt weighing 100%" },
    { src: fa.zar.frames[8].src, label: "Britona · next stage" },
    { src: fa.zar.frames[9].src, label: "Overweight alert" },
    { src: fa.zar.frames[10].src, label: "Operator settings · scale cutoff" },
    { src: fa.zar.frames[11].src, label: "First place, weighing-room system" },
    { src: fa.zar.frames[12].src, label: "Zarkam approval" },
  ],
};

export const honors: Array<{
  src: string;
  label: string;
  kicker: string;
  summary: string;
  featured?: boolean;
}> = [
  {
    src: fa.honors[0].src,
    label: "First place, Midoun contest on IRIB TV3",
    kicker: "IRIB TV3 · Contamination-detection robot",
    summary:
      "Atrin Azin Fanavar’s contamination-detection robot took first place in the Midoun contest on IRIB TV3 — AI- and robot-driven production-line performance, shown on the company’s urban billboard.",
    featured: true,
  },
  {
    src: fa.honors[1].src,
    label: "First place, CNC paint-spray robot",
    kicker: "Machinery",
    summary:
      "First place at the IdeaShow event on innovation in industrial smartization and automation for a CNC paint-spray robot equipped with machine vision.",
  },
  {
    src: fa.honors[2].src,
    label: "Jam-e Jam newspaper mention",
    kicker: "Media",
    summary:
      "Report titled “CYBEROXI: the intelligent eye of industrial quality control” on Atrin Azin Fanavar’s machine-vision device.",
  },
  {
    src: fa.honors[3].src,
    label: "2024 technology unit license",
    kicker: "Science and Technology Park",
    summary:
      "Technology unit license for Atrin Azin Fanavar from Hamedan Science and Technology Park, under the Ministry of Science, Research and Technology, in advanced machinery and equipment, valid from 20 March 2024 to 20 March 2025. Signed by Dr. Majid Kazazi, Park President.",
  },
  {
    src: fa.honors[4].src,
    label: "Unveiling of the food contamination-detection robot",
    kicker: "Ministry of Science · 2022",
    summary:
      "Commendation for distinguished technologist Mojtaba Esmaeili for the “contamination-detection robot in the food industry”; an achievement worthy of unveiling at the 23rd Exhibition of Research, Technology and Tech Market achievements, December 2022. Issued by the Ministry of Science, Research and Technology.",
  },
  {
    src: fa.honors[5].src,
    label: "Second place, industrial smartization IdeaShow",
    kicker: "Industrial parks · 2021",
    summary:
      "Second place at the IdeaShow industrial smartization startup event (energy, electronics, and information technology) for the idea “Smartizing a food-industry production line with image processing.” Organizer: Chaharmahal and Bakhtiari Industrial Parks Company, 1 November 2021.",
  },
  {
    src: fa.honors[6].src,
    label: "Engineers’ Day commendation",
    kicker: "Hamedan University of Technology",
    summary:
      "Recognition of Atrin Azin Fanavar for attending and running a workshop at the fourth Engineers’ Day celebration of Hamedan University of Technology, coinciding with the birthday of Khajeh Nasir al-Din Tusi, under the slogan “The engineer, driver of the knowledge-based economy.”",
  },
  {
    src: fa.honors[7].src,
    label: "Sharif mobile programming marathon",
    kicker: "Sharif University of Technology · 2017",
    summary:
      "Trophy of the fourth national mobile programming marathon; Sharif University of Technology, 14–16 September 2017. Research Institute for Advanced Information and Communication Technology.",
  },
  {
    src: fa.honors[8].src,
    label: "Special winner, Green Exir",
    kicker: "IRANMOBICODE 2014",
    summary:
      "Special winner of the Soroush smart-device ideation and programming contest for the “Green Exir” product; Mojtaba Esmaeili and Ali Behghdam. IRANMOBICODE 2014.",
  },
  {
    src: fa.honors[9].src,
    label: "Hamedan Honor and Progress Festival",
    kicker: "Ministry of Sport and Youth · 2023",
    summary:
      "Trophy of the Hamedan Honor and Progress Festival and Exhibition; Ministry of Sport and Youth and the Hamedan Provincial Department of Sport and Youth, 20–21 November 2023.",
  },
  {
    src: fa.honors[10].src,
    label: "Outstanding Youth of Iran festival",
    kicker: "Hamedan Province · March 2024",
    summary:
      "Trophy of the Outstanding Youth of Iran festival in Hamedan Province, March 2024, under the slogan “The Iranian youth, standard-bearer of progress.”",
  },
];

export const leadershipQuotes = [
  {
    name: "Dr. Mojtaba Esmaeili",
    role: "CEO",
    quote:
      "The quality of a machine and of software cannot hide behind a slogan. Every line entrusted to our AI and robots must run steadily, accurately, and with purpose — because when production stops, trust stops.",
  },
  {
    name: "Eng. Alireza Jahangiri",
    role: "Chairman",
    quote:
      "Commitment means that when the machine is installed, the work has only begun. Real support means being answerable, staying with the customer, and finishing the problem until the line can breathe again.",
  },
  {
    name: "Eng. Arshia Safikhani",
    role: "COO / Executive Vice President",
    quote:
      "End-to-end delivery means one team beside you from design and costing through follow-through and commissioning on the line. A product does not stay on paper; our work is not done until installation is complete and the real line is running.",
  },
  {
    name: "Eng. Mohammad Mahdi Kahoul",
    role: "CTO",
    quote:
      "A technical challenge is a knot that holds the line today and must be undone tomorrow. Our job is to find the hardware and software problem and close it so the production manager is no longer stuck on the same error.",
  },
];

export const automation = {
  ...fa.automation,
  title: "We reduce — and remove — human labor with artificial intelligence",
  product: "Line automation · Machine vision · A shift that does not tire",
  lead: "With AI and automation we take repetitive inspection and control stations out of dependence on human labor. This is not a temporary substitute: the machine does not tire, does not take leave, and holds the same accuracy on the third shift.",
  stat: { from: "12", to: "0", label: "operators at this station" },
  benefits: [
    {
      index: "01",
      title: "Insurance and wages for this station, closed",
      body: "For work that a robot and a vision model perform, insurance, bonuses, and monthly wages are no longer on your books. The cost is a fixed machine, not a new hire.",
    },
    {
      index: "02",
      title: "More accurate than a tired eye",
      body: "The human eye falls off after a few hours; our model holds the same threshold in the first minute and at hour twelve. Human error leaves the quality line.",
    },
    {
      index: "03",
      title: "Peace of mind; the shift does not sleep",
      body: "The machine has no leave, delay, or shift swap. The line runs day and night at one quality, and you are not managing replacements.",
    },
    {
      index: "04",
      title: "A lasting end to dependence on this role",
      body: "The goal is not a temporary headcount cut. We close the station so the same work is done, permanently, by AI and automation.",
    },
  ],
};

export const familyGallery = {
  ...fa.familyGallery,
  title: "Photo archive of the Atrin Azin Fanavar family",
  photos: [
    { src: fa.familyGallery.photos[0].src, label: "The Atrin Azin Fanavar family at the office" },
    { src: fa.familyGallery.photos[1].src, label: "Atrin Azin Fanavar colleagues together" },
    { src: fa.familyGallery.photos[2].src, label: "Colleagues in the workspace" },
    { src: fa.familyGallery.photos[3].src, label: "Visit and conversation at the office" },
    { src: fa.familyGallery.photos[4].src, label: "Workbench and colleagues" },
    { src: fa.familyGallery.photos[5].src, label: "CYBEROXI office" },
    { src: fa.familyGallery.photos[6].src, label: "Technical meeting on the software line" },
    { src: fa.familyGallery.photos[7].src, label: "The Atrin Azin Fanavar family team" },
    { src: fa.familyGallery.photos[8].src, label: "Managers and colleagues" },
    { src: fa.familyGallery.photos[9].src, label: "Team gathering at the Hamedan office" },
  ],
};

export const sport = {
  ...fa.sport,
  title: "Support for sport and team ownership",
  product: "Badminton · Hamedan provincial league · National Division One league",
  lead: "Atrin Azin Fanavar does not only build production lines and software; it also supports championship sport. The company’s badminton team competes in the Hamedan provincial league and in Iran’s Division One badminton league.",
  trophy: {
    ...fa.sport.trophy,
    alt: "Third-place cup, Hamedan provincial badminton league, winter 2023–24",
    caption: "Third place · Hamedan provincial badminton league · Winter 2023–24 · Hamedan Badminton Board",
  },
  leagues: [
    {
      index: "01",
      title: "Hamedan provincial badminton league",
      result: "Third place · Winter 2023–24",
      body: "The company team competed in the provincial league under the Hamedan Badminton Board and brought home the third-place cup.",
    },
    {
      index: "02",
      title: "National Division One badminton league",
      result: "National team ownership",
      body: "The same championship path continues at national level: Atrin Azin Fanavar fields a team in Iran’s Division One badminton league.",
    },
  ],
};

export const customMachines = {
  ...fa.customMachines,
  title: "We will build for your line as well",
  product: "Custom machines · Device software · Support and warranty",
  lead: "Callisto is running on Sahar’s line and Zar’s intelligent weighing is in production; we build the same class of machine from design through installation. What you see is not a customer case study — three capabilities of Atrin Azin Fanavar for the next commissioning client.",
  cta: "Order a custom machine",
  proof: "Live proof in production",
  stats: [
    { value: "+50", label: "technician and engineer colleagues" },
    { value: "200+", label: "successful software and machinery projects" },
    { value: "+10 years", label: "experience in software and industrial machines" },
  ],
  ownership: [
    "All rights and ownership of customized industrial machines belong absolutely to the buyer.",
    "Our colleagues can help you through the knowledge-based certification process for these machines.",
    "According to your need, our team solves both the software and the hardware problem.",
  ],
  offerings: [
    {
      ...fa.customMachines.offerings[0],
      index: "01",
      title: "Custom industrial machine",
      product: "Artificial intelligence and image processing, matched to the client’s line",
      story:
        "Every factory has one problem; we build the machine from that problem. We tune mechanics, cameras, and the vision model to your product, speed, and hall so the strongest operational feedback sits on the line: telemetry, dashboards, live reports, and alerts. We automate inspection that is repetitive, dangerous, or exhausting — quality control without fatigue error, not a slogan about replacing people.",
      points: [
        "Dedicated design for the commissioning client’s production line",
        "Machine vision and AI on your actual part and container",
        "Telemetry, dashboard, and live alerts for the control room",
        "Automation of repetitive and hazardous inspection; less dependence on the human eye",
      ],
    },
    {
      ...fa.customMachines.offerings[1],
      index: "02",
      title: "Device management software",
      product: "Automatic on the line; no operator behind every button",
      story:
        "Software is not separate from hardware. The device-management layer arrives with the machine: it sees status, commands remotely, writes logs, and when the pattern is clear it decides on its own. This is production-line monitoring and control — not a city system and not an enterprise workbasket.",
      points: [
        "Live monitoring of machine and line status",
        "Remote control and a complete event record",
        "Smart alerts and automatic decisions on a defined threshold",
        "Connection to the production panel and neighboring machines on the line",
      ],
    },
    {
      ...fa.customMachines.offerings[2],
      index: "03",
      title: "Technical support and a strong warranty",
      product: "A company commitment, not a contract footnote",
      story:
        "An industrial machine is not finished on installation day. Direct technical support from the team that designed the device, and a strong warranty, are part of the order. We train operators and stay until the line is stable.",
      points: [
        "Technical support from the engineers who built the machine",
        "Warranty as a formal order option, not fine print",
        "Operator training and support in maintenance",
        "Presence after commissioning, until the line settles",
      ],
    },
  ],
};

export const factoryPitch = {
  ...fa.factoryPitch,
  title: "Just tell us your factory’s problem",
  lead: "We design and manufacture from zero to one hundred. State the problem; the rest of the path — idea, mechanics, software, build, and installation — is ours.",
  cta: "Tell us the problem",
  steps: [
    { kicker: "01", title: "Problem", body: "Just say where the line is stuck." },
    { kicker: "02", title: "Design", body: "Mechanics, vision, and software on your problem." },
    { kicker: "03", title: "Build", body: "The machine is made in our own workshop." },
    { kicker: "04", title: "Install", body: "Commissioned on the line until it is stable." },
  ],
};

export const softwareExports = [
  {
    ...fa.softwareExports[0],
    countries: fa.softwareExports[0].countries,
    summary: "A comprehensive platform for connecting users, built with Swedish investment.",
  },
  {
    ...fa.softwareExports[1],
    name: "Green Exir",
    countries: fa.softwareExports[1].countries,
    summary:
      "Iran’s first video database and social network for medicinal plants (Green Exir / اکسیر سبز); best application at the IRANMOBICODE festival, Amirkabir University, 2014.",
  },
  {
    ...fa.softwareExports[2],
    countries: fa.softwareExports[2].countries,
    summary: "A Q&A social network for Iranians living in Canada and Australia.",
  },
  {
    ...fa.softwareExports[3],
    countries: fa.softwareExports[3].countries,
    summary: "A fitness application for everyday health and wellbeing.",
  },
];

export const iso = {
  ...fa.iso,
  product: "DIN EN ISO 9001:2015 · Quality in the language of factory and software",
  issuer: "MTIC InterCert · Bonn, Germany",
  story:
    "For a company that puts machines on Sahar and Zar production lines and writes operational software for a municipality and industrial parks, quality means a shared language. The DIN EN ISO 9001:2015 certificate from MTIC InterCert in Bonn, with German DAkkS accreditation, says that designing and supporting software and AI services here is a process, not chance or taste. An industrial client asks, before signing, whether work is traceable from the factory floor to software delivery. Exports to Canada, Sweden, the UAE, and Australia want the same thing: not a slogan, a certificate.",
  facts: [
    "Holder: Atrin Azin Fanavar Co. · Hamedan Science and Technology Park, 3rd floor, unit T01",
    "Certificate number 20-Q-1002628-MTIC",
    "Scope: design, production, and support of software services and artificial intelligence",
    "Standard DIN EN ISO 9001:2015 · Audit report RC-1120-Q-MTIC-MS-1002628-20",
    "First issue and revision 23 November 2020 · Valid through 22 November 2023",
    "Issuer: InterCert GmbH — Group of MTIC, Bonn, Germany · Signed: Eng. K. Lindenblatt",
    "German DAkkS accreditation and IAF mark",
  ],
  frames: [{ src: fa.iso.frames[0].src, label: "ISO 9001:2015 certificate · MTIC InterCert" }],
  pillars: [
    {
      kicker: "PROCESS",
      title: "Discipline from the factory floor to code delivery",
      body: "One standard for the machine-vision line, the weighing room, and the city panel. Input, test, correction, and output are recorded — quality is not the taste of a shift.",
    },
    {
      kicker: "TRUST",
      title: "The trust of Sahar, Zar, and the municipality",
      body: "When a client hands over a production line or urban tolls, a German third-party audit is a language they understand. This certificate is that shared language.",
    },
    {
      kicker: "EXPORT",
      title: "Credibility for markets abroad",
      body: "Canada, Sweden, the UAE, and Australia judge a brand by its certificate. InterCert Bonn and DAkkS mean quality here is not an in-house translation.",
    },
    {
      kicker: "IMPROVE",
      title: "Audit trail and continual improvement",
      body: "Every defect, version, and event must be reversible. ISO 9001 turns the cycle of seeing, measuring, and improving into a company habit.",
    },
  ],
};

export const cta = {
  ...fa.cta,
  client: "Hamedan Municipality",
  title: "CTA",
  product: "Urban traffic-violation camera control system",
  summary:
    "A single command layer for the city’s violation cameras — speed, odd–even, and traffic-zone schemes in one operational system.",
  story:
    "The city is seen by cameras; the question is where that seeing is run. CTA is the command layer for traffic-violation cameras: speed, odd–even, and traffic-zone outputs sit on one operations desk instead of scattered rooms. Records are collected and analyzed, and the review load is lifted from the operator — a system that holds about one hundred million records at city scale.",
  nda: "Because of operational security and a non-disclosure agreement, we cannot show the system interface. This chapter is about mission and scale, not a product view.",
  cta: "Inquiry and partnership",
  stat: {
    value: "100 million",
    unit: "records",
    label: "Analysis and review of camera registrations",
  },
  coverage: [
    { kicker: "SPEED", title: "Speed violations" },
    { kicker: "ODD–EVEN", title: "Odd–even" },
    { kicker: "ZONE", title: "Traffic zone" },
  ],
  features: [
    "Central command of traffic-violation cameras on city streets",
    "Speed, odd–even, and traffic-zone coverage in one system",
    "Analysis and review of about 100 million camera records",
    "Live and batch review instead of watching outputs one by one",
    "Lower human load on image control, and stability at city scale",
  ],
  pillars: [
    {
      kicker: "COMMAND",
      title: "A single command for the city",
      body: "Violation cameras sit on one control desk — not in scattered files and separate shifts.",
    },
    {
      kicker: "SCALE",
      title: "One-hundred-million scale",
      body: "About 100 million camera records are analyzed and reviewed; city volume, not a lab.",
    },
    {
      kicker: "COVERAGE",
      title: "Three violation layers",
      body: "Speed, odd–even, and traffic zone under one command. Street coverage, not a single camera.",
    },
    {
      kicker: "SEALED",
      title: "Operational confidentiality",
      body: "The data is sensitive and an NDA is in force. We do not show the interface; we state the mission.",
    },
  ],
};

export const ofogh = {
  ...fa.ofogh,
  client: "Ofogh Kourosh store chain",
  title: "Ofogh Kourosh",
  product: "Store watch · Fire and theft detection",
  summary:
    "Machine vision on the store’s installed cameras; fire and theft are classified separately, and each raises its own alarm.",
  story:
    "The Ofogh Kourosh store chain already has cameras; what it lacked was an eye that can watch dozens of live feeds at once without tiring. CYBEROXI connected those installed lenses to an image-processing layer: the vision model separates fire from theft behavior and raises a distinct alarm for each event — a warm safety alert for fire, a sharp operational alert for theft. Live monitoring means fewer events are missed; floor safety and loss prevention, without a guard sitting in place of a camera.",
  cta: "Inquiry and partnership",
  events: [
    { id: "fire", kicker: "FIRE", title: "Fire" },
    { id: "theft", kicker: "THEFT", title: "Theft" },
  ],
  features: [
    "Connects to existing store cameras; hardware replacement is not required",
    "Fire detection with a dedicated safety alarm",
    "Theft and suspicious-behavior detection with a separate operational alarm",
    "Live multi-camera monitoring instead of watching screens one by one",
    "Fewer missed events than purely human guarding",
    "Operational safety and loss prevention on the store floor",
  ],
  pillars: [
    {
      kicker: "LENS",
      title: "Cameras already installed",
      body: "New hardware is not mandatory. The store’s existing lenses connect to the machine-vision layer, and the live image takes on meaning.",
    },
    {
      kicker: "CLASSIFY",
      title: "Fire versus theft",
      body: "A generic siren is lost in the noise. The model separates fire from theft so the right action is clear in that moment.",
    },
    {
      kicker: "ALARM",
      title: "Two alerts, two paths",
      body: "Fire is a warm safety signal; theft is a sharp operational alert. Each event has its own channel and priority.",
    },
    {
      kicker: "FLOOR",
      title: "Safety and loss",
      body: "Live monitoring takes the place of shift fatigue: fewer events are missed, both for floor safety and for loss prevention.",
    },
  ],
};

export const pegah = {
  ...fa.pegah,
  client: "Pegah Dairy Industries",
  title: "Pegah powerlift and weighing",
  product: "IWS system · Powerlift and intelligent weighing for Pegah",
  summary:
    "For Pegah Dairy Industries we integrated a U-shaped powerlift, an IWS weighing line, and weighing-room software so raw materials are weighed without manual error and without exposing the formula.",
  story:
    "For Pegah we delivered hardware and software together: a U-shaped powerlift for pallet-jack entry, an IWS weighing line with a stainless cabin, and a weighing-room system. On the weighing floor, human error in selecting and weighing by hand was the problem. The CYBEROXI solution connects a wireless scale, a tablet with QR scanning, and the production manager’s web panel to these machines.",
  facts: [
    "U-shaped powerlift with yellow hydraulics and a black platform for pallet-jack entry",
    "IWS weighing line with stainless cabin, display, and 30 to 250 kg capacity",
    "The same IWS machine family; CYBEROXI / IWS / sevada.ir panels",
    "Operator: live weight, material checklist, admin messages, scale cutoff, and overweight alerts",
    "Admin panel: formulas, boxes, materials, reports, and dashboard",
    "Suited to dairy lines and raw materials that demand weighing accuracy",
    "50 kg digital scale with wireless sync to the tablet",
    "Overall and item QR codes for raw materials without showing names to the operator",
    "Flutter app with Bluetooth to the scale and Wi-Fi to the factory network",
    "Angular web panel for formula definition, weighing orders, and mix reports",
    "ASP.NET and SQL Server backend installable on Pegah’s local server",
    "Event logging, delivery receipts, and live oversight for production and warehouse managers",
  ],
  frames: [
    { src: fa.pegah.frames[0].src, label: "U-shaped powerlift · IWS family" },
    { src: fa.pegah.frames[1].src, label: "IWS weighing line" },
    { src: fa.pegah.frames[2].src, label: "Packed IWS series" },
    { src: fa.pegah.frames[3].src, label: "CYBEROXI · IWS panel" },
    { src: fa.pegah.frames[4].src, label: "Admin dashboard" },
    { src: fa.pegah.frames[5].src, label: "Formulas" },
    { src: fa.pegah.frames[6].src, label: "Weighing 40% · 700 of 7000 g" },
    { src: fa.pegah.frames[7].src, label: "Salt weighing 100%" },
    { src: fa.pegah.frames[8].src, label: "Weighing complete · next stage" },
    { src: fa.pegah.frames[9].src, label: "Overweight alert" },
    { src: fa.pegah.frames[10].src, label: "Operator settings · scale cutoff" },
  ],
};

export const ui = {
  contactCta: "Contact",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  twoWorlds: "Two worlds",
  talk: "Talk with the company",
  softwareWorld: "Software world",
  machineryWorld: "Machinery world",
  machineryLead: "Callisto, Zar, and Pegah are in production.",
  machineryCta: "We also build custom machines for your line.",
  partners: "Partners",
  partnersLead:
    "Brands we have built machines or systems with. Hamedan Municipality appears once, even though it has two software products.",
  dashboardDisclaimer: "Dashboard figures are interface mockups, not official site statistics.",
  visitParko: "Visit parko.ir",
  enterVaede: "Enter vaede.ir",
  callistoLine: "Callisto production line",
  factType: "Company type",
  factStatus: "Status",
  factFounded: "Founded",
  factNationalId: "National ID",
  factEconomic: "Economic code",
  factRegistration: "Registration no.",
  boardMembers: "Board members",
  licensesHeading: "Licenses",
  licenseStart: "Start",
  softwareExportsTo: "Software exports to",
  contactTitle: "Talk with the company",
  contactLead:
    "For a custom machine, device software, or an operational system — contact the CEO or the Chairman directly.",
  factoryTour: "Virtual factory tour",
  honorsTitle: "Honors and media",
  honorsLead:
    "First place at Midoun on IRIB TV3, ranking certificates, a national unveiling, a technology unit license, and press coverage of the company.",
  quotesTitle: "In the leaders’ words",
  sportRally: "Badminton rally · Provincial league and national Division One",
  sportTrophyKicker: "TROPHY · 2023",
  sportTrophyTitle: "Provincial third-place cup",
  automationCaption: "Replacing a station with AI · no shift fatigue",
  exportsTitle: "Software exports",
  exportsLead:
    "A selection of software exports to different countries; products built with SEVADA and brought to market under the CYBEROXI brand.",
  buildCustom: "Custom machine",
  buildOs: "Device software",
  buildSupport: "Support and warranty",
  buildCallisto: "Callisto · Sahar",
  buildZar: "Weighing · Zar",
  buildPegah: "Weighing · Pegah",
  buildProofCallisto: "Live proof in production · Callisto",
  buildProofZar: "Live proof in production · Zar",
  buildSamePattern: "Hardware and software as one; we repeat the same pattern for your line.",
  ofoghClassify: "Event classification",
  ofoghFire: "Fire",
  ofoghTheft: "Theft",
  ofoghAisle: "Aisle A",
  ofoghCheckout: "Checkout",
  ofoghStock: "Stockroom",
  ofoghCorridor: "Corridor",
  ofoghAria: "Cinematic view of the store vision system: cameras, fire and theft detection, separate alarms",
  ofoghLogoAlt: "Ofogh Kourosh chain stores",
  view: "View",
  close: "Close",
  prev: "Previous",
  next: "Next",
  listSep: ", ",
};
