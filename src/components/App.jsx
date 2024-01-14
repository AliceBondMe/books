import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyles';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};
