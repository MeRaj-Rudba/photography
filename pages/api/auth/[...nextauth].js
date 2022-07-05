import NextAuth from "next-auth";
import Providers from "next-auth/providers";
// import { MongoClient } from "mongodb";
import axios from "axios";

export default NextAuth({
  //Configure JWT
  session: {
    jwt: true,
  },
  //Specify Provider
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_HOST}/sign-in`,
          credentials
        );

        if (response.message === "success") {
          return { email: response.user.email };
        } else if (response.message === "No user found with the email") {
          throw new Error("No user found with the email");
        } else if (response.message === "Password doesnt match") {
          throw new Error("Password doesnt match");
        }
      },
    }),
  ],
});
