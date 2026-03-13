"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Pencil,
    Globe,
    Target,
    DollarSign,
    Handshake,
    Calendar,
    Users,
    BarChart3,
    LayoutDashboard,
    CircleArrowRight,
} from "lucide-react";
import {
    FormTextarea,
    FormDropdown,
    YesNoButtons,
    MultiSelectButtons,
    FormSection,
} from "@/components/Form/Index";

const AspirationalHarvestor = () => {
    const [activeSection, setActiveSection] = useState<string>("Project Description");

    const [projectOverview, setProjectOverview] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedCreditType, setSelectedCreditType] = useState("");
    const [hasAssessment, setHasAssessment] = useState<boolean | null>(null);
    const [familiarWithStandards, setFamiliarWithStandards] = useState<boolean | null>(null);
    const [takenSteps, setTakenSteps] = useState<boolean | null>(null);
    const [financingNeeds, setFinancingNeeds] = useState("");
    const [financingAreas, setFinancingAreas] = useState("");
    const [openToStructures, setOpenToStructures] = useState<boolean | null>(null);
    const [selectedTimeline, setSelectedTimeline] = useState("");
    const [hasMilestones, setHasMilestones] = useState<boolean | null>(null);
    const [selectedCommitment, setSelectedCommitment] = useState("");
    const [hasPartnerships, setHasPartnerships] = useState<boolean | null>(null);
    const [impactMeasurementPlan, setImpactMeasurementPlan] = useState("");
    const [impactMetrics, setImpactMetrics] = useState("");
    const [platformUsageVision, setPlatformUsageVision] = useState("");
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    const projectDescriptionRef = useRef<HTMLDivElement>(null);
    const carbonCreditGenerationRef = useRef<HTMLDivElement>(null);
    const verificationCertificationRef = useRef<HTMLDivElement>(null);
    const financingNeedsRef = useRef<HTMLDivElement>(null);
    const investmentStructureRef = useRef<HTMLDivElement>(null);
    const projectTimelineRef = useRef<HTMLDivElement>(null);
    const stakeholderEngagementRef = useRef<HTMLDivElement>(null);
    const impactMeasurementRef = useRef<HTMLDivElement>(null);
    const platformUsageRef = useRef<HTMLDivElement>(null);

    const sectionRefs = useMemo(
        () => ({
            "Project Description": projectDescriptionRef,
            "Carbon Credit Generation": carbonCreditGenerationRef,
            "Verification and Certification": verificationCertificationRef,
            "Financing Needs": financingNeedsRef,
            "Investment Structure": investmentStructureRef,
            "Project Timeline": projectTimelineRef,
            "Stakeholder Engagement": stakeholderEngagementRef,
            "Impact Measurement": impactMeasurementRef,
            "Platform Usage": platformUsageRef,
        }),
        []
    );

    const navItems = [
        { name: "Project Description", icon: Pencil, subtitle: "Overview of your green vision and location" },
        { name: "Carbon Credit Generation", icon: Globe, subtitle: null },
        { name: "Verification and Certification", icon: Target, subtitle: null },
        { name: "Financing Needs", icon: DollarSign, subtitle: null },
        { name: "Investment Structure", icon: Handshake, subtitle: null },
        { name: "Project Timeline", icon: Calendar, subtitle: null },
        { name: "Stakeholder Engagement", icon: Users, subtitle: null },
        { name: "Impact Measurement", icon: BarChart3, subtitle: null },
        { name: "Platform Usage", icon: LayoutDashboard, subtitle: null },
    ];

    const locations = [
        "Africa", "Asia", "Latin America", "North America",
        "Europe", "Oceania", "Global/Multi-region",
    ];

    const creditTypes = [
        "Nature-Based Removal (Afforestation/Reforestation)",
        "Blue Carbon (Mangrove, Seagrass)",
        "Avoidance/Reduction (Renewable Energy, Cookstoves)",
        "Tech-based Removal (DAC, BECCS)",
        "Community-led Projects",
        "Not yet decided",
    ];

    const timelines = [
        "Idea / Concept stage",
        "Feasibility study phase",
        "0–2 years to first issuance",
        "2–5 years to first issuance",
        "5+ years to first issuance",
    ];

    const commitmentLevels = [
        "Fully committed (MoU signed)",
        "Strong interest (Letter of Intent)",
        "Engaged in discussions",
        "Community consultation ongoing",
        "Early-stage awareness",
    ];

    const platformFeatures = [
        "Real-time ESG performance tracking",
        "Impact investment analytics dashboard",
        "Automated regulatory compliance checks",
        "Secure document and data management system",
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
        console.log("Aspirational Harvestor submitted:", {
            projectOverview, selectedLocation, selectedCreditType, hasAssessment,
            familiarWithStandards, takenSteps, financingNeeds, financingAreas,
            openToStructures, selectedTimeline, hasMilestones, selectedCommitment,
            hasPartnerships, impactMeasurementPlan, impactMetrics,
            platformUsageVision, selectedFeatures,
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 md:gap-18 lg:gap-32 items-start">

                {/* Sticky sidebar */}
                <aside className="hidden md:flex flex-col gap-2 sticky top-0 self-start shrink-0 w-64 lg:w-72 xl:w-80 bg-gradient-to-br from-[#BFEFF8]/30 to-[#B1CA69]/30 p-4 rounded-2xl">
                    <h1 className="text-sm font-semibold text-gray-700 mb-2">Let's onboard you as an<br />Aspirational Harvestor</h1>
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
                        totalSteps={9}
                        description="Have a vision for a sustainable project but need support to launch? Join our community of aspiring green entrepreneurs. Access mentorship, resources, and potential funding to develop your carbon reduction ideas from concept to implementation."
                    >
                        <FormTextarea
                            label="Can you provide an overview of your project/business/enterprise/innovation? Include objectives, location, and key activities."
                            value={projectOverview}
                            onChange={setProjectOverview}
                            placeholder="Tell us about your vision, goals, and activities..."
                            rows={6}
                        />
                        <FormDropdown
                            label="Location"
                            value={selectedLocation}
                            onChange={setSelectedLocation}
                            options={locations}
                            placeholder="Select Location"
                        />
                        <FormDropdown
                            label="What type of carbon credits does your project aim to generate?"
                            value={selectedCreditType}
                            onChange={setSelectedCreditType}
                            options={creditTypes}
                            placeholder="Select Credit Type"
                        />
                    </FormSection>

                    <FormSection
                        title="Carbon Credit Generation"
                        dataSection="Carbon Credit Generation"
                        sectionRef={carbonCreditGenerationRef}
                        step={2}
                        totalSteps={9}
                        description="Have a vision for a sustainable project but need support to launch? Join our community of aspiring green entrepreneurs. Access mentorship, resources, and potential funding to develop your carbon reduction ideas from concept to implementation."
                    >
                        <YesNoButtons
                            label="Have you conducted any assessments or studies to estimate the potential carbon emissions reductions or removals from your project?"
                            value={hasAssessment}
                            onChange={setHasAssessment}
                        />
                    </FormSection>

                    <FormSection
                        title="Verification and Certification"
                        dataSection="Verification and Certification"
                        sectionRef={verificationCertificationRef}
                        step={3}
                        totalSteps={9}
                        description="Have a vision for a sustainable project but need support to launch? Join our community of aspiring green entrepreneurs. Access mentorship, resources, and potential funding to develop your carbon reduction ideas from concept to implementation."
                    >
                        <YesNoButtons
                            label="Are you familiar with carbon offset standards and methodologies for verifying and certifying carbon credits?"
                            value={familiarWithStandards}
                            onChange={setFamiliarWithStandards}
                        />
                        <YesNoButtons
                            label="Have you taken any steps to ensure that your project meets the requirements for generating verifiable and credible carbon credits?"
                            value={takenSteps}
                            onChange={setTakenSteps}
                        />
                    </FormSection>

                    <FormSection
                        title="Financing Needs"
                        dataSection="Financing Needs"
                        sectionRef={financingNeedsRef}
                        step={4}
                        totalSteps={9}
                        description="Have a vision for a sustainable project but need support to launch? Join our community of aspiring green entrepreneurs. Access mentorship, resources, and potential funding to develop your carbon reduction ideas from concept to implementation."
                    >
                        <FormTextarea
                            label="What are your financing needs for developing and implementing your carbon project?"
                            value={financingNeeds}
                            onChange={setFinancingNeeds}
                            placeholder="e.g., $300K for feasibility, $1.2M for implementation..."
                            rows={7}
                        />
                        <FormTextarea
                            label="Are you seeking funding for project development, operational costs, or carbon credit certification?"
                            value={financingAreas}
                            onChange={setFinancingAreas}
                            placeholder="Specify which areas..."
                            rows={6}
                        />
                    </FormSection>

                    <FormSection
                        title="Investment Structure"
                        dataSection="Investment Structure"
                        sectionRef={investmentStructureRef}
                        step={5}
                        totalSteps={9}
                        description="Have a vision for a sustainable project but need support to launch? Join our community of aspiring green entrepreneurs. Access mentorship, resources, and potential funding to develop your carbon reduction ideas from concept to implementation."
                    >
                        <YesNoButtons
                            label="Are you open to different investment structures, such as equity financing, debt financing, or revenue-sharing agreements?"
                            value={openToStructures}
                            onChange={setOpenToStructures}
                        />
                    </FormSection>

                    <FormSection
                        title="Project Timeline"
                        dataSection="Project Timeline"
                        sectionRef={projectTimelineRef}
                        step={6}
                        totalSteps={9}
                        description="Have a vision for a sustainable project but need support to launch? Join our community of aspiring green entrepreneurs. Access mentorship, resources, and potential funding to develop your carbon reduction ideas from concept to implementation."
                    >
                        <FormDropdown
                            label="What is the timeline for implementing your carbon project and generating carbon credits?"
                            value={selectedTimeline}
                            onChange={setSelectedTimeline}
                            options={timelines}
                            placeholder="Select Timeline"
                        />
                        <YesNoButtons
                            label="Do you have any specific milestones or deadlines that need to be considered in the financing process?"
                            value={hasMilestones}
                            onChange={setHasMilestones}
                        />
                    </FormSection>

                    <FormSection
                        title="Stakeholder Engagement"
                        dataSection="Stakeholder Engagement"
                        sectionRef={stakeholderEngagementRef}
                        step={7}
                        totalSteps={9}
                        description="Have a vision for a sustainable project but need support to launch? Join our community of aspiring green entrepreneurs. Access mentorship, resources, and potential funding to develop your carbon reduction ideas from concept to implementation."
                    >
                        <FormDropdown
                            label="Who are the key stakeholders involved in your carbon project, and what is their level of commitment?"
                            value={selectedCommitment}
                            onChange={setSelectedCommitment}
                            options={commitmentLevels}
                            placeholder="Select Level of Commitment"
                        />
                        <YesNoButtons
                            label="Are there any existing partnerships or collaborations that could support the success of your project?"
                            value={hasPartnerships}
                            onChange={setHasPartnerships}
                        />
                    </FormSection>

                    <FormSection
                        title="Impact Measurement"
                        dataSection="Impact Measurement"
                        sectionRef={impactMeasurementRef}
                        step={8}
                        totalSteps={9}
                        description="Have a vision for a sustainable project but need support to launch? Join our community of aspiring green entrepreneurs. Access mentorship, resources, and potential funding to develop your carbon reduction ideas from concept to implementation."
                    >
                        <FormTextarea
                            label="How do you plan to measure and report the environmental and social impact of your carbon project?"
                            value={impactMeasurementPlan}
                            onChange={setImpactMeasurementPlan}
                            placeholder="e.g., SDG alignment, community surveys, biodiversity monitoring..."
                            rows={7}
                        />
                        <FormTextarea
                            label="Are there specific metrics or indicators that you use to track progress and performance?"
                            value={impactMetrics}
                            onChange={setImpactMetrics}
                            placeholder="List your KPIs..."
                            rows={6}
                        />
                    </FormSection>

                    <FormSection
                        title="Platform Usage"
                        dataSection="Platform Usage"
                        sectionRef={platformUsageRef}
                        step={9}
                        totalSteps={9}
                        description="Have a vision for a sustainable project but need support to launch? Join our community of aspiring green entrepreneurs. Access mentorship, resources, and potential funding to develop your carbon reduction ideas from concept to implementation."
                    >
                        <FormTextarea
                            label="How do you envision using our platform to connect with potential investors or buyers of carbon credits?"
                            value={platformUsageVision}
                            onChange={setPlatformUsageVision}
                            placeholder="e.g., Pitch project, find co-developers, secure pre-finance..."
                            rows={7}
                        />
                        <MultiSelectButtons
                            label="What features or functionalities would you prioritize in using our platform for green finance activities?"
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

export default AspirationalHarvestor;