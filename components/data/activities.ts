// components/data/activities.ts

export interface ActivityCardData {
  id: number;
  title: string;
  category: string;
  sdgs?: string;
  sdgImages?: string[];
  status: string;
  stakeholders?: string;
  method?: string;
  hasProgress?: boolean;
  progress?: number;
  location?: string;
  locationCategory?: string;
  carbonStage?: string;
  expert?: string;
}

export const activityCards: ActivityCardData[] = [
  { 
    id: 1, 
    title: 'Social Impact Activity', 
    category: 'Social Impact', 
    sdgs: '2', 
    sdgImages: ['/assets/sdg/sdg2.png'],
    status: 'No Resolutions', 
    location: 'Africa', 
    locationCategory: 'Continent', 
    carbonStage: 'Implementation', 
    expert: 'John Smith' 
  },
  { 
    id: 2, 
    title: 'Environmental Impact Activity', 
    category: 'Environmental Impact', 
    sdgs: '13', 
    sdgImages: ['/assets/sdg/sdg13.png'],
    status: 'Below Standard', 
    hasProgress: true, 
    progress: 45, 
    location: 'Asia', 
    locationCategory: 'Region', 
    carbonStage: 'Verification', 
    expert: 'Jane Doe' 
  },
  { 
    id: 3, 
    title: 'Stakeholder Webinar', 
    category: 'Stakeholder Engagement', 
    stakeholders: 'Investors', 
    method: 'ESG Forums', 
    status: 'Resolutions Available', 
    location: 'Europe', 
    locationCategory: 'Country', 
    carbonStage: 'Planning', 
    expert: 'Alex Johnson' 
  },
  { 
    id: 4, 
    title: 'Material Topics', 
    category: 'Material Topic', 
    sdgs: '5', 
    sdgImages: ['/assets/sdg/sdg5.png'],
    status: 'Meets Standard', 
    location: 'North America', 
    locationCategory: 'City', 
    carbonStage: 'Issuance', 
    expert: 'Emily Brown' 
  },
  { 
    id: 5, 
    title: 'Human Rights', 
    category: 'Human Rights', 
    sdgs: '8,17,14', 
    sdgImages: ['/assets/sdg/sdg8.png', '/assets/sdg/sdg17.png', '/assets/sdg/sdg14.png'],
    status: 'Yes', 
    location: 'South America', 
    locationCategory: 'Country', 
    carbonStage: 'Validation', 
    expert: 'Sarah Wilson' 
  },
  { 
    id: 6, 
    title: 'Waste Management', 
    category: 'Waste & Circular Economy', 
    sdgs: '12', 
    sdgImages: ['/assets/sdg/sdg12.png'],
    status: 'On Track', 
    location: 'Oceania', 
    locationCategory: 'Region', 
    carbonStage: 'Implementation', 
    expert: 'John Smith' 
  },
  { 
    id: 7, 
    title: 'E&S Compliance', 
    category: 'Environmental & Social', 
    status: 'Compliant', 
    location: 'Europe', 
    locationCategory: 'Continent', 
    carbonStage: 'Verification', 
    expert: 'Jane Doe' 
  },
  { 
    id: 8, 
    title: 'Custom Metric Tracker', 
    category: 'Reporting & Metrics', 
    status: 'Active', 
    location: 'North America', 
    locationCategory: 'Country', 
    carbonStage: 'Planning', 
    expert: 'Alex Johnson' 
  },
  { 
    id: 9, 
    title: 'Procurement Spend Diversity', 
    category: 'Supply Chain', 
    sdgs: '8,10', 
    sdgImages: ['/assets/sdg/sdg8.png', '/assets/sdg/sdg10.png'],
    status: 'Meets Standard', 
    location: 'Asia', 
    locationCategory: 'Region', 
    carbonStage: 'Validation', 
    expert: 'Emily Brown' 
  },
];