"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Pencil,
    UserRound,
    CreditCard,
    Award,
    Bell,
    CircleArrowRight,
} from "lucide-react";
import {
    FormTextarea,
    FormDropdown,
    YesNoButtons,
    MultiSelectButtons,
    FileUpload,
    FormSection,
} from "@/components/Form/Index";

const CarbonExpert = () => {
    const [activeSection, setActiveSection] = useState<string>("Project Description");

    const [summaryExperience, setSummaryExperience] = useState("");
    const [specializationAreas, setSpecializationAreas] = useState("");
    const [projectExamples, setProjectExamples] = useState("");
    const [selectedSpecialization, setSelectedSpecialization] = useState("");
    const [selectedSector, setSelectedSector] = useState("");
    const [workedWithStakeholders, setWorkedWithStakeholders] = useState<boolean | null>(null);
    const [providedAdvisory, setProvidedAdvisory] = useState<boolean | null>(null);
    const [selectedRole, setSelectedRole] = useState("");
    const [collaborationExamples, setCollaborationExamples] = useState("");
    const [platformExpectations, setPlatformExpectations] = useState("");
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    const projectDescriptionRef = useRef<HTMLDivElement>(null);
    const industryExperienceRef = useRef<HTMLDivElement>(null);
    const areaOfExpertiseRef = useRef<HTMLDivElement>(null);
    const projectSupportRef = useRef<HTMLDivElement>(null);
    const platformUtilizationRef = useRef<HTMLDivElement>(null);

    const sectionRefs = useMemo(
        () => ({
            "Project Description": projectDescriptionRef,
            "Industry Experience": industryExperienceRef,
            "Area of Expertise": areaOfExpertiseRef,
            "Project Support": projectSupportRef,
            "Platform Utilization": platformUtilizationRef,
        }),
        []
    );

    const navItems = [
        { name: "Project Description", icon: Pencil, subtitle: "Share your background and carbon market experience" },
        { name: "Industry Experience", icon: UserRound, subtitle: null },
        { name: "Area of Expertise", icon: CreditCard, subtitle: null },
        { name: "Project Support", icon: Award, subtitle: null },
        { name: "Platform Utilization", icon: Bell, subtitle: null },
    ];

    const specializations = [
        "Carbon Credit Project Development",
        "Verification & Validation (VVB)",
        "Carbon Accounting & MRV",
        "Carbon Market Regulation & Policy",
        "Voluntary vs Compliance Markets",
        "Article 6 & International Carbon Trading",
        "Nature-Based Solutions (NBS)",
        "Carbon Removal Technologies",
        "REDD+ and Forest Carbon",
    ];

    const sectors = [
        "Renewable Energy",
        "Energy Efficiency",
        "Agriculture, Forestry & Land Use (AFOLU)",
        "Industrial Processes (e.g., cement, steel)",
        "Waste Management",
        "Blue Carbon (mangroves, seagrass)",
        "Transportation",
        "Household & Community Projects",
    ];

    const roles = [
        "Project Developer",
        "Technical Consultant / Advisor",
        "Verifier (DOEV/VVB)",
        "Carbon Standards Expert (VCS, Gold Standard, etc.)",
        "Registry & Methodology Specialist",
        "Investor Due Diligence Expert",
        "Policy & Regulatory Advisor",
        "Broker / Trader",
        "Training & Capacity Building",
    ];

    const platformFeatures = [
        "Real-time ESG performance tracking",
        "Impact investment analytics dashboard",
        "Automated regulatory compliance checks",
        "Secure document and data management system",
        "Project pipeline & matchmaking tools",
        "Carbon credit registry integration",
        "Methodology & standard updates feed",
        "Stakeholder messaging & collaboration hub",
    ];

    const handleNavClick = (section: string) => {
        setActiveSection(section);
        sectionRefs[section as keyof typeof sectionRefs].current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.getAttribute("data-section")!);
                    }
                });
            },
            { threshold: 0.5 }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [sectionRefs]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Carbon Expert form submitted:", {
            summaryExperience,
            specializationAreas,
            workedWithStakeholders,
            projectExamples,
            selectedSpecialization,
            selectedSector,
            providedAdvisory,
            selectedRole,
            collaborationExamples,
            platformExpectations,
            selectedFeatures,
        });
    };

    return (
        <div className="space-y-6">

            {/* Sidebar + Form */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-18 lg:gap-32 items-start">

                {/* Sticky sidebar */}
                <aside className="hidden md:flex flex-col gap-2 sticky top-0 self-start shrink-0 w-64 lg:w-72 xl:w-80 bg-gradient-to-br from-[#BFEFF8]/30 to-[#B1CA69]/30 p-4 rounded-2xl">
                    <h1 className="text-sm font-semibold text-gray-700 mb-2">Let's onboard you as a<br />Carbon Expert</h1>
                    <div className="flex flex-col">
                        {navItems.map(({ name, icon: Icon, subtitle }, index, arr) => (
                            <div key={name} className="flex gap-3">
                                <div className="flex flex-col items-center">
                                    <span className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-colors duration-300
                                        ${activeSection === name
                                            ? "bg-[#0B2E34] border-[#0B2E34] text-white"
                                            : "bg-white border-gray-200 text-[#0B2E34]"
                                        }`}>
                                        <Icon size={16} />
                                    </span>
                                    {index < arr.length - 1 && (
                                        <div className="w-[2px] flex-1 min-h-[24px] bg-white" />
                                    )}
                                </div>
                                <div
                                    onClick={() => handleNavClick(name)}
                                    className={`flex items-center cursor-pointer h-10 ${index < arr.length - 1 ? subtitle ? "mb-10" : "mb-6" : ""}`}
                                >
                                    <div>
                                        <p className={`text-xs font-semibold transition-colors duration-300 ${activeSection === name ? "text-[#0B2E34]" : "text-gray-700"}`}>
                                            {name}
                                        </p>
                                        {subtitle && (
                                            <p className="text-[10px] text-gray-400 leading-snug mt-0.5">{subtitle}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Mobile section tabs */}
                <div className="flex md:hidden shrink-0 gap-2 overflow-x-auto pb-2 w-full scrollbar-hide">
                    {navItems.map(({ name, icon: Icon }) => (
                        <button
                            key={name}
                            type="button"
                            onClick={() => handleNavClick(name)}
                            className={`flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-full text-[11px] font-medium border transition-colors duration-200
                                ${activeSection === name
                                    ? "bg-[#0B2E34] text-white border-[#0B2E34]"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-[#0B2E34]"
                                }`}
                        >
                            <Icon size={12} />
                            {name}
                        </button>
                    ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex-1 min-w-0 w-full max-w-2xl overflow-y-auto space-y-12 pb-8">

                    <FormSection
                        title="Project Description"
                        dataSection="Project Description"
                        sectionRef={projectDescriptionRef}
                        step={1}
                        totalSteps={5}
                        description="Showcase your carbon expertise and connect with organizations seeking professional guidance. Offer consulting services, carbon auditing, verification, and advisory support to projects and institutions committed to reducing their carbon footprint."
                    >
                        <FormTextarea
                            label="Can you provide a summary of your experience and expertise in the carbon market and related fields?"
                            value={summaryExperience}
                            onChange={setSummaryExperience}
                            placeholder="Briefly describe your background, years of experience, key achievements..."
                            rows={6}
                        />

                        <FileUpload
                            label="Upload your CV / Portfolio / Credentials (optional)"
                            accept=".pdf,.doc,.docx"
                        />

                        <FormTextarea
                            label="What specific areas of carbon finance or emissions trading do you specialize in?"
                            value={specializationAreas}
                            onChange={setSpecializationAreas}
                            placeholder="e.g., REDD+, Gold Standard methodology, Article 6 mechanisms..."
                            rows={6}
                        />
                    </FormSection>

                    <FormSection
                        title="Industry Experience"
                        dataSection="Industry Experience"
                        sectionRef={industryExperienceRef}
                        step={2}
                        totalSteps={5}
                        description="Showcase your carbon expertise and connect with organizations seeking professional guidance. Offer consulting services, carbon auditing, verification, and advisory support to projects and institutions committed to reducing their carbon footprint."
                    >
                        <YesNoButtons
                            label="Have you worked with a diverse range of stakeholders, such as governments, businesses, investors, or NGOs, in the carbon market?"
                            value={workedWithStakeholders}
                            onChange={setWorkedWithStakeholders}
                        />

                        <FormTextarea
                            label="Can you share examples of projects or initiatives you have been involved in within the carbon market?"
                            value={projectExamples}
                            onChange={setProjectExamples}
                            placeholder="List 2–3 notable projects (e.g., 50MW solar VER project in Kenya, Cookstove program in Indonesia...)"
                            rows={6}
                        />
                    </FormSection>

                    <FormSection
                        title="Area of Expertise"
                        dataSection="Area of Expertise"
                        sectionRef={areaOfExpertiseRef}
                        step={3}
                        totalSteps={5}
                        description="Showcase your carbon expertise and connect with organizations seeking professional guidance. Offer consulting services, carbon auditing, verification, and advisory support to projects and institutions committed to reducing their carbon footprint."
                    >
                        <FormDropdown
                            label="What aspects of the carbon market are you particularly knowledgeable about?"
                            value={selectedSpecialization}
                            onChange={setSelectedSpecialization}
                            options={specializations}
                            placeholder="Select Specialization"
                        />

                        <FormDropdown
                            label="Are there specific sectors or industries within the carbon market where you have deep expertise?"
                            value={selectedSector}
                            onChange={setSelectedSector}
                            options={sectors}
                            placeholder="Select Sector"
                        />
                    </FormSection>

                    <FormSection
                        title="Project Support"
                        dataSection="Project Support"
                        sectionRef={projectSupportRef}
                        step={4}
                        totalSteps={5}
                        description="Showcase your carbon expertise and connect with organizations seeking professional guidance. Offer consulting services, carbon auditing, verification, and advisory support to projects and institutions committed to reducing their carbon footprint."
                    >
                        <YesNoButtons
                            label="Have you provided advisory services or technical assistance to carbon projects seeking financing or certification?"
                            value={providedAdvisory}
                            onChange={setProvidedAdvisory}
                        />

                        <FormDropdown
                            label="What role do you typically play in supporting carbon projects or market participants?"
                            value={selectedRole}
                            onChange={setSelectedRole}
                            options={roles}
                            placeholder="Select Role"
                        />

                        <FormTextarea
                            label="Can you provide examples of successful collaborations or partnerships you have facilitated in the carbon market?"
                            value={collaborationExamples}
                            onChange={setCollaborationExamples}
                            placeholder="Brief examples (optional)"
                            rows={7}
                        />
                    </FormSection>

                    <FormSection
                        title="Platform Utilization"
                        dataSection="Platform Utilization"
                        sectionRef={platformUtilizationRef}
                        step={5}
                        totalSteps={5}
                        description="Showcase your carbon expertise and connect with organizations seeking professional guidance. Offer consulting services, carbon auditing, verification, and advisory support to projects and institutions committed to reducing their carbon footprint."
                    >
                        <FormTextarea
                            label="What are your expectations for using our platform to connect with other stakeholders and access resources within the carbon market?"
                            value={platformExpectations}
                            onChange={setPlatformExpectations}
                            placeholder="e.g., Find new clients, collaborate on methodologies, stay updated on policy changes..."
                            rows={7}
                        />

                        <MultiSelectButtons
                            label="Are there specific features or functionalities you would like to see on the platform to support your work as a carbon expert?"
                            options={platformFeatures}
                            selectedValues={selectedFeatures}
                            onChange={setSelectedFeatures}
                            columns={2}
                        />
                    </FormSection>

                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="rounded-full bg-white px-5 py-2 border border-black text-xs text-black font-medium"
                        >
                            Save as Draft
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-2 rounded-full bg-[#044D5E] px-5 py-2 border border-[#044D5E] text-xs text-white font-medium"
                        >
                            Save <CircleArrowRight size={16} strokeWidth={1.75} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CarbonExpert;