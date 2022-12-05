import { $, component$, useContext, useStyles$ } from "@builder.io/qwik";
import styles from "./trails-list-toggle.css?inline";
import { UiContext } from "~/routes";
import { UiState } from "~/shared/interfaces";

export const TrailsListToggle = component$(() => {
  useStyles$(styles);
  const state = useContext<UiState>(UiContext);
  const toggleTrailsListVisible$ = $(() => {
    const newState =
      typeof state.isTrailsListVisible !== "undefined"
        ? !state.isTrailsListVisible
        : false;

    state.isTrailsListVisible = newState;
    if (state.isTrailsListVisible && !document.body.classList.contains('trails-list-open')) {
      document.body.classList.add('trails-list-open')
    } else if (document.body.classList.contains('trails-list-open')){
      document.body.classList.remove('trails-list-open');
    }
  });
  return (
    <div class="trails-list-toggle-root" title="Show/hide trails list">
      <div class="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={state.isTrailsListVisible}
            onChange$={() => toggleTrailsListVisible$()}
          />
          Show Trail List
        </label>
      </div>
    </div>
  );
});
