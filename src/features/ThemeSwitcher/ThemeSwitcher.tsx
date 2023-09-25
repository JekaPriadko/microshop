import { useTheme } from '@/features/ThemeSwitcher/use-theme';

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <button type='button' className='switch-theme mr-0' id='switch-theme-js'>
        <input
          type='checkbox'
          className='switch-theme__checkbox'
          id='switch-theme__checkbox'
          checked={theme === 'white'}
          onChange={toggleTheme}
        />
        <label htmlFor='switch-theme__checkbox' className='switch-theme__label'>
          <i className='fas fa-moon'></i>
          <i className='fas fa-sun'></i>
          <span className='switch-theme__ball'></span>
        </label>
      </button>
    </>
  );
};

export { ThemeSwitcher };
