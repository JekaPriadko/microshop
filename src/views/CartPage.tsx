import { CartProductsList } from '@/features/CartProducts/CartProductsList';

const CartPage = () => {
  return (
    <>
      <div className='container'>
        <h1 className='text-center mb-4'>Your cart</h1>
        <CartProductsList />
      </div>
    </>
  );
};

export { CartPage };
