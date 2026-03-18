import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { Login } from "./screens/Login";
import { LoginSuccess } from "./screens/LoginSuccess";
import { Message } from "./screens/Message";
import { Pro } from "./screens/Pro";
import { PrivacyPolicy } from "./screens/privacy";
import { SubscriptionGuide } from "./screens/SubscriptionGuide";
import { TermsOfUse } from "./screens/terms";
import { LoginGoogle } from "./screens/LoginGoogle";
import { LoginApple } from "./screens/LoginApple/LoginApple";

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
    path: "/terms",
    element: <TermsOfUse />,
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUse />,
  },
  {
    path: "/subscription-guide",
    element: <SubscriptionGuide />,
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
  {
    path: "/login-google",
    element: <LoginGoogle />,
  },
  {
    path: "/login-apple",
    element: <LoginApple />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
