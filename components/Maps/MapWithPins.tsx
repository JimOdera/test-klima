// app/components/Maps/MapWithPins.tsx

'use client';

import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import { Icon, divIcon, point, type LatLngExpression } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';
import Image from 'next/image';
import { Project } from '../data/projects';

interface MapWithPinsProps {
  projects: Project[];
  activeId?: number;
  onPinClick?: (id: number) => void;
}

// Fix Leaflet default icon issue in Next.js
delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Beautiful custom cluster icon
const createClusterIcon = (cluster: { getChildCount: () => number }) => {
  const count = cluster.getChildCount();
  const size = count < 10 ? 40 : count < 100 ? 50 : 60;

  return divIcon({
    html: `
      <div class="relative flex items-center justify-center">
        <div class="absolute inset-0 animate-ping opacity-75 rounded-full bg-blue-500 w-full h-full"></div>
        <div style="width:${size}px; height:${size}px;" class="relative bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-white">
          ${count}
        </div>
      </div>
    `,
    className: '',
    iconSize: point(size, size),
    iconAnchor: point(size / 2, size / 2),
  });
};

// Standard blue pin icon
const bluePinIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Active red pin icon (larger)
const redPinIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [30, 49],
  iconAnchor: [15, 49],
  popupAnchor: [1, -40],
  shadowSize: [49, 49],
});

// Controller to fit all markers on initial load
function FitBoundsController({ projects }: { projects: Project[] }) {
  const map = useMap();

  useEffect(() => {
    if (projects.length === 0) return;

    const bounds = projects.map(p => [p.lat, p.lng] as [number, number]);
    map.fitBounds(bounds, {
      padding: [50, 50],
      maxZoom: 12,
      animate: false,
    });
  }, [map, projects]);

  return null;
}

// Controller to pan/zoom to active project
function ActiveProjectFocusController({ activeId, projects }: { activeId?: number; projects: Project[] }) {
  const map = useMap();

  useEffect(() => {
    if (!activeId) return;
    const project = projects.find(p => p.id === activeId);
    if (!project) return;

    map.flyTo([project.lat, project.lng], 10, {
      animate: true,
      duration: 1.2,
    });
  }, [activeId, map, projects]);

  return null;
}

export default function MapWithPins({ projects, activeId, onPinClick }: MapWithPinsProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const fallbackCenter: LatLngExpression = [0.0236, 37.9062];

  return (
    <div className="w-full h-full rounded-r-xl overflow-hidden relative z-0">
      <style jsx global>{`
        .leaflet-container {
          z-index: 1 !important;
        }
        .leaflet-pane {
          z-index: 1 !important;
        }
        .leaflet-top,
        .leaflet-bottom {
          z-index: 1 !important;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          padding: 0;
          border-radius: 16px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          z-index: 2 !important;
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
          width: 280px !important;
        }
        .custom-popup .leaflet-popup-close-button {
          display: none !important;
        }
        .leaflet-popup-tip {
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 2 !important;
        }
        .leaflet-popup {
          z-index: 1000 !important;
        }
        /* Pulse animation for active marker */
        @keyframes markerPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .active-marker-wrapper {
          animation: markerPulse 1.5s ease-in-out infinite;
        }
      `}</style>

      <MapContainer
        center={fallbackCenter}
        zoom={6}
        className="w-full h-full"
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterIcon}
          maxClusterRadius={50}
          spiderfyOnMaxZoom={true}
          showCoverageOnHover={false}
        >
          {projects.map((project) => {
            const isActive = project.id === activeId;
            return (
              <Marker
                key={project.id}
                position={[project.lat, project.lng] as LatLngExpression}
                icon={isActive ? redPinIcon : bluePinIcon}
                zIndexOffset={isActive ? 1000 : 0}
                eventHandlers={{
                  click: () => onPinClick?.(project.id),
                }}
              >
                <Popup className="custom-popup">
                  <div className="bg-white">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight">{project.title}</h3>
                      <p className="text-sm text-gray-700 mt-2">{project.location}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-4 text-xs">
                        <span className={`px-3 py-1 rounded-full text-white font-medium ${project.status === 'Completed' ? 'bg-emerald-600'
                            : project.status === 'In Progress' ? 'bg-[#044D5E]'
                              : project.status === 'Approved-Pending drawdown' ? 'bg-blue-500'
                                : 'bg-amber-500'
                          }`}>
                          {project.status}
                        </span>
                        <span className="text-gray-600">Progress: <span className="font-semibold">{project.progress}%</span></span>
                        <span className="text-gray-500">{project.lastUpdated}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPinClick?.(project.id);
                        }}
                        className="mt-5 text-sm font-medium text-[#044D5E] hover:underline flex items-center gap-1"
                      >
                        View full details
                        <span className="text-lg">→</span>
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>

        <FitBoundsController projects={projects} />
        <ActiveProjectFocusController activeId={activeId} projects={projects} />
      </MapContainer>
    </div>
  );
}