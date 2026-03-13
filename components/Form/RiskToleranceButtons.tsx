import React from "react";
import { Check } from "lucide-react";

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
                    return "bg-[#E3FCEF] border-[#0D453B] text-[#0D453B]";
                case "medium":
                    return "bg-yellow-100 border-yellow-500 text-yellow-700";
                case "high":
                    return "bg-red-100 border-red-500 text-red-800";
            }
        }
        return "border-gray-300 hover:bg-gray-50 text-gray-600 bg-white";
    };

    const getIconStyles = (level: "low" | "medium" | "high") => {
        switch (level) {
            case "low":
                return "bg-[#0FE880] text-[#0D453B]";
            case "medium":
                return "bg-yellow-400 text-yellow-900";
            case "high":
                return "bg-red-600 text-white";
        }
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
                        className={`relative w-28 h-12 flex items-center justify-center rounded-lg border text-xs font-semibold capitalize transition ${getButtonStyles(level)}`}
                    >
                        {level}
                        {value === level && (
                            <span className={`absolute right-2 rounded-full w-4 h-4 flex items-center justify-center ${getIconStyles(level)}`}>
                                <Check size={12} />
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RiskToleranceButtons;