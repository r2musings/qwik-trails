import { OverlayDataItem } from "./overlay-data-item";

export interface TrailSegment {
    id: string;
    trailId: string;
    name: string;
    mileage: number;
    isClosed?: boolean;
    overlayIds?: string[];
    overlayItems?: OverlayDataItem[];
    checked?: boolean;
  }