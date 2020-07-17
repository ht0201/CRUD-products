import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routes = [
   {
      path: '/',
      exact: true,
      main: ({ match }) => <HomePage match={match} />
   },
   {
      path: '/product-list',
      exact: false,
      main: ({ match }) => <ProductListPage match={match} />
   },
   {
      path: '/product/add',
      exact: false,
      main: ({history}) => <ProductActionPage history={history}/>
   },
   {
      path: '/product/:id/edit',
      exact: false,
      main: ({match, history}) => <ProductActionPage match={match} history={history}/>
   },
   {
      path: '',
      exact: false,
      main: () => <NotFoundPage />
   },

];

export default routes;