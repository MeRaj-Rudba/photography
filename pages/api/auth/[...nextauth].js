import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/sign-in`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const userInfo = await res.json();

        if (userInfo) {
          // Any object returned will be saved in `user` property of the JWT
          console.log("3");
          return userInfo.user;
        } else {
          // If you return null or false then the credentials will be rejected
          console.log("4");
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error("error message") // Redirect to error page
          // throw "/path/to/redirect"        // Redirect to a URL
        }
      },
    }),
  ],

  secret: "test",
});
