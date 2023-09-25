import { useParams } from 'react-router-dom';

import { OneProduct } from '@/features/OneProduct/OneProduct';

const OneProductPage = () => {
  const { id } = useParams();
  const productId: number | null = id ? parseInt(id, 10) : null;

  return (
    <>
      <OneProduct productId={productId} />
    </>
  );
};

export { OneProductPage };
