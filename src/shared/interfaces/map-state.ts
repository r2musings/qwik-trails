import { Map } from "./map";
import { Trail } from "./trail";

export interface MapState {
  currentMap?: Map;
  currentTrails?: Trail[];
  totalMileage?: number;
  sortedTrails?: Trail[];
  currentSort?: string;
  filteredTrails?: Trail[];
  currentFilter?: string;
}
