import axios from "axios";

export default function Home(props) {
  return (
    <div>
      <h1>Profile Page </h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  const host = process.env.NEXT_PUBLIC_API_HOST;
  // const host = environment.api_url;
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
