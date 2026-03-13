import Header from '@/components/platform/Header'
import AspirationalHarvestor from '@/components/platform/AspirationalHarvestor'
import React from 'react'

const page = () => {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />

            <main className="flex-1 overflow-y-auto w-full bg-[#f3f5ef]">
                <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8 h-full">
                    <AspirationalHarvestor />
                </div>
            </main>
        </div>
    )
}

export default page