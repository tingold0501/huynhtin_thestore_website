import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import NewArrivals from './components/NewArrivals.jsx';
import Login from './pages/Login.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products/:id",
    element: <NewArrivals />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="350862611618-57ac5t095fves3uqjkh9h30dgto60dge.apps.googleusercontent.com">;
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
