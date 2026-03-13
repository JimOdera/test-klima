"use client";

import { activitiesIcon, coordinates, dashboardIcon, profile, projects, reports, white_logo } from "@/public";
import { Bell, ShoppingCart, CircleChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    return (
        <header className="w-full bg-[#0b2e34] text-white border-b border-white/10 sticky top-0 z-50">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[64px]">

                    {/* Logo */}
                    <Link href="/platform" className="flex items-center gap-2 shrink-0">
                        <Image src={white_logo} alt="Klima Harvest logo" className="h-8 w-auto" />
                    </Link>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        <NavLink icon={dashboardIcon} label="Dashboard" href="/dashboard" />
                        <NavLink icon={projects} label="Projects" href="/projects" />
                        <NavLink icon={activitiesIcon} label="Activities" href="/activities" />
                        <NavLink icon={coordinates} label="Coordinates" href="/coordinates" />
                        <NavLink icon={reports} label="Reports" href="/reports" />
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center gap-1">
                        <button className="w-9 h-9 flex items-center justify-center rounded-full text-[#E3FCEF] bg-[#044D5E] transition-colors">
                            <ShoppingCart size={18} strokeWidth={1.7} />
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-full text-[#E3FCEF] bg-[#044D5E] transition-colors">
                            <Bell size={18} strokeWidth={1.7} />
                        </button>
                        <div className="p-1 rounded-full flex items-center bg-[#044D5E]">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-amber-700 flex items-center justify-center text-white text-xs font-semibold">
                                    <Image src={profile} alt="profile" />
                                </div>
                            </div>
                            <CircleChevronDown className="text-gray-400" />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}

function NavLink({
    icon,
    label,
    href,
    badge,
}: {
    icon: string;
    label: string;
    href: string;
    badge?: string;
}) {
    const pathname = usePathname();
    const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href + "/"));

    return (
        <Link
            href={href}
            className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-medium transition-colors duration-150
                ${active
                    ? "bg-[#0FE880] text-black"
                    : "text-[#82AFB9] hover:bg-[#0FE880] hover:text-black"
                }`}
        >
            <Image
                src={icon}
                alt={label}
                width={16}
                height={16}
                className={`w-4 h-4 transition-all duration-300
                    ${active
                        ? "brightness-0"
                        : "opacity-60 group-hover:brightness-0"
                    }`}
            />
            <span>{label}</span>
            {badge && (
                <span className="ml-0.5 px-2 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-br from-[#BFEFF8] to-[#B1CA69] text-black leading-none">
                    {badge}
                </span>
            )}
        </Link>
    );
}