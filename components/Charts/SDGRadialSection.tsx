"use client";

import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import { sdg1, sdg16, sdg2, sdg3, sdg6 } from "@/public";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

interface SDGItem {
    label: string;
    value: number;
    colors: string[];
}

const sdgData: SDGItem[] = [
    {
        label: "No Poverty",
        value: 24,
        colors: ["#E74C3C"],
    },
    {
        label: "Good Health & Wellbeing",
        value: 65,
        colors: ["#27AE60"],
    },
    {
        label: "Zero Hunger",
        value: 51,
        colors: ["#D4A017"],
    },
    {
        label: "Gender Equality",
        value: 51,
        colors: ["#E74C3C"],
    },
];

// Icons for SDGs
const sdgIcons: Record<string, any> = {
    "No Poverty": sdg6,
    "Good Health & Well-being": sdg3,
    "Gender Equality": sdg16,
    "Zero Hunger": sdg2,
};

// Unique explanations for each SDG label
const sdgDescriptions: Record<string, string> = {
    "No Poverty": "Reducing poverty levels through community empowerment programs.",
    "Good Health & Well-being": "Improving access to healthcare and wellness services.",
    "Gender Equality": "Promoting fairness and equal opportunities for all genders.",
    "Zero Hunger": "Ensuring access to nutritious food for vulnerable families.",
};

const SDGRadialSection = () => {
    const chartOptions = (colors: string[]): ApexOptions => ({
        chart: {
            type: "radialBar",
            sparkline: { enabled: true },
        },
        plotOptions: {
            radialBar: {
                hollow: { size: "55%" },
                track: { background: "#E5E7EB" },
                dataLabels: {
                    show: true,
                    name: { show: false },
                    value: {
                        fontSize: "20px",
                        fontWeight: 600,
                        offsetY: 5,
                    },
                },
            },
        },
        colors,
        stroke: { lineCap: "round" },
    });

    const indicatorData = [
        { label: "No Poverty", value: 6 },
        { label: "Good Health & Well-being", value: 5 },
        { label: "No Poverty", value: 3 },
        { label: "Gender Equality", value: 3 },
        { label: "Good Health & Well-being", value: 8 },
        { label: "Good Health & Well-being", value: 7 },
    ];

    return (
        <div className="bg-white border border-gray-200 px-6 py-8 md:px-16 md:py-10 rounded-xl mt-10">
            <h1 className="text-lg font-medium text-gray-800 mb-6">
                Sustainable Development Goals
            </h1>

            {/* TOP RADIAL BARS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {sdgData.map((sdg, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <ReactApexChart
                            options={chartOptions(sdg.colors)}
                            series={[sdg.value]}
                            type="radialBar"
                            height={160}
                            width={160}
                        />
                        <p className="text-sm text-center font-medium text-gray-800 mt-2">
                            {sdg.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* SDG INDICATORS LIST */}
            <div className="mt-10 border-top border-gray-200 pt-6">
                <h2 className="text-md font-medium text-gray-800 mb-4">
                    SDG Indicators
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {indicatorData.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between border-b border-gray-100 pb-2"
                        >
                            <div className="flex items-start gap-3">
                                <Image
                                    src={sdgIcons[item.label] || sdg1}
                                    alt={item.label}
                                    className="w-9 h-9 rounded-full object-cover"
                                    width={36}
                                    height={36}
                                />
                                <div>
                                    <p className="text-sm font-medium text-gray-800">
                                        {item.label}
                                    </p>

                                    {/* Unique explanation per SDG */}
                                    <p className="text-xs text-gray-500">
                                        {sdgDescriptions[item.label] || "No description available."}
                                    </p>
                                </div>
                            </div>

                            <span className="text-sm font-semibold text-gray-700">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SDGRadialSection;
