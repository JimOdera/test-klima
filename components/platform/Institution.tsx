"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    Building2,
    Target,
    AlertTriangle,
    BarChart3,
    Users,
    ScrollText,
    Handshake,
    Plus,
    Trash2,
    CircleArrowRight,
} from "lucide-react";
import {
    FormTextarea,
    FormDropdown,
    FormInput,
    YesNoButtons,
    RiskToleranceButtons,
    FileUpload,
    MultiSelectButtons,
    FormSection,
} from "@/components/Form/Index";

interface ContactPerson {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

const Institution = () => {
    const [activeSection, setActiveSection] = useState<string>("Institution Information");

    const [approach, setApproach] = useState("");
    const [investmentPreferences, setInvestmentPreferences] = useState("");

    const [selectedObjective, setSelectedObjective] = useState("");
    const [selectedKpi, setSelectedKpi] = useState("");
    const [selectedStakeholder1, setSelectedStakeholder1] = useState("");
    const [selectedStakeholder2, setSelectedStakeholder2] = useState("");
    const [selectedStandard, setSelectedStandard] = useState("");

    const [riskTolerance, setRiskTolerance] = useState<"low" | "medium" | "high" | null>(null);
    const [exploreEmerging, setExploreEmerging] = useState<boolean | null>(null);
    const [measurePerformance, setMeasurePerformance] = useState<boolean | null>(null);
    const [performanceExplanation, setPerformanceExplanation] = useState("");
    const [regulatoryCompliance, setRegulatoryCompliance] = useState<boolean | null>(null);
    const [partnershipOpportunities, setPartnershipOpportunities] = useState<boolean | null>(null);

    const [selectedRegulations, setSelectedRegulations] = useState<string[]>([]);
    const [selectedPartnershipFeatures, setSelectedPartnershipFeatures] = useState<string[]>([]);

    const [relationshipManagers, setRelationshipManagers] = useState<ContactPerson[]>([
        { id: Date.now().toString(), firstName: "", lastName: "", email: "", role: "" }
    ]);
    const [keyHolders, setKeyHolders] = useState<ContactPerson[]>([
        { id: (Date.now() + 1).toString(), firstName: "", lastName: "", email: "", role: "" }
    ]);

    const institutionInfoRef = useRef<HTMLDivElement>(null);
    const investmentObjectivesRef = useRef<HTMLDivElement>(null);
    const riskAppetiteRef = useRef<HTMLDivElement>(null);
    const performanceMetricsRef = useRef<HTMLDivElement>(null);
    const stakeholderEngagementRef = useRef<HTMLDivElement>(null);
    const regulatoryComplianceRef = useRef<HTMLDivElement>(null);
    const partnershipOpportunitiesRef = useRef<HTMLDivElement>(null);

    const sectionRefs = useMemo(
        () => ({
            "Institution Information": institutionInfoRef,
            "Investment Objectives": investmentObjectivesRef,
            "Risk Appetite": riskAppetiteRef,
            "Performance Metrics": performanceMetricsRef,
            "Stakeholder Engagement": stakeholderEngagementRef,
            "Regulatory Compliance": regulatoryComplianceRef,
            "Partnership Opportunities": partnershipOpportunitiesRef,
        }),
        []
    );

    const objectives = [
        "Climate-resilient infrastructure",
        "Renewable energy projects",
        "Sustainable agriculture",
        "Green housing development",
        "Water and waste management",
        "Low-carbon transportation",
        "Eco-tourism and conservation",
    ];

    const kpis = [
        "Carbon Emission Reduction",
        "Energy Efficiency",
        "Renewable Energy Output",
        "Water Usage Reduction",
        "Biodiversity Impact",
    ];

    const stakeholders1 = [
        "Board of Directors",
        "Investment Committee",
        "Risk & Compliance Team",
        "Sustainability Officer",
    ];

    const stakeholders2 = [
        "High Return Preference",
        "Environmental Impact Focus",
        "Regulatory Compliance Priority",
        "Long-Term Sustainability Goals",
    ];

    const standards = [
        "ISO 14001",
        "GRI Standards",
        "UN Sustainable Development Goals (SDGs)",
        "Task Force on Climate-related Financial Disclosures (TCFD)",
    ];

    const regulationOptions = [
        "Environmental Impact Assessments (EIA)",
        "Green Taxonomy Compliance (e.g., EU Taxonomy)",
        "Carbon Disclosure Reporting (e.g., CDP)",
        "Sustainable Finance Disclosure Regulation (SFDR)",
    ];

    const partnershipFeatureOptions = [
        "Real-time ESG performance tracking",
        "Impact investment analytics dashboard",
        "Automated regulatory compliance checks",
        "Secure document and data management system",
    ];

    const roles = [
        "Manager",
        "Director",
        "Senior Officer",
        "Coordinator",
        "Analyst",
        "Specialist",
    ];

    const addRelationshipManager = () => {
        setRelationshipManagers([
            ...relationshipManagers,
            { id: Date.now().toString(), firstName: "", lastName: "", email: "", role: "" }
        ]);
    };

    const removeRelationshipManager = (id: string) => {
        if (relationshipManagers.length > 1) {
            setRelationshipManagers(relationshipManagers.filter(rm => rm.id !== id));
        }
    };

    const updateRelationshipManager = (id: string, field: keyof ContactPerson, value: string) => {
        setRelationshipManagers(relationshipManagers.map(rm =>
            rm.id === id ? { ...rm, [field]: value } : rm
        ));
    };

    const addKeyHolder = () => {
        setKeyHolders([
            ...keyHolders,
            { id: Date.now().toString(), firstName: "", lastName: "", email: "", role: "" }
        ]);
    };

    const removeKeyHolder = (id: string) => {
        if (keyHolders.length > 1) {
            setKeyHolders(keyHolders.filter(kh => kh.id !== id));
        }
    };

    const updateKeyHolder = (id: string, field: keyof ContactPerson, value: string) => {
        setKeyHolders(keyHolders.map(kh =>
            kh.id === id ? { ...kh, [field]: value } : kh
        ));
    };

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

    useEffect(() => {
        if (measurePerformance === false || measurePerformance === null) {
            setPerformanceExplanation("");
        }
    }, [measurePerformance]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted", {
            approach,
            investmentPreferences,
            selectedObjective,
            riskTolerance,
            exploreEmerging,
            measurePerformance,
            performanceExplanation,
            selectedKpi,
            selectedStakeholder1,
            selectedStakeholder2,
            regulatoryCompliance,
            selectedRegulations,
            selectedStandard,
            partnershipOpportunities,
            selectedPartnershipFeatures,
            relationshipManagers,
            keyHolders,
        });
    };

    return (
        <div className="space-y-6">
            {/* Page heading */}
            {/* <div className="shrink-0 space-y-2 sticky top-0 w-full bg-white z-40">
                <h4 className="font-medium text-[#1ECEC9] text-sm">For Institutions</h4>
                <h1 className="text-[#044D5E] text-lg md:text-xl font-semibold">
                    Track Your Green Finance Deployment
                </h1>
                <p className="text-[#044D5E] text-xs leading-relaxed max-w-3xl">
                    Join Klima Harvest as an institution to monitor and report on your green finance initiatives.
                    Access comprehensive tracking tools, generate impact reports, and demonstrate your commitment to
                    sustainable development goals while connecting with verified green projects.
                </p>
            </div> */}

            {/* Sidebar + Form */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-18 lg:gap-32 items-start">

                {/* Sticky sidebar — hidden on mobile, visible md+ */}
                <aside className="hidden md:flex flex-col gap-2 sticky top-0 self-start shrink-0 w-64 lg:w-72 xl:w-80 bg-gradient-to-br from-[#BFEFF8]/30 to-[#B1CA69]/30 p-4 rounded-2xl">
                    <h1 className="text-sm font-semibold text-gray-700 mb-2">Content</h1>
                    <div className="flex flex-col">
                        {[
                            { name: "Institution Information", icon: Building2, subtitle: "Add your institution details to get better visibility" },
                            { name: "Investment Objectives", icon: Target, subtitle: null },
                            { name: "Risk Appetite", icon: AlertTriangle, subtitle: null },
                            { name: "Performance Metrics", icon: BarChart3, subtitle: null },
                            { name: "Stakeholder Engagement", icon: Users, subtitle: null },
                            { name: "Regulatory Compliance", icon: ScrollText, subtitle: null },
                            { name: "Partnership Opportunities", icon: Handshake, subtitle: null },
                        ].map(({ name, icon: Icon, subtitle }, index, arr) => (
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
                                        <div className="w-px flex-1 min-h-[24px] bg-[#0B2E34]" />
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

                {/* Mobile section tabs — visible only on mobile */}
                <div className="flex md:hidden shrink-0 gap-2 overflow-x-auto pb-2 w-full scrollbar-hide">
                    {[
                        { name: "Institution Information", icon: Building2 },
                        { name: "Investment Objectives", icon: Target },
                        { name: "Risk Appetite", icon: AlertTriangle },
                        { name: "Performance Metrics", icon: BarChart3 },
                        { name: "Stakeholder Engagement", icon: Users },
                        { name: "Regulatory Compliance", icon: ScrollText },
                        { name: "Partnership Opportunities", icon: Handshake },
                    ].map(({ name, icon: Icon }) => (
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
                <form onSubmit={handleSubmit} className="flex-1 min-w-0 overflow-y-auto space-y-6 pb-8">
                    <FormSection
                        title="Institution Information"
                        dataSection="Institution Information"
                        sectionRef={institutionInfoRef}
                        step={1}
                        description="Klima Harvest will support you in tracking your green finance commitments against environment, social and economic performance indicators, while connecting you to carbon revenue generating opportunities across your portfolio."
                    >
                        <FormTextarea
                            label="What is your institutional approach to green finance and sustainability?"
                            value={approach}
                            onChange={setApproach}
                            placeholder="Type your answer here..."
                            rows={6}
                        />

                        <FileUpload
                            label="Upload Green Finance Strategy/Sustainability Strategy*"
                            accept=".pdf,.doc,.docx"
                            helperText="Upload your strategy document (PDF, DOC)"
                            required
                        />

                        <FileUpload
                            label="Upload branding materials**"
                            accept=".pdf,.png,.jpg,.jpeg"
                            helperText="Upload branding materials (PDF, PNG, JPG)"
                        />

                        {/* Relationship Managers */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-xs text-gray-700 font-medium">Relationship Manager *</p>
                                <button
                                    type="button"
                                    onClick={addRelationshipManager}
                                    className="flex items-center gap-1 text-xs text-[#044D5E] hover:text-[#044D5E]/80 transition"
                                >
                                    <Plus size={16} />
                                    Add Another
                                </button>
                            </div>
                            <div className="space-y-4 bg-white rounded-lg">
                                {relationshipManagers.map((rm, index) => (
                                    <div key={rm.id} className="border border-gray-200 rounded-lg p-4 space-y-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-medium text-gray-600">
                                                Relationship Manager {index + 1}
                                            </span>
                                            {relationshipManagers.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeRelationshipManager(rm.id)}
                                                    className="text-red-500 hover:text-red-700 transition"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <input
                                                type="text"
                                                value={rm.firstName}
                                                onChange={(e) => updateRelationshipManager(rm.id, 'firstName', e.target.value)}
                                                className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 transition bg-white"
                                                placeholder="First Name"
                                            />
                                            <input
                                                type="text"
                                                value={rm.lastName}
                                                onChange={(e) => updateRelationshipManager(rm.id, 'lastName', e.target.value)}
                                                className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 transition bg-white"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <input
                                            type="email"
                                            value={rm.email}
                                            onChange={(e) => updateRelationshipManager(rm.id, 'email', e.target.value)}
                                            className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 transition bg-white"
                                            placeholder="Email"
                                        />
                                        <FormDropdown
                                            label=""
                                            value={rm.role}
                                            onChange={(value) => updateRelationshipManager(rm.id, 'role', value)}
                                            options={roles}
                                            placeholder="Select Role"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Holders */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-xs text-gray-700 font-medium">
                                    KeyHolder (KH) Expert - M&E Responsible *
                                </p>
                                <button
                                    type="button"
                                    onClick={addKeyHolder}
                                    className="flex items-center gap-1 text-xs text-[#044D5E] hover:text-[#044D5E]/80 transition"
                                >
                                    <Plus size={16} />
                                    Add Another
                                </button>
                            </div>
                            <div className="space-y-4 bg-white rounded-lg">
                                {keyHolders.map((kh, index) => (
                                    <div key={kh.id} className="border border-gray-200 rounded-lg p-4 space-y-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-medium text-gray-600">
                                                KeyHolder Expert {index + 1}
                                            </span>
                                            {keyHolders.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeKeyHolder(kh.id)}
                                                    className="text-red-500 hover:text-red-700 transition"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <input
                                                type="text"
                                                value={kh.firstName}
                                                onChange={(e) => updateKeyHolder(kh.id, 'firstName', e.target.value)}
                                                className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 transition bg-white"
                                                placeholder="First Name"
                                            />
                                            <input
                                                type="text"
                                                value={kh.lastName}
                                                onChange={(e) => updateKeyHolder(kh.id, 'lastName', e.target.value)}
                                                className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 transition bg-white"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <input
                                            type="email"
                                            value={kh.email}
                                            onChange={(e) => updateKeyHolder(kh.id, 'email', e.target.value)}
                                            className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 transition bg-white"
                                            placeholder="Email"
                                        />
                                        <FormDropdown
                                            label=""
                                            value={kh.role}
                                            onChange={(value) => updateKeyHolder(kh.id, 'role', value)}
                                            options={roles}
                                            placeholder="Select Role"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FormSection>

                    <FormSection
                        title="Investment Objectives"
                        dataSection="Investment Objectives"
                        sectionRef={investmentObjectivesRef}
                        step={2}
                        description="Klima Harvest will support you in tracking your green finance commitments against environment, social and economic performance indicators, while connecting you to carbon revenue generating opportunities across your portfolio."
                    >
                        <FormDropdown
                            label="What are your specific objectives in seeking green finance opportunities?"
                            value={selectedObjective}
                            onChange={setSelectedObjective}
                            options={objectives}
                            placeholder="Select"
                        />

                        <FormInput
                            label="Do you have any sector or geographic preferences for investments?"
                            value={investmentPreferences}
                            onChange={setInvestmentPreferences}
                            placeholder="Enter preferences"
                        />
                    </FormSection>

                    <FormSection
                        title="Risk Appetite"
                        dataSection="Risk Appetite"
                        sectionRef={riskAppetiteRef}
                        step={3}
                        description="Klima Harvest will support you in tracking your green finance commitments against environment, social and economic performance indicators, while connecting you to carbon revenue generating opportunities across your portfolio."
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
                        step={4}
                        description="Klima Harvest will support you in tracking your green finance commitments against environment, social and economic performance indicators, while connecting you to carbon revenue generating opportunities across your portfolio."
                    >
                        <YesNoButtons
                            label="Do you currently measure the performance of your green portfolio?"
                            value={measurePerformance}
                            onChange={setMeasurePerformance}
                        />

                        {measurePerformance === true && (
                            <FormTextarea
                                label="If yes, please explain"
                                value={performanceExplanation}
                                onChange={setPerformanceExplanation}
                                placeholder="Type your explanation here..."
                                rows={6}
                            />
                        )}

                        <FormDropdown
                            label="What Key Performance Indicators (KPIs) are important to your institution in assessing the success of green investments?"
                            value={selectedKpi}
                            onChange={setSelectedKpi}
                            options={kpis}
                            placeholder="Select KPI"
                        />
                    </FormSection>

                    <FormSection
                        title="Stakeholder Engagement"
                        dataSection="Stakeholder Engagement"
                        sectionRef={stakeholderEngagementRef}
                        step={5}
                        description="Klima Harvest will support you in tracking your green finance commitments against environment, social and economic performance indicators, while connecting you to carbon revenue generating opportunities across your portfolio."
                    >
                        <FormDropdown
                            label="Who are the key stakeholders within your organization involved in green finance decisions?"
                            value={selectedStakeholder1}
                            onChange={setSelectedStakeholder1}
                            options={stakeholders1}
                            placeholder="Select Stakeholder"
                        />

                        <FormDropdown
                            label="Are there any specific requirements or preferences from your stakeholders regarding green investments?"
                            value={selectedStakeholder2}
                            onChange={setSelectedStakeholder2}
                            options={stakeholders2}
                            placeholder="Select Preference"
                        />
                    </FormSection>

                    <FormSection
                        title="Regulatory Compliance"
                        dataSection="Regulatory Compliance"
                        sectionRef={regulatoryComplianceRef}
                        step={6}
                        description="Klima Harvest will support you in tracking your green finance commitments against environment, social and economic performance indicators, while connecting you to carbon revenue generating opportunities across your portfolio."
                    >
                        <YesNoButtons
                            label="Are there regulatory or compliance requirements that need to be considered in your green investment strategy?"
                            value={regulatoryCompliance}
                            onChange={setRegulatoryCompliance}
                        />

                        {regulatoryCompliance === true && (
                            <MultiSelectButtons
                                label="If so, select those that apply"
                                options={regulationOptions}
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
                        description="Klima Harvest will support you in tracking your green finance commitments against environment, social and economic performance indicators, while connecting you to carbon revenue generating opportunities across your portfolio."
                    >
                        <YesNoButtons
                            label="Are you open to partnership opportunities to enhance your green investment strategy?"
                            value={partnershipOpportunities}
                            onChange={setPartnershipOpportunities}
                        />

                        {partnershipOpportunities === true && (
                            <MultiSelectButtons
                                label="If so, select those that apply"
                                options={partnershipFeatureOptions}
                                selectedValues={selectedPartnershipFeatures}
                                onChange={setSelectedPartnershipFeatures}
                                columns={2}
                            />
                        )}
                    </FormSection>

                    <div className="flex items-center justify-between">
                        <button className="rounded-full bg-white px-5 py-2 border border-black text-xs text-black font-medium">Save as Draft</button>
                        <button className="flex items-center gap-2 rounded-full bg-[#044D5E] px-5 py-2 border border-[#044D5E] text-xs text-white font-medium">Save <CircleArrowRight size={16} strokeWidth={1.75} /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Institution;