'use client'

import FloatingHelpButton from '@/components/FloatingHelpButton'
import Header from '@/components/Header'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import ProjectsList from '@/components/projects/ProjectsList'
import DraftsGrid from '@/components/projects/DraftsGrid'
import DraftsList from '@/components/projects/DraftsList'
import { search, upField } from '@/public'
import { ChevronDown, CirclePlus, LayoutGrid, ListFilter, Logs } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

// --- Tab content components ---

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

const MyProjectsContent = ({ view }: { view: 'grid' | 'list' }) => (
    <TabContainer>
        <div className="w-full h-full min-h-60 -mt-14">
            {view === 'grid' ? <ProjectsGrid /> : <ProjectsList />}
        </div>
    </TabContainer>
)

const DraftsContent = ({ view }: { view: 'grid' | 'list' }) => (
    <TabContainer>
        <div className="w-full h-full min-h-60 -mt-14">
            {view === 'grid' ? <DraftsGrid /> : <DraftsList />}
        </div>
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

// --- Page ---

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

    const handleTabChange = (id: string) => {
        setActiveTab(id)
        localStorage.setItem('projects:activeTab', id)
        // each tab remembers its own view; drafts defaults to list, others to grid
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
            case 'my-projects': return <MyProjectsContent view={view} />
            case 'drafts': return <DraftsContent view={view} />
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
                                        <Image
                                            src={search}
                                            alt="search"
                                            width={20}
                                            height={20}
                                            className="ml-2 shrink-0"
                                        />
                                        <input
                                            type="search"
                                            placeholder="Search projects..."
                                            className="bg-transparent px-3 py-2 text-xs focus:outline-none w-full placeholder:text-[#82AFB9] font-medium"
                                        />
                                    </div>

                                    <Link href='/projects/form' className="bg-[#044D5E] border border-[#044D5E] text-xs flex items-center gap-2 px-3 py-2 rounded-full 
                                whitespace-nowrap hover:bg-[#055d74] transition-colors cursor-pointer">
                                        <CirclePlus size={18} />
                                        Create Project
                                    </Link>
                                </div>
                            </div>

                            {/* Filters row */}
                            <div className='flex items-center justify-between gap-2'>
                                <div className="flex items-center gap-2">
                                    <button className={`border-2 border-[#044D5E] p-2.5 rounded-full transition-colors cursor-pointer`}>
                                        <ListFilter size={14} />
                                    </button>

                                    {[
                                        { label: 'Ratings', value: 'All' },
                                        { label: 'Category', value: 'Any' },
                                        { label: 'Location', value: 'Any' },
                                        { label: 'Sort By', value: 'Latest' },
                                    ].map(filter => (
                                        <button
                                            key={filter.label}
                                            className={`border-2 border-[#044D5E] text-[#82AFB9] flex items-center justify-between gap-2 w-34 px-4 py-1.5 rounded-full text-xs transition-colors relative cursor-pointer`}
                                        >
                                            <span className="truncate">{filter.label}: <span className='font-bold'>{filter.value}</span></span>
                                            <ChevronDown
                                                size={32}
                                                className={`absolute -bottom-2.5 -right-2 transition-transform duration-200 text-[#044D5E]`}
                                            />
                                        </button>
                                    ))}
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