export interface FavoriteItem {
  id: number;
  img: string;
  name: string;
  price: number;
  specialPrice?: number;
}

export interface FavoritesState {
  data: Array<FavoriteItem> | null;
  loading: boolean;
  error: boolean;
}
