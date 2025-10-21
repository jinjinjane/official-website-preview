import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { Login } from "./screens/Login";
import { LoginSuccess } from "./screens/LoginSuccess";
import { Message } from "./screens/Message";
import { Pro } from "./screens/Pro";
import { PrivacyPolicy } from "./screens/privacy";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage />,
  },
  {
    path: "/homepageh5",
    element: <HomePage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/pro",
    element: <Pro />,
  },
  {
    path: "/loginsuccess",
    element: <LoginSuccess />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
