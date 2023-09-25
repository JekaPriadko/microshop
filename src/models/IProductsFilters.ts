export interface IProductsFilters {
  [key: string]: number | string | null;
  categoryId: number | null;
  title: string | null;
  price_min: number | null;
  price_max: number | null;
  offset: number;
  limit: number;
}
