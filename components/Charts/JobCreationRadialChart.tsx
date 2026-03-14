// app/components/charts/JobCreationNestedDonutChart.tsx
'use client';

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const JobCreationNestedDonutChart = () => {
    const outerSeries = [38, 32, 30];
    const outerLabels = ['Women', 'Youth', 'Other'];

    const innerSeries = [56, 44];
    const innerLabels = ['Full Time', 'Part Time'];

    const options: ApexCharts.ApexOptions = {
        series: outerSeries,
        chart: {
            type: 'donut',
            // Height/width will be controlled by container
        },
        labels: outerLabels,
        colors: ['#044D5E', '#4ABEA6', '#C9DBB4'],
        stroke: {
            show: false,
            width: 0
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
                donut: {
                    size: '75%',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total Jobs',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#374151',
                        },
                    },
                },
            },
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        tooltip: {
            y: { formatter: (val) => `${val}%` },
        },
        responsive: [{
            breakpoint: 640, // sm:
            options: {
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                total: {
                                    fontSize: '12px',
                                }
                            }
                        }
                    }
                }
            }
        }]
    };

    const innerOptions: ApexCharts.ApexOptions = {
        series: innerSeries,
        chart: {
            type: 'donut',
        },
        labels: innerLabels,
        colors: ['#1ECEC9', '#28A9F1'],
        stroke: {
            show: false,
            width: 0
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '75%',
                },
            },
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        tooltip: { enabled: false },
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                Job Creation from all activities
            </h2>

            {/* Responsive Grid: stacked on mobile, side-by-side on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Nested Donut Chart - Responsive Container */}
                <div className="relative w-full max-w-sm mx-auto aspect-square">
                    {/* Container sets responsive size */}
                    <div className="w-full h-full">
                        {/* Outer Donut */}
                        <Chart
                            options={options}
                            series={outerSeries}
                            type="donut"
                            height="100%"
                            width="100%"
                        />

                        {/* Inner Donut - Overlay centered */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[75%] h-[75%]">
                                <Chart
                                    options={innerOptions}
                                    series={innerSeries}
                                    type="donut"
                                    height="100%"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Legend */}
                <div className="space-y-8">
                    <div>
                        <div className="space-y-5">
                            {[
                                { label: 'Full Time', value: 56, color: '#1ECEC9' },
                                { label: 'Part Time', value: 44, color: '#28A9F1' },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-4 justify-between">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-6 h-6 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <p className="text-sm font-medium text-gray-700">{item.label}</p>
                                    </div>
                                    <p className="text-lg font-medium text-gray-900">{item.value}%</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="space-y-5">
                            {[
                                { label: 'Women', value: 38, color: '#044D5E' },
                                { label: 'Youth', value: 32, color: '#4ABEA6' },
                                { label: 'Other', value: 30, color: '#C9DBB4' },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-4 justify-between">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-6 h-6 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <p className="text-sm font-medium text-gray-700">{item.label}</p>
                                    </div>
                                    <p className="text-lg font-medium text-gray-900">{item.value}%</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCreationNestedDonutChart;