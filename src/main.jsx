import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import MainPage from "./MainPage.jsx";
const router = createBrowserRouter([
  {
    path: "/project123/",
    element: <App />,
    children: [
      {
        path: "/project123/",
        element: <MainPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
