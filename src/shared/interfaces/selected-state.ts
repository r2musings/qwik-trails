import { BaseMapImage } from "./base-map-image";
import { OverlayDataItem } from "./overlay-data-item";
// import { Trail } from "./trail";
import { TrailSegment } from "./trail-segment";

export interface SharedState {
  baseMapImage: BaseMapImage;
  currentSegmentName?: string;
  // setCurrentSegmentName: (name: string) => void;
  selectedSegments?: TrailSegment[];
  // setSelectedSegments: (selectedSegments: TrailSegment[]) => void;
  unselectedSegments?: TrailSegment[];
  // setUnselectedSegments: (unselectedSegments: TrailSegment[]) => void;
  activeOverlays?: OverlayDataItem[];
  // setSelectedTrail: (trail: Trail, isChecked: boolean) => void;
  selectedMileage?: number;
  // setSelectedMileage: (mileage: number) => void;
  // resetSelected: () => void;
}
