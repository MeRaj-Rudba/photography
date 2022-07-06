import Image from "next/image";
import Link from "next/link";

import axios from "axios";
import Hero from "../components/Hero/Hero";
import LandingScreen from "../components/Hero/landingScreen";
import lottieImage from "../components/images/lottie-2.gif";
import Showcase from "../components/Showcase/Showcase";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home(props) {
  return (
    <div>
      <Hero />
      <LandingScreen />

      <div className="h-64 w-64 mx-auto -rotate-6">
        <Image
          alt="Point of View."
          src={lottieImage}
          width={500}
          height={500}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="text-center my-5 text-2xl font-bold mx-auto ">
        <p>Featured</p>
      </div>

      <Showcase photographs={props.photographs} />
      <div className="text-center my-10">
        <Link href="/gallery">
          <a className=" text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-700 to-orange-400">
            See All
          </a>
        </Link>
      </div>
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
