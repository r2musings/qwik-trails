import {
  component$,
  createContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MapDisplay } from "~/components/map-display/map-display";
import { SelectedState, MapState } from "~/shared/interfaces";
import { TrailData } from "~/components/trail-data/trail-data";
import {
  getActiveOverlays,
  getAllTrails,
  getBaseMapImage,
} from "~/shared/services/map-service";

export const SelectedContext = createContext<SelectedState>("selected-context");
export const MapContext = createContext<MapState>("map-context");

export default component$(() => {
  const selectedState = useStore<SelectedState>({
    activeOverlays: getActiveOverlays()
  });

  const mapState = useStore<MapState>({
    currentBaseMap: getBaseMapImage(),
    sortedTrails: getAllTrails(),
  });

  useContextProvider(SelectedContext, selectedState);
  useContextProvider(MapContext, mapState);

  return (
    <>
      <div class="map-display-container">
        <MapDisplay />
      </div>
      <div class="trail-data-container">
        <TrailData />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "GSM Trails",
  meta: [
    {
      name: "description",
      content: "GSM Trails",
    },
  ],
};
