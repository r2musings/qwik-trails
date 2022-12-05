import {
  component$,
  createContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MapDisplay } from "~/components/map-display/map-display";
import { TrailsList } from "~/components/trails-list/trails-list";
import { SelectedState, MapState, UiState, CurrentUserState } from "~/shared/interfaces";
import {
  getActiveOverlays,
  getAllTrails,
  getBaseMapImage,
  getTotalMileage,
} from "~/shared/services/map-service";

export const SelectedContext = createContext<SelectedState>("selected-context");
export const MapContext = createContext<MapState>("map-context");
export const UiContext = createContext<UiState>("ui-context");
export const CurrentUserContext = createContext<CurrentUserState>("current-user-context");

export default component$(() => {
  const selectedState = useStore<SelectedState>({
    activeOverlays: getActiveOverlays(),
  });
  useContextProvider(SelectedContext, selectedState);

  const mapState = useStore<MapState>({
    currentBaseMap: getBaseMapImage(),
    sortedTrails: getAllTrails(),
    totalMileage: getTotalMileage()
  });
  useContextProvider(MapContext, mapState);

  const uiState = useStore<UiState>({
    isTrailsListVisible: false,
  });
  useContextProvider(UiContext, uiState);

  const currentUserState = useStore<CurrentUserState>({
    isTrackingMileage: true,
    isLoggedIn: true
  });
  useContextProvider(CurrentUserContext, currentUserState);
  
  return (
    <>
      <div class="map-display-container">
        <MapDisplay />
      </div>
      <div
        class={uiState.isTrailsListVisible ? "trail-data-container open" : "trail-data-container"}>
        <TrailsList />
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
