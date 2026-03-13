// FileUpload.tsx

import React from "react";
import Image from "next/image";
import { imageUpload } from "@/public";

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
    // helperText = "",
    // helperText = "Click to upload (PDF, DOC, DOCX)",
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
            <label
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition"
                style={{ borderSpacing: '8px', strokeDasharray: '8 4' }}
            >
                <div className="flex flex-col items-center">
                    <Image src={imageUpload} alt="imageUpload" />
                    <p className="text-center text-xs"><span className="font-bold">Upload File(s)</span> <br />Drag and drop files here</p>
                    {/* <span className="text-xs text-gray-500">{helperText}</span> */}
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