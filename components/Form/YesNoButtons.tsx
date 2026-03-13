import React from "react";
import { Check, X } from "lucide-react";

interface YesNoButtonsProps {
    label: string;
    value: boolean | null;
    onChange: (value: boolean | null) => void;
    required?: boolean;
    className?: string;
}

const YesNoButtons: React.FC<YesNoButtonsProps> = ({
    label,
    value,
    onChange,
    required = false,
    className = "",
}) => {
    return (
        <div className={className}>
            <p className="text-xs text-gray-700 font-medium mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </p>
            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={() => onChange(value === true ? null : true)}
                    className={`flex items-center gap-1.5 w-28 h-12 flex items-center justify-center relative rounded-lg border text-xs font-semibold transition ${value === true
                        ? "bg-[#E3FCEF] border-[#0D453B] text-[#0D453B]"
                        : "border-gray-300 hover:bg-gray-50 text-gray-600 bg-white"
                        }`}
                >
                    Yes
                    {value === true && (
                        <span className="bg-[#0FE880] text-[#0D453B] absolute right-2 rounded-full w-4 h-4 flex items-center justify-center">
                            <Check size={12} />
                        </span>
                    )}
                </button>
                <button
                    type="button"
                    onClick={() => onChange(value === false ? null : false)}
                    className={`flex items-center gap-1.5 w-28 h-12 flex items-center justify-center relative rounded-lg border text-xs font-semibold transition ${value === false
                        ? "bg-red-100 border-red-500 text-red-800"
                        : "border-gray-300 hover:bg-gray-50 text-gray-600 bg-white"
                        }`}
                >
                    No
                    {value === false && (
                        <span className="bg-red-600 text-red-300 absolute right-2 rounded-full w-4 h-4 flex items-center justify-center">
                            <X size={12} strokeWidth={4} />
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default YesNoButtons;