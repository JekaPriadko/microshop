import { FaShoppingBag } from 'react-icons/fa';
import { useCart } from '@/features/CartProducts/use-cartProducts';
import { Link } from 'react-router-dom';

const CartProductsButton = () => {
  const { cartCount } = useCart();

  return (
    <>
      <Link to='/cart' className='cart-button link-body-emphasis text-body'>
        <FaShoppingBag className='cart-button__icon' />
        {!!cartCount && <span className='cart-button__count'>{cartCount}</span>}
      </Link>
    </>
  );
};

export { CartProductsButton };
