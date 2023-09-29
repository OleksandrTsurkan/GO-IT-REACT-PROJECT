import Products from 'components/Products';
import { Outlet } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <>
      <Outlet />
      <Products />
    </>
  );
};

export default ProductsPage;
