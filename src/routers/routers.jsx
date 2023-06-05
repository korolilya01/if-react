import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { App } from '../Components/App';
import { HotelCardPage } from '../Components/HotelCardPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Outlet />}>
        <Route path="/hotels/:id" element={<HotelCardPage />} />
      </Route>
    </>,
  ),
);
