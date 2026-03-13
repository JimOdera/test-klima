// FormTextarea.tsx

import React from "react";

interface FormTextareaProps {
    label: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    rows?: number;
    className?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
    label,
    value,
    onChange,
    placeholder = "",
    required = false,
    rows = 6,
    className = "",
}) => {
    const heightClass = rows === 6 ? "h-24" : rows === 7 ? "h-28" : "h-32";

    return (
        <div className={className}>
            <label className="text-xs text-gray-700 font-medium block mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <textarea
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className={`w-full ${heightClass} text-xs border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:border-gray-400 transition bg-white`}
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormTextarea;