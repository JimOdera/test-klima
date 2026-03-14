'use client'

import dynamic from 'next/dynamic'
import React, { useState } from 'react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type EmissionTab = 'byType' | 'yearOnYear' | 'top5'

const emissionSeries = [45, 22, 20, 13]
const emissionLabels = ['Land Use', 'Grid Electricity', 'Diesel Fuel', 'Others']
const emissionColors = ['#044D5E', '#3DBFA8', '#7FD9CC', '#C5EFC4']
const emissionValues = ['1.5 tCO₂e/ha', '0.72 tCO₂e/MWh', '0.15 tCO₂e/liter', '0.15 tCO₂e/liter']

function ReductionByType() {
    const donutOptions: ApexCharts.ApexOptions = {
        chart: { type: 'donut', toolbar: { show: false }, sparkline: { enabled: false } },
        labels: emissionLabels,
        colors: emissionColors,
        dataLabels: { enabled: false },
        legend: { show: false },
        stroke: { width: 0 },
        plotOptions: {
            pie: {
                donut: {
                    size: '72%',
                },
            },
        },
        tooltip: {
            y: { formatter: (val: number) => `${val}%` },
        },
    }

    return (
        <div className="flex items-center justify-between gap-8 py-4">
            <div className="flex flex-col gap-5 flex-1">
                {emissionLabels.map((label, i) => (
                    <div key={label} className="flex items-center justify-between gap-4 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-4 h-4 rounded-full flex-shrink-0"
                                style={{ backgroundColor: emissionColors[i] }}
                            />
                            <span className="text-sm text-gray-700">{label}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                            {emissionValues[i]}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex-shrink-0 w-60 h-60 flex-1">
                <Chart
                    type="donut"
                    series={emissionSeries}
                    options={donutOptions}
                    width="100%"
                    height={240}
                />
            </div>
        </div>
    )
}

function YearOnYear() {
    const years = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029']
    const emissions = [1200, 1800, 2500, 3100, 4200, 3600, 4900, 5800, 7100, 8200]

    const lineOptions: ApexCharts.ApexOptions = {
        chart: {
            type: 'line',
            toolbar: { show: false },
            zoom: { enabled: false },
            fontFamily: 'inherit',
        },
        stroke: {
            curve: 'smooth',
            width: 2.5,
            colors: ['#044D5E'],
        },
        markers: {
            size: 4,
            colors: ['#044D5E'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: { size: 6 },
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                colorStops: [
                    { offset: 0, color: '#3DBFA8', opacity: 0.3 },
                    { offset: 100, color: '#3DBFA8', opacity: 0 },
                ],
            },
        },
        xaxis: {
            categories: years,
            labels: { style: { colors: '#6b7280', fontSize: '11px' } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                style: { colors: '#6b7280', fontSize: '11px' },
                formatter: (val: number) => `${(val / 1000).toFixed(1)}k`,
            },
            min: 0,
            max: 9000,
            tickAmount: 5,
        },
        grid: {
            borderColor: '#f0f0f0',
            strokeDashArray: 4,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } },
        },
        tooltip: {
            y: { formatter: (val: number) => `${val.toLocaleString()} tCO₂e` },
        },
        dataLabels: { enabled: false },
        annotations: {
            points: [
                {
                    x: '2024',
                    y: 4200,
                    marker: { size: 6, fillColor: '#044D5E', strokeColor: '#fff', strokeWidth: 2 },
                    label: {
                        text: 'Peak',
                        style: { color: '#fff', background: '#044D5E', fontSize: '10px', padding: { top: 3, bottom: 3, left: 6, right: 6 } },
                        offsetY: -8,
                    },
                },
                {
                    x: '2025',
                    y: 3600,
                    marker: { size: 6, fillColor: '#DC2626', strokeColor: '#fff', strokeWidth: 2 },
                    label: {
                        text: 'Dip',
                        style: { color: '#fff', background: '#DC2626', fontSize: '10px', padding: { top: 3, bottom: 3, left: 6, right: 6 } },
                        offsetY: -8,
                    },
                },
            ],
        },
    }

    return (
        <div className="py-2">
            <Chart
                type="line"
                series={[{ name: 'Emission Reduction', data: emissions }]}
                options={lineOptions}
                height={240}
                width="100%"
            />
        </div>
    )
}

const top5Data = [
    { name: 'Green Horizon Project', value: 210, color: '#044D5E' },
    { name: 'Blue Carbon Initiative', value: 175, color: '#3DBFA8' },
    { name: 'Savanna Restore', value: 140, color: '#7FD9CC' },
    { name: 'Wetlands Guard', value: 98, color: '#C5EFC4' },
    { name: 'Mangrove Belt', value: 72, color: '#44A08D' },
]

function Top5Projects() {
    const barOptions: ApexCharts.ApexOptions = {
        chart: { type: 'bar', toolbar: { show: false } },
        colors: top5Data.map(d => d.color),
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 4,
                distributed: true,
                barHeight: '55%',
            },
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: top5Data.map(d => d.name),
            labels: { style: { colors: '#6b7280', fontSize: '11px' } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: { style: { colors: '#374151', fontSize: '12px' } },
        },
        grid: { borderColor: '#f0f0f0', strokeDashArray: 4, xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } },
        legend: { show: false },
        tooltip: {
            y: { formatter: (val: number) => `${val}k tCO₂e` },
        },
    }

    return (
        <div className="py-2">
            <Chart
                type="bar"
                series={[{ data: top5Data.map(d => d.value) }]}
                options={barOptions}
                height={240}
                width="100%"
            />
        </div>
    )
}

const TABS: { key: EmissionTab; label: string }[] = [
    { key: 'byType', label: 'Reduction by Project Type' },
    { key: 'yearOnYear', label: 'Year on year total emission reduction' },
    { key: 'top5', label: 'Top 5 Projects by emission reduction' },
]

const EmissionInsights = () => {
    const [activeTab, setActiveTab] = useState<EmissionTab>('byType')

    return (
        <div className="w-full rounded-2xl bg-white p-5 shadow-sm bg-gradient-to-b from-[#dffaff] via-white to-white">
            <h1 className="text-xl font-semibold text-gray-900 mb-4">Emission Annual Reduction Insights</h1>

            <div className="flex items-center gap-2 flex-wrap">
                {TABS.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
                            ${activeTab === key
                                ? 'bg-[#3DBFA8] text-white border-[#3DBFA8]'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div>
                {activeTab === 'byType' && <ReductionByType />}
                {activeTab === 'yearOnYear' && <YearOnYear />}
                {activeTab === 'top5' && <Top5Projects />}
            </div>
        </div>
    )
}

export default EmissionInsights