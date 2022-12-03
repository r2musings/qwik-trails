import {
  component$,
  createContext,
  useContext,
  useStyles$,
} from "@builder.io/qwik";
import { BaseMapImage } from "~/shared/interfaces/base-map-image";
import styles from "./map-display.css?inline";

import { TrailOverlays } from "../trail-overlays/trail-overlays";
import { SharedState } from "~/shared/interfaces/selected-state";

export const SharedContext = createContext<SharedState>("shared-context");

export interface MapDisplayProps {
  showSegments?: boolean | false;
  baseMap?: BaseMapImage;
  //printRef: any;
  //onCreatePdf: any;
}

export const MapDisplay = component$((props: MapDisplayProps) => {
  useStyles$(styles);
  const state = useContext<SharedState>(SharedContext);
  const baseMap = props.baseMap || state.baseMapImage;
  const viewBox = `0 0 ${baseMap.width} ${baseMap.height}`;

  return (
    <div style={{ width: "100%", height: "100%" }} class="map-display-root">
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use
          href="#_Image1"
          x="0"
          y="0"
          width={baseMap.width + "px"}
          height={baseMap.height + "px"}
        />
        <TrailOverlays />
        <defs>
          <image
            id="_Image1"
            width={baseMap.width + "px"}
            height={baseMap.height + "px"}
            href={baseMap.href}
          />
        </defs>
      </svg>
    </div>
  );
});
