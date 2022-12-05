import { $, component$, useContext, useStyles$ } from "@builder.io/qwik";
import { MapContext, SelectedContext } from "~/routes";
import styles from "./mileage-stats.css?inline";

export const MileageStats = component$(() => {
  const DEFAULT_DECIMAL_PLACES = 1;
  useStyles$(styles);

  const mapState = useContext(MapContext);
  const selectedState = useContext(SelectedContext);

  const getPercentComplete$ = $(() => {
    const selectedMileage = selectedState.selectedMileage ?? 0;
    return mapState.totalMileage !== undefined && mapState.totalMileage !== 0
      ? `${((selectedMileage / mapState.totalMileage) * 100).toFixed(0)}%`
      : 0;
  });

  const getMilesRemaining$ = $(() => {
    const selectedMileage = selectedState.selectedMileage ?? 0;
    return mapState.totalMileage !== undefined
      ? Math.abs(mapState.totalMileage - selectedMileage).toFixed(
          DEFAULT_DECIMAL_PLACES
        )
      : "0.0";
  });

  const getPercentRemaining$ = $(() => {
    const selectedMileage = selectedState.selectedMileage ?? 0;
    return mapState.totalMileage !== undefined && mapState.totalMileage !== 0
      ? `${Math.abs(
          ((mapState.totalMileage - selectedMileage) / mapState.totalMileage) *
            100
        ).toFixed(0)}%`
      : 0;
  });

  return (
    <div class="mileage-stats-root">
      <div class="statistic-block">
        <div class="left-column">
          <label>Total</label>
          <div class="data">
            {mapState.totalMileage?.toFixed(DEFAULT_DECIMAL_PLACES)}
            <span class="miles-label">mi</span>
          </div>
        </div>
      </div>
      <div class="statistic-block">
        <div class="left-column">
          <label>Completed</label>
          <div class="data">
            {selectedState.selectedMileage ? selectedState.selectedMileage.toFixed(DEFAULT_DECIMAL_PLACES) : "0.0"}
            <span class="miles-label">mi</span>
          </div>
        </div>
        <div class="right-column">
          <span class="percentage-complete">{getPercentComplete$()}</span>
        </div>
      </div>
      <div class="statistic-block">
        <div class="left-column">
          <label>Remaining</label>
          <div class="data">
            {getMilesRemaining$()}
            <span class="miles-label">mi</span>
          </div>
        </div>
        <div class="right-column">
          <span class="percentage-remaining">{getPercentRemaining$()}</span>
        </div>
      </div>
    </div>
  );
});
