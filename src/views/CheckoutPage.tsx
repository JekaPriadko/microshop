import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartProductsCheckout } from '@/features/CartProducts/CartProductsCheckout';
import { CheckoutForm } from '@/features/CheckoutForm/CheckoutForm';
import { useCart } from '@/features/CartProducts/use-cartProducts';

const CheckoutPage = () => {
  const navigate = useNavigate();

  const { cart, cartCount } = useCart();

  useEffect(() => {
    if (cartCount <= 0) {
      navigate('/');
    }
  }, [cart]);

  return (
    <>
      <div className='container checkout mb-4'>
        <main>
          <div className='text-center mb-4'>
            <h1 className='text-center mb-2'>Checkout form</h1>

            <p className='lead'>Only for test</p>
          </div>

          <div className='row g-5'>
            <div className='col-md-5 col-lg-4 order-md-last'>
              <CartProductsCheckout />
            </div>
            <div className='col-md-7 col-lg-8'>
              <CheckoutForm />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export { CheckoutPage };
