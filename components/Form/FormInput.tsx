// FormInput.tsx

import React from "react";

interface FormInputProps {
    label: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    type?: "text" | "email" | "number";
    className?: string;
    step?: string;
    min?: string;
    max?: string;
}

const FormInput: React.FC<FormInputProps> = ({
    label,
    value,
    onChange,
    placeholder = "",
    required = false,
    type = "text",
    className = "",
    step,
    min,
    max,
}) => {
    return (
        <div className={className}>
            <label className="text-xs text-gray-700 font-medium block mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-full text-xs border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:border-gray-400 transition bg-white"
                placeholder={placeholder}
                step={step}
                min={min}
                max={max}
            />
        </div>
    );
};

export default FormInput;