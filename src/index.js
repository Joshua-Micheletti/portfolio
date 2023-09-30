// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// react router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// page components import
import Homepage from './pages/homepage';
import ProjectsPage from './pages/projectsPage';
import ErrorPage from './pages/errorpage';

// style import
import './styles/index.css';

// create routes to reach every page
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
    // pass a random number to randomize the color of the projects
    element: <ProjectsPage seed={(Math.random() * 1000).toString()}/>,
    errorElement: <ErrorPage />,
  }
]);

// get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// render the page (according to the routes)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
