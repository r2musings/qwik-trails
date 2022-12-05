import { component$, PropFunction, useStyles$ } from "@builder.io/qwik";
import styles from "./trail-checkbox.css?inline";

export interface TrailCheckboxProps {
  checked: boolean;
  labelText: string;
  onClick$?: PropFunction<() => void>;
  mileage: number;
}

export const TrailCheckbox = component$((props: TrailCheckboxProps) => {
  useStyles$(styles);
  return (
    <div class="trail-checkbox">
      <label>
        <input
          type="checkbox"
          checked={props.checked}
          onChange$={props.onClick$}
          //disabled={state.isTimerActive}
          disabled={false}
        />
        <span class="name">{props.labelText}</span>
        <span class="mileage">{props.mileage.toFixed(1)} mi</span>
      </label>
      <br />
      {/* <div
      className={styles.hikeDetails}
      style={{ display: checked ? 'flex' : 'none' }}
    >
      <div>
        <DatePicker size={'small'} format={'MM/DD/YYYY'} />
      </div>
      <div>
        <Input placeholder="Notes" size={'small'} width={10}/>
      </div>
    </div> */}
    </div>
  );
});
