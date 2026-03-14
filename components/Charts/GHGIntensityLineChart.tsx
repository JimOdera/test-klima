// app/components/charts/GHGIntensityLineChart.tsx
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const GHGIntensityLineChart = () => {
  const [selectedYear, setSelectedYear] = useState('2023');
  const [isOpen, setIsOpen] = useState(false);

  const fullData = {
    years: ['2018', '2019', '2020', '2021', '2022', '2023'],
    climateChange: [120, 115, 180, 105, 100, 155],        // formerly greenPortfolio
    circularEconomy: [130, 158, 125, 152, 120, 118],      // formerly benchmarks
    labourPractice: [140, 135, 145, 130, 125, 112],       // new series
  };

  const endYearIndex = fullData.years.indexOf(selectedYear);
  const filteredData = {
    years: fullData.years.slice(0, endYearIndex + 1),
    climateChange: fullData.climateChange.slice(0, endYearIndex + 1),
    circularEconomy: fullData.circularEconomy.slice(0, endYearIndex + 1),
    labourPractice: fullData.labourPractice.slice(0, endYearIndex + 1),
  };

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    series: [
      { name: 'Climate Change', data: filteredData.climateChange },
      { name: 'Circular Economy', data: filteredData.circularEconomy },
      { name: 'Labour Practice', data: filteredData.labourPractice },
    ],
    colors: ['#1ecec9', '#0088ff', '#044d5e'], // Green, Purple, Dark Teal
    xaxis: {
      categories: filteredData.years,
      title: { text: 'Year', style: { fontSize: '12px', fontWeight: 600, color: '#374151' } },
      axisBorder: { show: false },
      axisTicks: { show: true },
    },
    yaxis: {
      // title: { text: 'GHG Intensity (tCO2e/$M)', style: { fontSize: '12px', fontWeight: 600, color: '#374151' } },
      labels: { formatter: (val) => val.toFixed(0) },
    },
    stroke: { curve: 'smooth', width: 2 },
    fill: {
      type: 'gradient',
      gradient: { shadeIntensity: 1, opacityFrom: 0.6, opacityTo: 0.0, stops: [0, 90, 100] },
    },
    markers: { size: 4, hover: { sizeOffset: 3 } },
    tooltip: {
      y: { formatter: (val) => `${val} tCO2e/$M` },
    },
    legend: {
      position: 'bottom',
      fontSize: '14px',
      fontWeight: 500,
      labels: { colors: '#374151' },
      horizontalAlign: 'left',
    },
    grid: { borderColor: '#e5e7eb' },
  };

  const menuVariants: Variants = {
    closed: { opacity: 0, y: -8, scale: 0.95 },
    open: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div>
      {/* Top Row: Title and Custom Dropdown */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-medium text-gray-800">Topic Trends over time</h2>

        {/* Custom Animated Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500 transition-all"
          >
            {selectedYear}
            <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                <motion.div
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-50"
                >
                  <div className="py-1">
                    {fullData.years.map((year) => (
                      <motion.button
                        key={year}
                        variants={itemVariants}
                        whileHover={{ backgroundColor: '#f3f4f6' }}
                        onClick={() => {
                          setSelectedYear(year);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                          selectedYear === year
                            ? 'text-green-600 bg-green-50'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {year}
                        {selectedYear === year && <span className="ml-2 text-green-600">✔</span>}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Chart options={options} series={options.series} type="area" height={350} />
    </div>
  );
};

export default GHGIntensityLineChart;