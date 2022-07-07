import axios from "axios";
import SignInForm from "../components/user/auth/SignInForm";

export default function SignIn(props) {
  return (
    <div>
      <SignInForm />
    </div>
  );
}

export const getServerSideProps = async () => {
  const host = process.env.NEXT_PUBLIC_API_HOST;
  try {
    const res = await axios.get(`${host}/get-all`);

    return {
      props: {
        photographs: res.data.filter((photo) => photo.isFeatured),
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      data: null,
    },
  };
};
