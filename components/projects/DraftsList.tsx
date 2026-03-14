import { badgecheckfilled, dummy1, dummy2, dummy3 } from '@/public'
import { ArrowUpDown, Info, Trash2 } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type Draft = {
    id: number
    image: StaticImageData
    title: string
    location: string
    carbonRating: string
    coBenefits: number
    categories: string[]
}

const drafts: Draft[] = [
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

const MAX_VISIBLE_CATEGORIES = 2

const SortIcon = () => <ArrowUpDown size={12} className="text-gray-400 shrink-0" />

const DraftsList = () => {
    return (
        <>
            <div className="w-full bg-white rounded-xl overflow-hidden">
                <div className="grid grid-cols-[2fr_80px_1.2fr_110px_100px_1.5fr_120px_180px] items-center px-4 py-2.5 border-b border-gray-100 text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1">Project name <SortIcon /></div>
                    <div className="flex items-center gap-1">ID <SortIcon /></div>
                    <div className="flex items-center gap-1">Location <SortIcon /></div>
                    <div className="flex items-center gap-1">Carbon rating <SortIcon /></div>
                    <div className="flex items-center gap-1">Co benefits <SortIcon /></div>
                    <div className="flex items-center gap-1">Categories <SortIcon /></div>
                    <div className="flex items-center gap-1">Status <SortIcon /></div>
                    <div>Actions</div>
                </div>

                {drafts.map((draft, index) => {
                    const visibleCats = draft.categories.slice(0, MAX_VISIBLE_CATEGORIES)
                    const extraCats = draft.categories.length - MAX_VISIBLE_CATEGORIES

                    return (
                        <div
                            key={draft.id}
                            className={`grid grid-cols-[2fr_80px_1.2fr_110px_100px_1.5fr_120px_180px] items-center px-4 py-3 text-sm
                            ${index !== drafts.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >

                            <div className="flex items-center gap-3 min-w-0 pr-4">
                                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                                    <Image src={draft.image} alt={draft.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 truncate">{draft.title}</p>
                                    <button className='bg-[#E4F3D1] rounded-full flex items-center gap-1 px-2 py-0.5 mt-1'>
                                        <Image src={badgecheckfilled} alt='badge' width={10} height={10} />
                                        <span className="text-[10px] text-[#2d7a27] font-semibold">KGFT Alignment</span>
                                    </button>
                                </div>
                            </div>

                            <div className="text-gray-400">-</div>

                            <div className="text-gray-600 leading-tight">
                                {draft.location.split(', ').map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </div>

                            <div className="text-gray-700 font-medium">{draft.carbonRating}</div>

                            <div className="flex items-center gap-1 text-gray-600">
                                {draft.coBenefits}
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
                                <span className="bg-[#FFF3E0] text-[#F59E0B] text-xs font-semibold px-3 py-1 rounded-full">
                                    Draft
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Link
                                    href="#"
                                    className="border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap"
                                >
                                    Continue
                                </Link>
                                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-colors">
                                    <Trash2 size={14} className="text-gray-500 hover:text-red-500" />
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

export default DraftsList