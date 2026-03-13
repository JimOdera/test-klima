// YesNoButtons.tsx

import React from "react";

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
                    className={`px-4 py-2 rounded-lg border text-xs font-medium transition bg-white ${value === true
                        ? "bg-green-100 border-green-500 text-green-800"
                        : "border-gray-300 hover:bg-gray-50 text-gray-600"
                        }`}
                >
                    Yes
                </button>
                <button
                    type="button"
                    onClick={() => onChange(value === false ? null : false)}
                    className={`px-4 py-2 rounded-lg border text-xs font-medium transition bg-white ${value === false
                        ? "bg-red-100 border-red-500 text-red-800"
                        : "border-gray-300 hover:bg-gray-50 text-gray-600"
                        }`}
                >
                    No
                </button>
            </div>
        </div>
    );
};

export default YesNoButtons;