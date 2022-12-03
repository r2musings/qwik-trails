import { Trail } from "./trail";

export interface Map {
  id?: string;
  name?: string;
  mapUrl?: string;
  mapDate?: string;
  excelUrl?: string;
  excelDate?: string;
  trails?: Trail[];
}