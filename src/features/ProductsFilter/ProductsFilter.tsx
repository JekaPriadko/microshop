import { useCategoriesList } from '@/features/CategoriesList/use-categoriesList';
import { useProductsFilter } from '@/features/ProductsFilter/use-productsFilter';
import { ICategory } from '@/models/ICategory';

function ProductsFilter() {
  const { categories, categoriesInfo } = useCategoriesList();
  const { status } = categoriesInfo;

  const {
    filters,
    handleCategory,
    handleSearch,
    handleRange,
    handleClearFilters,
  } = useProductsFilter();

  return (
    <>
      {status === 'received' && categories && (
        <div className='d-flex flex-column flex-shrink-0 bg-body-tertiary'>
          <ul className='nav nav-pills mb-auto flex-wrap'>
            {categories.map((category: ICategory) => (
              <li key={category.id} onClick={() => handleCategory(category)}>
                <button
                  type='button'
                  className={`nav-link ${
                    category.id === filters.categoryId
                      ? 'active '
                      : 'link-body-emphasis'
                  }`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <hr />

      <div className='d-flex flex-column flex-shrink-0 bg-body-tertiary'>
        <p>Search</p>
        <input
          type='text'
          className='form-control'
          placeholder='soap, metal, etc'
          value={filters.title || ''}
          onChange={handleSearch}
        />

        <hr />
        <div className='row'>
          <div className='col'>
            <p>From</p>
            <input
              type='number'
              className='form-control'
              placeholder='0$'
              value={filters.price_min || ''}
              onChange={(e) => handleRange(e, 'min')}
            />
          </div>
          <div className='col'>
            <p>To</p>
            <input
              type='texts'
              className='form-control'
              placeholder='999$'
              value={filters.price_max || ''}
              onChange={(e) => handleRange(e, 'max')}
            />
          </div>
          <p className='col-12 mt-2'>
            <small>
              You need to enter 2 values for the filter to work (unfortunately,
              this is logic free API)
            </small>
          </p>
        </div>
      </div>

      <hr />

      <button
        type='button'
        className='btn btn-danger w-100'
        onClick={handleClearFilters}
      >
        Reset
      </button>
    </>
  );
}

export default ProductsFilter;
