import { Link } from 'react-router-dom';

import { ICartItem } from '@/models/ICartItem';

import { useCart } from '@/features/CartProducts/use-cartProducts';
import { useCartSumTotal } from '@/features/CartProducts/use-cartSumTotal';

const CartProductsCheckout = () => {
  const { cart, cartCount } = useCart();
  const cartSumTotal = useCartSumTotal();

  return (
    <>
      <h4 className='d-flex justify-content-between align-items-center mb-3'>
        <span className='text-primary'>Your cart</span>
        <span className='badge bg-primary rounded-pill'>{cartCount}</span>
      </h4>
      <ul className='list-group mb-3'>
        {cart.map((cartItem: ICartItem) => (
          <li
            className='list-group-item d-flex justify-content-between lh-sm'
            key={cartItem.product.id}
          >
            <div>
              <h6 className='my-0'>
                <Link
                  to={`/product/${cartItem.product.id}`}
                  className='link-body-emphasis text-decoration-none'
                >
                  {cartItem.product.title}{' '}
                </Link>
              </h6>
            </div>
            <span className='text-body-secondary'>
              ${cartItem.product.price} x {cartItem.quantity}
            </span>
          </li>
        ))}

        <li className='list-group-item d-flex justify-content-between text-info'>
          <span>Total (USD)</span>
          <strong>${cartSumTotal}</strong>
        </li>
      </ul>
    </>
  );
};

export { CartProductsCheckout };
