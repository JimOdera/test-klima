import { activitiesIcon, coordinates, dashboardIcon, main_logo, profile, projects, reports } from "@/public";
import { Bell, ShoppingCart, CircleChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
    icon: string;
    label: string;
    badge?: string;
    active?: boolean;
}

const navItems: NavItem[] = [
    { icon: "dashboard", label: "Dashboard" },
    { icon: "projects", label: "Projects", badge: "12 new" },
    { icon: "activities", label: "Activities", badge: "5 new" },
    { icon: "coordinates", label: "Coordinates" },
    { icon: "reports", label: "Reports" },
];

export default function Header() {
    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[64px]">

                    {/* Logo */}
                    <Link href="/platform" className="flex items-center gap-2 shrink-0">
                        <Image src={main_logo} alt="Klima Harvest logo" className="h-8 w-auto" />
                    </Link>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        <NavLink icon={dashboardIcon} label="Dashboard" />
                        <NavLink icon={projects} label="Projects" badge="12 new" />
                        <NavLink icon={activitiesIcon} label="Activities" badge="5 new" />
                        <NavLink icon={coordinates} label="Coordinates" />
                        <NavLink icon={reports} label="Reports" />
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center gap-1">
                        {/* Cart */}
                        <button className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 bg-[#E3FCEF] transition-colors">
                            <ShoppingCart size={18} strokeWidth={1.7} />
                        </button>

                        {/* Bell */}
                        <button className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 bg-[#E3FCEF] transition-colors">
                            <Bell size={18} strokeWidth={1.7} />
                        </button>

                        {/* Avatar */}
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 mx-1">
                            {/* Replace with actual user avatar src */}
                            <div className="w-full h-full bg-amber-700 flex items-center justify-center text-white text-xs font-semibold">
                                <Image src={profile} alt="profile" />
                            </div>
                        </div>

                        {/* Verified / check icon */}
                        <CircleChevronDown className="text-gray-400" />
                    </div>

                </div>
            </div>
        </header>
    );
}

function NavLink({
    icon,
    label,
    badge,
    active,
}: {
    icon: string;
    label: string;
    badge?: string;
    active?: boolean;
}) {
    return (
        <Link
            href="#"
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[14px] font-medium transition-colors duration-150
        ${active
                    ? "text-[#044D5E] bg-gray-100"
                    : "text-[#044D5E] hover:text-[#044D5E] hover:bg-gray-100"
                }`}
        >
            {/* Nav icon — black */}
            <Image
                src={icon}
                alt={label}
                width={16}
                height={16}
                className="w-4 h-4 brightness-0"
            />
            <span>{label}</span>
            {badge && (
                <span className="ml-0.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-teal-100 text-teal-700 leading-none">
                    {badge}
                </span>
            )}
        </Link>
    );
}