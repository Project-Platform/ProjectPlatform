import express from "express";
import passport from "passport";

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
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ user: req.user, message: "Logout successful." });
  });
});

// GitHub authentication route. Initiates the GitHub OAuth flow.
authRouter.get("/github", passport.authenticate("github"));

// GitHub authentication callback route. Handles the response from GitHub after authentication.
// Redirects to the home page on success or to the login page on failure.
authRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:5173/");
  }
);

// Google authentication route. Initiates the Google OAuth flow.
authRouter.get("/google", passport.authenticate("google"));

// Google authentication callback route. Handles the response from Google after authentication.
// Redirects to the home page on success or to the login page on failure.
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:5173/");
  }
);

export default authRouter;