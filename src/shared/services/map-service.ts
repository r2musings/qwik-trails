/* eslint-disable @typescript-eslint/no-unused-vars */
import { $, component$, useStore } from "@builder.io/qwik";
import {
  BaseMapImage,
  Map,
  OverlayDataItem,
  Trail,
  TrailSegment,
} from "../interfaces";
import baseMapImage from "~/shared/data/base_map_image_sample.json";
import sourceMap from "~/shared/data/map_sample.json";
import sourceMapOverlays from "~/shared/data/map_overlays_sample.json";
import sourceOverlayData from "~/shared/data/overlay_data_sample.json";
import { MapState } from "../interfaces/map-state";

export const getMap = (mapId?: string): Map => {
  return sourceMap;
};

export const getBaseMapImage = (mapId?: string): BaseMapImage => {
  return baseMapImage;
};

export const getMapOverlays = (mapId: string) => {
  return sourceMapOverlays;
};

export const getOverlayData = (mapId: string) => {
  return sourceOverlayData;
};

export const getActiveOverlays = () => {
  sourceMap?.trails?.forEach((trail) => {
    trail.trailSegments.forEach((segment: TrailSegment) => {
      const mapOverlay = sourceMapOverlays.find(
        (mo) => mo.segmentId === segment.id
      );

      if (mapOverlay != null) {
        segment.overlayItems = sourceOverlayData.filter((odi) =>
          mapOverlay.overlayDataIds?.includes(odi.id)
        );
      }
    });
  });

  const activeOverlays = sourceMap?.trails?.flatMap((t: Trail) =>
    t.trailSegments.flatMap((s: TrailSegment) => s.overlayItems)
  );
  return activeOverlays as OverlayDataItem[];
};

export const getAllTrails = () => {
  return sourceMap?.trails ? sourceMap.trails : ([] as Trail[]);
};

