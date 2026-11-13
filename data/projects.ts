export interface ProjectDetail {
  slug: string;
  name: string;
  tagline: string;
  category: "Residential" | "Commercial" | "Independent Houses";
  status: "Completed" | "Ongoing" | "Ready to Move";
  location: string;
  address: string;
  year: string;
  units: string;
  builtUpArea: string;
  floors: string;
  configurations: string;
  image: string;
  bannerImage: string;
  gallery: string[];
  overview: string[];
  highlights: string[];
  specifications: {
    title: string;
    description: string;
  }[];
  locationAdvantages: {
    landmark: string;
    distance: string;
  }[];
  floorPlans?: {
    type: string;
    area: string;
    facing: string;
    features: string[];
  }[];
}

export const projectsData: ProjectDetail[] = [
  {
    slug: "thirumala-towers",
    name: "Thirumala Towers",
    tagline: "Contemporary residential living crafted with enduring structural integrity.",
    category: "Residential",
    status: "Completed",
    location: "Indira Nagar, Ramanthapur, Hyderabad",
    address: "Plot No. 18 & 19, Indira Nagar, Near Ramanthapur Main Road, Hyderabad - 500013",
    year: "Completed 2021",
    units: "20 Premium Residences",
    builtUpArea: "28,500 sq.ft",
    floors: "Stilt + 5 Floors",
    configurations: "2 & 3 BHK Luxury Apartments",
    image: "/projects/image1.jpg",
    bannerImage: "/projects/banner.png",
    gallery: [
      "/projects/banner.png",
      "/projects/image1.jpg",
      "/projects/image2.jpg",
      "/projects/image4.jpg",
      "/projects/image9.jpg"
    ],
    overview: [
      "Thirumala Towers stands as a prime benchmark of residential excellence in the thriving enclave of Ramanthapur, Hyderabad. Developed with a rigorous focus on quality materials, natural ventilation, and functional space planning, every apartment has been thoughtfully designed to deliver serene family living.",
      "Strategically situated just minutes from the main road and educational hubs, this gated community combines peaceful suburban residential comfort with effortless access to Uppal Metro, Osmania University, and the central commercial arteries of Hyderabad.",
      "Each home features 100% Vastu compliance, generous balconies overlooking open spaces, premium CP fittings, seamless elevator transit, and reliable water and power infrastructure."
    ],
    highlights: [
      "100% Vastu Compliant Architectural Planning",
      "Prime Urban Connectivity near Ramanthapur & Uppal",
      "Dedicated Covered Stilt Car Parking",
      "Automatic High-Speed Passenger Elevator with ARD",
      "24/7 Monitored CCTV Surveillance & Security",
      "100% Generator Backup for Common Areas & Pumps",
      "Concealed Rainwater Harvesting Pit System",
      "Uninterrupted Manjeera & Deep Borewell Water Supply"
    ],
    specifications: [
      {
        title: "RCC Framework",
        description: "Earthquake-resistant reinforced cement concrete framed structure designed as per IS code standards."
      },
      {
        title: "Super Structure",
        description: "Lightweight red clay brick masonry with cement mortar: 9-inch thick outer walls and 4.5-inch internal partitions."
      },
      {
        title: "Plastering",
        description: "Double coat smooth sponge finish plastering for internal walls; water-proof external cement plastering."
      },
      {
        title: "Flooring",
        description: "Premium 800x800mm vitrified tiles across living, dining, kitchen, and bedrooms; anti-skid ceramic tiles in balconies."
      },
      {
        title: "Doors & Woodwork",
        description: "Main door in manufactured teak wood frame with melamine polish and designer brass hardware. Internal doors with hard wood frame and flush shutters."
      },
      {
        title: "Windows",
        description: "High-grade UPVC sliding windows with clear float glass, security MS grills, and integrated mosquito mesh track."
      },
      {
        title: "Kitchen",
        description: "Polished black granite cooking counter with stainless steel sink, 2-foot ceramic tile dadoing above counter, and provision for water purifier and chimney."
      },
      {
        title: "Bathrooms & Sanitary",
        description: "Designer ceramic tile dadoing up to 7-foot height. Premium sanitary ware and CP brass fittings from Cera/Hindware/Jaquar."
      },
      {
        title: "Electrical & Wiring",
        description: "Concealed copper wiring with Havells/Finolex cables, modular switches from Legrand/Anchor, and AC points in master bedrooms."
      },
      {
        title: "Painting & Finishing",
        description: "Internal walls treated with double-coat Luppam putty and premium acrylic emulsion. Exterior finished with weather-shield Asian Paints."
      },
      {
        title: "Elevator & Generator Backup",
        description: "Automated 6-passenger high-speed elevator with ARD safety device and 100% generator backup for lifts, motors, and common lighting."
      },
      {
        title: "Water Supply & Rainwater Harvesting",
        description: "Dual overhead reservoirs with 24/7 municipal drinking water and deep borewell connections, integrated with groundwater recharge pits."
      }
    ],
    locationAdvantages: [
      { landmark: "Uppal Metro Station", distance: "5 Mins / 2.2 km" },
      { landmark: "Ramanthapur Public School & College", distance: "2 Mins / 600 m" },
      { landmark: "D-Mart Ramanthapur", distance: "4 Mins / 1.5 km" },
      { landmark: "Osmania University Campus", distance: "7 Mins / 3.0 km" },
      { landmark: "Secunderabad Railway Station", distance: "20 Mins / 8.5 km" },
      { landmark: "Rajiv Gandhi International Cricket Stadium", distance: "6 Mins / 2.8 km" }
    ],
    floorPlans: [
      {
        type: "3 BHK Premium Residence",
        area: "1,650 sq.ft",
        facing: "East Facing",
        features: ["3 Bedrooms", "3 Bathrooms", "2 Balconies", "Pooja Room", "Spacious Living & Dining"]
      },
      {
        type: "2 BHK Luxury Flat",
        area: "1,220 sq.ft",
        facing: "North Facing",
        features: ["2 Bedrooms", "2 Bathrooms", "1 Balcony", "Open Concept Kitchen", "Comfortable Utility Area"]
      }
    ]
  },
  {
    slug: "svs-manik-arcade",
    name: "SV's Manik Arcade",
    tagline: "Prominent commercial hub built for retail excellence and corporate headquarters.",
    category: "Commercial",
    status: "Completed",
    location: "Bulkampet, Ameerpet, Hyderabad",
    address: "B.K. Guda Road, Near Bulkampet Temple, Ameerpet, Hyderabad - 500038",
    year: "Completed 2019",
    units: "12 Commercial Spaces",
    builtUpArea: "22,000 sq.ft",
    floors: "Cellar + Ground + 4 Floors",
    configurations: "Retail Showrooms & Corporate Office Floors",
    image: "/projects/image8.jpg",
    bannerImage: "/projects/image8.jpg",
    gallery: [
      "/projects/image8.jpg",
      "/projects/image4.jpg",
      "/projects/image9.jpg",
      "/projects/banner.png"
    ],
    overview: [
      "SV's Manik Arcade is an impeccably located commercial development situated in the high-footfall business district of Ameerpet-Bulkampet, Hyderabad. Designed to accommodate modern retail outlets, healthcare clinics, and corporate offices, this arcade features large column-free spans for custom interiors.",
      "With high structural load-bearing capacity, premium structural glazing, wide entrance passages, and multi-vehicle basement parking, it offers business owners maximum visibility and customer convenience in a thriving urban trade center."
    ],
    highlights: [
      "High Visibility Main Road Frontage in Ameerpet",
      "Dedicated Commercial Underground Cellar Parking",
      "Heavy-Duty Passenger & Commercial Freight Elevators",
      "Double Glazed Energy-Efficient Façade",
      "100% Generator Power Backup for all Commercial Establishments",
      "Advanced Fire Detection & Hydrant Suppression System",
      "Provision for High-Tonnage Centralized Air Conditioning"
    ],
    specifications: [
      {
        title: "Structural Design",
        description: "Heavy-duty commercial RCC frame designed for high live-load requirements and dynamic corporate tenant demands."
      },
      {
        title: "Façade & Cladding",
        description: "Structural silicone glass curtain walling paired with weather-resistant Alubond panels and granite exterior cladding."
      },
      {
        title: "Corridors & Lobby",
        description: "Polished Italian-style granite flooring in common lobbies, staircase, and entrance passages with stainless steel balustrades."
      },
      {
        title: "Power & Electricals",
        description: "Dedicated 3-phase high-tension power line with custom tenant metering and automated diesel generator backup."
      },
      {
        title: "Fire Safety",
        description: "Fire sprinkler network, emergency exit fire staircases, smoke dampers, and underground water reservoir as per NBC norms."
      }
    ],
    locationAdvantages: [
      { landmark: "Ameerpet Metro Interchange", distance: "4 Mins / 1.4 km" },
      { landmark: "Bulkampet Yellamma Temple", distance: "2 Mins / 400 m" },
      { landmark: "SR Nagar Commercial Hub", distance: "5 Mins / 1.8 km" },
      { landmark: "Begumpet Airport Road", distance: "10 Mins / 4.2 km" },
      { landmark: "Hitech City / Cyber Towers", distance: "22 Mins / 10.5 km" }
    ]
  },
  {
    slug: "thirumala-apartments",
    name: "Thirumala Apartments",
    tagline: "Serene residential enclave nestled amidst the green hills of Boduppal.",
    category: "Residential",
    status: "Completed",
    location: "Balaji Hills, Boduppal, Hyderabad",
    address: "Balaji Hills Colony, Road No. 4, Boduppal, Hyderabad - 500092",
    year: "Completed 2020",
    units: "15 Residential Flats",
    builtUpArea: "19,800 sq.ft",
    floors: "Stilt + 5 Floors",
    configurations: "2 & 3 BHK Apartments",
    image: "/projects/image5.jpg",
    bannerImage: "/projects/image5.jpg",
    gallery: [
      "/projects/image5.jpg",
      "/projects/image2.jpg",
      "/projects/image4.jpg",
      "/projects/image6.jpg"
    ],
    overview: [
      "Thirumala Apartments in Balaji Hills, Boduppal, exemplifies peaceful suburban community living. Set in an elevated, pollution-free residential neighbourhood with panoramic views, this development was designed for families seeking both comfort and accessibility.",
      "The project showcases thoughtful floor plans that maximize cross-ventilation, ample daylight, reliable infrastructure, and enduring architectural finishes that preserve their beauty over time."
    ],
    highlights: [
      "Scenic, High-Elevation Residential Setting in Balaji Hills",
      "Zero Common Walls on Selected Flats for Complete Privacy",
      "Covered Stilt Parking for Cars & Two-Wheelers",
      "Automated Elevator with Battery Backup",
      "Round-the-clock Municipal & Borewell Water",
      "Vastu-Compliant East & North Facing Units"
    ],
    specifications: [
      {
        title: "Structure",
        description: "RCC framed structure with Fe 500 grade TMT steel reinforcement and 53 grade cement."
      },
      {
        title: "Flooring",
        description: "Glossy vitrified tiles in all living areas with matching 4-inch skirting."
      },
      {
        title: "Doors & Windows",
        description: "Teak wood main entrance door; quality sliding aluminium windows with safety grills."
      },
      {
        title: "Sanitary & CP",
        description: "Wash basins and wall-hung EWC with dual-flush systems; Jaguar/Parryware fittings."
      }
    ],
    locationAdvantages: [
      { landmark: "Warangal Highway (NH 163)", distance: "5 Mins / 2.0 km" },
      { landmark: "Uppal Ring Road", distance: "8 Mins / 3.8 km" },
      { landmark: "Singapore Township / Pocharam SEZ", distance: "18 Mins / 9.5 km" },
      { landmark: "Glendale International Academy", distance: "4 Mins / 1.2 km" }
    ]
  },
  {
    slug: "kesava-residency",
    name: "Kesava Residency",
    tagline: "A boutique community designed for comfortable everyday residential life.",
    category: "Residential",
    status: "Completed",
    location: "Near NTR Statue, Boduppal, Hyderabad",
    address: "Near NTR Statue Circle, Boduppal Main Road, Hyderabad - 500092",
    year: "Completed 2018",
    units: "16 Elegant Flats",
    builtUpArea: "21,000 sq.ft",
    floors: "Stilt + 5 Floors",
    configurations: "2 & 3 BHK Homes",
    image: "/projects/image6.jpg",
    bannerImage: "/projects/image6.jpg",
    gallery: [
      "/projects/image6.jpg",
      "/projects/image1.jpg",
      "/projects/image2.jpg",
      "/projects/image9.jpg"
    ],
    overview: [
      "Located at a convenient spot right near the landmark NTR Statue in Boduppal, Kesava Residency is an established residential project known for its rock-solid construction quality and welcoming neighborhood community.",
      "Delivered on time and built to exacting structural standards, Kesava Residency continues to serve as an enduring testament to Thirumala Constructions' commitment to honest execution and long-lasting client relationships."
    ],
    highlights: [
      "Prime Walkable Access to Boduppal Main Road Market",
      "100% Vastu-Compliant Architecture",
      "Spacious Living Rooms with Dedicated Dining Alcoves",
      "Solar Water Heating System Infrastructure",
      "Secured Gated Community with Intercom Connectivity"
    ],
    specifications: [
      {
        title: "Structural Integrity",
        description: "High-grade RCC foundation with deep beam construction and anti-termite treatment."
      },
      {
        title: "Walls & Plastering",
        description: "First-class table molded bricks with cement mortar and smooth wall putty finish."
      },
      {
        title: "Kitchen",
        description: "Granite platform with stainless steel sink and glazed tile dadoing up to 2 feet."
      }
    ],
    locationAdvantages: [
      { landmark: "NTR Statue Circle", distance: "1 Min Walk / 100 m" },
      { landmark: "Apollo Pharmacy & Supermarkets", distance: "2 Mins Walk / 200 m" },
      { landmark: "Uppal Metro Station", distance: "9 Mins / 4.1 km" }
    ]
  },
  {
    slug: "ssv-padma-heights",
    name: "SSV Padma Heights",
    tagline: "Next-generation residential lifestyle underway in the booming corridor of Peerzadiguda.",
    category: "Residential",
    status: "Ongoing",
    location: "Peerzadiguda, Hyderabad",
    address: "Near Municipal Office, Peerzadiguda, Uppal East, Hyderabad - 500098",
    year: "Target Handover 2025",
    units: "24 Luxury Residences",
    builtUpArea: "34,000 sq.ft",
    floors: "Stilt + 5 Floors",
    configurations: "2 & 3 BHK Premium Units",
    image: "/projects/image7.jpg",
    bannerImage: "/projects/image7.jpg",
    gallery: [
      "/projects/image7.jpg",
      "/projects/image3.jpg",
      "/projects/image10.jpg",
      "/projects/banner.png"
    ],
    overview: [
      "SSV Padma Heights is an ambitious ongoing residential development in the fast-expanding Peerzadiguda corridor. Incorporating modern architectural aesthetics with high ceilings, spacious balconies, and energy-conscious planning, this project represents the vanguard of Thirumala's current developments.",
      "Equipped with advanced smart-home electrical provisioning, EV charging points, rainwater catchment, and landscaped rooftop leisure spaces, SSV Padma Heights is tailored for modern families investing in tomorrow."
    ],
    highlights: [
      "Fast-Appreciating Location near Uppal & Warangal Highway",
      "Smart Electrical Provisioning & EV Charging Infrastructure",
      "Spacious Double Balconies for Cross Ventilation",
      "Landscaped Terrace Garden & Leisure Sitting Zone",
      "Under Construction with Rigorous Stage-Wise Quality Audits"
    ],
    specifications: [
      {
        title: "Modern Structural Engineering",
        description: "State-of-the-art RCC framed structure with ultra-high strength concrete mix and automated curing protocols."
      },
      {
        title: "Electrical & Smart Ready",
        description: "FRLS fire-retardant concealed copper wiring with distribution boards, miniature circuit breakers (MCBs), and smart home automation conduits."
      },
      {
        title: "Bathrooms",
        description: "Concealed diverters, wall-mounted commodes with soft-close lids, and provision for hot/cold water mixers and exhaust fans."
      }
    ],
    locationAdvantages: [
      { landmark: "Peerzadiguda Municipal Park", distance: "3 Mins / 800 m" },
      { landmark: "Uppal Junction & Metro", distance: "8 Mins / 3.5 km" },
      { landmark: "Asian Cinemas Uppal", distance: "9 Mins / 4.0 km" },
      { landmark: "Infosys & Genpact Campuses", distance: "15 Mins / 7.5 km" }
    ]
  },
  {
    slug: "sv-heights",
    name: "SV Heights",
    tagline: "Modern gated residences taking shape in the vibrant residential neighborhood of Nagole.",
    category: "Residential",
    status: "Ongoing",
    location: "Nagole, Hyderabad",
    address: "Near Nagole Metro Corridor, Nagole, Hyderabad - 500068",
    year: "Target Handover 2025",
    units: "20 Lifestyle Apartments",
    builtUpArea: "29,500 sq.ft",
    floors: "Stilt + 5 Floors",
    configurations: "2 & 3 BHK Homes",
    image: "/projects/image10.jpg",
    bannerImage: "/projects/image10.jpg",
    gallery: [
      "/projects/image10.jpg",
      "/projects/image7.jpg",
      "/projects/image3.jpg",
      "/projects/image1.jpg"
    ],
    overview: [
      "SV Heights in Nagole brings sophisticated design and practical urban convenience together under one roof. Situated in close proximity to the Nagole Metro line, LB Nagar, and the Musi Riverfront developmental zone, this project offers swift connectivity to both the airport corridor and Secunderabad.",
      "The building features large living spaces, expansive windows that capture natural daylight, and earthquake-resistant engineering executed under the direct supervision of veteran civil engineers."
    ],
    highlights: [
      "Walking Proximity to Nagole Metro Transit",
      "Earthquake Resistant RCC Structural Design",
      "Wide Corridors & Premium Granite Lobby Finish",
      "Automatic Elevator with Safety Emergency Lowering",
      "Secure Gated Living with 24/7 Watchman Cabins"
    ],
    specifications: [
      {
        title: "Foundation & Superstructure",
        description: "Deep column foundation designed to seismic zone specifications with solid masonry blockwork."
      },
      {
        title: "Joinery & Hardware",
        description: "Custom engineered wood doors with European hardware fittings; powder-coated aluminium/UPVC windows."
      },
      {
        title: "Water Management",
        description: "Dual overhead tanks for municipal drinking water and borewell utility water, controlled by automated sensor switches."
      }
    ],
    locationAdvantages: [
      { landmark: "Nagole Metro Station", distance: "4 Mins / 1.5 km" },
      { landmark: "LB Nagar Junction", distance: "9 Mins / 3.8 km" },
      { landmark: "Rajiv Gandhi International Airport (via ORR)", distance: "30 Mins / 26 km" },
      { landmark: "Kamineni Hospital", distance: "8 Mins / 3.2 km" }
    ]
  },
  {
    slug: "ssv-krishna-heights",
    name: "SSV Krishna Heights",
    tagline: "Thoughtfully planned residential community in peaceful Parvathapur.",
    category: "Residential",
    status: "Ongoing",
    location: "Parvathapur, Peerzadiguda, Hyderabad",
    address: "Parvathapur Village Road, Peerzadiguda Municipality, Hyderabad - 500098",
    year: "Target Handover 2025",
    units: "18 Well-Ventilated Flats",
    builtUpArea: "25,000 sq.ft",
    floors: "Stilt + 5 Floors",
    configurations: "2 & 3 BHK Budget-Luxury Apartments",
    image: "/projects/image3.jpg",
    bannerImage: "/projects/image3.jpg",
    gallery: [
      "/projects/image3.jpg",
      "/projects/image7.jpg",
      "/projects/image10.jpg",
      "/projects/image5.jpg"
    ],
    overview: [
      "SSV Krishna Heights is crafted for home buyers seeking high-quality construction at honest, value-driven pricing. Situated in the peaceful suburban setting of Parvathapur, it provides a quiet sanctuary from city congestion while keeping key commercial hubs within quick reach.",
      "With sturdy construction, functional interior layouts with minimal circulation wastage, and top-brand fittings, SSV Krishna Heights offers the ideal blend of durability and affordability."
    ],
    highlights: [
      "Honest, Value-Driven Pricing with Zero Compromise on Quality",
      "Peaceful Suburban Environment Free from Heavy Traffic Noise",
      "100% Vastu Certified Unit Layouts",
      "High Quality Brick Masonry & Waterproofing Protection",
      "Approved by Leading Financial Institutions for Home Loans"
    ],
    specifications: [
      {
        title: "RCC Frame",
        description: "Robust column-beam structure built with certified standard steel and ready-mix concrete."
      },
      {
        title: "Plumbing & Piping",
        description: "CPVC pipes for hot & cold supply; UPVC for soil and waste lines with easily accessible inspection chambers."
      },
      {
        title: "Wall Finishes",
        description: "Smooth putty finish on internal walls; water-repellent cement paint on exterior surfaces."
      }
    ],
    locationAdvantages: [
      { landmark: "Parvathapur Main Road", distance: "2 Mins / 400 m" },
      { landmark: "Warangal Highway Junction", distance: "7 Mins / 3.0 km" },
      { landmark: "Uppal Metro Station", distance: "12 Mins / 5.2 km" }
    ]
  }
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
