import { component$, useStyles$ } from "@builder.io/qwik";
import { TrailCheckboxGroup } from "../trail-checkbox-group/trail-checkbox-group";
import { getMap } from "~/shared/services/map-service";
import styles from "./trails-list.css?inline";

export const TrailsList = component$(() => {
  useStyles$(styles);
  const sourceMap = getMap();
  const sortedTrails = sourceMap?.trails || [];
  return (
    <>
      <div
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          margin: "0 0 0 20px",
        }}
      >
        Trails
      </div>
      {/* <TrailSorter /> */}
      <ul>
        {sortedTrails?.map((trail) => (
          <TrailCheckboxGroup
            trail={trail}
            key={trail.id}
            showSegments={true}
          />
        ))}
      </ul>
    </>
  );
});
