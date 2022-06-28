import Head from "next/head";
import Image from "next/image";
import Layout from "../../../sections/Layout";

const ImageDetails = () => {
  return (
    <div>
      <Head>
        <title>Point Of View</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <h1>Gallery Page</h1>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default ImageDetails;
