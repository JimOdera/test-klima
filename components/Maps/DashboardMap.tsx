// app/components/DashboardMap.tsx
'use client';

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { Icon, divIcon, point, type LatLngExpression } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { projects } from '../data/projects';

// Fix Leaflet icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const createClusterIcon = (cluster: any) => {
  const count = cluster.getChildCount();
  const size = count < 10 ? 40 : count < 100 ? 50 : 60;

  return divIcon({
    html: `<div class="flex items-center justify-center">
      <div class="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping"></div>
      <div style="width:${size}px;height:${size}px" class="relative bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-4 border-white">
        ${count}
      </div>
    </div>`,
    className: '',
    iconSize: point(size, size),
    iconAnchor: point(size / 2, size / 2),
  });
};

const blueIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const center: LatLngExpression = [0.0236, 37.9062]; // Kenya

export default function DashboardMap() {
  return (
    <div className="w-full h-96 md:h-[380px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <MapContainer
        center={center}
        zoom={6}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterIcon}
          maxClusterRadius={80}
        >
          {projects.map((project) => (
            <Marker
              key={project.id}
              position={[project.lat, project.lng] as LatLngExpression}
              icon={blueIcon}
            >
              <Popup>
                <div className="p-3 min-w-48">
                  <h3 className="font-bold text-teal-900">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.location}</p>
                  <p className="text-xs mt-2">
                    Status:{' '}
                    <span className={`font-semibold ${project.status === 'Completed' ? 'text-green-600' :
                      project.status === 'Under Review' ? 'text-orange-600' :
                        project.status === 'Approved-Pending drawdown' ? 'text-yellow-600' :
                          'text-blue-600'
                      }`}>
                      {project.status}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Progress: {project.progress}%</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}