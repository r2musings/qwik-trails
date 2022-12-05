/* eslint-disable @typescript-eslint/no-unused-vars */
import { $, component$, useStore } from "@builder.io/qwik";
import {
  BaseMapImage,
  Map,
  MapOverlay,
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

export const getMapOverlays = (mapId: string): MapOverlay[] => {
  return sourceMapOverlays;
};

export const getOverlayData = (mapId: string): OverlayDataItem[] => {
  return sourceOverlayData;
};

export const getActiveOverlays = (segments?: TrailSegment[]) => {
  if (!segments) {
    segments = []; //sourceMap?.trails?.flatMap((t) => t.trailSegments);
  }

  segments.forEach((segment: TrailSegment) => {
    const mapOverlay = sourceMapOverlays.find(
      (mo) => mo.segmentId === segment.id
    );

    if (mapOverlay != null) {
      segment.overlayItems = sourceOverlayData.filter((odi) =>
        mapOverlay.overlayDataIds?.includes(odi.id)
      );
    }
  });

  if (segments) {
    const activeOverlays = segments.flatMap((s) => s.overlayItems);
    return activeOverlays as OverlayDataItem[];
  }
  
  return [];
};

export const getSelectedMileage = (segments?: TrailSegment[]): number => {
  // if (!segments) {
  //   segments = getSelectedSegments();
  // }

  if (segments) {
    return segments.reduce((sum, segment) => (sum += segment.mileage), 0);
  }
  return 0;
};

export const getAllTrails = () => {
  return sourceMap?.trails ? sourceMap.trails : ([] as Trail[]);
};
