import { skipCSRFCheck } from "@auth/core";
import GitHub from "@auth/core/providers/github";
import dotenv from 'dotenv';
dotenv.config()

export const authConfig = {
    providers: [
        GitHub({clientId:process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET})
],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            token.access_token = account?.access_token
            token.profile = profile
            return token
        }
    },
    skipCSRFCheck: skipCSRFCheck,
    trustHost: true,
};

