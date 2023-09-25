import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/redux';

import { E404Page } from '@/views/E404Page';

import {SpinerLoading} from '@/components/common/SpinerLoading';
import { useOneProduct } from '@/features/OneProduct/use-oneProduct';
import { setCategory } from '@/features/ProductsFilter/use-setCategory';
import { useCheckItemCart } from '@/features/CartProducts/use-checkItemCart';
import { toggleItemToCart } from '@/features/CartProducts/cartProducts-slice';

import '@/features/OneProduct/oneProduct.scss';
import { IProduct } from '@/models/IProduct';

interface OneProductProps {
  productId: number;
}

const OneProduct: React.FC<OneProductProps> = ({ productId }) => {
  const dispatch = useAppDispatch();

  const { status, error, currentProduct } = useOneProduct(productId);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
    if (!currentProduct?.images.length) return;

    setCurrentImage(currentProduct?.images[0]);
  }, [currentProduct]);

  const navigate = useNavigate();
  const [handleCategory] = setCategory();
  const handleCategoryClick = () => {
    if (!currentProduct) return;

    handleCategory(currentProduct.category);
    navigate('/');
  };

  const productInCart = useCheckItemCart(currentProduct as IProduct);

  return (
    <>
      {status === 'loading' && <SpinerLoading />}
      {error && <E404Page />}
      {status === 'received' && currentProduct && (
        <div className='container'>
          <div className='product row'>
            <div className='product__gallery col-7'>
              <div className='row'>
                <img
                  className='product__gallery-current col-9'
                  src={currentImage}
                  alt=''
                />
                <div className='product__gallery-list container-fluid col-3'>
                  <div className='row flex-column align-items-center h-100'>
                    {currentProduct.images.map((image: string, i: number) => (
                      <div className='col d-flex' key={i}>
                        <img
                          className='product__gallery-preview w-100 my-1'
                          src={image}
                          alt={currentProduct.title}
                          onClick={() => setCurrentImage(image)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='product__info col-5'>
              <div className='mb-5'>
                <h1>{currentProduct.title}</h1>
                <p>{currentProduct.description}</p>
              </div>
              <p className='product__info-category'>
                <span className='product__info-left'>Category:</span>
                <span>
                  <button
                    type='button'
                    className='btn btn-warning btn-sm'
                    onClick={handleCategoryClick}
                  >
                    {currentProduct.category.name}
                  </button>
                </span>
              </p>
              <p className='product__info-category'>
                <span className='product__info-left'>Price:</span>
                <span>{currentProduct.price}$</span>
              </p>
              <div>
                <button
                  type='button'
                  className={`btn btn-lg ${
                    productInCart ? 'btn-danger' : 'btn-primary'
                  }`}
                  onClick={() => dispatch(toggleItemToCart(currentProduct))}
                >
                  {productInCart ? 'Remove from cart' : 'Add to cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { OneProduct };
