// components/data/experts.ts

import { user1, user2, user3, user4, user5, user6 } from '@/public';

export type ExpertiseType = 
  | 'ESG Advisory/Strategy'
  | 'MRV (Measurement, Reporting, Verification)'
  | 'ESG Assurance/Audit'
  | 'Carbon Credit Trading'
  | 'Carbon Project Development'
  | 'NEMA Certified EIA Expert'
  | 'Environmental & Social Safeguards'
  | 'Climate Risk & Scenario Modelling'
  | 'SDG Impact Assessment'
  | 'Other';

export type CarbonCreditStage = 
  | 'Planning'
  | 'Validation'
  | 'Implementation'
  | 'Verification'
  | 'Issuance';

export type LocationCategory = 
  | 'Continent'
  | 'Country'
  | 'Region'
  | 'City';

export type AssuranceStandard = 
  | 'ISAE 3000'
  | 'AA1000AS'
  | 'ISO 14064-3'
  | 'Other';

export type CarbonCertification = 
  | 'Vera'
  | 'Gold Standard'
  | 'ART-TREES'
  | 'Other';

export type DiverseOwnershipType = 
  | 'Women-Owned'
  | 'Indigenous-Owned'
  | 'Youth-Owned'
  | 'Local SME'
  | 'Minority-Owned'
  | 'Disability-led business'
  | 'Other';

export interface ProjectReference {
  projectName: string;
  client: string;
  year: string;
  role: string;
  description: string;
}

export interface ProfessionalReference {
  name: string;
  contact: string;
}

export interface Expert {
  // Basic Information
  id: number;
  fullName: string;
  organization: string;
  role: string;
  email: string;
  phone: string;
  linkedin?: string;
  
  // Display fields for listing page
  name: string; // for backward compatibility
  title: string; // for backward compatibility
  company: string; // for backward compatibility
  location: string; // geographic scope
  continent: string; // derived from geographic scope
  category: LocationCategory;
  stage: CarbonCreditStage;
  experience: string; // e.g., "5 Years Experience"
  image: any;
  description: string;
  
  // Service Offerings
  briefDescription: string;
  yearsExperience: number;
  geographicScope: string;
  expertise: ExpertiseType[];
  otherExpertise?: string;
  
  // Previous Work
  previousProjects: ProjectReference[];
  
  // Professional References
  references: ProfessionalReference[];
  
  // Portfolio
  portfolioFile?: {
    name: string;
    url: string;
    type: string;
  };
  
  // NEMA Certification
  isNemaCertified: boolean;
  nemaLicenseNumber?: string;
  nemaExpiryDate?: string;
  nemaCertificateFile?: {
    name: string;
    url: string;
  };
  
  // Certified Assurance Provider
  isAssuranceProvider: boolean;
  assuranceStandard?: AssuranceStandard;
  assuranceStandardOther?: string;
  assuranceCredentialFile?: {
    name: string;
    url: string;
  };
  
  // Carbon Expertise Certification
  carbonCertification?: CarbonCertification;
  carbonOther?: string;
  carbonCertificateFile?: {
    name: string;
    url: string;
  };
  
  // Diversity & Inclusion
  diversityOwnershipPercentage: number;
  isDiversityRegistered?: boolean;
  diversityProgramName?: string;
  diversityProofFile?: {
    name: string;
    url: string;
  };
  
  // Verification & Declaration
  isDiverseSupplier?: boolean;
  diverseOwnershipTypes?: DiverseOwnershipType[];
  otherOwnershipType?: string;
  hasBeenSanctioned?: boolean;
  declarationAccepted: boolean;
  
  // Additional metadata
  registrationDate: string;
  lastUpdated: string;
  isVerified: boolean;
  rating?: number;
  projectsCompleted?: number;
}

// Helper function to generate experience string
const getExperienceString = (years: number): string => {
  return `${years} Year${years !== 1 ? 's' : ''} Experience`;
};

// Derive continent from geographic scope
const getContinentFromScope = (scope: string): string => {
  const scopeLower = scope.toLowerCase();
  if (scopeLower.includes('africa')) return 'Africa';
  if (scopeLower.includes('asia')) return 'Asia';
  if (scopeLower.includes('europe')) return 'Europe';
  if (scopeLower.includes('north america')) return 'North America';
  if (scopeLower.includes('south america')) return 'South America';
  if (scopeLower.includes('oceania')) return 'Oceania';
  if (scopeLower.includes('global')) return 'Global';
  return 'Africa'; // Default
};

