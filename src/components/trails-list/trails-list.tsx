import { component$ } from "@builder.io/qwik";
import { TrailCheckboxGroup } from "../trail-checkbox-group/trail-checkbox-group";
import { getMap } from "~/shared/services/map-service";

export const TrailsList = component$(() => {
  const sourceMap = getMap();
  const sortedTrails = sourceMap?.trails || [];
  return (
    <ul>
      {sortedTrails?.map((trail) => (
        <TrailCheckboxGroup
          trail={trail}
          key={trail.id}
          showSegments={true}
        />
      ))}
    </ul>
  );
});
