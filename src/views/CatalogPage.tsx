import ProductsFilter from '@/features/ProductsFilter/ProductsFilter';
import { ProductsList } from '@/features/ProductsList/ProductsList';

const CatalogPage = () => {
  return (
    <>
      <div className='container'>
        <div className='row align-items-start'>
          <div className='bg-body-tertiary border rounded-3 col-3 position-sticky sidebar p-3'>
            <ProductsFilter />
          </div>
          <div className='col-9'>
            <ProductsList />
          </div>
        </div>
      </div>
    </>
  );
};

export { CatalogPage };
