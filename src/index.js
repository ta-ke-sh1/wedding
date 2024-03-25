import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { ToastContainer } from "react-toastify";
import { PreloaderWrapper } from "./components/preloader";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <PreloaderWrapper value={false}>
          <App />
          <ToastContainer />
        </PreloaderWrapper>
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);
