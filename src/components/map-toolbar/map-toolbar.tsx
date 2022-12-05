import { component$, useContext, useStyles$ } from "@builder.io/qwik";
import { CurrentUserContext } from "~/routes";
import { MileageStats } from "../mileage-stats/mileage-stats";
import { TrailsListToggle } from "../trails-list-toggle/trails-list-toggle";
import styles from "./map-toolbar.css?inline";

export const MapToolbar = component$(() => {
  const currentUserState = useContext(CurrentUserContext);
  useStyles$(styles);

  return (
    <div class="map-toolbar-root">
      <label class="section-label">Trails</label>
      <TrailsListToggle />
      <div>
        {currentUserState.isLoggedIn && currentUserState.isTrackingMileage ? (
          <MileageStats></MileageStats>
        ) : (
          ""
        )}
      </div>
    </div>
  );
});
