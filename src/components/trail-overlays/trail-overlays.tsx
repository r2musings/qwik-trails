import { component$, useContext } from "@builder.io/qwik";
import { SelectedContext } from "~/routes";
import { SelectedState } from "~/shared/interfaces";
import { OverlayDataItem } from "~/shared/interfaces/overlay-data-item";
import { TrailOverlay } from "../trail-overlay/trail-overlay";

/* eslint-disable-next-line */
export interface TrailOverlaysProps {
  showSegments?: boolean | false;
}

export const TrailOverlays = component$(() => {
  const state = useContext<SelectedState>(SelectedContext);

  return (
    <g id="TrailOverlays">
      {state.activeOverlays?.map((overlay: OverlayDataItem) => {
        return (
          <TrailOverlay
            key={overlay.id}
            overlayItem={overlay}
          />
        );
      })}
    </g>
  );
});
