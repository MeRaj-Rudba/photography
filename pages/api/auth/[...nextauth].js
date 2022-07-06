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

// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials, req) {
//         // You need to provide your own logic here that takes the credentials
//         // submitted and returns either a object representing a user or value
//         // that is false/null if the credentials are invalid.
//         // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//         // You can also use the `req` object to obtain additional parameters
//         // (i.e., the request IP address)
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/sign-in`, {
//           method: "POST",
//           body: JSON.stringify(credentials),
//           headers: { "Content-Type": "application/json" },
//         });
//         const user = await res.json();

//         // If no error and we have user data, return it
//         if (res.ok && user) {
//           return user;
//         }
//         // Return null if user data could not be retrieved
//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     // called after sucessful signin
//     jwt: async ({ token, user }) => {
//       if (user) token.email = user.email;
//       return token;
//     }, // called whenever session is checked
//     session: async ({ session, token }) => {
//       if (token) session.email = token.email;
//       return session;
//     },
//   },
//   secret: "SECRET_HERE",
//   session: {
//     strategy: "jwt",
//     maxAge: 1 * 24 * 60 * 60, // 1d
//   },
//   jwt: {
//     secret: "SECRET_HERE",
//     encryption: true,
//   },
// });
