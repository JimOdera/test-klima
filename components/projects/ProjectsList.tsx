import { badgecheckfilled, dummy1, dummy2, dummy3, dummy4, dummy5, dummy6 } from '@/public'
import { EllipsisVertical, Info, ArrowUpDown } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type StatusKey = 'Active' | 'Completed' | 'Pending Approval' | 'Rejected' | 'Draft'

const STATUS_STYLES: Record<StatusKey, { bg: string; text: string; progressBg: string; progressFill: string }> = {
    'Active': { bg: 'bg-[#E4F3D1]', text: 'text-[#2d7a27]', progressBg: '#e0f0e0', progressFill: '#044D5E' },
    'Completed': { bg: 'bg-[#044D5E]', text: 'text-white', progressBg: '#044D5E', progressFill: '#044D5E' },
    'Pending Approval': { bg: 'bg-[#FFEAC9]', text: 'text-[#D75606]', progressBg: '#FFEAC9', progressFill: '#D75606' },
    'Rejected': { bg: 'bg-[#FFE0E0]', text: 'text-[#D72B2B]', progressBg: '#FFE0E0', progressFill: '#D72B2B' },
    'Draft': { bg: 'bg-[#F0F0F0]', text: 'text-[#6B7280]', progressBg: '#F0F0F0', progressFill: '#6B7280' },
}

type Project = {
    id: number
    image: StaticImageData
    projectId: string
    title: string
    location: string
    carbonRating: string
    coBenefits: number
    categories: string[]
    statusLabel: StatusKey
    progress: number
}

const projects: Project[] = [
    {
        id: 1,
        image: dummy1,
        projectId: '1328',
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        carbonRating: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Active',
        progress: 45,
    },
    {
        id: 2,
        image: dummy2,
        projectId: '2341',
        title: 'Forest Conservation REDD++ Project',
        location: 'Kampala, East Africa',
        carbonRating: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Completed',
        progress: 100,
    },
    {
        id: 3,
        image: dummy3,
        projectId: '1321',
        title: 'Success Clean Cookstoves',
        location: 'Mtwapa, East Africa',
        carbonRating: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Pending Approval',
        progress: 0,
    },
    {
        id: 4,
        image: dummy4,
        projectId: '1242',
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        carbonRating: 'BB',
        coBenefits: 12,
        categories: ['Waste Management'],
        statusLabel: 'Active',
        progress: 45,
    },
    {
        id: 5,
        image: dummy5,
        projectId: '1121',
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        carbonRating: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Active',
        progress: 45,
    },
    {
        id: 6,
        image: dummy6,
        projectId: '5432',
        title: 'Sustainable Solar Power Coverage System Planning',
        location: 'Kiambu, East Africa',
        carbonRating: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Active',
        progress: 45,
    },
]

const MAX_VISIBLE_CATEGORIES = 2

const SortIcon = () => (
    <ArrowUpDown size={12} className="text-gray-400 shrink-0" />
)

const CircleProgress = ({ progress, statusLabel }: { progress: number; statusLabel: StatusKey }) => {
    const { progressFill, progressBg } = STATUS_STYLES[statusLabel]
    const radius = 18
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (progress / 100) * circumference

    const isFull = progress === 100
    const isEmpty = progress === 0

    const circleFill = isFull ? progressFill : isEmpty ? '#FFEAC9' : 'none'
    const circleStroke = isEmpty ? '#FFEAC9' : progressBg
    const labelColor = isFull ? 'text-white' : isEmpty ? 'text-[#D75606]' : 'text-gray-700'

    return (
        <div className="relative w-11 h-11 flex items-center justify-center">
            <svg width="44" height="44" viewBox="0 0 44 44" className="-rotate-90">
                <circle
                    cx="22" cy="22" r={radius}
                    fill={circleFill}
                    stroke={circleStroke}
                    strokeWidth="4"
                />
                {!isFull && !isEmpty && (
                    <circle
                        cx="22" cy="22" r={radius}
                        fill="none"
                        stroke={progressFill}
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                )}
            </svg>
            <span className={`absolute text-[9px] font-bold ${labelColor}`}>
                {progress}%
            </span>
        </div>
    )
}

