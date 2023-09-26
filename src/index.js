import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/homepage';
import ProjectsPage from './pages/projectsPage';
import ErrorPage from './pages/errorpage';
import ScrollToTop from './tools/scrollToTop';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio/projects",
    element: <ProjectsPage />,
    errorElement: <ErrorPage />,
  }
]);



root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
