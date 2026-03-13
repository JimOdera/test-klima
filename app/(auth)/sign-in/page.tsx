'use client'

import React, { useState } from 'react'
import { apple, facebook, google, phone, white_logo, windmill, windows } from '@/public'
import Image from 'next/image'
import { Check, CircleArrowRight } from 'lucide-react'

const FormInput = ({
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
}: {
    label: string
    type?: string
    value: string
    onChange: (v: string) => void
    placeholder?: string
}) => (
    <div className="relative w-full border border-gray-200 bg-white rounded-2xl px-4 pt-5 pb-3 focus-within:border-[#172B4D] focus:bg-[#F9F9F9] transition-colors duration-200">
        <label className="absolute top-2 left-4 text-[11px] text-[#6B7280] font-medium pointer-events-none">
            {label}
        </label>
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none text-[15px] font-semibold text-gray-900 placeholder:text-gray-400 mt-0.5"
        />
    </div>
)

const FormPasswordInput = ({
    label,
    value,
    onChange,
}: {
    label: string
    value: string
    onChange: (v: string) => void
}) => {
    const [show, setShow] = useState(false)
    const hasValue = value.length > 0

    return (
        <div className="relative w-full border border-gray-200 rounded-2xl px-4 pt-5 pb-3 focus-within:border-[#172B4D] bg-white focus:bg-[#F9F9F9] transition-colors duration-200">
            <label className="absolute top-2 left-4 text-[11px] text-[#6B7280] font-medium pointer-events-none">
                {label}
            </label>
            <div className="flex items-center gap-2 mt-0.5">
                <input
                    type={show ? 'text' : 'password'}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-[15px] font-semibold text-gray-900 placeholder:text-gray-400"
                    placeholder="••••••••"
                />
                <div className="flex items-center gap-2 shrink-0">
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="text-[13px] font-medium bg-[#f4f5f7] px-2 py-[0.2px] text-[#6B7280] hover:text-gray-900 transition-colors rounded-full"
                    >
                        {show ? 'Hide' : 'Show'}
                    </button>
                    {hasValue && (
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E3FCEF]">
                            <Check size={13} strokeWidth={3} className="text-[#00875A]" />
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

const SubmitButton = ({ label }: { label: string }) => (
    <button
        type="submit"
        className="w-full h-[58px] rounded-full bg-gradient-to-br from-[#BFEFF8]/40 to-[#B1CA69]/40 flex items-center justify-center gap-2 text-[17px]
        font-semibold text-[#044D5E] transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer">
        {label}
        <CircleArrowRight size={24} strokeWidth={1.5} className="text-[#404040]" />
    </button>
)

const SignIn = () => {

    const [email, setEmail] = useState('janecooper@gmail.com')
    const [password, setPassword] = useState('........')

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     // handle login
    // }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden"
            style={{
                backgroundImage: `url('${windmill.src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div
                className="relative w-[1440px] h-[900px] flex-shrink-0 overflow-hidden"
            >
                <div className='w-full h-full grid grid-cols-1 md:grid-cols-2'>

                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='space-y-8 max-w-2xl px-6'>
                            <div className='flex items-center gap-2 text-white'>
                                <Image src={white_logo} alt='Klimawhitelogo' />
                            </div>
                            <h1 className='text-white text-6xl'>
                                Welcome to an Innovative Carbon Marketplace
                            </h1>
                        </div>
                    </div>

                    <div className='w-full h-full flex items-center justify-center'>
                        <form className='bg-white rounded-2xl w-full md:max-w-[521px] h-full max-h-[707px] p-6 space-y-6'>
                            <h1 className='text-[48px] font-semibold text-gray-800'>Login to <br /> your account</h1>

                            <div className='flex items-center gap-2 justify-between'>
                                <span className='flex items-center justify-center border border-[#D2D2D2] w-[78.6px] h-[48px] rounded-full cursor-pointer'>
                                    <Image src={facebook} alt='fb' />
                                </span>
                                <span className='flex items-center justify-center border border-[#D2D2D2] w-[78.6px] h-[48px] rounded-full cursor-pointer'>
                                    <Image src={google} alt='google' />
                                </span>
                                <span className='flex items-center justify-center border border-[#D2D2D2] w-[78.6px] h-[48px] rounded-full cursor-pointer'>
                                    <Image src={apple} alt='ios' />
                                </span>
                                <span className='flex items-center justify-center border border-[#D2D2D2] w-[78.6px] h-[48px] rounded-full cursor-pointer'>
                                    <Image src={windows} alt='ms' />
                                </span>
                                <span className='flex items-center justify-center border border-[#D2D2D2] w-[78.6px] h-[48px] rounded-full cursor-pointer'>
                                    <Image src={phone} alt='ph' />
                                </span>
                            </div>

                            <div className='flex items-center gap-3'>
                                <hr className='flex-1 border border-black' />
                                <span className='text-xs text-black font-semibold'>OR</span>
                                <hr className='flex-1 border border-black' />
                            </div>

                            {/* Inputs */}
                            <div className="space-y-4">
                                <FormInput
                                    label="Email address"
                                    type="email"
                                    value={email}
                                    onChange={setEmail}
                                />

                                <FormPasswordInput
                                    label="Enter your password"
                                    value={password}
                                    onChange={setPassword}
                                />

                                <div className="pt-2">
                                    <SubmitButton label="Login" />
                                </div>

                                <p className="text-center text-[12px] text-[#6B7280] leading-relaxed">
                                    By continuing, you agree to Klima's{' '}
                                    <a href="#" className="text-[#044D5E] font-semibold underline underline-offset-2">
                                        Terms of Use
                                    </a>
                                    <br />
                                    Read our{' '}
                                    <a href="#" className="text-[#044D5E] font-semibold underline underline-offset-2">
                                        Privacy Policy
                                    </a>
                                </p>

                                <div className="pt-2">
                                    <hr className="flex-1 border border-[#000000]" />
                                    <div className="grid grid-cols-2 items-center justify-between pt-5">
                                        <span className="text-[11px] font-bold tracking-widest text-gray-900 uppercase">
                                            Don't have an account?
                                        </span>
                                        <button
                                            type="button"
                                            className="w-full border border-[#D2D2D2] rounded-full px-5 py-2.5 text-[14px] font-semibold 
                                            text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                                        >
                                            Register now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignIn