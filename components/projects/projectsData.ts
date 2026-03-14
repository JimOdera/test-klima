import { dummy1, dummy2, dummy3, dummy4, dummy5, dummy6 } from '@/public'
import { StaticImageData } from 'next/image'

export type StatusKey = 'Active' | 'Completed' | 'Pending Approval' | 'Rejected' | 'Draft'

export type Project = {
    id: number
    image: StaticImageData
    projectId: string
    lastUpdated: string
    title: string
    location: string
    carbonRating: string
    status: string
    coBenefits: number
    categories: string[]
    statusLabel: StatusKey
    progress: number
}

export type Draft = {
    id: number
    image: StaticImageData
    title: string
    location: string
    carbonRating: string
    coBenefits: number
    categories: string[]
}

export const ALL_PROJECTS: Project[] = [
    {
        id: 1,
        image: dummy1,
        projectId: '1328',
        lastUpdated: "Jun 4, '25",
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        carbonRating: 'BB',
        status: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Active',
        progress: 45,
    },
    {
        id: 2,
        image: dummy2,
        projectId: '2341',
        lastUpdated: "Jun 4, '25",
        title: 'Forest Conservation REDD++ Project',
        location: 'Kampala, East Africa',
        carbonRating: 'BB',
        status: 'BB',
        coBenefits: 17,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Completed',
        progress: 100,
    },
    {
        id: 3,
        image: dummy3,
        projectId: '1321',
        lastUpdated: "Jun 4, '25",
        title: 'Success Clean Cookstoves',
        location: 'Mtwapa, East Africa',
        carbonRating: 'BB',
        status: 'BB',
        coBenefits: 9,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Pending Approval',
        progress: 0,
    },
    {
        id: 4,
        image: dummy4,
        projectId: '1242',
        lastUpdated: "Jun 4, '25",
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        carbonRating: 'BB',
        status: 'BB',
        coBenefits: 17,
        categories: ['Waste Management'],
        statusLabel: 'Completed',
        progress: 100,
    },
    {
        id: 5,
        image: dummy5,
        projectId: '1121',
        lastUpdated: "Jun 4, '25",
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        carbonRating: 'BB',
        status: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Active',
        progress: 45,
    },
    {
        id: 6,
        image: dummy6,
        projectId: '5432',
        lastUpdated: "Jun 4, '25",
        title: 'Sustainable Solar Power Coverage System Planning',
        location: 'Kiambu, East Africa',
        carbonRating: 'BB',
        status: 'BB',
        coBenefits: 17,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Active',
        progress: 45,
    },
]

export const ALL_DRAFTS: Draft[] = [
    {
        id: 1,
        image: dummy1,
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        carbonRating: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered', 'Forestry', 'Solar'],
    },
    {
        id: 2,
        image: dummy2,
        title: 'Forest Conservation REDD++ Project',
        location: 'Kampala, East Africa',
        carbonRating: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
    },
    {
        id: 3,
        image: dummy3,
        title: 'Success Clean Cookstoves',
        location: 'Mtwapa, East Africa',
        carbonRating: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered', 'Solar'],
    },
]

export type FilterValues = {
    Ratings: string
    Category: string
    Location: string
    'Sort By': string
}

export function applyFilters(projects: Project[], filters: FilterValues): Project[] {
    let result = [...projects]

    if (filters.Ratings !== 'All') {
        result = result.filter(p => p.carbonRating === filters.Ratings)
    }

    if (filters.Category !== 'Any') {
        result = result.filter(p => p.categories.includes(filters.Category))
    }

    if (filters.Location !== 'Any') {
        result = result.filter(p => p.location.includes(filters.Location))
    }

    switch (filters['Sort By']) {
        case 'A-Z':
            result.sort((a, b) => a.title.localeCompare(b.title))
            break
        case 'Z-A':
            result.sort((a, b) => b.title.localeCompare(a.title))
            break
        case 'Oldest':
            result.reverse()
            break
        case 'Latest':
        default:
            break
    }

    return result
}

export function applyDraftFilters(drafts: Draft[], filters: FilterValues): Draft[] {
    let result = [...drafts]

    if (filters.Ratings !== 'All') {
        result = result.filter(d => d.carbonRating === filters.Ratings)
    }

    if (filters.Category !== 'Any') {
        result = result.filter(d => d.categories.includes(filters.Category))
    }

    if (filters.Location !== 'Any') {
        result = result.filter(d => d.location.includes(filters.Location))
    }

    switch (filters['Sort By']) {
        case 'A-Z':
            result.sort((a, b) => a.title.localeCompare(b.title))
            break
        case 'Z-A':
            result.sort((a, b) => b.title.localeCompare(a.title))
            break
        case 'Oldest':
            result.reverse()
            break
        case 'Latest':
        default:
            break
    }

    return result
}