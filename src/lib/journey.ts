export type JourneyKind = "work" | "education";

export interface LatLng {
  lat: number;
  lng: number;
}

export interface JourneyEntry extends LatLng {
  org: string;
  role: string;
  date: string;
  highlights: string[];
}

export interface MapMarker extends Omit<JourneyEntry, "highlights"> {
  type: JourneyKind;
}

// The journey list and the map live in separate components, so they sync selection through document events.
declare global {
  interface DocumentEventMap {
    "fly-to-map": CustomEvent<LatLng>;
    "map-marker-selected": CustomEvent<LatLng>;
  }
}
