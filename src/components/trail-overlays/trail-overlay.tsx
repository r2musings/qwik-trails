import { component$ } from "@builder.io/qwik";

//import { useEffect, useState } from "react";

//import { useHighlightStore } from '@trailfinder/shared/data';
import { OverlayDataItem } from "~/shared/interfaces/overlay-data-item";
import { RgbaColor } from "~/shared/interfaces/rgba-color";

/* eslint-disable-next-line */
export interface TrailOverlayProps {
  overlayItem: OverlayDataItem;
  isVisible?: boolean;
}

export const TrailOverlay = component$((props: TrailOverlayProps) => {
  

  // const highlightColor = useHighlightStore((state) => state.highlightColor);
  // const highlightWidth = useHighlightStore((state) => state.highlightWidth);
  // const [highlightStyle, setHighlightStyle] = useState<any>(undefined);

  // useEffect(() => {
  const defaultStrokeColor: RgbaColor = { r: 113, g: 96, b: 232, a: 0.7 };
  const defaultStrokeOpacity = 0.7;
  const defaultStrokeWidth = 16;

  //   //TEMP
  //   const highlightColor = defaultStrokeColor;
  //   const highlightWidth = defaultStrokeWidth

  //   const createHighlightStyle = () => {
  //     return {
  //       stroke: highlightColor
  //         ? `rgb(${highlightColor.r},
  //               ${highlightColor.g},
  //               ${highlightColor.b})`
  //         : `rgb(${defaultStrokeColor.r},
  //             ${defaultStrokeColor.g},
  //             ${defaultStrokeColor.b})`,
  //       strokeOpacity: highlightColor?.a || defaultStrokeOpacity,
  //       strokeWidth: `${highlightWidth ?? defaultStrokeWidth}px`,
  //     };
  //   };

  //   setHighlightStyle(createHighlightStyle());
  // }, [highlightColor, highlightWidth]);

  const highlightStyle = {
    stroke: `rgb(${defaultStrokeColor.r},
              ${defaultStrokeColor.g},
              ${defaultStrokeColor.b})`,
    strokeOpacity: defaultStrokeOpacity,
    strokeWidth: `${defaultStrokeWidth}px`,
  };

  return props.overlayItem?.overlayDataParts &&
    props.overlayItem.overlayDataParts.length > 0 ? (
    <>
      <g key={props.overlayItem.id} id={props.overlayItem.id}>
        {" "}
        {props.overlayItem.overlayDataParts?.map((part, index) => (
          <path key={index} style={highlightStyle} d={part.data} />
        ))}
      </g>
    </>
  ) : (
    <path
      key={props.overlayItem.id}
      style={highlightStyle}
      id={props.overlayItem.id}
      d={props.overlayItem.data}
    />
  );
});
