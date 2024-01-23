// In a file like 'sessionConfig.js'
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const configureSession = () => {
  return session({
    name: "ProjectPlatform-session", // Name of the session ID cookie
    secret: process.env.JWT_SECRET, // Secret used to sign the session ID cookie
    resave: false, // Do not save the session if it hasn't been modified
    saveUninitialized: false, // Do not save uninitialized sessions

    // Configure session store using MongoDB and mongoose
    store: MongoStore.create({
      client: mongoose.connection.getClient(), // Use the existing Mongoose connection client
      ttl: 60 * 60 * 24 * 3, // Time-to-live for sessions (3 days)
      touchAfter: 60 * 60 * 12, // Update session only if it hasn't been touched in this duration (lazy updates)
      // Crypto configuration for session store
      crypto: {
        secret: process.env.JWT_SECRET, // Secret used by the crypto library for additional security
      },
    }),
  });
};