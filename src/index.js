import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/header/header';
import './index.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const withHeader = (component) => {
  return (
    <>
      <Header />
      {component}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: withHeader(<Home />),
  },
  {
    path: "/login",
    element: withHeader(<Login />),
  },
])


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
