import { CartPage } from '@/views/CartPage';
import { CatalogPage } from '@/views/CatalogPage';
import { CheckoutPage } from '@/views/CheckoutPage';
import { OneProductPage } from '@/views/OneProductPage';

const routes = [
  {
    path: '/',
    element: <CatalogPage />,
  },
  {
    path: '/product/:id',
    element: <OneProductPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
];

export default routes;
