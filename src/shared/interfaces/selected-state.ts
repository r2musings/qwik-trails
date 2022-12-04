import { OverlayDataItem } from "./overlay-data-item";
import { TrailSegment } from "./trail-segment";

export interface SelectedState {
  currentSegmentName?: string;
  selectedSegments?: TrailSegment[];
  unselectedSegments?: TrailSegment[];
  activeOverlays?: OverlayDataItem[];
  selectedMileage?: number;
}
