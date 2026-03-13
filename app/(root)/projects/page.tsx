import FloatingHelpButton from '@/components/FloatingHelpButton'
import Header from '@/components/Header'
import { search, upField } from '@/public'
import { ChevronDown, CirclePlus, LayoutGrid, ListFilter, Logs } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />

            {/*  */}

            <header className="w-full h-58 bg-[#0b2e34] text-white">
                <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <div className='flex flex-col py-4'>
                        {/* title */}
                        <div className="flex items-center gap-2">
                            <Image src={upField} alt='upfield' />
                            <h1 className='text-4xl font-semibold'>Upfield</h1>
                        </div>
                        {/*  */}

                        <div className="flex flex-col gap-2 py-2">
                            {/*  */}
                            <div className="flex items-center justify-between gap-2 border-b border-white/40 text-xs">
                                <div className="flex items-center gap-4">
                                    <button className='py-3 border-b-2 border-transparent text-[#747474] font-semibold'>Green Portfolio</button>
                                    <button className='py-3 border-b-2 flex items-center gap-1 font-semibold'>
                                        My Projects
                                        <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-[#D1E39E] text-black">
                                            12
                                        </span>
                                    </button>
                                    <button className='py-3 border-b-2 border-transparent flex items-center gap-1 text-[#747474] font-semibold'>
                                        Drafts
                                        <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-[#D1E39E] text-black">
                                            8
                                        </span>
                                    </button>
                                    <button className='py-3 border-b-2 border-transparent text-[#747474] font-semibold'>Transactions</button>
                                    <button className='py-3 border-b-2 border-transparent text-[#747474] font-semibold'>Market Place</button>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-4 pb-2">
                                    <div className={`w-full sm:w-100 flex border-2 border-[#044D5E] rounded-full items-center transition-colors duration-200`}>
                                        <Image
                                            src={search}
                                            alt="search"
                                            width={16}
                                            height={16}
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
                            {/*  */}

                            {/*  */}
                            <div className='flex items-center justify-between gap-2'>
                                <div className="flex items-center gap-2">
                                    <button className={`border-2 border-[#044D5E] p-2.5 rounded-full transition-colors cursor-pointer`}>
                                        <ListFilter size={14} />
                                    </button>

                                    <button className={`border-2 border-[#044D5E] text-[#82AFB9] flex items-center justify-between gap-2 w-44 px-4 py-1.5 rounded-full text-xs transition-colors relative cursor-pointer`}>
                                        <span className="truncate">Ratings: <span className='font-bold'>All</span></span>
                                        <ChevronDown
                                            size={32}
                                            className={`absolute -bottom-2.5 -right-2 transition-transform duration-200 text-[#044D5E]`}
                                        />
                                    </button>
                                    <button className={`border-2 border-[#044D5E] text-[#82AFB9] flex items-center justify-between gap-2 w-44 px-4 py-1.5 rounded-full text-xs transition-colors relative cursor-pointer`}>
                                        <span className="truncate">Category: <span className='font-bold'>Any</span></span>
                                        <ChevronDown
                                            size={32}
                                            className={`absolute -bottom-2.5 -right-2 transition-transform duration-200 text-[#044D5E]`}
                                        />
                                    </button>
                                    <button className={`border-2 border-[#044D5E] text-[#82AFB9] flex items-center justify-between gap-2 w-44 px-4 py-1.5 rounded-full text-xs transition-colors relative cursor-pointer`}>
                                        <span className="truncate">Location: <span className='font-bold'>Any</span></span>
                                        <ChevronDown
                                            size={32}
                                            className={`absolute -bottom-2.5 -right-2 transition-transform duration-200 text-[#044D5E]`}
                                        />
                                    </button>
                                    <button className={`border-2 border-[#044D5E] text-[#82AFB9] flex items-center justify-between gap-2 w-44 px-4 py-1.5 rounded-full text-xs transition-colors relative cursor-pointer`}>
                                        <span className="truncate">Sort By: <span className='font-bold'>Latest</span></span>
                                        <ChevronDown
                                            size={32}
                                            className={`absolute -bottom-2.5 -right-2 transition-transform duration-200 text-[#044D5E]`}
                                        />
                                    </button>
                                </div>

                                <div className="flex items-center gap-1 rounded-full border-2 border-[#044D5E] px-1.5 py-1">
                                    <button
                                        className={`p-1.5 rounded-full cursor-pointer transition-colors bg-white text-black`}
                                    >
                                        <LayoutGrid size={16} strokeWidth={2} />
                                    </button>
                                    <button
                                        className={`p-1.5 rounded-full cursor-pointer transition-colors`}
                                    >
                                        <Logs size={16} strokeWidth={2} />
                                    </button>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                </div>
            </header>

            <section className="w-full md:max-w-[96vw] text-black rounded-lg mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-16">
                {/* {renderContent()} */}
            </section>

            <FloatingHelpButton />
        </>
    )
}

export default page