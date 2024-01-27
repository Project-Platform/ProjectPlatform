import passport from "passport";
import Github from "passport-github2";
import Google from "passport-google-oauth20";
import Student from "../Models/student.js"

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
        callbackURL: process.env.SERVER_URL
          ? `${process.env.SERVER_URL}/api/auth/github/callback`
          : "http://localhost:3000/api/auth/github/callback",

        // Requested access scope (user:email for email access)
        scope: "user:email",
      },
      async function (req, accessToken, refreshToken, profile, done) {
        // Logging for clarity
        console.log("GitHub authentication triggered");
        try {
          // Check if the email exists in the Student model
          const existingUser = await Student.findOne({
            email: profile.emails[0].value,
          });
          if (existingUser) {
            // If user exists, return specific fields
            const { username, email, provider, providerId, avatar } =
              existingUser;
            done(null, { username, email, provider, providerId, avatar });
          } else {
            // Create user object with relevant data from GitHub profile
            const userEmail = profile.emails[0].value;
            const user = {
              username: userEmail.split("@")[0], // Extract username from email
              email: userEmail,
              provider: "github",
              providerId: profile.id,
              avatar: profile._json.avatar_url,
            };

            const savedUser = new Student(user);
            // Create a new student in the database
            const createdUser = await savedUser.save();
            // Return specific fields for the newly created user
            const { username, email, provider, providerId, avatar } =
              createdUser;
            done(null, { username, email, provider, providerId, avatar });
          }
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
        callbackURL: process.env.SERVER_URL
          ? `${process.env.SERVER_URL}/api/auth/google/callback`
          : "http://localhost:3000/api/auth/google/callback",

        // Requested access scope (email for email access)
        scope: "email",
      },
      async function (req, accessToken, refreshToken, profile, done) {
        // Logging for clarity
        console.log("Google authentication triggered");
        try {
          // Check if the email exists in the Student model
          const existingUser = await Student.findOne({
            email: profile._json.email,
          });

          if (existingUser) {
            // If user exists, return specific fields
            const { username, email, provider, providerId, avatar } =
              existingUser;
            done(null, { username, email, provider, providerId, avatar });
          } else {
            // Create user object with relevant data from Google profile
            const user = {
              username: profile._json.email.split("@")[0], // Extract username from email
              email: profile._json.email,
              provider: "google",
              providerId: profile.id,
              avatar: profile._json.picture,
            };

            const savedUser = new Student(user);

            // Create a new student in the database
            const createdUser = await savedUser.save();

            // Return specific fields for the newly created user
            const { username, email, provider, providerId, avatar } =
              createdUser;
            done(null, { username, email, provider, providerId, avatar });
          }
        } catch (err) {
          // Handle errors if any
          return done(null, null, { message: "Unknown error" });
        }
      }
    )
  );
}
