import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
