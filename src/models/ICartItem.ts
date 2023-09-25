import { IProduct } from '@/models/IProduct';

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
