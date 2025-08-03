// router/router.tsx

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

/**
 * Main Router Component
 * Loops through route configuration and renders each route.
 * Uses React.lazy and Suspense for lazy loading with a fallback UI.
 */
const Router = () => {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Router;
