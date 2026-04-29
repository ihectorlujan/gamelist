export type Game = {
  id: number;
  name: string;
  status: string;
  rating: number | null;
  platform?: string;
  cover?: string;
};