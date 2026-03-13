// SubmitButton.tsx

import React from "react";
import { ChevronRight } from "lucide-react";

interface SubmitButtonProps {
    text?: string;
    onClick?: () => void;
    className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
    text = "Submit",
    onClick,
    className = "",
}) => {
    return (
        <button
            type="submit"
            onClick={onClick}
            className={`mt-6 w-fit min-w-[140px] bg-[#044D5E] hover:bg-[#044D5E]/90 text-xs text-white px-5 py-2 rounded-full transition-all duration-300 flex items-center justify-center relative ${className}`}
        >
            {text}
            <ChevronRight size={16} className="absolute right-2" />
        </button>
    );
};

export default SubmitButton;