const ProjectsList = () => {
    return (
        <>
            <div className="w-full bg-white rounded-xl overflow-hidden">
                <div className="grid grid-cols-[2fr_80px_1.2fr_110px_100px_1.5fr_120px_100px_60px] items-center px-4 py-2.5 border-b border-gray-100 text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1">Project name <SortIcon /></div>
                    <div className="flex items-center gap-1">ID <SortIcon /></div>
                    <div className="flex items-center gap-1">Location <SortIcon /></div>
                    <div className="flex items-center gap-1">Carbon rating <SortIcon /></div>
                    <div className="flex items-center gap-1">Co benefits <SortIcon /></div>
                    <div className="flex items-center gap-1">Categories <SortIcon /></div>
                    <div className="flex items-center gap-1">Status <SortIcon /></div>
                    <div className="flex items-center gap-1">Progress <SortIcon /></div>
                    <div>Actions</div>
                </div>

                {projects.map((project, index) => {
                    const { bg, text } = STATUS_STYLES[project.statusLabel]
                    const visibleCats = project.categories.slice(0, MAX_VISIBLE_CATEGORIES)
                    const extraCats = project.categories.length - MAX_VISIBLE_CATEGORIES

                    return (
                        <div
                            key={project.id}
                            className={`grid grid-cols-[2fr_80px_1.2fr_110px_100px_1.5fr_120px_100px_60px] items-center px-4 py-3 text-sm
                            ${index !== projects.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                            <div className="flex items-center gap-3 min-w-0 pr-4">
                                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                                    <Image src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 truncate">{project.title}</p>
                                    <button className='bg-[#E4F3D1] rounded-full flex items-center gap-1 px-2 py-0.5 mt-1'>
                                        <Image src={badgecheckfilled} alt='badge' width={10} height={10} />
                                        <span className="text-[10px] text-[#2d7a27] font-semibold">KGFT Alignment</span>
                                    </button>
                                </div>
                            </div>

                            <div className="text-gray-600">{project.projectId}</div>

                            <div className="text-gray-600 leading-tight">
                                {project.location.split(', ').map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </div>

                            <div className="text-gray-700 font-medium">{project.carbonRating}</div>

                            <div className="flex items-center gap-1 text-gray-600">
                                {project.coBenefits}
                                <Info size={13} className="text-gray-400" />
                            </div>

                            <div className="flex items-center flex-wrap gap-1">
                                {visibleCats.map((cat) => (
                                    <span key={cat} className="bg-[#F3F4F9] rounded-full px-2 py-0.5 text-xs text-gray-600">{cat}</span>
                                ))}
                                {extraCats > 0 && (
                                    <span className="bg-[#F3F4F9] rounded-full px-2 py-0.5 text-xs text-gray-600">+{extraCats}</span>
                                )}
                            </div>

                            <div>
                                <span className={`${bg} ${text} text-xs font-semibold px-3 py-1 rounded-full`}>
                                    {project.statusLabel === 'Pending Approval' ? 'Pending' : project.statusLabel}
                                </span>
                            </div>

                            <div className="flex items-center">
                                <CircleProgress progress={project.progress} statusLabel={project.statusLabel} />
                            </div>

                            <div className="flex items-center justify-center">
                                <button className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                                    <EllipsisVertical size={15} className="text-gray-500" />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 text-xs text-gray-500">
                <div className="flex items-center gap-3">
                    <span>6 of 6</span>
                    <div className="flex items-center gap-1">
                        <span>15 Per page</span>
                        <ArrowUpDown size={11} className="text-gray-400" />
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button className="px-2 py-1 rounded text-gray-400 hover:text-gray-600 transition-colors">‹ PREV</button>
                    <button className="w-6 h-6 rounded bg-[#044D5E] text-white flex items-center justify-center font-semibold">1</button>
                    {[2, 3, 4, 5, 6].map(p => (
                        <button key={p} className="w-6 h-6 rounded hover:bg-gray-100 flex items-center justify-center transition-colors">{p}</button>
                    ))}
                    <span className="px-1">...</span>
                    <button className="w-6 h-6 rounded hover:bg-gray-100 flex items-center justify-center transition-colors">20</button>
                    <button className="px-2 py-1 rounded text-gray-600 hover:text-gray-800 transition-colors font-medium">NEXT ›</button>
                </div>
            </div>
        </>
    )
}

export default ProjectsList