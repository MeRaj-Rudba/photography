import axios from "axios";
import { useSession, getSession, signOut } from "next-auth/react";
import ProfileCard from "../../components/user/ProfileCard";

export default function Home(props) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <ProfileCard user={props.user} signOut={signOut} />
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
          destination: "/auth",
          permanent: false,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
};
