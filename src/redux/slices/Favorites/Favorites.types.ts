import { z } from 'zod';

export interface FavoriteItem {
  id: number;
  img: string;
  name: string;
  price: number;
}

export interface FavoritesState {
  data: Array<FavoriteItem> | null;
  loading: boolean;
  error: boolean;
}

export const favoriteSchema = z.object({
  id: z.number(),
  img: z.string(),
  name: z.string(),
  price: z.number(),
  specialPrice: z.number().optional(),
});

export type FavoriteType = z.infer<typeof favoriteSchema>;
