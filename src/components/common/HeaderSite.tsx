import { Link, NavLink } from 'react-router-dom';

import navMenuList from '@/utils/navMenuList';
import { ThemeSwitcher } from '@/features/ThemeSwitcher/ThemeSwitcher';
import { CartProductsButton } from '@/features/CartProducts/CartProductsButton';

const HeaderSite = () => {
  return (
    <div className='container-fluid'>
      <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
        <div className='col-md-3 mb-2 mb-md-0'>
          <Link
            className='d-inline-flex link-body-emphasis text-decoration-none'
            to='/'
          >
            <img className='bi' src='/vite.svg' alt='' />
          </Link>
        </div>

        <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
          {navMenuList.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link px-2 link-secondary' : 'nav-link px-2'
                }
                to={item.link}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='col-md-3 d-flex justify-content-end'>
          <ThemeSwitcher />
          <CartProductsButton />
        </div>
      </header>
    </div>
  );
};

export { HeaderSite };
