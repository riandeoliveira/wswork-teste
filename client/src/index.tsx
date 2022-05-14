import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import { GlobalStyle } from "./index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
