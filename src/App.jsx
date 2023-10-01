import Layout from 'Layout/Layout';
import Homepage from 'pages/Homepage';
import ProductsPage from 'pages/ProductsPage';
// import ProductsPageDetails from 'pages/ProductsPageDetails';
import TodoPage from 'pages/TodoPage';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ProductsPageDetails = lazy(() => import('pages/ProductsPageDetails'));

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="todos" element={<TodoPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route
          path="products/:productId"
          element={
            <Suspense fallback={'loading...'}>
              <ProductsPageDetails />
            </Suspense>
          }
        />
      </Route>
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default App;
