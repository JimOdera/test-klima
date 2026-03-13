// MultiSelectButtons.tsx

import React from "react";

interface MultiSelectButtonsProps {
    label: string;
    options: string[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
    required?: boolean;
    className?: string;
    columns?: 1 | 2;
}

const MultiSelectButtons: React.FC<MultiSelectButtonsProps> = ({
    label,
    options,
    selectedValues,
    onChange,
    required = false,
    className = "",
    columns = 2,
}) => {
    const toggleOption = (option: string) => {
        const newValues = selectedValues.includes(option)
            ? selectedValues.filter((v) => v !== option)
            : [...selectedValues, option];
        onChange(newValues);
    };

    const gridCols = columns === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2";

    return (
        <div className={className}>
            <p className="text-xs text-gray-700 font-medium mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </p>
            <div className={`grid ${gridCols} gap-3`}>
                {options.map((option) => (
                    <button
                        key={option}
                        type="button"
                        onClick={() => toggleOption(option)}
                        className={`px-4 py-2 rounded-lg border text-left text-xs transition ${selectedValues.includes(option)
                            ? "bg-green-100 border-green-500 text-green-800"
                            : "border-gray-300 hover:bg-gray-50"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MultiSelectButtons;