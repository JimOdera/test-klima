'use client'

import FloatingHelpButton from '@/components/FloatingHelpButton'
import Header from '@/components/Header'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import ProjectsList from '@/components/projects/ProjectsList'
import DraftsGrid from '@/components/projects/DraftsGrid'
import DraftsList from '@/components/projects/DraftsList'
import { ALL_PROJECTS, ALL_DRAFTS, applyFilters, applyDraftFilters, FilterValues } from '@/components/projects/projectsData'
import { search, upField } from '@/public'
import { ChevronDown, CirclePlus, LayoutGrid, ListFilter, Logs } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState, useMemo } from 'react'

const TabContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6">
        {children}
    </div>
)

const GreenPortfolioContent = () => (
    <TabContainer>
        <div className="w-full h-full min-h-60 bg-white -mt-14"></div>
    </TabContainer>
)

const TransactionsContent = () => (
    <TabContainer>
        <div className="w-full h-full min-h-60 bg-white -mt-14"></div>
    </TabContainer>
)

const MarketPlaceContent = () => (
    <TabContainer>
        <div className="w-full h-full min-h-60 bg-white -mt-14"></div>
    </TabContainer>
)

const STATIC_TABS = [
    { id: 'green-portfolio', label: 'Green Portfolio', badge: null },
    { id: 'my-projects', label: 'My Projects', badge: 12 },
    { id: 'drafts', label: 'Drafts', badge: 8 },
    { id: 'transactions', label: 'Transactions', badge: null },
    { id: 'market-place', label: 'Market Place', badge: null },
]

const FILTERS_CONFIG = [
    { label: 'Ratings', options: ['All', 'A', 'AA', 'AAA', 'B', 'BB', 'BBB'] },
    { label: 'Category', options: ['Any', 'Avoidance', 'Engineered', 'Forestry', 'Solar', 'Waste Management'] },
    { label: 'Location', options: ['Any', 'East Africa', 'West Africa', 'South Africa', 'North Africa'] },
    { label: 'Sort By', options: ['Latest', 'Oldest', 'A-Z', 'Z-A'] },
]

