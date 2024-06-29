import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Page/ErrorPage';
import HomePage from './Page/HomePage';
import Discover from './Page/Discover';
import Funded from './Page/Funded';

const myRouter = createBrowserRouter([{
  element:<App />,
  path: '/',
  errorElement: <ErrorPage />,
  children:[
    {
      path:'/',
      element:<HomePage />,
    },
    {
      path:'/discover',
      element:<Discover />,
    },
    {
      path:'/funded',
      element:<Funded />,
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);


