'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';
import Image from 'next/image';
import { projectIcon } from '@/public';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface GreenFinanceChartProps {
    number: number;
}

const GreenFinanceChart: React.FC<GreenFinanceChartProps> = ({ number }) => {
    const progress = Math.round((number / 100) * 100);

    const chartState: { series: number[]; options: ApexOptions } = {
        series: [progress],
        options: {
            chart: {
                height: 200,
                type: 'radialBar' as const,
                toolbar: { show: false },
            },
            plotOptions: {
                radialBar: {
                    startAngle: 0,
                    endAngle: 360,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: 'transparent',
                        dropShadow: {
                            enabled: false,
                        },
                    },
                    track: {
                        background: '#e5e7eb',
                        strokeWidth: '67%',
                        margin: 0,
                        dropShadow: {
                            enabled: false,
                        },
                    },
                    dataLabels: {
                        show: true,
                        name: { show: false },
                        value: {
                            formatter: (val: number) => `${Math.round(val)}%`,
                            color: '#111',
                            fontSize: '20px',
                            fontWeight: 600,
                            offsetY: 6,
                        },
                    },
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#24180E'],
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                    colorStops: [
                        { offset: 0, color: '#008459', opacity: 1 },
                        { offset: 100, color: '#0F1C16', opacity: 1 },
                    ],
                },
            },
            stroke: {
                lineCap: 'round',
            },
            labels: ['Percent'],
        },
    };

    return (
        <div className="w-full">
            {/* Mobile Layout (< md) - Stacked vertically */}
            <div className="flex md:hidden flex-col items-center gap-4 px-4 py-3">
                {/* Chart - Top on mobile */}
                <div className="flex items-center justify-center">
                    <ReactApexChart
                        options={chartState.options}
                        series={chartState.series}
                        type="radialBar"
                        height={120}
                        width={120}
                    />
                </div>

                {/* Icon + Title - Bottom on mobile */}
                <div className="flex items-center gap-3 w-full">
                    <div className="p-2 bg-[#B1CA69] rounded-lg flex-shrink-0">
                        <Image src={projectIcon} alt="Project Icon" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-sm font-semibold text-gray-700 truncate">
                            Green Finance Disbursed
                        </span>
                        <span className="text-xs text-gray-600 truncate">
                            Cumulative finance drawn
                        </span>
                    </div>
                </div>
            </div>

            {/* Desktop/Tablet Layout (>= md) - Horizontal */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 w-full px-4 lg:px-6 py-3">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="p-2 bg-[#B1CA69] rounded-lg flex-shrink-0">
                        <Image src={projectIcon} alt="Project Icon" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-sm lg:text-base font-semibold text-gray-700 truncate">
                            Green Finance Disbursed
                        </span>
                        <span className="text-xs text-gray-600 truncate">
                            Cumulative finance drawn
                        </span>
                    </div>
                </div>

                {/* Chart */}
                <div className="flex items-center justify-center flex-shrink-0">
                    <ReactApexChart
                        options={chartState.options}
                        series={chartState.series}
                        type="radialBar"
                        height={100}
                        width={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default GreenFinanceChart;