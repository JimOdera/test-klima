import React from "react";

interface FormSectionProps {
    title: string;
    children: React.ReactNode;
    dataSection: string;
    sectionRef?: React.RefObject<HTMLDivElement | null>;
}

const FormSection: React.FC<FormSectionProps> = ({
    title,
    children,
    dataSection,
    sectionRef,
}) => {
    return (
        <>
            <div ref={sectionRef} data-section={dataSection}>
                <h1 className="text-lg font-medium text-gray-600 mb-6">{title}</h1>
                <div className="space-y-6">{children}</div>
            </div>
            <hr className="border-t border-gray-200 my-6" />
        </>
    );
};

export default FormSection;