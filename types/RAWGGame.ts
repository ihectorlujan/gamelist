export type RAWGGame = {
  id: number;
  slug: string;
  name: string;
  released: string | null;
  tba: boolean;
  background_image: string | null;
  rating: number;
  rating_top: number;
  ratings: Record<string, unknown>;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: Record<string, unknown>;
  metacritic: number | null;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: ESRBRating | null;
  platforms: GamePlatform[];
};

export type ESRBRating = {
  id: number;
  slug: string;
  name: string;
};

export type GamePlatform = {
  platform: Platform;
  released_at: string | null;
  requirements: Requirements | null;
};

export type Platform = {
  id: number;
  slug: string;
  name: string;
};

export type Requirements = {
  minimum: string | null;
  recommended: string | null;
};