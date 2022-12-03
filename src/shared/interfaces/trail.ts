import { TrailSegment } from "./trail-segment";

export interface Trail {
  id: string;
  areaId?: number;
  mapId?: string;
  name: string;
  mileage: number;
  trailSegments: TrailSegment[];
  checked?: boolean;
}