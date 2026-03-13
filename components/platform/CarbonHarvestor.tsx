"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    FileText,
    Leaf,
    ShieldCheck,
    HandCoins,
    TrendingUp,
    CalendarClock,
    BarChart3,
    Users,
    Target,
    LayoutDashboard,
    CircleArrowRight,
} from "lucide-react";
import {
    FormTextarea,
    FormDropdown,
    YesNoButtons,
    MultiSelectButtons,
    FileUpload,
    FormSection,
    FormInput,
} from "@/components/Form/Index";

const CarbonHarvestor = () => {
    const [activeSection, setActiveSection] = useState<string>("Project Description");

    const [projectOverview, setProjectOverview] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedCreditType, setSelectedCreditType] = useState("");
    const [creditsGenerated, setCreditsGenerated] = useState("");
    const [verificationStandard, setVerificationStandard] = useState("");
    const [creditsRegistered, setCreditsRegistered] = useState<boolean | null>(null);
    const [registryDetails, setRegistryDetails] = useState("");
    const [currentlySelling, setCurrentlySelling] = useState<boolean | null>(null);
    const [hasIdentifiedBuyers, setHasIdentifiedBuyers] = useState<boolean | null>(null);
    const [financialImpact, setFinancialImpact] = useState("");
    const [seekingFinance, setSeekingFinance] = useState<boolean | null>(null);
    const [selectedTimeline, setSelectedTimeline] = useState("");
    const [hasMilestones, setHasMilestones] = useState<boolean | null>(null);
    const [performanceBeyondCarbon, setPerformanceBeyondCarbon] = useState("");
    const [hasChallenges, setHasChallenges] = useState<boolean | null>(null);
    const [stakeholderEngagement, setStakeholderEngagement] = useState("");
    const [hasPartnerships, setHasPartnerships] = useState<boolean | null>(null);
    const [selectedImpactMethod, setSelectedImpactMethod] = useState("");
    const [selectedKpi, setSelectedKpi] = useState("");
    const [platformIntention, setPlatformIntention] = useState("");
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    const projectDescriptionRef = useRef<HTMLDivElement>(null);
    const carbonCreditGenerationRef = useRef<HTMLDivElement>(null);
    const verificationCertificationRef = useRef<HTMLDivElement>(null);
    const marketAccessRef = useRef<HTMLDivElement>(null);
    const financialImpactRef = useRef<HTMLDivElement>(null);
    const projectTimelineRef = useRef<HTMLDivElement>(null);
    const projectPerformanceRef = useRef<HTMLDivElement>(null);
    const stakeholderEngagementRef = useRef<HTMLDivElement>(null);
    const impactMeasurementRef = useRef<HTMLDivElement>(null);
    const platformUtilizationRef = useRef<HTMLDivElement>(null);

    const sectionRefs = useMemo(
        () => ({
            "Project Description": projectDescriptionRef,
            "Carbon Credit Generation": carbonCreditGenerationRef,
            "Verification and Certification": verificationCertificationRef,
            "Market Access": marketAccessRef,
            "Financial Impact": financialImpactRef,
            "Project Timeline": projectTimelineRef,
            "Project Performance": projectPerformanceRef,
            "Stakeholder Engagement": stakeholderEngagementRef,
            "Impact Measurement": impactMeasurementRef,
            "Platform Utilization": platformUtilizationRef,
        }),
        []
    );

    const navItems = [
        { name: "Project Description", icon: FileText, subtitle: "Overview of your carbon project and location" },
        { name: "Carbon Credit Generation", icon: Leaf, subtitle: null },
        { name: "Verification and Certification", icon: ShieldCheck, subtitle: null },
        { name: "Market Access", icon: HandCoins, subtitle: null },
        { name: "Financial Impact", icon: TrendingUp, subtitle: null },
        { name: "Project Timeline", icon: CalendarClock, subtitle: null },
        { name: "Project Performance", icon: BarChart3, subtitle: null },
        { name: "Stakeholder Engagement", icon: Users, subtitle: null },
        { name: "Impact Measurement", icon: Target, subtitle: null },
        { name: "Platform Utilization", icon: LayoutDashboard, subtitle: null },
    ];

    const locations = [
        "Africa", "Asia", "Latin America", "North America",
        "Europe", "Oceania", "Global/Multi-region",
    ];

    const creditTypes = [
        "Verified Emission Reductions (VERs)",
        "Certified Emission Reductions (CERs)",
        "Removal Credits (e.g., afforestation, DAC)",
        "Avoidance/Reduction Credits",
        "Gold Standard VERs",
        "Plan Vivo Certificates",
        "American Carbon Registry (ACR)",
        "Climate Action Reserve (CAR)",
    ];

    const timelines = [
        "Pre-issuance (under development)",
        "0–2 years", "2–5 years", "5–10 years", "10+ years",
        "Ongoing (credits already issued)",
    ];

    const impactMethods = [
        "SDG Contribution Framework",
        "GHG Protocol", "ISO 14064",
        "Verra SD VISta",
        "Gold Standard for the Global Goals",
        "Custom Framework",
    ];

    const kpis = [
        "Hectares of land restored/protected",
        "Jobs created",
        "Households with improved cookstoves",
        "Biodiversity improvement score",
        "Water saved (liters)",
        "Community development index",
        "Women empowerment metrics",
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
        console.log("Carbon Harvestor form submitted:", {
            projectOverview, selectedLocation, selectedCreditType, creditsGenerated,
            verificationStandard, creditsRegistered, registryDetails, currentlySelling,
            hasIdentifiedBuyers, financialImpact, seekingFinance, selectedTimeline,
            hasMilestones, performanceBeyondCarbon, hasChallenges, stakeholderEngagement,
            hasPartnerships, selectedImpactMethod, selectedKpi, platformIntention, selectedFeatures,
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 md:gap-18 lg:gap-32 items-start">

                {/* Sticky sidebar */}
                <aside className="hidden md:flex flex-col gap-2 sticky top-0 self-start shrink-0 w-64 lg:w-72 xl:w-80 bg-gradient-to-br from-[#BFEFF8]/30 to-[#B1CA69]/30 p-4 rounded-2xl">
                    <h1 className="text-sm font-semibold text-gray-700 mb-2">Let's onboard you as a<br />Carbon Harvestor</h1>
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
                        totalSteps={10}
                        description="Are you running or planning a carbon reduction or sequestration project? Connect with investors and institutions ready to fund your initiative. List your project, track your carbon impact, and secure the resources you need to scale your environmental solutions."
                    >
                        <FormTextarea
                            label="Can you provide an overview of your project/business/enterprise/innovation? Include objectives, location, and methodology."
                            value={projectOverview}
                            onChange={setProjectOverview}
                            placeholder="Describe your project..."
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
                        totalSteps={10}
                        description="Are you running or planning a carbon reduction or sequestration project? Connect with investors and institutions ready to fund your initiative. List your project, track your carbon impact, and secure the resources you need to scale your environmental solutions."
                    >
                        <FormInput
                            label="How many carbon credits have been generated by your project, and over what time period?"
                            value={creditsGenerated}
                            onChange={setCreditsGenerated}
                            placeholder="e.g., 85,000 tCO₂e from 2019–2024"
                        />
                        <FormInput
                            label="Which carbon offset standard or methodology was used to verify and certify the carbon credits?"
                            value={verificationStandard}
                            onChange={setVerificationStandard}
                            placeholder="e.g., Verra VCS + CCB, Gold Standard"
                        />
                    </FormSection>

                    <FormSection
                        title="Verification and Certification"
                        dataSection="Verification and Certification"
                        sectionRef={verificationCertificationRef}
                        step={3}
                        totalSteps={10}
                        description="Are you running or planning a carbon reduction or sequestration project? Connect with investors and institutions ready to fund your initiative. List your project, track your carbon impact, and secure the resources you need to scale your environmental solutions."
                    >
                        <FileUpload
                            label="Provide details on the verification and certification process for your carbon credits"
                            accept=".pdf"
                        />
                        <YesNoButtons
                            label="Have the carbon credits been issued and registered on any carbon offset registries or platforms?"
                            value={creditsRegistered}
                            onChange={setCreditsRegistered}
                        />
                        {creditsRegistered === true && (
                            <FormInput
                                label="Registry / Platform Details"
                                value={registryDetails}
                                onChange={setRegistryDetails}
                                placeholder="e.g., Verra Registry, Gold Standard Impact Registry"
                            />
                        )}
                    </FormSection>

                    <FormSection
                        title="Market Access"
                        dataSection="Market Access"
                        sectionRef={marketAccessRef}
                        step={4}
                        totalSteps={10}
                        description="Are you running or planning a carbon reduction or sequestration project? Connect with investors and institutions ready to fund your initiative. List your project, track your carbon impact, and secure the resources you need to scale your environmental solutions."
                    >
                        <YesNoButtons
                            label="Are you currently selling or planning to sell your carbon credits on the carbon market?"
                            value={currentlySelling}
                            onChange={setCurrentlySelling}
                        />
                        <YesNoButtons
                            label="Have you identified potential buyers or investors interested in purchasing your carbon credits?"
                            value={hasIdentifiedBuyers}
                            onChange={setHasIdentifiedBuyers}
                        />
                    </FormSection>

                    <FormSection
                        title="Financial Impact"
                        dataSection="Financial Impact"
                        sectionRef={financialImpactRef}
                        step={5}
                        totalSteps={10}
                        description="Are you running or planning a carbon reduction or sequestration project? Connect with investors and institutions ready to fund your initiative. List your project, track your carbon impact, and secure the resources you need to scale your environmental solutions."
                    >
                        <FormTextarea
                            label="What has been the financial impact of generating and selling carbon credits for your project?"
                            value={financialImpact}
                            onChange={setFinancialImpact}
                            placeholder="e.g., Revenue generated, reinvestment in community..."
                            rows={6}
                        />
                        <YesNoButtons
                            label="Are you seeking additional financing or investment to scale up your project or undertake new initiatives?"
                            value={seekingFinance}
                            onChange={setSeekingFinance}
                        />
                    </FormSection>

                    <FormSection
                        title="Project Timeline"
                        dataSection="Project Timeline"
                        sectionRef={projectTimelineRef}
                        step={6}
                        totalSteps={10}
                        description="Are you running or planning a carbon reduction or sequestration project? Connect with investors and institutions ready to fund your initiative. List your project, track your carbon impact, and secure the resources you need to scale your environmental solutions."
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
                        title="Project Performance"
                        dataSection="Project Performance"
                        sectionRef={projectPerformanceRef}
                        step={7}
                        totalSteps={10}
                        description="Are you running or planning a carbon reduction or sequestration project? Connect with investors and institutions ready to fund your initiative. List your project, track your carbon impact, and secure the resources you need to scale your environmental solutions."
                    >
                        <FormTextarea
                            label="How do you measure and track the environmental and social impact of your project beyond carbon credits?"
                            value={performanceBeyondCarbon}
                            onChange={setPerformanceBeyondCarbon}
                            placeholder="e.g., Biodiversity monitoring, community surveys..."
                            rows={6}
                        />
                        <YesNoButtons
                            label="Have there been any challenges or lessons learned from implementing your carbon project?"
                            value={hasChallenges}
                            onChange={setHasChallenges}
                        />
                    </FormSection>

                    <FormSection
                        title="Stakeholder Engagement"
                        dataSection="Stakeholder Engagement"
                        sectionRef={stakeholderEngagementRef}
                        step={8}
                        totalSteps={10}
                        description="Are you running or planning a carbon reduction or sequestration project? Connect with investors and institutions ready to fund your initiative. List your project, track your carbon impact, and secure the resources you need to scale your environmental solutions."
                    >
                        <FormTextarea
                            label="Who are the key stakeholders involved in your carbon project, and how do you engage with them?"
                            value={stakeholderEngagement}
                            onChange={setStakeholderEngagement}
                            placeholder="e.g., Local communities, government, NGOs..."
                            rows={6}
                        />
                        <YesNoButtons
                            label="Are there any partnerships or collaborations you have formed to support the success of your project?"
                            value={hasPartnerships}
                            onChange={setHasPartnerships}
                        />
                    </FormSection>

                    <FormSection
                        title="Impact Measurement"
                        dataSection="Impact Measurement"
                        sectionRef={impactMeasurementRef}
                        step={9}
                        totalSteps={10}
                        description="Are you running or planning a carbon reduction or sequestration project? Connect with investors and institutions ready to fund your initiative. List your project, track your carbon impact, and secure the resources you need to scale your environmental solutions."
                    >
                        <FormDropdown
                            label="How do you plan to measure and report the environmental and social impact of your carbon project?"
                            value={selectedImpactMethod}
                            onChange={setSelectedImpactMethod}
                            options={impactMethods}
                            placeholder="Select Method"
                        />
                        <FormDropdown
                            label="Are there specific metrics or indicators that you use to track progress and performance?"
                            value={selectedKpi}
                            onChange={setSelectedKpi}
                            options={kpis}
                            placeholder="Select KPIs"
                        />
                    </FormSection>

                    <FormSection
                        title="Platform Utilization"
                        dataSection="Platform Utilization"
                        sectionRef={platformUtilizationRef}
                        step={10}
                        totalSteps={10}
                        description="Are you running or planning a carbon reduction or sequestration project? Connect with investors and institutions ready to fund your initiative. List your project, track your carbon impact, and secure the resources you need to scale your environmental solutions."
                    >
                        <FormTextarea
                            label="How do you intend to leverage our platform to showcase your carbon credits and connect with potential buyers or investors?"
                            value={platformIntention}
                            onChange={setPlatformIntention}
                            placeholder="e.g., List credits, attract buyers, secure financing..."
                            rows={7}
                        />
                        <MultiSelectButtons
                            label="What features or functionalities would be most beneficial to you in leveraging the platform for your carbon project?"
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

export default CarbonHarvestor;