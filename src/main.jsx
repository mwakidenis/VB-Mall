import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./User/redux/store.jsx";
import { Toaster } from "react-hot-toast";

// DONOT EDIT THIS FILE ONLY USE APP.JSX AND MUST FOLLOW THE CODE CUIDLELINES

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <App />
        </Router>
      </HelmetProvider>
      <Toaster />
    </Provider>
  </React.StrictMode>
);
