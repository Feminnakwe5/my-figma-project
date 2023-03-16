import './App.css';
import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import FinishUp from './components/FinishUp';
import ThankYou from './components/ThankYou';
import MainLayout from './components/layout/MainLayout';
import Info from './pages/Info';
import AddOns from './pages/Addons';
import Plans from './pages/Plans';
import InfoLayout from './components/layout/InfoLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='info' element={<InfoLayout />}>
        <Route index element={<Info />} />
        <Route path='addons' element={<AddOns />} />
        <Route path='plans' element={<Plans />} />
        <Route path='finish' element={<FinishUp />} />
      </Route>
      <Route path='ThankYou' element={<ThankYou />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
