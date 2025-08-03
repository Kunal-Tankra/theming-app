
import { lazy } from "react";
import { About, Contact, Home } from "./path";

/**
 * Route configuration array
 * Each route is lazily loaded to improve performance.
 * Paths are imported from a central `path` file for better maintainability.
 */
export const routes = [
    {
        path: Home,
        element: lazy(() => import("../pages/Home")), // Home page route
    },
    {
        path: About,
        element: lazy(() => import("../pages/About")), // About page route
    },
    {
        path: Contact,
        element: lazy(() => import("../pages/Contact")), // Contact page route
    },
];
