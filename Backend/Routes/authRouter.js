import express from "express";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

const authRouter = express.Router();

// Route to check if a user session exists. Returns user data if authenticated, null otherwise.
authRouter.get("/session", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.send(null);
  }
});

// Route to sign out the user. Terminates the login session and responds with the user's status and a message.
authRouter.get("/signout", (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
  });
  res.clearCookie("ProjectPlatform-session");
  res.status(200).json({ user: null, message: "Logout successful." });
});

// GitHub authentication route. Initiates the GitHub OAuth flow.
authRouter.get("/github", passport.authenticate("github"));

// GitHub authentication callback route. Handles the response from GitHub after authentication.
// Redirects to the home page on success or to the login page on failure.
authRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect:
      process.env.NODE_ENV === "production"
        ? "/login"
        : "http://localhost:5173/login",
  }),
  (req, res) => {
    const { provider } = req.user;

    // Check if the provider is GitHub
    if (provider === "github") {
      // Redirect to home page on success
      res.redirect(
        process.env.NODE_ENV === "production" ? "/" : "http://localhost:5173/"
      );
    } else {
      // Redirect with query parameter to indicate an existing user
      res.redirect(
        process.env.NODE_ENV === "production"
          ? `/?existingUser=true`
          : "http://localhost:5173/?existingUser=true"
      );
    }
  }
);

// Google authentication route. Initiates the Google OAuth flow.
authRouter.get("/google", passport.authenticate("google"));

// Google authentication callback route. Handles the response from Google after authentication.
// Redirects to the home page on success or to the login page on failure.
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.NODE_ENV==="production"
      ? '/login'
      : "http://localhost:5173/login",
  }),
  (req, res) => {
    const { provider } = req.user;

    // Check if the provider is Google
    if (provider === "google") {
      // Redirect to home page on success
      res.redirect(process.env.NODE_ENV==="production" ? "/" : "http://localhost:5173/");
    } else {
      // Redirect with query parameter to indicate an existing user
      res.redirect(
        process.env.NODE_ENV === "production"
          ? `/?existingUser=true`
          : "http://localhost:5173/?existingUser=true"
      );
    }
  }
);

export default authRouter;
