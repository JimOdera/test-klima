import React from "react";

interface FormSectionProps {
    title: string;
    children: React.ReactNode;
    dataSection: string;
    sectionRef?: React.RefObject<HTMLDivElement | null>;
    step?: number;
    totalSteps?: number;
    description?: string;
}

const FormSection: React.FC<FormSectionProps> = ({
    title,
    children,
    dataSection,
    sectionRef,
    step,
    totalSteps = 7,
    description,
}) => {
    return (
        <>
            <div ref={sectionRef} data-section={dataSection}>
                {/* Step badge */}
                {step && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#F7B131] text-[#785B0C] mb-3">
                        Step {step} of {totalSteps}
                    </span>
                )}

                <h1 className="text-lg font-medium text-gray-600 mb-2">{title}</h1>

                {/* Description */}
                {description && (
                    <p className="text-xs text-gray-400 leading-relaxed mb-6 w-full max-w-xl">{description}</p>
                )}

                <div className="space-y-6">{children}</div>
            </div>
            <hr className="border-t border-gray-200 my-6" />
        </>
    );
};

export default FormSection;