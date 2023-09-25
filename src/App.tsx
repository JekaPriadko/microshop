import { useRoutes } from 'react-router-dom';
import routes from '@/routes';

import { HeaderSite } from '@/components/common/HeaderSite';
import { FooterSite } from '@/components/common/FooterSite';
import { E404Page } from '@/views/E404Page';

function App() {
  const page = useRoutes(routes);

  return (
    <>
      <HeaderSite />
      {page ?? <E404Page />}
      <FooterSite />
    </>
  );
}

export default App;
