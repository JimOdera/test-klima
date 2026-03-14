// components/data/projects.ts

import {
  forest1,
  forest2,
  forest3,
  forest4,
  forest5,
  forest6,
  forest7,
  forest8,
  forest9,
  forest10,
} from '@/public';

export type ProjectStatus = 'Under Review' | 'Approved-Pending drawdown' | 'In Progress' | 'Completed';

export interface Project {
  id: number;
  image: any;
  title: string;
  location: string;
  lastUpdated: string;
  categories: string[];
  progress: number;
  status: ProjectStatus;
  galleryImages: any[];
  description?: string;
  lat: number;
  lng: number;
  
  // New fields for additional tabs
  financials?: {
    totalInvestment: number;
    carbonCreditsGenerated: number;
    carbonCreditPrice: number;
    annualRevenue: number;
    roi: number;
    fundingSources: string[];
  };
  ghgData?: {
    annualCO2Sequestration: number;
    totalCO2Sequestrated: number;
    methaneReduction: number;
    nitrousOxideReduction: number;
    co2eTotal: number;
    verificationStandard: string;
    verificationDate: string;
  };
  timeline?: {
    startDate: string;
    estimatedCompletion: string;
    milestones: {
      date: string;
      title: string;
      completed: boolean;
    }[];
  };
  stakeholders?: {
    name: string;
    role: string;
    contribution: string;
  }[];
  impactMetrics?: {
    jobsCreated: number;
    hectaresRestored: number;
    speciesProtected: number;
    communitiesBenefited: number;
    waterProtected: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    image: forest1,
    title: "Mangrove Restoration & Blue Carbon Project",
    location: "Gazi Bay, Kwale County",
    lastUpdated: "10th Nov, 2025",
    categories: ["Blue Carbon", "Mangroves", "Coastal Restoration"],
    progress: 78,
    status: 'In Progress',
    lat: -4.423,
    lng: 39.508,
    galleryImages: [forest1, forest2, forest5, forest8, forest10, forest3, forest6, forest9],
    description: `This project focuses on restoring degraded mangrove ecosystems in Gazi Bay to enhance blue carbon sequestration, protect coastal communities from erosion and storms, and boost marine biodiversity. The initiative combines community-led planting with scientific monitoring to ensure healthy growth and maximum carbon capture, while also creating sustainable livelihoods through eco-tourism and fishery enhancement.`,
    financials: {
      totalInvestment: 1250000,
      carbonCreditsGenerated: 45000,
      carbonCreditPrice: 15.50,
      annualRevenue: 697500,
      roi: 55.8,
      fundingSources: ["Carbon Credits", "Government Grants", "Private Investors", "NGO Funding"]
    },
    ghgData: {
      annualCO2Sequestration: 12000,
      totalCO2Sequestrated: 45000,
      methaneReduction: 250,
      nitrousOxideReduction: 180,
      co2eTotal: 48000,
      verificationStandard: "Verra VCS",
      verificationDate: "15th Oct, 2025"
    },
    timeline: {
      startDate: "March 2023",
      estimatedCompletion: "December 2026",
      milestones: [
        { date: "June 2023", title: "Feasibility Study Completed", completed: true },
        { date: "December 2023", title: "First Planting Phase", completed: true },
        { date: "June 2024", title: "Community Training Complete", completed: true },
        { date: "December 2024", title: "50% Restoration Target", completed: true },
        { date: "June 2025", title: "Carbon Verification", completed: false },
        { date: "December 2026", title: "Project Completion", completed: false }
      ]
    },
    stakeholders: [
      { name: "Local Community Group", role: "Implementation Partner", contribution: "Planting & Maintenance" },
      { name: "Kenya Forest Service", role: "Regulatory Partner", contribution: "Land Access & Permits" },
      { name: "Blue Carbon Institute", role: "Technical Partner", contribution: "Scientific Monitoring" },
      { name: "EcoFund Kenya", role: "Financial Partner", contribution: "Seed Funding & Grants" }
    ],
    impactMetrics: {
      jobsCreated: 45,
      hectaresRestored: 150,
      speciesProtected: 12,
      communitiesBenefited: 3,
      waterProtected: "1.2M liters/day"
    }
  },
  {
    id: 2,
    image: forest2,
    title: "Mikoko Pamoja Community Mangrove Conservation",
    location: "Gazi & Vanga, Kwale County",
    lastUpdated: "18th Nov, 2025",
    categories: ["Community-Led", "Carbon Credits", "Mangroves"],
    progress: 92,
    status: 'In Progress',
    lat: -4.423,
    lng: 39.508,
    galleryImages: [forest2, forest1, forest10, forest4, forest7, forest3, forest9],
    description: `Mikoko Pamoja is a pioneering community-led initiative that protects and regenerates mangrove forests while generating verified carbon credits for sale. Revenues are reinvested into local development projects such as clean water, school infrastructure, and health services, ensuring that conservation directly benefits the people who depend on these ecosystems.`,
    financials: {
      totalInvestment: 850000,
      carbonCreditsGenerated: 32000,
      carbonCreditPrice: 14.75,
      annualRevenue: 472000,
      roi: 48.2,
      fundingSources: ["Carbon Credits", "Community Contributions", "International Donors"]
    },
    ghgData: {
      annualCO2Sequestration: 8500,
      totalCO2Sequestrated: 32000,
      methaneReduction: 180,
      nitrousOxideReduction: 120,
      co2eTotal: 34000,
      verificationStandard: "Plan Vivo",
      verificationDate: "5th Sep, 2025"
    },
    timeline: {
      startDate: "January 2022",
      estimatedCompletion: "October 2025",
      milestones: [
        { date: "March 2022", title: "Community Mobilization", completed: true },
        { date: "August 2022", title: "First Carbon Sale", completed: true },
        { date: "December 2023", title: "School Water Project", completed: true },
        { date: "June 2024", title: "Expansion to Vanga", completed: true },
        { date: "October 2025", title: "Full Project Handover", completed: false }
      ]
    },
    stakeholders: [
      { name: "Mikoko Pamoja CBO", role: "Lead Implementer", contribution: "Project Management" },
      { name: "Plan Vivo Foundation", role: "Standard Setter", contribution: "Certification" },
      { name: "University of Nairobi", role: "Research Partner", contribution: "Monitoring & Evaluation" }
    ],
    impactMetrics: {
      jobsCreated: 28,
      hectaresRestored: 85,
      speciesProtected: 8,
      communitiesBenefited: 2,
      waterProtected: "750K liters/day"
    }
  },
  {
    id: 3,
    image: forest3,
    title: "Mount Kenya Forest Rehabilitation Initiative",
    location: "Nyeri & Meru Counties",
    lastUpdated: "5th Nov, 2025",
    categories: ["Reforestation", "Water Catchment", "Biodiversity"],
    progress: 64,
    status: 'In Progress',
    lat: 0.150,
    lng: 37.308,
    galleryImages: [forest3, forest6, forest9, forest1, forest4, forest7, forest10, forest5, forest8],
    description: `Aiming to restore vital water towers and indigenous forest cover on the slopes of Mount Kenya, this project plants native tree species to improve watershed function, support biodiversity, and strengthen climate resilience. The initiative engages local communities and schools in tree planting and environmental education, fostering long-term stewardship of the region's natural resources.`,
    financials: {
      totalInvestment: 2100000,
      carbonCreditsGenerated: 68000,
      carbonCreditPrice: 12.25,
      annualRevenue: 833000,
      roi: 39.7,
      fundingSources: ["World Bank", "Government of Kenya", "Private Sector", "Bilateral Aid"]
    },
    ghgData: {
      annualCO2Sequestration: 18500,
      totalCO2Sequestrated: 68000,
      methaneReduction: 320,
      nitrousOxideReduction: 240,
      co2eTotal: 72000,
      verificationStandard: "Gold Standard",
      verificationDate: "20th Sep, 2025"
    },
    timeline: {
      startDate: "August 2022",
      estimatedCompletion: "June 2027",
      milestones: [
        { date: "December 2022", title: "Nursery Establishment", completed: true },
        { date: "June 2023", title: "First 10,000 Trees Planted", completed: true },
        { date: "December 2023", title: "Community Training", completed: true },
        { date: "June 2024", title: "25% Target Achieved", completed: true },
        { date: "December 2025", title: "Water Flow Monitoring", completed: false },
        { date: "June 2027", title: "Full Restoration", completed: false }
      ]
    },
    stakeholders: [
      { name: "Mount Kenya Trust", role: "Lead Partner", contribution: "Project Coordination" },
      { name: "Water Resource Authority", role: "Technical Partner", contribution: "Hydrological Monitoring" },
      { name: "Local Schools", role: "Education Partner", contribution: "Environmental Education" },
      { name: "Community Groups", role: "Implementation", contribution: "Planting & Protection" }
    ],
    impactMetrics: {
      jobsCreated: 62,
      hectaresRestored: 320,
      speciesProtected: 18,
      communitiesBenefited: 8,
      waterProtected: "4.5M liters/day"
    }
  },
  {
    id: 4,
    image: forest4,
    title: "Kakamega Forest Indigenous Tree Planting",
    location: "Kakamega County",
    lastUpdated: "22nd Oct, 2025",
    categories: ["Tropical Rainforest", "Biodiversity Hotspot", "Community"],
    progress: 71,
    status: 'Approved-Pending drawdown',
    lat: 0.282,
    lng: 34.768,
    galleryImages: [forest4, forest7, forest2, forest9, forest5, forest10],
    description: `Focused on one of Kenya's last remaining tropical rainforest fragments, this project replants indigenous trees to combat deforestation, protect endangered species, and restore ecological connectivity. Community forest associations are central to the effort, benefiting from non-timber forest products and guided ecotourism opportunities linked to conservation.`,
    financials: {
      totalInvestment: 950000,
      carbonCreditsGenerated: 28000,
      carbonCreditPrice: 13.50,
      annualRevenue: 378000,
      roi: 39.8,
      fundingSources: ["EU Funding", "Conservation NGOs", "Research Grants", "Eco-tourism"]
    },
    ghgData: {
      annualCO2Sequestration: 7500,
      totalCO2Sequestrated: 28000,
      methaneReduction: 150,
      nitrousOxideReduction: 110,
      co2eTotal: 29500,
      verificationStandard: "Verra VCS",
      verificationDate: "10th Aug, 2025"
    },
    timeline: {
      startDate: "April 2023",
      estimatedCompletion: "March 2026",
      milestones: [
        { date: "August 2023", title: "Species Inventory", completed: true },
        { date: "December 2023", title: "First Planting Season", completed: true },
        { date: "June 2024", title: "Eco-tourism Training", completed: true },
        { date: "December 2024", title: "40% Restoration", completed: true },
        { date: "March 2026", title: "Project Completion", completed: false }
      ]
    },
    stakeholders: [
      { name: "Kakamega Forest CFA", role: "Community Partner", contribution: "Forest Management" },
      { name: "National Museums of Kenya", role: "Research Partner", contribution: "Biodiversity Monitoring" },
      { name: "BirdLife International", role: "Conservation Partner", contribution: "Bird Protection" }
    ],
    impactMetrics: {
      jobsCreated: 34,
      hectaresRestored: 95,
      speciesProtected: 25,
      communitiesBenefited: 6,
      waterProtected: "1.8M liters/day"
    }
  },
  {
    id: 5,
    image: forest5,
    title: "Maasai Mara Conservancies Reforestation",
    location: "Narok County",
    lastUpdated: "14th Nov, 2025",
    categories: ["Wildlife Corridors", "Agroforestry", "Community Conservancies"],
    progress: 55,
    status: 'In Progress',
    lat: -1.406,
    lng: 35.126,
    galleryImages: [forest5, forest8, forest3, forest10, forest1, forest6, forest9, forest4, forest2],
    description: `Integrating tree planting within wildlife conservancies, this project establishes native trees and agroforestry systems to restore degraded rangelands, create wildlife corridors, and improve livelihoods for Maasai communities. The approach balances ecosystem recovery with sustainable grazing and carbon income, supporting both people and iconic savannah species.`,
    financials: {
      totalInvestment: 1800000,
      carbonCreditsGenerated: 52000,
      carbonCreditPrice: 14.00,
      annualRevenue: 728000,
      roi: 40.4,
      fundingSources: ["Tourism Revenue", "Carbon Credits", "Conservation Trusts", "Government"]
    },
    ghgData: {
      annualCO2Sequestration: 11000,
      totalCO2Sequestrated: 52000,
      methaneReduction: 220,
      nitrousOxideReduction: 160,
      co2eTotal: 55000,
      verificationStandard: "Plan Vivo",
      verificationDate: "30th Sep, 2025"
    },
    timeline: {
      startDate: "June 2023",
      estimatedCompletion: "December 2027",
      milestones: [
        { date: "October 2023", title: "Conservancy Agreements", completed: true },
        { date: "March 2024", title: "First Tree Nurseries", completed: true },
        { date: "September 2024", title: "Wildlife Corridor Mapping", completed: true },
        { date: "December 2025", title: "Agroforestry Training", completed: false },
        { date: "June 2027", title: "Carbon Verification", completed: false }
      ]
    },
    stakeholders: [
      { name: "Mara Conservancies", role: "Land Managers", contribution: "Land & Management" },
      { name: "Maasai Community", role: "Primary Stakeholders", contribution: "Implementation" },
      { name: "Tourism Operators", role: "Funding Partners", contribution: "Revenue Sharing" },
      { name: "Wildlife Services", role: "Technical Partner", contribution: "Wildlife Monitoring" }
    ],
    impactMetrics: {
      jobsCreated: 58,
      hectaresRestored: 420,
      speciesProtected: 15,
      communitiesBenefited: 12,
      waterProtected: "3.2M liters/day"
    }
  },
  {
    id: 6,
    image: forest6,
    title: "Aberdare Range Cloud Forest Protection",
    location: "Nyandarua & Murang'a Counties",
    lastUpdated: "27th Nov, 2025",
    categories: ["Water Towers", "REDD+", "Indigenous Forest"],
    progress: 49,
    status: 'Under Review',
    lat: -0.567,
    lng: 36.700,
    galleryImages: [forest6, forest3, forest9, forest2, forest7, forest10, forest1, forest5],
    description: `This REDD+ initiative protects the vital Aberdare cloud forest, reducing emissions from deforestation and forest degradation while safeguarding water sources for millions. Activities include patrols, community-based monitoring, and alternative livelihood programs to reduce pressure on the forest, ensuring its biodiversity and hydrological services are preserved.`,
    financials: {
      totalInvestment: 3200000,
      carbonCreditsGenerated: 0,
      carbonCreditPrice: 0,
      annualRevenue: 0,
      roi: 0,
      fundingSources: ["UNDP", "Government of Kenya", "Bilateral Donors", "Conservation Funds"]
    },
    ghgData: {
      annualCO2Sequestration: 0,
      totalCO2Sequestrated: 0,
      methaneReduction: 0,
      nitrousOxideReduction: 0,
      co2eTotal: 0,
      verificationStandard: "Pending",
      verificationDate: "TBD"
    },
    timeline: {
      startDate: "January 2024",
      estimatedCompletion: "December 2028",
      milestones: [
        { date: "March 2024", title: "Feasibility Study", completed: true },
        { date: "August 2024", title: "Stakeholder Consultations", completed: true },
        { date: "December 2024", title: "Funding Approval", completed: false },
        { date: "June 2025", title: "Implementation Start", completed: false },
        { date: "December 2028", title: "Full Protection", completed: false }
      ]
    },
    stakeholders: [
      { name: "Kenya Wildlife Service", role: "Lead Agency", contribution: "Forest Protection" },
      { name: "Water Resource Authority", role: "Technical Partner", contribution: "Water Monitoring" },
      { name: "Local Communities", role: "Guardians", contribution: "Patrols & Monitoring" }
    ],
    impactMetrics: {
      jobsCreated: 0,
      hectaresRestored: 0,
      speciesProtected: 35,
      communitiesBenefited: 15,
      waterProtected: "8.2M liters/day"
    }
  },
  {
    id: 7,
    image: forest7,
    title: "Lake Victoria Basin Riparian Restoration",
    location: "Kisumu & Siaya Counties",
    lastUpdated: "20th Nov, 2025",
    categories: ["Wetlands", "Water Quality", "Community"],
    progress: 83,
    status: 'In Progress',
    lat: -0.091,
    lng: 34.768,
    galleryImages: [forest7, forest4, forest1, forest8, forest5, forest10],
    description: `Targeting the heavily impacted shores of Lake Victoria, this project restores riparian buffers and wetlands to filter agricultural runoff, improve water quality, and enhance fish breeding habitats. Local fishing and farming communities lead the planting of native vegetation, which also stabilizes shorelines and provides materials for handicrafts and construction.`,
    financials: {
      totalInvestment: 680000,
      carbonCreditsGenerated: 18000,
      carbonCreditPrice: 11.25,
      annualRevenue: 202500,
      roi: 29.8,
      fundingSources: ["Lake Victoria Basin Commission", "Fisheries Department", "Community Contributions"]
    },
    ghgData: {
      annualCO2Sequestration: 5200,
      totalCO2Sequestrated: 18000,
      methaneReduction: 420,
      nitrousOxideReduction: 310,
      co2eTotal: 22500,
      verificationStandard: "Verified Carbon Standard",
      verificationDate: "5th Nov, 2025"
    },
    timeline: {
      startDate: "October 2022",
      estimatedCompletion: "September 2025",
      milestones: [
        { date: "February 2023", title: "Baseline Water Testing", completed: true },
        { date: "July 2023", title: "First Planting Phase", completed: true },
        { date: "December 2023", title: "Fish Breeding Improvement", completed: true },
        { date: "June 2024", title: "75% Restoration", completed: true },
        { date: "September 2025", title: "Project Handover", completed: false }
      ]
    },
    stakeholders: [
      { name: "Fishing Communities", role: "Primary Beneficiaries", contribution: "Planting & Maintenance" },
      { name: "County Governments", role: "Local Partners", contribution: "Logistics Support" },
      { name: "Research Institutions", role: "Monitoring", contribution: "Water Quality Testing" }
    ],
    impactMetrics: {
      jobsCreated: 42,
      hectaresRestored: 65,
      speciesProtected: 8,
      communitiesBenefited: 9,
      waterProtected: "2.1M liters/day"
    }
  },
  {
    id: 8,
    image: forest8,
    title: "Chyulu Hills REDD+ Carbon Project",
    location: "Makueni & Kajiado Counties",
    lastUpdated: "25th Nov, 2025",
    categories: ["REDD+", "Wildlife", "Volcanic Landscape"],
    progress: 88,
    status: 'Completed',
    lat: -2.606,
    lng: 37.883,
    galleryImages: [forest8, forest5, forest10, forest2, forest9, forest6, forest1, forest3],
    description: `This completed REDD+ project successfully prevented deforestation across the Chyulu Hills ecosystem, protecting vital wildlife corridors between Amboseli and Tsavo parks. Verified carbon revenues funded community water projects, school scholarships, and rangeland management, demonstrating a sustainable model for conservation and development in arid and semi-arid lands.`,
    financials: {
      totalInvestment: 2400000,
      carbonCreditsGenerated: 95000,
      carbonCreditPrice: 16.80,
      annualRevenue: 1596000,
      roi: 66.5,
      fundingSources: ["Carbon Credits", "Conservation Trust", "Tourism Revenue", "Donor Funding"]
    },
    ghgData: {
      annualCO2Sequestration: 0,
      totalCO2Sequestrated: 95000,
      methaneReduction: 380,
      nitrousOxideReduction: 280,
      co2eTotal: 100000,
      verificationStandard: "Verra VCS",
      verificationDate: "15th Jul, 2025"
    },
    timeline: {
      startDate: "January 2019",
      estimatedCompletion: "December 2024",
      milestones: [
        { date: "June 2019", title: "Project Design", completed: true },
        { date: "December 2020", title: "First Verification", completed: true },
        { date: "June 2022", title: "Community Projects", completed: true },
        { date: "December 2023", title: "Final Verification", completed: true },
        { date: "December 2024", title: "Project Completed", completed: true }
      ]
    },
    stakeholders: [
      { name: "Chyulu Hills Trust", role: "Project Manager", contribution: "Overall Coordination" },
      { name: "Maasai Community", role: "Landowners", contribution: "Conservation Agreements" },
      { name: "Tourism Partners", role: "Revenue Source", contribution: "Carbon Credit Sales" }
    ],
    impactMetrics: {
      jobsCreated: 72,
      hectaresRestored: 0,
      speciesProtected: 22,
      communitiesBenefited: 18,
      waterProtected: "5.6M liters/day"
    }
  },
  {
    id: 9,
    image: forest9,
    title: "Arabuko Sokoke Forest Conservation",
    location: "Kilifi County",
    lastUpdated: "12th Nov, 2025",
    categories: ["Coastal Forest", "Endangered Species", "Eco-Tourism"],
    progress: 67,
    status: 'In Progress',
    lat: -3.266,
    lng: 39.975,
    galleryImages: [forest9, forest1, forest4, forest7, forest10, forest3, forest6],
    description: `Centered on Kenya's largest remaining fragment of coastal dry forest, this project protects habitat for endangered birds and mammals like the Sokoke Scops Owl and Golden-rumped Elephant Shrew. Conservation is driven by community eco-guards and linked to eco-tourism, beekeeping, and butterfly farming, providing tangible incentives to keep the forest intact.`,
    financials: {
      totalInvestment: 420000,
      carbonCreditsGenerated: 12000,
      carbonCreditPrice: 13.25,
      annualRevenue: 159000,
      roi: 37.9,
      fundingSources: ["Eco-tourism", "Carbon Credits", "Research Grants", "Bird Conservation"]
    },
    ghgData: {
      annualCO2Sequestration: 3200,
      totalCO2Sequestrated: 12000,
      methaneReduction: 85,
      nitrousOxideReduction: 60,
      co2eTotal: 13000,
      verificationStandard: "Gold Standard",
      verificationDate: "28th Aug, 2025"
    },
    timeline: {
      startDate: "March 2023",
      estimatedCompletion: "February 2026",
      milestones: [
        { date: "July 2023", title: "Eco-guard Training", completed: true },
        { date: "December 2023", title: "Butterfly Farming Start", completed: true },
        { date: "June 2024", title: "Bird Monitoring Program", completed: true },
        { date: "December 2024", title: "Eco-lodge Opening", completed: false },
        { date: "February 2026", title: "Sustainable Financing", completed: false }
      ]
    },
    stakeholders: [
      { name: "Arabuko Sokoke Forest Guides", role: "Conservation Partners", contribution: "Patrols & Guiding" },
      { name: "BirdLife International", role: "Technical Partner", contribution: "Bird Conservation" },
      { name: "Local Entrepreneurs", role: "Business Partners", contribution: "Eco-tourism Services" }
    ],
    impactMetrics: {
      jobsCreated: 38,
      hectaresRestored: 0,
      speciesProtected: 45,
      communitiesBenefited: 5,
      waterProtected: "950K liters/day"
    }
  },
  {
    id: 10,
    image: forest10,
    title: "Tana Delta Wetland & Mangrove Recovery",
    location: "Tana River County",
    lastUpdated: "27th Nov, 2025",
    categories: ["Ramsar Site", "Mangroves", "Flood Mitigation"],
    progress: 41,
    status: 'Approved-Pending drawdown',
    lat: -2.316,
    lng: 40.316,
    galleryImages: [forest10, forest2, forest6, forest8, forest5, forest1, forest9, forest4, forest7],
    description: `Aimed at restoring the ecologically critical Tana Delta Ramsar site, this project replants mangroves and freshwater wetland vegetation to enhance flood mitigation, improve fisheries, and store carbon. The initiative works closely with pastoralist and farming communities to develop climate-resilient land-use plans that reduce conflict and promote ecosystem health.`,
    financials: {
      totalInvestment: 1560000,
      carbonCreditsGenerated: 0,
      carbonCreditPrice: 0,
      annualRevenue: 0,
      roi: 0,
      fundingSources: ["Ramsar Convention", "Climate Funds", "Government of Kenya", "UNDP"]
    },
    ghgData: {
      annualCO2Sequestration: 0,
      totalCO2Sequestrated: 0,
      methaneReduction: 0,
      nitrousOxideReduction: 0,
      co2eTotal: 0,
      verificationStandard: "Pending",
      verificationDate: "TBD"
    },
    timeline: {
      startDate: "May 2024",
      estimatedCompletion: "April 2028",
      milestones: [
        { date: "August 2024", title: "Community Consultations", completed: true },
        { date: "December 2024", title: "Nursery Establishment", completed: true },
        { date: "June 2025", title: "First Planting Season", completed: false },
        { date: "December 2026", title: "Flood Protection", completed: false },
        { date: "April 2028", title: "Carbon Verification", completed: false }
      ]
    },
    stakeholders: [
      { name: "Pastoralist Communities", role: "Land Users", contribution: "Grazing Management" },
      { name: "Fishing Communities", role: "Beneficiaries", contribution: "Mangrove Planting" },
      { name: "County Government", role: "Facilitator", contribution: "Conflict Resolution" }
    ],
    impactMetrics: {
      jobsCreated: 0,
      hectaresRestored: 0,
      speciesProtected: 28,
      communitiesBenefited: 14,
      waterProtected: "6.8M liters/day"
    }
  },
];