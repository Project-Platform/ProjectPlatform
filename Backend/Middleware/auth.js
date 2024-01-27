/**
 * Middleware to check if the user is authenticated with Passport.js.
 * If authenticated, the request is allowed to proceed to the next middleware or route handler.
 * If not authenticated, the user may be redirected to the login page or handled accordingly.
 */
export function authenticated(req, res, next) {
  // Check if the user is authenticated with Passport.js
  if (req.isAuthenticated()) {
    // The user is authenticated, you can proceed with the next middleware or route handler
    return next();
  }

  // If not authenticated, you may redirect to the login page or handle it accordingly
  return res.redirect(
    process.env.NODE_ENV==="production" ? `/login` : "http://localhost:5173/login"
  );
}
