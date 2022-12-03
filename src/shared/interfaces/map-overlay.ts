import { OverlayDataItem } from "./overlay-data-item";

export interface MapOverlay {
  id: string;
  mapId?: string;
  segmentId: string;
  name?: string;
  overlayDataItems?: OverlayDataItem[];
  overlayDataIds?: string[];
}
