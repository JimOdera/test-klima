import { badgecheckfilled, dummy1, dummy2, dummy3, dummy4, dummy5, dummy6 } from '@/public'
import { EllipsisVertical, HeartHandshake, Info, Leaf, MapPin } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type StatusKey = 'Active' | 'Completed' | 'Pending Approval' | 'Rejected' | 'Draft'

const STATUS_STYLES: Record<StatusKey, { progressBg: string; progressBar: string; progressTextColor: string }> = {
    'Active': { progressBg: '#E4F3D1', progressBar: '#044D5E', progressTextColor: 'text-[#044D5E]' },
    'Completed': { progressBg: '#D1F3E4', progressBar: '#044D5E', progressTextColor: 'text-[#044D5E]' },
    'Pending Approval': { progressBg: '#FFEAC9', progressBar: '#D75606', progressTextColor: 'text-[#D75606]' },
    'Rejected': { progressBg: '#FFE0E0', progressBar: '#D72B2B', progressTextColor: 'text-[#D72B2B]' },
    'Draft': { progressBg: '#F0F0F0', progressBar: '#6B7280', progressTextColor: 'text-[#6B7280]' },
}

type Project = {
    id: number
    image: StaticImageData
    projectId: string
    lastUpdated: string
    title: string
    location: string
    status: string
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
        lastUpdated: "Jun 4, '25",
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        status: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Active',
        progress: 45,
    },
    {
        id: 2,
        image: dummy2,
        projectId: '1328',
        lastUpdated: "Jun 4, '25",
        title: 'Forest Conservation REDD++ Project',
        location: 'Kampala, East Africa',
        status: 'BB',
        coBenefits: 17,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Completed',
        progress: 100,
    },
    {
        id: 3,
        image: dummy3,
        projectId: '1328',
        lastUpdated: "Jun 4, '25",
        title: 'Success Clean Cookstoves',
        location: 'Mtwapa, East Africa',
        status: 'BB',
        coBenefits: 9,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Pending Approval',
        progress: 0,
    },
    {
        id: 4,
        image: dummy4,
        projectId: '1328',
        lastUpdated: "Jun 4, '25",
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        status: 'BB',
        coBenefits: 17,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Completed',
        progress: 100,
    },
    {
        id: 5,
        image: dummy5,
        projectId: '1328',
        lastUpdated: "Jun 4, '25",
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        status: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Active',
        progress: 45,
    },
    {
        id: 6,
        image: dummy6,
        projectId: '1328',
        lastUpdated: "Jun 4, '25",
        title: 'Sustainable Solar Power Coverage System Planning',
        location: 'Kiambu, East Africa',
        status: 'BB',
        coBenefits: 17,
        categories: ['Avoidance', 'Engineered'],
        statusLabel: 'Completed',
        progress: 100,
    },
]

const ProjectsGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {projects.map((project) => {
                const { progressBg, progressBar, progressTextColor } = STATUS_STYLES[project.statusLabel]
                return (
                    <div key={project.id} className="bg-white rounded-xl space-y-2 overflow-hidden flex flex-col border border-[#DEDEDE]">
                        <div className="p-2 space-y-2 flex-1">
                            <div className="overflow-hidden rounded-lg h-36 relative">
                                <Image src={project.image} alt='grid image' className="w-full h-full object-cover" />
                                <div className='absolute top-2 left-2'>
                                    <button className='bg-[#E4F3D1] rounded-full flex items-center gap-1 px-2 py-1'>
                                        <Image src={badgecheckfilled} alt='badge' width={12} height={12} />
                                        <span className="text-[10px] text-[#2d7a27] font-semibold">GFT Alignment</span>
                                    </button>
                                </div>
                                <div className='absolute top-2 right-2'>
                                    <button className='w-6 h-6 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm'>
                                        <EllipsisVertical size={14} className='text-gray-700' />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-2 text-xs">
                                <p>Project ID: <span className="font-semibold">{project.projectId}</span></p>
                                <p>Last Updated: <span className="font-semibold">{project.lastUpdated}</span></p>
                            </div>

                            <h1 className='text-lg font-semibold line-clamp-2 min-h-[3.5rem]'>{project.title}</h1>

                            <hr className="h-px bg-gray-200 my-4 border-none" />

                            <div className="flex flex-col gap-2">
                                <div className='flex items-center gap-2 text-sm'>
                                    <MapPin size={16} />
                                    <p className='text-gray-500'>Location: <span className='text-gray-700 font-semibold'>{project.location}</span></p>
                                </div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <Leaf size={16} />
                                    <p className='text-gray-500'>Status: <span className='text-gray-700 font-semibold'>{project.status}</span></p>
                                </div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <HeartHandshake size={16} />
                                    <p className='text-gray-500'>Co-benefits: <span className='text-gray-700 font-semibold'>{project.coBenefits}</span></p>
                                    <Info size={16} />
                                </div>
                            </div>

                            <hr className="h-px bg-gray-200 my-4 border-none" />

                            <div className='flex items-center flex-wrap gap-2 text-xs text-gray-700'>
                                <button className='mr-1'>Categories</button>
                                {project.categories.map((cat) => (
                                    <button key={cat} className='bg-[#F3F4F9] rounded-full px-2 py-[0.5px]'>{cat}</button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full mt-auto" style={{ backgroundColor: progressBg }}>
                            <div className={`flex items-center justify-between text-sm px-2 py-0.5 ${progressTextColor}`}>
                                <p className='font-medium'>{project.statusLabel}</p>
                                <p className='font-semibold'>{project.progress}%</p>
                            </div>
                            <div className="w-full bg-black/10 h-1.5 overflow-hidden">
                                <div
                                    className="h-1.5 transition-all duration-500"
                                    style={{ width: `${project.progress}%`, backgroundColor: progressBar }}
                                />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectsGrid