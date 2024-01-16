import passport from "passport";
import Github from "passport-github2";
import Google from "passport-google-oauth20";

const GithubStrategy = Github.Strategy;
const GoogleStrategy = Google.Strategy;

/**
 * Function to configure Passport with Github and Google strategies
 */
export default function configurePassport() {
  // Serialize the user data to be stored in the session
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Deserialize the user data from the session
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  // Passport strategy for login via GitHub
  passport.use(
    new GithubStrategy(
      {
        // GitHub OAuth application credentials
        clientID: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,

        // Callback URL where GitHub will redirect after authentication
        callbackURL: "http://localhost:3000/api/auth/github/callback",

        // Requested access scope (user:email for email access)
        scope: "user:email",
      },
      async function (req, accessToken, refreshToken, profile, done) {
        // Logging for clarity
        console.log("GitHub authentication triggered");
        try {
          // Create user object with relevant data from GitHub profile
          const userEmail = profile.emails[0].value;
          const user = {
            id: profile.id,
            username: userEmail.split("@")[0], // Extract username from email
            email: userEmail,
            avatar: profile._json.avatar_url,
          };
          done(null, user); // Pass user data to the next step
        } catch (err) {
          // Handle errors if any
          return done(null, null, { message: "Unknown error" });
        }
      }
    )
  );

  // Passport strategy for login via Google
  passport.use(
    new GoogleStrategy(
      {
        // Google OAuth application credentials
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,

        // Callback URL where Google will redirect after authentication
        callbackURL: "http://localhost:3000/api/auth/google/callback",

        // Requested access scope (email for email access)
        scope: "email",
      },
      async function (req, accessToken, refreshToken, profile, done) {
        // Logging for clarity
        console.log("Google authentication triggered");
        try {
          // Create user object with relevant data
          const user = {
            id: profile.id,
            username: profile._json.email.split("@")[0], // Extract username from email
            email: profile._json.email,
            avatar: profile._json.picture,
          };
          done(null, user); // Pass user data to the next step
        } catch (err) {
          // Handle errors if any
          return done(null, null, { message: "Unknown error" });
        }
      }
    )
  );
}
