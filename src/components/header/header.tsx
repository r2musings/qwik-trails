import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="header">
      <div class="left-container">
        <div>
          <h1>gsmtrails</h1>
        </div>
      </div>
      <div class="center-container">{/* <TrailFilter></TrailFilter> */}</div>
      <div class="right-container">{/* <LoginControl></LoginControl> */}</div>
    </header>
  );
});
