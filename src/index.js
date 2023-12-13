import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from "./pages/home";
import {Posts} from "./pages/posts";
import {App} from "./App";
import {Admin} from "./pages/admin";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {ContactPage} from "./pages/contact";
import {PostPage} from "./pages/post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <PostPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