const page = () => {
    const [activeTab, setActiveTab] = useState(() =>
        typeof window !== 'undefined' ? (localStorage.getItem('projects:activeTab') ?? 'my-projects') : 'my-projects'
    )
    const [view, setView] = useState<'grid' | 'list'>(() => {
        if (typeof window === 'undefined') return 'grid'
        const tab = localStorage.getItem('projects:activeTab') ?? 'my-projects'
        const saved = localStorage.getItem(`projects:view:${tab}`) as 'grid' | 'list' | null
        return saved ?? (tab === 'drafts' ? 'list' : 'grid')
    })
    const [filtersOpen, setFiltersOpen] = useState(true)
    const [activeFilter, setActiveFilter] = useState<string | null>(null)
    const [filterValues, setFilterValues] = useState<FilterValues>({
        Ratings: 'All',
        Category: 'Any',
        Location: 'Any',
        'Sort By': 'Latest',
    })

    const filtersApplied =
        filterValues.Ratings !== 'All' ||
        filterValues.Category !== 'Any' ||
        filterValues.Location !== 'Any' ||
        filterValues['Sort By'] !== 'Latest'

    const clearFilters = () => {
        setFilterValues({ Ratings: 'All', Category: 'Any', Location: 'Any', 'Sort By': 'Latest' })
        setActiveFilter(null)
    }

    const filterRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
                setActiveFilter(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const filteredProjects = useMemo(() => applyFilters(ALL_PROJECTS, filterValues), [filterValues])
    const filteredDrafts = useMemo(() => applyDraftFilters(ALL_DRAFTS, filterValues), [filterValues])

    const handleTabChange = (id: string) => {
        setActiveTab(id)
        localStorage.setItem('projects:activeTab', id)
        const tabViewKey = `projects:view:${id}`
        const saved = localStorage.getItem(tabViewKey) as 'grid' | 'list' | null
        const defaultView: 'grid' | 'list' = id === 'drafts' ? 'list' : 'grid'
        setView(saved ?? defaultView)
    }

    const handleViewChange = (v: 'grid' | 'list') => {
        setView(v)
        localStorage.setItem(`projects:view:${activeTab}`, v)
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'green-portfolio': return <GreenPortfolioContent />
            case 'my-projects':
                return (
                    <TabContainer>
                        <div className="w-full h-full min-h-60 -mt-14">
                            {view === 'grid'
                                ? <ProjectsGrid projects={filteredProjects} />
                                : <ProjectsList projects={filteredProjects} />
                            }
                        </div>
                    </TabContainer>
                )
            case 'drafts':
                return (
                    <TabContainer>
                        <div className="w-full h-full min-h-60 -mt-14">
                            {view === 'grid'
                                ? <DraftsGrid drafts={filteredDrafts} />
                                : <DraftsList drafts={filteredDrafts} />
                            }
                        </div>
                    </TabContainer>
                )
            case 'transactions': return <TransactionsContent />
            case 'market-place': return <MarketPlaceContent />
            default: return null
        }
    }

    return (
        <>
            <Header />

            <header className="w-full h-58 bg-[#0b2e34] text-white">
                <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <div className='flex flex-col py-6 gap-2'>
                        {/* title */}
                        <div className="flex items-center gap-2">
                            <Image src={upField} alt='upfield' />
                            <h1 className='text-4xl font-semibold'>Upfield</h1>
                        </div>

                        <div className="flex flex-col gap-2 py-2">
                            {/* Tabs row */}
                            <div className="flex items-center justify-between gap-2 border-b border-white/40 text-xs">
                                <div className="flex items-center gap-4">
                                    {STATIC_TABS.map(tab => {
                                        const isActive = activeTab === tab.id
                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() => handleTabChange(tab.id)}
                                                className={`py-4 border-b-2 flex items-center gap-1 font-semibold transition-colors
                                                    ${isActive
                                                        ? 'border-white text-white'
                                                        : 'border-transparent text-[#747474] hover:text-white/70'
                                                    }`}
                                            >
                                                {tab.label}
                                                {tab.badge !== null && (
                                                    <span className="px-2.5 py-0.2 text-xs font-bold rounded-full bg-[#D1E39E] text-black">
                                                        {tab.badge}
                                                    </span>
                                                )}
                                            </button>
                                        )
                                    })}
                                </div>

                                <div className="flex flex-col md:flex-row items-center gap-4 pb-2">
                                    <div className={`w-full sm:w-80 flex border-2 border-[#044D5E] rounded-full items-center transition-colors duration-200`}>
                                        <Image src={search} alt="search" width={20} height={20} className="ml-2 shrink-0" />
                                        <input
                                            type="search"
                                            placeholder="Search projects..."
                                            className="bg-transparent px-3 py-2 text-xs focus:outline-none w-full placeholder:text-[#82AFB9] font-medium"
                                        />
                                    </div>
                                    <Link href='/projects/form' className="bg-[#044D5E] border border-[#044D5E] text-xs flex items-center gap-2 px-3 py-2 rounded-full whitespace-nowrap hover:bg-[#055d74] transition-colors cursor-pointer">
                                        <CirclePlus size={18} />
                                        Create Project
                                    </Link>
                                </div>
                            </div>

                            {/* Filters row */}
                            <div className='flex items-center justify-between gap-2'>
                                <div className="flex items-center gap-2" ref={filterRef}>
                                    {/* Toggle button */}
                                    <button
                                        onClick={() => { setFiltersOpen(o => !o); setActiveFilter(null) }}
                                        className={`border-2 border-[#044D5E] p-2.5 rounded-full transition-colors cursor-pointer ${filtersOpen ? 'text-white' : 'bg-[#044D5E] text-white'}`}
                                    >
                                        <ListFilter size={14} />
                                    </button>

                                    {filtersOpen && FILTERS_CONFIG.map(filter => {
                                        const isOpen = activeFilter === filter.label
                                        const value = filterValues[filter.label as keyof FilterValues]
                                        return (
                                            <div key={filter.label} className="relative">
                                                <button
                                                    onClick={() => setActiveFilter(isOpen ? null : filter.label)}
                                                    className="border-2 border-[#044D5E] text-[#82AFB9] flex items-center justify-between gap-2 w-38 px-4 py-1.5 rounded-full text-xs transition-colors relative cursor-pointer"
                                                >
                                                    <span className="truncate">
                                                        {filter.label}: <span className='font-bold text-white'>{value}</span>
                                                    </span>
                                                    <ChevronDown
                                                        size={32}
                                                        className={`absolute -bottom-2.5 -right-2 transition-transform duration-200 text-[#044D5E] ${isOpen ? 'rotate-180' : ''}`}
                                                    />
                                                </button>

                                                {isOpen && (
                                                    <div className="absolute top-full left-0 mt-3 bg-[#0b2e34] border border-[#044D5E] rounded-xl shadow-lg z-50 py-1 min-w-[160px]">
                                                        {filter.options.map(opt => (
                                                            <button
                                                                key={opt}
                                                                onClick={() => {
                                                                    setFilterValues(prev => ({ ...prev, [filter.label]: opt }))
                                                                    setActiveFilter(null)
                                                                }}
                                                                className={`w-full text-left px-4 py-2 text-xs hover:bg-[#044D5E] transition-colors
                                                                    ${value === opt ? 'text-white font-bold bg-[#044D5E]' : 'text-White'}`}
                                                            >
                                                                {opt}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}

                                    {filtersApplied && (
                                        <button
                                            onClick={clearFilters}
                                            className="border-2 px-4 py-2 border-[#044D5E] hover:bg-white/5 rounded-full transition-colors cursor-pointer text-xs"
                                        >
                                            Clear filters
                                        </button>
                                    )}
                                </div>

                                <div className="flex items-center gap-1 rounded-full border-2 border-[#044D5E] px-1.5 py-1">
                                    <button
                                        onClick={() => handleViewChange('grid')}
                                        className={`p-1.5 rounded-full cursor-pointer transition-colors ${view === 'grid' ? 'bg-white text-black' : 'text-[#82AFB9]'}`}
                                    >
                                        <LayoutGrid size={16} strokeWidth={2} />
                                    </button>
                                    <button
                                        onClick={() => handleViewChange('list')}
                                        className={`p-1.5 rounded-full cursor-pointer transition-colors ${view === 'list' ? 'bg-white text-black' : 'text-[#82AFB9]'}`}
                                    >
                                        <Logs size={16} strokeWidth={2} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="w-full bg-[#f7f6f0] h-full md:min-h-[70vh]">
                {renderContent()}
            </section>

            <FloatingHelpButton />
        </>
    )
}

export default page