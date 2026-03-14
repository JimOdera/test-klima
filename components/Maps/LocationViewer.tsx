// components/Maps/LocationViewer.tsx

'use client'
import { useEffect, useRef, useState } from 'react'

interface LocationViewerProps {
    lat?: number
    lng?: number
    title?: string
    location?: string
}

export default function LocationViewer({
    lat = -4.423,
    lng = 39.508,
    title = "Mangrove Restoration & Blue Carbon Project",
    location = "Gazi Bay, Kwale County"
}: LocationViewerProps) {
    const mapRef = useRef<HTMLDivElement>(null)
    const mapInstanceRef = useRef<any>(null)
    const [unlocked, setUnlocked] = useState(false)
    const [leafletLoaded, setLeafletLoaded] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return
        if ((window as any).L) { setLeafletLoaded(true); return }

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)

        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.onload = () => setLeafletLoaded(true)
        document.head.appendChild(script)
    }, [])

    useEffect(() => {
        if (!leafletLoaded || !mapRef.current || mapInstanceRef.current) return
        const L = (window as any).L

        const map = L.map(mapRef.current, {
            center: [lat, lng],
            zoom: 11,
            zoomControl: false,
            dragging: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            touchZoom: false,
        })
        mapInstanceRef.current = map

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '© OpenStreetMap © CARTO',
            subdomains: 'abcd',
        }).addTo(map)

        L.control.zoom({ position: 'bottomright' }).addTo(map)

        const icon = L.divIcon({
            className: '',
            html: `
        <div style="position:relative;width:20px;height:20px;">
          <div style="
            width:20px;height:20px;border-radius:50%;
            background:#4ABEA6;border:3px solid white;
            box-shadow:0 2px 10px rgba(0,0,0,0.2);
          "></div>
          <div style="
            position:absolute;top:50%;left:50%;
            transform:translate(-50%,-50%);
            width:36px;height:36px;border-radius:50%;
            background:rgba(74,190,166,0.2);
            animation:pulse 2s ease-out infinite;
          "></div>
        </div>
        <style>
          @keyframes pulse {
            0% { transform:translate(-50%,-50%) scale(0.8); opacity:0.8; }
            100% { transform:translate(-50%,-50%) scale(2); opacity:0; }
          }
        </style>
      `,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
        })

        L.marker([lat, lng], { icon }).addTo(map)
    }, [leafletLoaded])

    const handleInteractionStart = () => {
        if (unlocked) return
        setUnlocked(true)
        const map = mapInstanceRef.current
        if (!map) return
        map.dragging.enable()
        map.scrollWheelZoom.enable()
        map.doubleClickZoom.enable()
        map.touchZoom.enable()
    }

    return (
        <div
            className="relative w-full h-64 rounded-xl overflow-hidden border border-gray-200"
            onMouseEnter={handleInteractionStart}
            onTouchStart={handleInteractionStart}
        >
            <div ref={mapRef} className="w-full h-full" />

            {/* Dim overlay — fades out on interaction */}
            <div
                className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'rgba(0,0,0,0.18)',
                    opacity: unlocked ? 0 : 1
                }}
            />

            {/* Location pill — always visible */}
            <div className="absolute bottom-3 left-3 z-[999] bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm border border-gray-100 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-[#4ABEA6]" />
                <span className="text-xs font-medium text-gray-700">{location}</span>
            </div>
        </div>
    )
}