import { component$, useStyles$ } from "@builder.io/qwik";
import { TrailsListToggle } from "../trails-list-toggle/trails-list-toggle";
import styles from "./map-toolbar.css?inline";

export const MapToolbar = component$(() => {
  useStyles$(styles);

  return (
    <div class="map-toolbar-root">
      <label class="section-label">Trails</label>
      <TrailsListToggle />
    </div>
  );
});
