import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { App } from '../components/App';
import { Authorization } from '../components/Authorization';
import { HotelCardPage } from '../components/sections/Homes/Card';
import { SystemLayout } from '../components/SystemLayout';

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
