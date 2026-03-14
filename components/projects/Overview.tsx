import React from 'react'
// import LocationPicker from '../Maps/LocationPicker'
import Link from 'next/link'
import { fileText, rss } from '@/public'
import { Banknote, ChevronRight, Flower, Leaf, TrendingUp } from 'lucide-react'
import Image from 'next/image'
// import EmissionInsights from './EmissionInsights'
import dynamic from 'next/dynamic'
const EmissionInsights = dynamic(() => import('./EmissionInsights'), { ssr: false });
const LocationPicker = dynamic(() => import('../Maps/LocationPicker'), { ssr: false });

const Overview = () => {
    return (
        <div className='text-black flex gap-4'>

            {/* Left — main content */}
            <div className='flex-1 flex flex-col gap-4 min-w-0'>

                {/* Project Overview card */}
                <div className="w-full rounded-2xl bg-white p-4 space-y-4 shadow-sm bg-gradient-to-b from-[#f8ffe3] via-white/50 to-white">
                    <h1 className='text-xl'>Project Overview</h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">

                        <div className="flex-1 rounded-2xl p-5 md:p-6">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#CFFFC9] flex items-center justify-center flex-shrink-0">
                                        <Flower className="w-6 h-6 text-[#044D5E]" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">Total Green Projects</h2>
                                        <p className="text-sm text-[#044D5E]">Cumulative green projects</p>
                                    </div>
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-gray-900">345</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#E4F3D1] rounded-xl p-2 text-center">
                                    <p className="text-sm text-gray-600 font-medium">Active Projects</p>
                                    <h3 className="text-2xl font-semibold text-gray-800 mt-1">204</h3>
                                </div>
                                <div className="bg-[#E4F3D1] rounded-xl p-2 text-center">
                                    <p className="text-sm text-gray-600 font-medium">Completed Projects</p>
                                    <h3 className="text-2xl font-semibold text-gray-800 mt-1">141</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 rounded-2xl p-5 md:p-6">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#CFFFC9] flex items-center justify-center flex-shrink-0">
                                        <Banknote className="w-6 h-6 text-[#044D5E]" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">Finance Drawn</h2>
                                        <p className="text-sm text-[#044D5E]">Cumulative finance drawn</p>
                                    </div>
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-orange-600">75%</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#E4F3D1] rounded-xl p-2 text-center">
                                    <p className="text-sm text-gray-600 font-medium">Total GHG Scale (MUWH)</p>
                                    <h3 className="text-2xl font-semibold text-gray-800 mt-1">20,000</h3>
                                </div>
                                <div className="bg-[#E4F3D1] rounded-xl p-2 text-center">
                                    <p className="text-sm text-gray-600 font-medium">Portfolio Value</p>
                                    <h3 className="text-2xl font-semibold text-gray-800 mt-1">$3.7m</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carbon revenue potential card */}
                <div className="w-full rounded-2xl bg-white p-4 space-y-4 shadow-sm bg-gradient-to-b from-[#e4ffe0] via-white/50 to-white">
                    <h1 className='text-xl'>Carbon revenue potential</h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">

                        <div className="flex-1 rounded-2xl p-5 md:p-6">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#C9FFE8] flex items-center justify-center flex-shrink-0">
                                        <Banknote className="w-6 h-6 text-[#044D5E]" />
                                    </div>
                                    <div className='space-y-1'>
                                        <h2 className="text-lg font-semibold text-gray-800">Annual revenue projection</h2>
                                        <h1 className="text-4xl text-[#044D5E] font-semibold">$ 250,000</h1>
                                        <div className='flex items-center gap-2'>
                                            <span className='px-2 py-1 font-semibold rounded-full bg-[#E4F3D1] text-[#044D5E] flex items-center justify-center text-xs gap-2'>
                                                <TrendingUp size={16} /> +15%
                                            </span>
                                            <p>vs Last year</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 rounded-2xl p-5 md:p-6">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#C9FFE8] flex items-center justify-center flex-shrink-0">
                                        <Leaf className="w-6 h-6 text-[#044D5E]" />
                                    </div>
                                    <div className='space-y-1'>
                                        <h2 className="text-lg font-semibold text-gray-800">CO2e Reduction</h2>
                                        <h1 className="text-4xl text-[#044D5E] font-semibold">750,000 tCO2e</h1>
                                        <div className='flex items-center gap-2'>
                                            <span className='px-2 py-1 font-semibold rounded-full bg-[#E4F3D1] text-[#044D5E] flex items-center justify-center text-xs gap-2'>
                                                <TrendingUp size={16} /> +17%
                                            </span>
                                            <p>vs Last year</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <EmissionInsights />
            </div>

            {/* Right sidebar — ~25% width */}
            <div className='w-[25%] shrink-0'>
                <div className='flex flex-col gap-4 sticky top-16'>

                    {/* Important Actions */}
                    <div className='flex flex-col justify-between bg-white rounded-2xl overflow-hidden h-78'>
                        <div className='flex flex-col px-4 py-4 gap-4'>
                            <div className="flex items-center justify-between gap-2">
                                <p className='font-medium'>Important Actions</p>
                                <span className='px-2 py-[0.4px] font-semibold rounded-full bg-[#D1E39E] text-black flex items-center justify-center text-xs'>12</span>
                            </div>

                            <div className='flex items-center justify-between gap-2 bg-[#F8F8F8] p-3 rounded-lg'>
                                <Image src={fileText} alt='filetext' width={24} height={24} />
                                <div className='flex-1 min-w-0'>
                                    <p className='text-sm font-medium truncate'>File Annual Report</p>
                                    <span className='w-fit px-2 py-[0.4px] font-medium rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs gap-2'>
                                        Due 3days
                                    </span>
                                </div>
                                <ChevronRight size={16} className='shrink-0 text-gray-400' />
                            </div>

                            <div className='flex items-center justify-between gap-2 bg-[#F8F8F8] p-3 rounded-lg'>
                                <Image src={rss} alt='rss' width={24} height={24} />
                                <div className='flex-1 min-w-0'>
                                    <p className='text-sm font-medium truncate'>Update Project #0243</p>
                                    <span className='w-fit px-2 py-[0.4px] font-medium rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs gap-2'>
                                        Delayed 3days
                                    </span>
                                </div>
                                <ChevronRight size={16} className='shrink-0 text-gray-400' />
                            </div>
                        </div>
                        <div className='border-t border-gray-200 flex items-center justify-center py-2'>
                            <Link href='' className='text-xs text-[#044D5E] font-medium hover:underline'>View All</Link>
                        </div>
                    </div>

                    {/* Project Map */}
                    <div className='bg-white rounded-2xl p-2 flex flex-col gap-2'>
                        <p className='text-sm font-medium'>Project Map</p>
                        <LocationPicker />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview