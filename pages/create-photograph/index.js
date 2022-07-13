import Form from "../../components/Form";
import axios from "axios";
import { useSession, getSession, signOut } from "next-auth/react";
import Image from "next/image";
import Unauthorized from "../../components/custom-components/Unauthorized";

export default function CreatePage(props) {
  if (props.user.role === "admin") {
    return (
      <div>
        <Form />
      </div>
    );
  } else {
    return <Unauthorized />;
  }
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
