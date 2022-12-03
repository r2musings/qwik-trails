import { component$, useContext } from "@builder.io/qwik";
import { SharedState } from "~/shared/interfaces";
import { OverlayDataItem } from "~/shared/interfaces/overlay-data-item";
import { SharedContext } from "../map-display/map-display";

import { TrailOverlay } from "./trail-overlay";

/* eslint-disable-next-line */
export interface TrailOverlaysProps {
  showSegments?: boolean | false;
}

export const TrailOverlays = component$(() => {
  const state = useContext<SharedState>(SharedContext);

  // console.log(activeOverlays);
  // useStylesScoped$(styles);
  return (
    <g id="TrailOverlays">
      {state.activeOverlays?.map((overlay: OverlayDataItem) => {
        return <TrailOverlay overlayItem={overlay} />;
      })}
    </g>
  );
});
