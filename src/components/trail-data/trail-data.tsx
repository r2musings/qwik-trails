import { component$ } from "@builder.io/qwik";
import { TrailsList } from "../trails-list/trails-list";

export const TrailData = component$(() => {
  
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
      <TrailsList />
    </>
  );
});
