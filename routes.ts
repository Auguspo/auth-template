/** An array of routes that are accesible to the public
 * These routes don't require authentication
 */

export const publicRoutes = ["/", "/auth/new-verification"];

/** An array of routes that are used for authentication
 * These routes redirect logged in users to /settings
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/** The prefix for authentication routes
 */

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
