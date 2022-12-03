import { OverlayDataPart } from "./overlay-data-part";

export interface OverlayDataItem {
  id: string;
  name?: string;
  data?: string;
  overlayDataParts?: OverlayDataPart[];
}
