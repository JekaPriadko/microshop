import { FC } from 'react';
import { IProduct } from '@/models/IProduct';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/redux';
import { toggleItemToCart } from '@/features/CartProducts/cartProducts-slice';
import { useCheckItemCart } from '@/features/CartProducts/use-checkItemCart';

interface ProductItemProps {
  product: IProduct;
}

const ProductItemCard: FC<ProductItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(toggleItemToCart(product));
  };

  const productInCart = useCheckItemCart(product);

  return (
    <>
      <Link
        to={`/product/${product.id}`}
        className='card h-100 text-decoration-none card-product'
      >
        <div className='card-header p-3'>
          <img
            src={product.images[0]}
            className='card-img-top card-img'
            alt={product.title}
          />
        </div>
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{product.title}</h5>
          <p className='card-text card-price'>{product.price}$</p>
          <p className='card-text'>{product.description}</p>
          <button
            type='button'
            className={`btn w-100 mt-auto ${
              productInCart ? 'btn-danger' : 'btn-primary'
            }`}
            onClick={handleAddToCart}
          >
            {productInCart ? 'Remove from cart' : 'Add to cart'}
          </button>
        </div>
        <div className='card-footer'>
          <small className='text-body-secondary'>{product.category.name}</small>
        </div>
      </Link>
    </>
  );
};

export default ProductItemCard;
