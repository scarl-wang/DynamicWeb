import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProjectsProvider } from "./context/projects";
import { SessionsProvider } from "./context/sessions";
import { TimerProvider } from "./context/timer";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectsProvider>
        <SessionsProvider>
          <TimerProvider>
            <App />
          </TimerProvider>
        </SessionsProvider>
      </ProjectsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
