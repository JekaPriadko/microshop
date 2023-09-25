import { Link } from 'react-router-dom';

const E404Page = () => {
  return (
    <>
      <div className='px-4 py-5 my-5 text-center h-100'>
        <h1 className='display-5 fw-bold text-body-emphasis'>404</h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>Page not found</p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <Link className='btn btn-primary btn-lg px-4 gap-3' to='/'>
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { E404Page };
