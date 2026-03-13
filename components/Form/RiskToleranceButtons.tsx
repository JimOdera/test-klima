// RiskToleranceButtons.tsx

import React from "react";

interface RiskToleranceButtonsProps {
    label: string;
    value: "low" | "medium" | "high" | null;
    onChange: (value: "low" | "medium" | "high" | null) => void;
    required?: boolean;
    className?: string;
}

const RiskToleranceButtons: React.FC<RiskToleranceButtonsProps> = ({
    label,
    value,
    onChange,
    required = false,
    className = "",
}) => {
    const levels: Array<"low" | "medium" | "high"> = ["low", "medium", "high"];

    const getButtonStyles = (level: "low" | "medium" | "high") => {
        if (value === level) {
            switch (level) {
                case "low":
                    return "bg-green-100 border-green-500 text-green-800";
                case "medium":
                    return "bg-yellow-100 border-yellow-500 text-yellow-700";
                case "high":
                    return "bg-red-100 border-red-500 text-red-800";
            }
        }
        return "border-gray-300 hover:bg-gray-50 text-gray-600";
    };

    return (
        <div className={className}>
            <label className="text-xs text-gray-700 font-medium block mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="flex gap-3">
                {levels.map((level) => (
                    <button
                        key={level}
                        type="button"
                        onClick={() => onChange(value === level ? null : level)}
                        className={`px-4 py-2 rounded-lg border text-xs font-medium capitalize transition ${getButtonStyles(
                            level
                        )}`}
                    >
                        {level}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RiskToleranceButtons;