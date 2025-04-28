declare module 'react-simple-maps' {
  import React from 'react';

  export interface GeographyProps {
    geography: any;
    [key: string]: any;
  }

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: any;
    width?: number;
    height?: number;
    [key: string]: any;
  }

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    [key: string]: any;
  }

  export interface MarkerProps {
    coordinates: [number, number];
    [key: string]: any;
  }

  export interface GeoProjectionProps {
    projection?: string;
    projectionConfig?: any;
    [key: string]: any;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const ZoomableGroup: React.FC<ZoomableGroupProps>;
  export const Geographies: React.FC<{ geography: any; children: (props: { geographies: any[] }) => React.ReactNode }>;
  export const Geography: React.FC<GeographyProps>;
  export const Marker: React.FC<MarkerProps>;
  export const Graticule: React.FC<any>;
  export const geoPath: any;
  export const geoEqualEarth: any;
  export const geoOrthographic: any;
  export const geoMercator: any;
  export const geoAlbersUsa: any;
} 