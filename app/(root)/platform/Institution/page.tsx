import Header from '@/components/platform/Header'
import Institution from '@/components/platform/Institution'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />

            <main className="w-full">
                <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8">
                    <Institution />
                </div>
            </main>
        </>
    )
}

export default page