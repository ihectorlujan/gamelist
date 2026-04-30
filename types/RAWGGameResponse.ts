import { RAWGGame } from "./RAWGGame";

export type RAWGGameResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: RAWGGame[];
};