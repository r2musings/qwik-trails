import {
  component$,
  createContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MapDisplay } from "~/components/map-display/map-display";
import {
  Map,
  MapOverlay,
  OverlayDataItem,
  SharedState,
  Trail,
  TrailSegment,
} from "~/shared/interfaces";
import * as baseMapImage from "~/shared/data/base_map_image_sample.json";
import sourceMap from "~/shared/data/map_sample.json";
import sourceMapOverlays from "~/shared/data/map_overlays_sample.json";
import sourceOverlayData from "~/shared/data/overlay_data_sample.json";

export const SharedContext = createContext<SharedState>("shared-context");
const baseMap: Map = sourceMap;
const allMapOverlays: MapOverlay[] = sourceMapOverlays
const allOverlayDataItems: OverlayDataItem[] = sourceOverlayData;
// console.log(allMapOverlays);
// console.log(allOverlayDataItems);
export const getActiveOverlays = () => {
  baseMap?.trails?.forEach((trail) => {
    trail.trailSegments.forEach((segment: TrailSegment) => {
      const mapOverlay = allMapOverlays.find(
        (mo) => mo.segmentId === segment.id
      );

      if (mapOverlay != null) {
        segment.overlayItems = allOverlayDataItems.filter((odi) =>
          mapOverlay.overlayDataIds?.includes(odi.id)
        );
      }
    });
  });

  const activeOverlays = sourceMap?.trails?.flatMap((t: Trail) =>
    t.trailSegments.flatMap((s: TrailSegment) => s.overlayItems)
  );
  return activeOverlays as OverlayDataItem[];
};

export default component$(() => {
  const state = useStore<SharedState>({
    activeOverlays: getActiveOverlays(),
    baseMapImage: baseMapImage,
  });

  useContextProvider(SharedContext, state);

  return (
    <div class="map-display-container">
      <MapDisplay />
    </div>
  );
});

export const head: DocumentHead = {
  title: "GSM Trails",
  meta: [
    {
      name: "description",
      content: "Great Smoky Mountain trails",
    },
  ],
};
