'use client'

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormPasswordInputProps {
    label: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
}

const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
    label,
    value,
    onChange,
    placeholder = "",
    required = false,
    className = "",
}) => {
    const [show, setShow] = useState(false);

    return (
        <div className={className}>
            <label className="text-xs text-gray-700 font-medium block mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className="w-full text-xs border border-gray-300 rounded-lg px-4 py-4 pr-9 focus:outline-none focus:border-gray-400 transition"
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                    {show ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
            </div>
        </div>
    );
};

export default FormPasswordInput;