import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { Icon, type LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet icons
if (typeof window !== 'undefined') {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });
}

const greenIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface ProjectDetailMapProps {
    lat: number;
    lng: number;
    title: string;
    location: string;
    status: string;
    progress: number;
}

export default function ProjectDetailMap({
    lat,
    lng,
    title,
    location,
    status,
    progress
}: ProjectDetailMapProps) {
    const position: LatLngExpression = [lat, lng];

    return (
        <div className="w-full">
            {/* <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Location</h3> */}
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <MapContainer
                    center={position}
                    zoom={10}
                    className="w-full h-full"
                    zoomControl={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ZoomControl position="bottomright" />

                    <Marker position={position} icon={greenIcon}>
                        <Popup>
                            <div className="p-3 min-w-48">
                                <h3 className="font-bold text-teal-900">{title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{location}</p>
                                <p className="text-xs mt-2">
                                    Status:{' '}
                                    <span className={`font-semibold ${status === 'Completed' ? 'text-green-600' :
                                        status === 'Under Review' ? 'text-orange-600' :
                                            status === 'Approved-Pending drawdown' ? 'text-yellow-600' :
                                                'text-blue-600'
                                        }`}>
                                        {status}
                                    </span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Progress: {progress}%</p>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}