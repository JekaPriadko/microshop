import { useFormik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/redux';
import { clearCart } from '../CartProducts/cartProducts-slice';

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  country: string;
  state: string;
  zip: string;
}

const CheckoutForm: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues: MyFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    state: '',
    zip: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required')
        .max(15, 'Must be 15 characters or less'),
      lastName: Yup.string()
        .required('Required')
        .max(20, 'Must be 20 characters or less'),
      email: Yup.string()
        .required('Required')
        .email('Please enter a valid email address for shipping updates.'),
      address: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      zip: Yup.string()
        .required('Required')
        .max(5, 'Must be 5 characters or less'),
    }),
    onSubmit: (values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        actions.resetForm();
        dispatch(clearCart());
        navigate('/');
      }, 1500);
    },
  });

  const getInputClassName = ({ valid }) => {
    return classnames('form-control', {
      'is-invalid': !valid,
    });
  };

  return (
    <>
      <form className='needs-validation' onSubmit={formik.handleSubmit}>
        <div className='row g-3'>
          <div className='col-sm-6'>
            <label htmlFor='firstName' className='form-label'>
              First name
            </label>
            <input
              id='firstName'
              name='firstName'
              type='text'
              className={getInputClassName({
                valid: !(formik.touched.firstName && formik.errors.firstName),
              })}
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className='invalid-feedback'>{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div className='col-sm-6'>
            <label htmlFor='lastName' className='form-label'>
              Last name
            </label>
            <input
              id='lastName'
              name='lastName'
              type='text'
              className={getInputClassName({
                valid: !(formik.touched.lastName && formik.errors.lastName),
              })}
              placeholder=''
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className='invalid-feedback'>{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div className='col-12'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={getInputClassName({
                valid: !(formik.touched.email && formik.errors.email),
              })}
              placeholder='you@example.com'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='invalid-feedback'>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className='col-12'>
            <label htmlFor='address' className='form-label'>
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              className={getInputClassName({
                valid: !(formik.touched.address && formik.errors.address),
              })}
              placeholder='1234 Main St'
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className='invalid-feedback'>{formik.errors.address}</div>
            ) : null}
          </div>

          <div className='col-md-5'>
            <label htmlFor='country' className='form-label'>
              Country
            </label>
            <select
              id='country'
              name='country'
              className={getInputClassName({
                valid: !(formik.touched.country && formik.errors.country),
              })}
              onChange={formik.handleChange}
              value={formik.values.country}
            >
              <option value=''>Choose...</option>
              <option value='us'>United States</option>
              <option value='ua'>Ukraine</option>
            </select>
            {formik.touched.country && formik.errors.country ? (
              <div className='invalid-feedback'>{formik.errors.country}</div>
            ) : null}
          </div>

          <div className='col-md-4'>
            <label htmlFor='state' className='form-label'>
              State
            </label>
            <select
              id='state'
              name='state'
              className={getInputClassName({
                valid: !(formik.touched.state && formik.errors.state),
              })}
              onChange={formik.handleChange}
              value={formik.values.state}
            >
              <option value=''>Choose...</option>
              <option value='ca'>California</option>
              <option value='fl'>Florida</option>
            </select>
            {formik.touched.state && formik.errors.state ? (
              <div className='invalid-feedback'>{formik.errors.state}</div>
            ) : null}
          </div>

          <div className='col-md-3'>
            <label htmlFor='zip' className='form-label'>
              Zip
            </label>
            <input
              type='text'
              id='zip'
              name='zip'
              className={getInputClassName({
                valid: !(formik.touched.zip && formik.errors.zip),
              })}
              placeholder=''
              onChange={formik.handleChange}
              value={formik.values.zip}
            />
            {formik.touched.zip && formik.errors.zip ? (
              <div className='invalid-feedback'>{formik.errors.zip}</div>
            ) : null}
          </div>
        </div>
        <button
          className='w-100 btn btn-primary btn-lg d-flex align-items-center justify-content-center mt-4'
          type='submit'
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting && (
            <span
              className='spinner-border spinner-border-sm'
              aria-hidden='true'
            ></span>
          )}
          <span role='status' className='ms-3'>
            Continue to checkout
          </span>
        </button>
      </form>
    </>
  );
};
export { CheckoutForm };
