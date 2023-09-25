import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';

import { setTheme } from './theme-slice';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'white' ? 'dark' : 'white'));

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};
