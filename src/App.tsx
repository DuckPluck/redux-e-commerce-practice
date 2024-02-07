import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NoMatchPage } from './pages/NoMatchPage';

import './App.scss';


const router = createBrowserRouter([
  {
    element: (<HomePage />),
    errorElement: <NoMatchPage />,
    path: '/',
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