// Mock data for experts
export const experts: Expert[] = [
  {
    id: 1,
    fullName: 'John Doe',
    name: 'John Doe',
    organization: 'Eco Solutions',
    company: 'Eco Solutions',
    role: 'Environmental Consultant',
    title: 'Environmental Consultant',
    email: 'iris@ecosolutions.co',
    phone: '+254 712 345 678',
    linkedin: 'https://linkedin.com/in/iriswest',
    
    location: 'East Africa',
    geographicScope: 'East Africa',
    continent: getContinentFromScope('East Africa'),
    category: 'Region',
    stage: 'Implementation',
    yearsExperience: 5,
    experience: getExperienceString(5),
    image: user1,
    description: 'Specialist in carbon credit project development across East Africa with focus on reforestation.',
    briefDescription: 'Specializing in carbon credit project development, environmental impact assessments, and sustainable development strategies across East Africa.',
    
    expertise: ['Carbon Project Development', 'NEMA Certified EIA Expert', 'Environmental & Social Safeguards'],
    
    previousProjects: [
      {
        projectName: 'Kakamega Forest Restoration',
        client: 'Kenya Forest Service',
        year: '2023',
        role: 'Lead Environmental Consultant',
        description: 'Led a team in restoring 500 hectares of indigenous forest, resulting in 50,000+ carbon credits.'
      },
      {
        projectName: 'Lake Victoria Wetland Conservation',
        client: 'World Wildlife Fund',
        year: '2022',
        role: 'Project Coordinator',
        description: 'Coordinated community-based wetland conservation and carbon sequestration project.'
      }
    ],
    
    references: [
      {
        name: 'Dr. James Kamau',
        contact: 'james.k@kfs.go.ke'
      },
      {
        name: 'Sarah Johnson',
        contact: 'sarah.j@wwf.org'
      }
    ],
    
    isNemaCertified: true,
    nemaLicenseNumber: 'NEMA/EIA/12345',
    nemaExpiryDate: '2026-12-31',
    
    isAssuranceProvider: false,
    
    carbonCertification: 'Vera',
    
    diversityOwnershipPercentage: 65,
    isDiversityRegistered: true,
    diversityProgramName: 'Women in Environment',
    
    isDiverseSupplier: true,
    diverseOwnershipTypes: ['Women-Owned', 'Local SME'],
    hasBeenSanctioned: false,
    declarationAccepted: true,
    
    registrationDate: '2024-01-15',
    lastUpdated: '2024-11-28',
    isVerified: true,
    rating: 4.8,
    projectsCompleted: 12
  },
  
  {
    id: 2,
    fullName: 'Iris West',
    name: 'Iris West',
    organization: 'GreenFuture Ltd',
    company: 'GreenFuture Ltd',
    role: 'Carbon Project Lead',
    title: 'Carbon Project Lead',
    email: 'john@greenfuture.co',
    phone: '+254 723 456 789',
    linkedin: 'https://linkedin.com/in/johndoe',
    
    location: 'West Africa',
    geographicScope: 'West Africa',
    continent: getContinentFromScope('West Africa'),
    category: 'Region',
    stage: 'Verification',
    yearsExperience: 8,
    experience: getExperienceString(8),
    image: user2,
    description: 'Expert in mangrove restoration and blue carbon projects. Led 12 successful VERRA registrations.',
    briefDescription: 'Expert in blue carbon projects, mangrove restoration, and coastal ecosystem management with extensive experience in carbon credit verification.',
    
    expertise: ['Carbon Credit Trading', 'Carbon Project Development', 'ESG Assurance/Audit'],
    
    previousProjects: [
      {
        projectName: 'Gazi Bay Mangrove Restoration',
        client: 'Mikoko Pamoja',
        year: '2024',
        role: 'Technical Director',
        description: 'Directed technical aspects of mangrove restoration project generating 30,000+ carbon credits.'
      }
    ],
    
    references: [
      {
        name: 'Prof. Ahmed Hassan',
        contact: 'ahmed.h@university.edu'
      }
    ],
    
    isNemaCertified: true,
    nemaLicenseNumber: 'NEMA/EIA/23456',
    nemaExpiryDate: '2025-06-30',
    
    isAssuranceProvider: true,
    assuranceStandard: 'ISO 14064-3',
    
    carbonCertification: 'Gold Standard',
    
    diversityOwnershipPercentage: 40,
    isDiversityRegistered: false,
    
    isDiverseSupplier: false,
    hasBeenSanctioned: false,
    declarationAccepted: true,
    
    registrationDate: '2024-02-20',
    lastUpdated: '2024-11-25',
    isVerified: true,
    rating: 4.9,
    projectsCompleted: 15
  },
  
  {
    id: 3,
    fullName: 'Alex Johnson',
    name: 'Alex Johnson',
    organization: 'SolarPeak',
    company: 'SolarPeak',
    role: 'Renewable Energy Specialist',
    title: 'Renewable Energy Specialist',
    email: 'alex@solarpeak.com',
    phone: '+1 234 567 8900',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    
    location: 'United States',
    geographicScope: 'North America',
    continent: getContinentFromScope('North America'),
    category: 'Country',
    stage: 'Issuance',
    yearsExperience: 10,
    experience: getExperienceString(10),
    image: user3,
    description: 'Focuses on community-based solar and wind projects with integrated carbon offset programs.',
    briefDescription: 'Renewable energy expert specializing in solar and wind project development with integrated carbon offset mechanisms.',
    
    expertise: ['ESG Advisory/Strategy', 'Carbon Credit Trading', 'Climate Risk & Scenario Modelling'],
    otherExpertise: 'Renewable Energy Integration',
    
    previousProjects: [
      {
        projectName: 'California Solar Farm',
        client: 'California Energy Commission',
        year: '2023',
        role: 'Lead Consultant',
        description: 'Consulted on 100MW solar farm project with carbon offset program.'
      }
    ],
    
    references: [
      {
        name: 'Michael Chen',
        contact: 'michael.c@calenergy.gov'
      }
    ],
    
    isNemaCertified: false,
    
    isAssuranceProvider: false,
    
    carbonCertification: 'Vera',
    
    diversityOwnershipPercentage: 30,
    isDiversityRegistered: true,
    diversityProgramName: 'Minority Business Enterprise',
    
    isDiverseSupplier: true,
    diverseOwnershipTypes: ['Minority-Owned'],
    hasBeenSanctioned: false,
    declarationAccepted: true,
    
    registrationDate: '2024-03-10',
    lastUpdated: '2024-11-20',
    isVerified: true,
    rating: 4.7,
    projectsCompleted: 8
  },
  
  {
    id: 4,
    fullName: 'Emily Brown',
    name: 'Emily Brown',
    organization: 'EarthWorks',
    company: 'EarthWorks',
    role: 'Sustainability Director',
    title: 'Sustainability Director',
    email: 'emily@earthworks.org',
    phone: '+62 812 345 678',
    linkedin: 'https://linkedin.com/in/emilybrown',
    
    location: 'Indonesia',
    geographicScope: 'Southeast Asia',
    continent: getContinentFromScope('Southeast Asia'),
    category: 'Country',
    stage: 'Validation',
    yearsExperience: 7,
    experience: getExperienceString(7),
    image: user4,
    description: 'Leads large-scale afforestation initiatives in Southeast Asia. Gold Standard certified expert.',
    briefDescription: 'Leading large-scale afforestation and reforestation projects in Southeast Asia with Gold Standard certification.',
    
    expertise: ['Carbon Project Development', 'SDG Impact Assessment', 'Environmental & Social Safeguards'],
    
    previousProjects: [
      {
        projectName: 'Borneo Rainforest Conservation',
        client: 'Indonesian Ministry of Environment',
        year: '2024',
        role: 'Project Director',
        description: 'Directed conservation project protecting 10,000 hectares of rainforest.'
      }
    ],
    
    references: [
      {
        name: 'Dr. Sari Wijaya',
        contact: 'sari.w@environment.go.id'
      }
    ],
    
    isNemaCertified: false,
    
    isAssuranceProvider: false,
    
    carbonCertification: 'Gold Standard',
    
    diversityOwnershipPercentage: 55,
    isDiversityRegistered: true,
    diversityProgramName: 'Women Entrepreneurs Network',
    
    isDiverseSupplier: true,
    diverseOwnershipTypes: ['Women-Owned'],
    hasBeenSanctioned: false,
    declarationAccepted: true,
    
    registrationDate: '2024-01-30',
    lastUpdated: '2024-11-22',
    isVerified: true,
    rating: 4.9,
    projectsCompleted: 10
  },
  
  {
    id: 5,
    fullName: 'Michael Glen',
    name: 'Michael Glen',
    organization: 'ClimateAction NGO',
    company: 'ClimateAction NGO',
    role: 'Climate Policy Advisor',
    title: 'Climate Policy Advisor',
    email: 'sarah@climateaction.org',
    phone: '+49 30 123 4567',
    linkedin: 'https://linkedin.com/in/sarahwilson',
    
    location: 'Germany',
    geographicScope: 'Europe',
    continent: getContinentFromScope('Europe'),
    category: 'Country',
    stage: 'Planning',
    yearsExperience: 12,
    experience: getExperienceString(12),
    image: user5,
    description: 'Advises governments and corporations on Article 6 compliance and voluntary carbon markets.',
    briefDescription: 'Climate policy expert advising on Article 6 compliance, voluntary carbon markets, and international climate agreements.',
    
    expertise: ['ESG Advisory/Strategy', 'Climate Risk & Scenario Modelling', 'SDG Impact Assessment'],
    
    previousProjects: [
      {
        projectName: 'EU Carbon Border Adjustment Mechanism',
        client: 'European Commission',
        year: '2023',
        role: 'Policy Advisor',
        description: 'Advised on implementation of CBAM and Article 6 mechanisms.'
      }
    ],
    
    references: [
      {
        name: 'Dr. Klaus Müller',
        contact: 'klaus.m@ec.europa.eu'
      }
    ],
    
    isNemaCertified: false,
    
    isAssuranceProvider: false,
    
    diversityOwnershipPercentage: 70,
    isDiversityRegistered: false,
    
    isDiverseSupplier: true,
    diverseOwnershipTypes: ['Women-Owned'],
    hasBeenSanctioned: false,
    declarationAccepted: true,
    
    registrationDate: '2024-02-15',
    lastUpdated: '2024-11-18',
    isVerified: true,
    rating: 4.8,
    projectsCompleted: 5
  },
  
  {
    id: 6,
    fullName: 'Sarah Wilson',
    name: 'Sarah Wilson',
    organization: 'SoilHealth Co',
    company: 'SoilHealth Co',
    role: 'Regenerative Agriculture Expert',
    title: 'Regenerative Agriculture Expert',
    email: 'michael@soilhealth.co',
    phone: '+55 11 98765 4321',
    linkedin: 'https://linkedin.com/in/michaelglen',
    
    location: 'Brazil',
    geographicScope: 'South America',
    continent: getContinentFromScope('South America'),
    category: 'Country',
    stage: 'Implementation',
    yearsExperience: 6,
    experience: getExperienceString(6),
    image: user6,
    description: 'Pioneer in soil carbon sequestration through regenerative farming practices in Brazil and Argentina.',
    briefDescription: 'Specializing in soil carbon sequestration, regenerative agriculture, and sustainable farming practices.',
    
    expertise: ['Carbon Project Development', 'ESG Assurance/Audit', 'Other'],
    otherExpertise: 'Regenerative Agriculture',
    
    previousProjects: [
      {
        projectName: 'Brazilian Cerrado Soil Carbon',
        client: 'Brazilian Agriculture Ministry',
        year: '2024',
        role: 'Technical Lead',
        description: 'Led soil carbon measurement and verification for 50,000 hectare regenerative farming project.'
      }
    ],
    
    references: [
      {
        name: 'Dr. Carlos Silva',
        contact: 'carlos.s@agricultura.gov.br'
      }
    ],
    
    isNemaCertified: false,
    
    isAssuranceProvider: false,
    
    carbonCertification: 'ART-TREES',
    
    diversityOwnershipPercentage: 45,
    isDiversityRegistered: true,
    diversityProgramName: 'Family Farm Program',
    
    isDiverseSupplier: false,
    hasBeenSanctioned: false,
    declarationAccepted: true,
    
    registrationDate: '2024-03-05',
    lastUpdated: '2024-11-15',
    isVerified: true,
    rating: 4.6,
    projectsCompleted: 7
  }
];

// Helper functions
export const getExpertById = (id: number): Expert | undefined => {
  return experts.find(expert => expert.id === id);
};

export const filterExperts = (filters: {
  location?: string;
  category?: string;
  stage?: string;
  expertise?: string;
  continent?: string;
}): Expert[] => {
  return experts.filter(expert => {
    if (filters.location && filters.location !== 'All' && 
        !expert.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.category && filters.category !== 'All' && expert.category !== filters.category) {
      return false;
    }
    if (filters.stage && filters.stage !== 'All' && expert.stage !== filters.stage) {
      return false;
    }
    if (filters.expertise && filters.expertise !== 'All' && 
        !expert.expertise.includes(filters.expertise as ExpertiseType)) {
      return false;
    }
    if (filters.continent && filters.continent !== 'All' && expert.continent !== filters.continent) {
      return false;
    }
    return true;
  });
};

export const getExpertNames = (): string[] => {
  return experts.map(expert => expert.fullName);
};

export const getExpertiseOptions = (): string[] => {
  const allExpertise = new Set<string>();
  experts.forEach(expert => {
    expert.expertise.forEach(exp => allExpertise.add(exp));
  });
  return Array.from(allExpertise);
};