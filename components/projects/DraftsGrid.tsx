import { badgecheckfilled, dummy1, dummy2, dummy3 } from '@/public'
import { EllipsisVertical, HeartHandshake, Info, Leaf, MapPin, Trash2 } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type Draft = {
    id: number
    image: StaticImageData
    title: string
    location: string
    status: string
    coBenefits: number
    categories: string[]
}

const drafts: Draft[] = [
    {
        id: 1,
        image: dummy1,
        title: 'Green Horizon Project',
        location: 'Kiambu, East Africa',
        status: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered', 'Forestry', 'Solar'],
    },
    {
        id: 2,
        image: dummy2,
        title: 'Forest Conservation REDD++ Project',
        location: 'Kampala, East Africa',
        status: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered'],
    },
    {
        id: 3,
        image: dummy3,
        title: 'Success Clean Cookstoves',
        location: 'Mtwapa, East Africa',
        status: 'BB',
        coBenefits: 12,
        categories: ['Avoidance', 'Engineered', 'Solar'],
    },
]

const DraftsGrid = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {drafts.map((draft) => (
                <div key={draft.id} className="bg-white rounded-xl space-y-2 overflow-hidden flex flex-col">
                    <div className="p-2 space-y-2 flex-1">
                        <div className="overflow-hidden rounded-lg h-36 relative">
                            <Image src={draft.image} alt={draft.title} className="w-full h-full object-cover" />
                            <div className='absolute top-2 left-2'>
                                <button className='bg-[#E4F3D1] rounded-full flex items-center gap-1 px-2 py-1'>
                                    <Image src={badgecheckfilled} alt='badge' width={12} height={12} />
                                    <span className="text-[10px] text-[#2d7a27] font-semibold">GFT Alignment</span>
                                </button>
                            </div>
                            <div className='absolute top-2 right-2'>
                                <span className="bg-[#FFF3E0] text-[#F59E0B] text-[10px] font-semibold px-2.5 py-1 rounded-full">
                                    Draft
                                </span>
                            </div>
                        </div>

                        <h1 className='text-lg font-semibold line-clamp-2 min-h-[3.5rem]'>{draft.title}</h1>

                        <hr className="h-px bg-gray-200 my-4 border-none" />

                        <div className="flex flex-col gap-2">
                            <div className='flex items-center gap-2 text-sm'>
                                <MapPin size={16} />
                                <p className='text-gray-500'>Location: <span className='text-gray-700 font-semibold'>{draft.location}</span></p>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <Leaf size={16} />
                                <p className='text-gray-500'>Status: <span className='text-gray-700 font-semibold'>{draft.status}</span></p>
                            </div>
                            <div className='flex items-center gap-2 text-sm'>
                                <HeartHandshake size={16} />
                                <p className='text-gray-500'>Co-benefits: <span className='text-gray-700 font-semibold'>{draft.coBenefits}</span></p>
                                <Info size={16} />
                            </div>
                        </div>

                        <hr className="h-px bg-gray-200 my-4 border-none" />

                        <div className='flex items-center flex-wrap gap-2 text-xs text-gray-700'>
                            <button className='mr-1'>Categories</button>
                            {draft.categories.slice(0, 2).map((cat) => (
                                <button key={cat} className='bg-[#F3F4F9] rounded-full px-2 py-[0.5px]'>{cat}</button>
                            ))}
                            {draft.categories.length > 2 && (
                                <button className='bg-[#F3F4F9] rounded-full px-2 py-[0.5px]'>+{draft.categories.length - 2}</button>
                            )}
                        </div>
                    </div>

                    {/* Actions footer */}
                    <div className="flex items-center justify-between gap-2 px-2 py-2 border-t border-gray-100 mt-auto">
                        <Link
                            href="/projects/form"
                            className="flex-1 text-center border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors"
                        >
                            Continue
                        </Link>
                        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-colors shrink-0">
                            <Trash2 size={14} className="text-gray-500 hover:text-red-500" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DraftsGrid