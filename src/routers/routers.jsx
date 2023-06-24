import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { App } from '../Components/App';
import { Authorization } from '../Components/Authorization';
import { HotelCardPage } from '../Components/sections/Homes/Card';
import { SystemLayout } from '../Components/SystemLayout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route path="/login" element={<Authorization />} />
      <Route path="/" element={<App />} />
      <Route path="/" element={<Outlet />}>
        <Route path="/hotels/:id" element={<HotelCardPage />} />
      </Route>
    </Route>,
  ),
);
