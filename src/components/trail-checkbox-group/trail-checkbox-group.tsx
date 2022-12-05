import { $, component$, useContext } from "@builder.io/qwik";
import { SelectedContext } from "~/routes";
import { SelectedState, Trail, TrailSegment } from "~/shared/interfaces";
import {
  getActiveOverlays,
  getSelectedMileage,
} from "~/shared/services/map-service";
import { TrailCheckbox } from "../trail-checkbox/trail-checkbox";

export interface TrailCheckboxGroupProps {
  trail: Trail;
  showSegments: boolean | undefined;
}

export const TrailCheckboxGroup = component$(
  (props: TrailCheckboxGroupProps) => {
    const state = useContext<SelectedState>(SelectedContext);
    const selectedTrailSegments = state.selectedSegments || [];

    const isTrailSelected$ = $((trail: Trail): boolean => {
      const selectedForThisTrail = selectedTrailSegments
        .filter((segment) => segment.trailId === trail.id)
        .map((segment) => segment.id);
      const trailSegmentIds = trail.trailSegments.map((segment) => segment.id);
      return trailSegmentIds.every((segmentId) =>
        selectedForThisTrail.includes(segmentId)
      );
    });

    const isTrailSelected = (trail: Trail): boolean => {
      const selectedForThisTrail = selectedTrailSegments
        .filter((segment) => segment.trailId === trail.id)
        .map((segment) => segment.id);
      const trailSegmentIds = trail.trailSegments.map((segment) => segment.id);
      return trailSegmentIds.every((segmentId) =>
        selectedForThisTrail.includes(segmentId)
      );
    };

    const setSelectedTrail$ = $((trail: Trail, isChecked = false) => {
      const draftSegments = state.selectedSegments
        ? [...state.selectedSegments]
        : [];

      trail.trailSegments.forEach((segment) => {
        const index = draftSegments.findIndex((s) => s.id === segment.id);

        if (isChecked && index === -1) {
          draftSegments.push(segment);
        } else if (!isChecked && index !== -1) {
          draftSegments.splice(index, 1);
        }
      });
      state.selectedSegments = draftSegments;
      window.localStorage.setItem(
        "SELECTED_SEGMENTS_KEY",
        JSON.stringify(state.selectedSegments)
      );
      state.activeOverlays = getActiveOverlays(state.selectedSegments);
      state.selectedMileage = getSelectedMileage(state.selectedSegments);
    });

    const setSelectedTrailSegments$ = $((segments: TrailSegment[]) => {
      const draftSegments = state.selectedSegments
        ? [...state.selectedSegments]
        : [];
      segments.forEach((segment) => {
        const index = draftSegments.findIndex((s) => s.id === segment.id);

        if (index !== -1) {
          draftSegments.splice(index, 1);
        } else {
          draftSegments.push(segment);
        }
      });
      state.selectedSegments = draftSegments;
      window.localStorage.setItem(
        "SELECTED_SEGMENTS_KEY",
        JSON.stringify(state.selectedSegments)
      );
      state.activeOverlays = getActiveOverlays(state.selectedSegments);
      state.selectedMileage = getSelectedMileage(state.selectedSegments);
    });

    const onClickTrail$ = $(async (trail: Trail) => {
      console.log({ trail });
      const selected: boolean = await isTrailSelected$(trail);

      state.currentSegmentName = trail.name;

      // openNotification(trail);
      setSelectedTrail$(trail, !selected);

      setSelectedTrailSegments$(trail.trailSegments);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onClickSegment$ = $((segment: TrailSegment, position: number) => {
      console.log({ segment });

      state.currentSegmentName = segment.name;
      setSelectedTrailSegments$([segment]);
    });

    const isSegmentSelected = (segmentId: string) => {
      return selectedTrailSegments.findIndex((s) => s.id === segmentId) > -1;
    };

    return (
      <li key={props.trail.id}>
        <TrailCheckbox
          checked={isTrailSelected(props.trail)}
          onClick$={() => onClickTrail$(props.trail)}
          labelText={props.trail.name}
          mileage={props.trail.mileage}
        />
        {props.showSegments && props.trail.trailSegments?.length !== 1 ? (
          <ul>
            {" "}
            {props.trail.trailSegments?.map((segment, index) => (
              <li key={index}>
                <TrailCheckbox
                  checked={isSegmentSelected(segment.id)}
                  onClick$={() => onClickSegment$(segment, index)}
                  labelText={segment.name}
                  mileage={segment.mileage}
                />
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </li>
    );
  }
);
