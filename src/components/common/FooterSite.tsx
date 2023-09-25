import { Link, NavLink } from 'react-router-dom';

import navMenuList from '@/utils/navMenuList';

const FooterSite = () => {
  return (
    <div className='container-fluid mt-auto'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <p className='col-md-4 mb-0 text-body-secondary'>© 2023 Example, Inc</p>

        <Link
          to='/'
          className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'
        >
          <img className='bi me-2' src='/vite.svg' alt='' />
        </Link>

        <ul className='nav col-md-4 justify-content-end'>
          {navMenuList.map((item, index) => (
            <li className='nav-item' key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link px-2 text-body-secondary'
                    : 'nav-link px-2'
                }
                to={item.link}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export { FooterSite };
