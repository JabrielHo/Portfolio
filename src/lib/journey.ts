export type JourneyKind = "work" | "education";

export interface JourneyEntry {
  id: string;
  org: string;
  role: string;
  date: string;
  highlights: string[];
  lat: number;
  lng: number;
}

export interface MapMarker extends Omit<JourneyEntry, "highlights"> {
  type: JourneyKind;
}

// The journey list and the map live in separate components, so they sync selection through document events.
declare global {
  interface DocumentEventMap {
    "select-entry": CustomEvent<{ id: string }>;
    "selection-changed": CustomEvent<{ id: string | null }>;
  }
}
