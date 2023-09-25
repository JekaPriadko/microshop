import { SpinerLoading } from '@/components/common/SpinerLoading';
import ProductItemCard from '@/components/ProductItemCard';

import { IProduct } from '@/models/IProduct';
import { useProductsList } from '@/features/ProductsList/use-productsList';

const ProductsList = () => {
  const { products, productsInfo } = useProductsList();
  const { error, status } = productsInfo;
  return (
    <>
      {error && <h1>Error</h1>}
      {status === 'loading' && <SpinerLoading />}

      {status === 'received' && products.length <= 0 && (
        <h1 className='w-100 my-5 text-center'>Not Fount Products</h1>
      )}

      {status === 'received' && products.length > 0 && (
        <>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {products.map((product: IProduct) => (
              <div className='col' key={product.id}>
                <ProductItemCard product={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export { ProductsList };
