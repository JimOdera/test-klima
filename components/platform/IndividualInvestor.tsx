"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    User,
    Target,
    PieChart,
    AlertTriangle,
    TrendingUp,
    ShieldCheck,
    Handshake,
    CircleArrowRight,
} from "lucide-react";
import {
    FormTextarea,
    FormDropdown,
    YesNoButtons,
    RiskToleranceButtons,
    MultiSelectButtons,
    FileUpload,
    FormSection,
    FormInput,
} from "@/components/Form/Index";

const IndividualInvestor = () => {
    const [activeSection, setActiveSection] = useState<string>("Individual Investor");

    const [personalApproach, setPersonalApproach] = useState("");
    const [selectedObjective, setSelectedObjective] = useState("");
    const [selectedFocus, setSelectedFocus] = useState("");
    const [selectedInvestmentType, setSelectedInvestmentType] = useState("");
    const [sectorGeographicPreferences, setSectorGeographicPreferences] = useState("");
    const [riskTolerance, setRiskTolerance] = useState<"low" | "medium" | "high" | null>(null);
    const [exploreEmerging, setExploreEmerging] = useState<boolean | null>(null);
    const [selectedKpi, setSelectedKpi] = useState("");
    const [regulatoryCompliance, setRegulatoryCompliance] = useState<boolean | null>(null);
    const [selectedRegulations, setSelectedRegulations] = useState<string[]>([]);
    const [selectedStandard, setSelectedStandard] = useState("");
    const [interestedInPartnerships, setInterestedInPartnerships] = useState<boolean | null>(null);
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    const individualInfoRef = useRef<HTMLDivElement>(null);
    const investmentObjectivesRef = useRef<HTMLDivElement>(null);
    const portfolioPreferencesRef = useRef<HTMLDivElement>(null);
    const riskAppetiteRef = useRef<HTMLDivElement>(null);
    const performanceMetricsRef = useRef<HTMLDivElement>(null);
    const regulatoryComplianceRef = useRef<HTMLDivElement>(null);
    const partnershipOpportunitiesRef = useRef<HTMLDivElement>(null);

    const sectionRefs = useMemo(
        () => ({
            "Individual Investor": individualInfoRef,
            "Investment Objectives": investmentObjectivesRef,
            "Portfolio Preferences": portfolioPreferencesRef,
            "Risk Appetite": riskAppetiteRef,
            "Performance Metrics": performanceMetricsRef,
            "Regulatory & Compliance": regulatoryComplianceRef,
            "Partnership Opportunities": partnershipOpportunitiesRef,
        }),
        []
    );

    const navItems = [
        { name: "Individual Investor", icon: User, subtitle: "Share your personal investment approach and values" },
        { name: "Investment Objectives", icon: Target, subtitle: null },
        { name: "Portfolio Preferences", icon: PieChart, subtitle: null },
        { name: "Risk Appetite", icon: AlertTriangle, subtitle: null },
        { name: "Performance Metrics", icon: TrendingUp, subtitle: null },
        { name: "Regulatory & Compliance", icon: ShieldCheck, subtitle: null },
        { name: "Partnership Opportunities", icon: Handshake, subtitle: null },
    ];

    const objectives = [
        "Climate-resilient infrastructure",
        "Renewable energy projects",
        "Sustainable agriculture",
        "Green housing development",
        "Water and waste management",
        "Low-carbon transportation",
        "Eco-tourism and conservation",
    ];

    const focusOptions = ["Financial Returns", "Environmental Impact", "Both"];

    const investmentTypes = [
        "Renewable Energy Projects",
        "Sustainable Agriculture & Forestry",
        "Green Bonds",
        "Climate Tech Startups",
        "Carbon Credit Projects",
        "Sustainable Real Estate",
        "Water Conservation Initiatives",
    ];

    const kpis = [
        "Carbon Emission Reduction",
        "Energy Efficiency",
        "Renewable Energy Output",
        "Water Usage Reduction",
        "Biodiversity Impact",
        "Social Impact Score",
        "Return on Investment (ROI)",
    ];

    const regulations = [
        "Environmental Impact Assessments (EIA)",
        "Green Taxonomy Compliance (e.g., EU Taxonomy)",
        "Carbon Disclosure Reporting (e.g., CDP)",
        "Sustainable Finance Disclosure Regulation (SFDR)",
    ];

    const standards = [
        "ISO 14001",
        "GRI Standards",
        "UN Sustainable Development Goals (SDGs)",
        "Task Force on Climate-related Financial Disclosures (TCFD)",
        "Principles for Responsible Investment (PRI)",
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
        console.log("Individual Investor form submitted:", {
            personalApproach,
            selectedObjective,
            selectedFocus,
            selectedInvestmentType,
            sectorGeographicPreferences,
            riskTolerance,
            exploreEmerging,
            selectedKpi,
            regulatoryCompliance,
            selectedRegulations,
            selectedStandard,
            interestedInPartnerships,
            selectedFeatures,
        });
    };

    return (
        <div className="space-y-6">

            {/* Sidebar + Form */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-18 lg:gap-32 items-start">

                {/* Sticky sidebar */}
                <aside className="hidden md:flex flex-col gap-2 sticky top-0 self-start shrink-0 w-64 lg:w-72 xl:w-80 bg-gradient-to-br from-[#BFEFF8]/30 to-[#B1CA69]/30 p-4 rounded-2xl">
                    <h1 className="text-sm font-semibold text-gray-700 mb-2">Let's onboard you as an<br />Individual Investor</h1>
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
                        title="Individual Investor"
                        dataSection="Individual Investor"
                        sectionRef={individualInfoRef}
                        step={1}
                        totalSteps={7}
                        description="Discover verified green projects and carbon credit opportunities tailored for individual investors. Build your sustainable portfolio, track your environmental impact, and connect with vetted projects that align with your values and investment goals."
                    >
                        <FormTextarea
                            label="What is your approach to green finance and sustainability?"
                            value={personalApproach}
                            onChange={setPersonalApproach}
                            placeholder="Share your personal commitment, values, and experience..."
                            rows={6}
                        />

                        <FileUpload
                            label="Upload green finance strategy / sustainability strategy (optional)"
                            accept=".pdf,.doc,.docx"
                        />
                    </FormSection>

                    <FormSection
                        title="Investment Objectives"
                        dataSection="Investment Objectives"
                        sectionRef={investmentObjectivesRef}
                        step={2}
                        totalSteps={7}
                        description="Discover verified green projects and carbon credit opportunities tailored for individual investors. Build your sustainable portfolio, track your environmental impact, and connect with vetted projects that align with your values and investment goals."
                    >
                        <FormDropdown
                            label="What are your specific objectives in seeking green finance opportunities?"
                            value={selectedObjective}
                            onChange={setSelectedObjective}
                            options={objectives}
                            placeholder="Select Objective"
                        />

                        <div className="space-y-2">
                            <label className="text-xs text-gray-700 font-medium block">
                                Are you primarily focused on generating financial returns, achieving environmental impact, or both?
                            </label>
                            <div className="flex gap-3 flex-wrap">
                                {focusOptions.map((opt) => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => setSelectedFocus(selectedFocus === opt ? "" : opt)}
                                        className={`relative w-36 h-12 flex items-center justify-center rounded-lg border text-xs font-semibold transition
                                            ${selectedFocus === opt
                                                ? "bg-[#E3FCEF] border-[#0D453B] text-[#0D453B]"
                                                : "border-gray-300 hover:bg-gray-50 text-gray-600 bg-white"
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </FormSection>

                    <FormSection
                        title="Portfolio Preferences"
                        dataSection="Portfolio Preferences"
                        sectionRef={portfolioPreferencesRef}
                        step={3}
                        totalSteps={7}
                        description="Discover verified green projects and carbon credit opportunities tailored for individual investors. Build your sustainable portfolio, track your environmental impact, and connect with vetted projects that align with your values and investment goals."
                    >
                        <FormDropdown
                            label="What types of green investments are you interested in?"
                            value={selectedInvestmentType}
                            onChange={setSelectedInvestmentType}
                            options={investmentTypes}
                            placeholder="Select Investment Type"
                        />

                        <FormInput
                            label="Do you have any sector or geographic preferences for investments?"
                            value={sectorGeographicPreferences}
                            onChange={setSectorGeographicPreferences}
                            placeholder="e.g., Renewable energy in Africa, Water projects in Asia..."
                        />
                    </FormSection>

                    <FormSection
                        title="Risk Appetite"
                        dataSection="Risk Appetite"
                        sectionRef={riskAppetiteRef}
                        step={4}
                        totalSteps={7}
                        description="Discover verified green projects and carbon credit opportunities tailored for individual investors. Build your sustainable portfolio, track your environmental impact, and connect with vetted projects that align with your values and investment goals."
                    >
                        <RiskToleranceButtons
                            label="What is your risk tolerance when it comes to green investments?"
                            value={riskTolerance}
                            onChange={setRiskTolerance}
                        />

                        <YesNoButtons
                            label="Are you open to exploring both established and emerging green technologies or projects?"
                            value={exploreEmerging}
                            onChange={setExploreEmerging}
                        />
                    </FormSection>

                    <FormSection
                        title="Performance Metrics"
                        dataSection="Performance Metrics"
                        sectionRef={performanceMetricsRef}
                        step={5}
                        totalSteps={7}
                        description="Discover verified green projects and carbon credit opportunities tailored for individual investors. Build your sustainable portfolio, track your environmental impact, and connect with vetted projects that align with your values and investment goals."
                    >
                        <FormDropdown
                            label="What Key Performance Indicators (KPIs) are important to you in assessing the success of green investments?"
                            value={selectedKpi}
                            onChange={setSelectedKpi}
                            options={kpis}
                            placeholder="Select KPI"
                        />
                    </FormSection>

                    <FormSection
                        title="Regulatory & Compliance Considerations"
                        dataSection="Regulatory & Compliance"
                        sectionRef={regulatoryComplianceRef}
                        step={6}
                        totalSteps={7}
                        description="Discover verified green projects and carbon credit opportunities tailored for individual investors. Build your sustainable portfolio, track your environmental impact, and connect with vetted projects that align with your values and investment goals."
                    >
                        <YesNoButtons
                            label="Are there regulatory or compliance requirements that need to be considered in your green investment strategy?"
                            value={regulatoryCompliance}
                            onChange={setRegulatoryCompliance}
                        />

                        {regulatoryCompliance === true && (
                            <MultiSelectButtons
                                label="If so, select those that apply"
                                options={regulations}
                                selectedValues={selectedRegulations}
                                onChange={setSelectedRegulations}
                                columns={2}
                            />
                        )}

                        <FormDropdown
                            label="How do you ensure alignment with relevant sustainability standards and guidelines?"
                            value={selectedStandard}
                            onChange={setSelectedStandard}
                            options={standards}
                            placeholder="Select Standard"
                        />
                    </FormSection>

                    <FormSection
                        title="Partnership Opportunities"
                        dataSection="Partnership Opportunities"
                        sectionRef={partnershipOpportunitiesRef}
                        step={7}
                        totalSteps={7}
                        description="Discover verified green projects and carbon credit opportunities tailored for individual investors. Build your sustainable portfolio, track your environmental impact, and connect with vetted projects that align with your values and investment goals."
                    >
                        <YesNoButtons
                            label="Are you interested in exploring partnerships with other institutions, investors, or project developers on the platform?"
                            value={interestedInPartnerships}
                            onChange={setInterestedInPartnerships}
                        />

                        {interestedInPartnerships === true && (
                            <MultiSelectButtons
                                label="What features or functionalities would you prioritize in using our platform for green finance activities?"
                                options={platformFeatures}
                                selectedValues={selectedFeatures}
                                onChange={setSelectedFeatures}
                                columns={2}
                            />
                        )}
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

export default IndividualInvestor;