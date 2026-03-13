'use client'

import { main_logo } from '@/public'
import Image from 'next/image'
import React from 'react'
import { ArrowRight, CircleUser, Landmark, Leaf, Sprout, Telescope } from 'lucide-react'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter()

    return (
        <div>
            <div className="flex w-full h-[100vh] bg-rosde-100">
                {/* Left — empty, white */}
                <div className="bg-white w-[40vw]">
                    <div className="flex flex-col justify-center h-full">
                        <div className="flex flex-col justify-center px-10 py-16 lg:py-0 h-full"
                            style={{ maxWidth: '604px', marginLeft: 'auto' }}>
                            <div className="flex items-center gap-2 mb-12">
                                <Image src={main_logo} alt="main_logo" />
                            </div>

                            <div className="space-y-2 mb-8">
                                <h1 className="text-[40px] lg:text-5xl font-bold text-[#044D5E] leading-tight tracking-tight">
                                    Welcome,<br />Jane Cooper
                                </h1>
                            </div>

                            <p className="text-[18px] text-gray-500 leading-relaxed max-w-xl mb-10">
                                Whether you're an individual investor looking to explore sustainable opportunities, a green entrepreneur seeking funding, a carbon expert looking to promote your services or an institution looking to track your green finance deployment, we invite you to register and discover tailored resources and connections to suit your unique needs.
                            </p>
                            <a

                                href="#"
                                className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#044D5E] border-b border-[#044D5E]/30 pb-1 w-fit hover:text-[#1ECEC9] hover:border-[#1ECEC9] transition-colors duration-200 group"
                            >
                                Explore our communities
                                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                                    <ArrowRight size={18} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right — windmill background */}
                <div
                    className="w-[60vw] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/assets/images/windmill.png')" }}
                >
                    <div className='flex-1 flex items-center justify-center h-full'>
                        <div className='bg-white rounded-2xl p-6 w-[521px] space-y-4'>
                            <h1 className='text-[24px] text-[#044D5E] font-medium'>Start our journey as a </h1>

                            <div className="flex flex-col gap-4 group/list">

                                {/* Institution */}
                                <button onClick={() => router.push('/platform/Institution')} className='
                                    group/btn flex justify-between items-center gap-2 px-4 py-6
                                    border border-[#082D2A] bg-[#ECFFF5] rounded-xl text-[#082D2A]
                                    transition-all duration-300
                                    group-hover/list:border-gray-300 group-hover/list:bg-white group-hover/list:text-gray-700
                                    hover:!border-[#082D2A] hover:!bg-[#ECFFF5] hover:!text-[#082D2A] cursor-pointer
                                '>
                                    <div className='flex items-center gap-2'>
                                        <Landmark size={28} className="text-[#082D2A] group-hover/list:text-[#0FE880] group-hover/btn:!text-[#082D2A] transition-colors duration-300" />
                                        <p className='group-hover/list:font-normal group-hover/btn:!font-semibold font-semibold'>Institution</p>
                                    </div>
                                    <ArrowRight className='opacity-100 group-hover/list:opacity-0 group-hover/btn:!opacity-100 transition-opacity duration-300' />
                                </button>

                                {/* Carbon Expert */}
                                <button onClick={() => router.push('/platform/CarbonExpert')} className='
                                    group/btn flex justify-between items-center gap-2 px-4 py-6
                                    border border-gray-300 rounded-xl
                                    hover:border-[#082D2A] hover:bg-[#ECFFF5] hover:text-[#082D2A]
                                    transition-all duration-300 cursor-pointer
                                '>
                                    <div className='flex items-center gap-2'>
                                        <Sprout size={28} className="text-[#0FE880] group-hover/btn:text-[#082D2A] transition-colors duration-300" />
                                        <p className='group-hover/btn:font-semibold'>Carbon Expert</p>
                                    </div>
                                    <ArrowRight className='opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' />
                                </button>

                                {/* Individual Investor */}
                                <button onClick={() => router.push('/platform/IndividualInvestor')} className='
                                    group/btn flex justify-between items-center gap-2 px-4 py-6
                                    border border-gray-300 rounded-xl
                                    hover:border-[#082D2A] hover:bg-[#ECFFF5] hover:text-[#082D2A]
                                    transition-all duration-300 cursor-pointer
                                '>
                                    <div className='flex items-center gap-2'>
                                        <CircleUser size={28} className="text-[#0FE880] group-hover/btn:text-[#082D2A] transition-colors duration-300" />
                                        <p className='group-hover/btn:font-semibold'>Individual Investor</p>
                                    </div>
                                    <ArrowRight className='opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' />
                                </button>

                                {/* Carbon Harvester */}
                                <button onClick={() => router.push('/platform/CarbonHarvester')} className='
                                    group/btn flex justify-between items-center gap-2 px-4 py-6
                                    border border-gray-300 rounded-xl
                                    hover:border-[#082D2A] hover:bg-[#ECFFF5] hover:text-[#082D2A]
                                    transition-all duration-300 cursor-pointer
                                '>
                                    <div className='flex items-center gap-2'>
                                        <Leaf size={28} className="text-[#0FE880] group-hover/btn:text-[#082D2A] transition-colors duration-300" />
                                        <p className='group-hover/btn:font-semibold'>Carbon Harvester</p>
                                    </div>
                                    <ArrowRight className='opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' />
                                </button>

                                {/* Aspirational Harvester */}
                                <button onClick={() => router.push('/platform/AspirationalHarvester')} className='
                                    group/btn flex justify-between items-center gap-2 px-4 py-6
                                    border border-gray-300 rounded-xl
                                    hover:border-[#082D2A] hover:bg-[#ECFFF5] hover:text-[#082D2A]
                                    transition-all duration-300 cursor-pointer
                                '>
                                    <div className='flex items-center gap-2'>
                                        <Telescope size={28} className="text-[#0FE880] group-hover/btn:text-[#082D2A] transition-colors duration-300" />
                                        <p className='group-hover/btn:font-semibold'>Aspirational Harvester</p>
                                    </div>
                                    <ArrowRight className='opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default page