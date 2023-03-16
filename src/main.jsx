import React from "react";
import ReactDOM from "react-dom/client";
import App from "./question6/App";
import "./index.css";
import { Provider } from "hooks-for-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [

    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);
