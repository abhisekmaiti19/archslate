import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Tasks from "./pages/Tasks.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="home" element={<Landing />}></Route>
        <Route path="project" element={<Projects />}></Route>
        <Route path="tasks" element={<Tasks />}></Route>
        <Route path="people" element={<Landing />}></Route>
        <Route path="hiring" element={<Landing />}></Route>
        <Route path="settings" element={<Landing />}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
