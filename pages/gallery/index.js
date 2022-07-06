import Image from "next/image";
import axios from "axios";

import lottieImage from "../../components/images/lottie-6.gif";
import Showcase from "../../components/Showcase/Showcase";

export default function Home(props) {
  return (
    <div>
      <div className="h-64 w-64 mx-auto">
        <Image
          alt="Point of View."
          src={lottieImage}
          width={500}
          height={500}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      {/* <div className="text-center my-5 text-2xl font-bold mx-auto ">
          <p>Photographs</p>
        </div> */}

      <Showcase photographs={props.photographs} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const host = process.env.NEXT_PUBLIC_API_HOST;
  try {
    const res = await axios.get(`${host}/get-all`);

    return {
      props: {
        photographs: res.data,
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
