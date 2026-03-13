// FileUpload.tsx

import React from "react";
import { UploadCloud } from "lucide-react";

interface FileUploadProps {
    label: string;
    onChange?: (file: File | null) => void;
    accept?: string;
    required?: boolean;
    className?: string;
    helperText?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
    label,
    onChange,
    accept = ".pdf,.doc,.docx",
    required = false,
    className = "",
    helperText = "Click to upload (PDF, DOC, DOCX)",
}) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        onChange?.(file);
    };

    return (
        <div className={className}>
            <label className="text-xs text-gray-700 font-medium block mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <label className="flex flex-col items-center justify-center w-full h-24 bg-white border border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 focus:outline-none focus:border-gray-400 transition">
                <div className="flex flex-col items-center">
                    <UploadCloud className="w-6 h-6 text-gray-500 mb-2" />
                    <span className="text-xs text-gray-500">{helperText}</span>
                </div>
                <input
                    type="file"
                    className="hidden"
                    accept={accept}
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
};

export default FileUpload;