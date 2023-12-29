import { skipCSRFCheck } from "@auth/core";
import GitHub from "@auth/core/providers/github";
import dotenv from 'dotenv';
dotenv.config()

export const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      token.access_token = account?.access_token;
      token.profile = profile;
      return token;
    },
    async redirect({ url, baseUrl }) {
        console.log(url, baseUrl);
        baseUrl="http://localhost:5173/"
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
};

