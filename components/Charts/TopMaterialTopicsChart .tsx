'use client'

import React from 'react'

const topics = [
    { label: 'Climate Change', value: 45, color: '#0B2E34' },
    { label: 'Circular Economy', value: 30, color: '#C9DA96' },
    { label: 'Labour Practices', value: 25, color: '#4ABEA6' },
]

const DonutChart = () => {
    const size = 200
    const cx = size / 2
    const cy = size / 2
    const radius = 75
    const strokeWidth = 32
    const circumference = 2 * Math.PI * radius
    const gap = 3 // small gap between segments in degrees

    // Convert gap degrees to arc length
    const gapArc = (gap / 360) * circumference

    let cumulative = 0

    const segments = topics.map((topic) => {
        const segmentArc = (topic.value / 100) * circumference
        const adjustedArc = segmentArc - gapArc
        const dasharray = `${adjustedArc} ${circumference - adjustedArc}`
        const offset = circumference - cumulative * circumference / 100 + gapArc / 2
        cumulative += topic.value
        return { ...topic, dasharray, offset }
    })

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
            {segments.map((seg, i) => (
                <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={seg.dasharray}
                    strokeDashoffset={seg.offset}
                    strokeLinecap="butt"
                />
            ))}
        </svg>
    )
}

const TopMaterialTopicsChart = () => {
    return (
        <div className="w-full space-y-4">
            <div>
                <h2 className="text-2xl font-semibold text-teal-900">Top material topics</h2>
                <p className="text-sm text-gray-500 mt-1">Top material topics this period</p>
            </div>

            <div className="flex gap-4">
                {/* Left stat card */}
                <div className="bg-[#f0f0e8] rounded-xl p-6 flex flex-col justify-between min-w-[200px] w-[220px]">
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Total Materials topics</p>
                        <p className="text-5xl font-bold text-teal-900 mt-2">4</p>
                    </div>
                    <div className="border-t border-gray-300 pt-4 mt-6">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Assessment Source</p>
                        <p className="text-base font-bold text-teal-900 mt-1">Stakeholder Input</p>
                    </div>
                </div>

                {/* Chart + legend card */}
                <div className="flex-1 bg-[#f0f0e8] rounded-xl p-6 flex items-center gap-8">
                    {/* Donut */}
                    <div className="shrink-0">
                        <DonutChart />
                    </div>

                    {/* Legend */}
                    <div className="flex flex-col gap-4">
                        {topics.map((topic) => (
                            <div key={topic.label} className="flex items-center gap-3">
                                <span
                                    className="w-3 h-3 rounded-full shrink-0"
                                    style={{ backgroundColor: topic.color }}
                                />
                                <span className="text-sm font-semibold text-teal-900">{topic.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMaterialTopicsChart