import axios from "axios";
import { useSession, getSession, signOut } from "next-auth/react";

export default function Home(props) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Profile Found with {props.user.name}</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <h1>Profile should not load</h1>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const host = process.env.NEXT_PUBLIC_API_HOST;
  // const host = environment.api_url;

  if (session) {
    try {
      const res = await axios.get(`${host}/user/${session.user.email}`);

      return {
        props: {
          user: res.data.user,
          session: session,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        redirect: {
          destination: "/sign-in",
          permanent: false,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
};
