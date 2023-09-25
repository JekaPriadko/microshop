import { useAppDispatch } from '@/hooks/redux';
import { IProduct } from '@/models/IProduct';

import { ICartItem } from '@/models/ICartItem';

import { FaTrashAlt } from 'react-icons/fa';

import { useCart } from '@/features/CartProducts/use-cartProducts';
import { useCartSumTotal } from '@/features/CartProducts/use-cartSumTotal';

import {
  removeItemFromCart,
  setQuantity,
} from '@/features/CartProducts/cartProducts-slice';
import { Link } from 'react-router-dom';

const CartProductsList = () => {
  const dispatch = useAppDispatch();

  const { cart, cartCount } = useCart();
  const cartSumTotal = useCartSumTotal();

  const changeQuantity = (product: IProduct, quantity: number) => {
    dispatch(setQuantity({ product, quantity }));
  };

  return (
    <>
      {cartCount <= 0 && <h2>Cart empty!</h2>}
      {cartCount > 0 && (
        <>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            {cart.map((cartItem: ICartItem) => (
              <div
                className='cart-item w-75 border rounded p-3 mb-3'
                key={cartItem.product.id}
              >
                <img
                  src={cartItem.product.images[0]}
                  width='100'
                  height='100'
                  className='rounded'
                />
                <div className='d-flex flex-column align-items-start justify-content-center'>
                  <p className='mb-2 fs-5'>{cartItem.product.title}</p>
                  <p className='m-0'>{cartItem.product.category.name}</p>
                </div>

                <span className='fs-5 text-center'>
                  {cartItem.product.price}$
                </span>
                <div className='d-flex align-items-center justify-content-center'>
                  <button
                    className='btn btn-primary'
                    disabled={cartItem.quantity <= 1}
                    onClick={() =>
                      changeQuantity(
                        cartItem.product,
                        Math.max(1, cartItem.quantity - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <span className='mx-2'>{cartItem.quantity}</span>
                  <button
                    className='btn btn-primary'
                    onClick={() =>
                      changeQuantity(
                        cartItem.product,
                        Math.max(1, cartItem.quantity + 1)
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <div className='text-center'>
                  <p className='fs-6 mb-1'>Total</p>
                  <span className='fs-5'>
                    {cartItem.product.price * cartItem.quantity}$
                  </span>
                </div>
                <button
                  className='btn btn-danger cart-item__remove'
                  onClick={() => dispatch(removeItemFromCart(cartItem.product))}
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
          <div className='w-75 mx-auto mt-4 d-flex justify-content-between'>
            <span className='fs-3'>Total price: {cartSumTotal}$</span>
            <Link to='/checkout' className='btn btn-primary'>
              Proceed to checkout
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export { CartProductsList };
