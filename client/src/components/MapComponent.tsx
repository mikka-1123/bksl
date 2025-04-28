import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';

// Define the type for location objects and region data
interface ServiceLocation {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  region: string;
}

interface RegionData {
  name: string;
  sites: number;
  salesPercentage: number;
  employeesPercentage: number;
}

// Define regions and their statistics
const regionData: Record<string, RegionData> = {
  "North America": {
    name: "North America",
    sites: 45,
    salesPercentage: 35,
    employeesPercentage: 30
  },
  "Europe": {
    name: "Europe, Africa and Middle East",
    sites: 75,
    salesPercentage: 40,
    employeesPercentage: 47
  },
  "Asia": {
    name: "Asia Pacific",
    sites: 60,
    salesPercentage: 25,
    employeesPercentage: 23
  },
  "South America": {
    name: "South America",
    sites: 30,
    salesPercentage: 15,
    employeesPercentage: 12
  },
  
};

// Countries where services are offered with coordinates and their regions
const serviceLocations: ServiceLocation[] = [
  { name: "United States", coordinates: [-95.7129, 37.0902], region: "North America" },
  { name: "Canada", coordinates: [-106.3468, 56.1304], region: "North America" },
  { name: "United Kingdom", coordinates: [-3.4360, 55.3781], region: "Europe" },
  { name: "Germany", coordinates: [10.4515, 51.1657], region: "Europe" },
  { name: "France", coordinates: [2.2137, 46.2276], region: "Europe" },
  { name: "India", coordinates: [78.9629, 20.5937], region: "Asia" },
  { name: "China", coordinates: [104.1954, 35.8617], region: "Asia" },
  { name: "Japan", coordinates: [138.2529, 36.2048], region: "Asia" },
  { name: "United Arab Emirates", coordinates: [53.8478, 23.4241], region: "Europe" },
  { name: "Brazil", coordinates: [-51.9253, -14.2350], region: "South America" },
  { name: "Australia", coordinates: [133.7751, -25.2744], region: "Asia" },
  { name: "South Africa", coordinates: [22.9375, -30.5595], region: "Europe" }
];

const MapComponent: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number, y: number } | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setSelectedRegion(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <motion.div 
      className="relative rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      ref={mapRef}
    >
      <div className="w-full aspect-[2/1] relative">
        <div className="absolute inset-0 rounded-md overflow-hidden bg-white">
          <ComposableMap
            projection="geoEquirectangular"
            className="w-full h-full"
            projectionConfig={{
              scale: 160,
              center: [0, 0]
            }}
          >
            {/* World map - using standard TopoJSON world map */}
            <ZoomableGroup disablePanning>
              <Geographies geography="https://unpkg.com/world-atlas@2.0.2/countries-110m.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#79c0da" // Light blue color for all continents
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: "#5bacc9" },
                        pressed: { outline: "none" }
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Location markers */}
              {serviceLocations.map((location, index) => (
                <Marker
                  key={index}
                  coordinates={location.coordinates}
                  onClick={(evt: React.MouseEvent) => {
                    evt.stopPropagation();
                    setSelectedRegion(location.region);
                  }}
                >
                  <circle
                    r={4}
                    fill="#FFFFFF"
                    stroke="#0f2549"
                    strokeWidth={2}
                    className="cursor-pointer"
                  />
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>

        {/* Information overlay for selected region */}
        {selectedRegion && regionData[selectedRegion] && (
          <div
            className="absolute z-10 bg-white p-4 rounded-lg shadow-md border border-gray-200"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'auto',
              maxWidth: '280px'
            }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-base text-[#0f2549]">
                {regionData[selectedRegion].name}
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedRegion(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </button>
            </div>
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2"></span>
                <span>{regionData[selectedRegion].sites} sites</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2"></span>
                <span>{regionData[selectedRegion].salesPercentage}% of sales</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2"></span>
                <span>{regionData[selectedRegion].employeesPercentage}% employees</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MapComponent;