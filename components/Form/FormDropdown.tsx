// FormDropdown.tsx

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormDropdownProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder?: string;
    required?: boolean;
    className?: string;
}

const FormDropdown: React.FC<FormDropdownProps> = ({
    label,
    value,
    onChange,
    options,
    placeholder = "Select an option",
    required = false,
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const displayValue = value || placeholder;
    const isPlaceholder = !value;

    const handleSelect = (option: string) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`}>
            <label className="text-xs text-gray-700 font-medium block">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full text-xs rounded-lg px-4 py-4 flex justify-between bg-white items-center cursor-pointer transition-all duration-200 ${isOpen ? "border border-gray-400 bg-white shadow-sm" : "border border-gray-300 hover:bg-gray-50"
                    }`}
            >
                <span className={isPlaceholder ? "text-gray-500" : "text-gray-800"}>{displayValue}</span>
                {isOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-1 border border-gray-200 rounded-lg bg-white shadow-md z-10 max-h-60 overflow-y-auto"
                    >
                        {options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 cursor-pointer transition"
                            >
                                {option}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FormDropdown;