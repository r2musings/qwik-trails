import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./map-display.css?inline";
import { TrailOverlays } from "../trail-overlays/trail-overlays";
import { MapToolbar } from "../map-toolbar/map-toolbar";
import { getBaseMapImage } from "~/shared/services/map-service";

export interface MapDisplayProps {
  showSegments?: boolean | false;
  //printRef: any;
  //onCreatePdf: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MapDisplay = component$((props: MapDisplayProps) => {
  useStyles$(styles);
  const currentBaseMap = getBaseMapImage();
  const width = currentBaseMap?.width ?? 1000;
  const height = currentBaseMap?.height ?? 1000;
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <>
      <MapToolbar />
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
            width={width + "px"}
            height={height + "px"}
          />
          <TrailOverlays />
          <defs>
            <image
              id="_Image1"
              width={width + "px"}
              height={height + "px"}
              href={currentBaseMap.href}
            />
          </defs>
        </svg>
      </div>
    </>
  );
});
