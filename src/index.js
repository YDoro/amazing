import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/header/header';
import UserContext from './contexts/user-context';
import './index.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Profile from './pages/profile/profile';
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
  {
    path: "/profile",
    element: withHeader(<Profile />),
  },
])


const App = () => {
  const storageLogged =  localStorage.getItem('logged') ?? false

  const [logged, setLogged] = useState(storageLogged)

  const setLoggedAndStore = (isLogged) => {
    setLogged(isLogged)
    localStorage.setItem('logged',isLogged)
  }

  return (
    <React.StrictMode>
      <UserContext.Provider value={{ logged, setLogged:setLoggedAndStore }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </React.StrictMode>
  )
}

root.render(
  <App />
);

reportWebVitals();
