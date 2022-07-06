import axios from "axios";
import ImageDetails from "../../../components/Showcase/ImageDetails";
import environment from "../../../environment";

const ImageDetailsPage = ({ photograph }) => {
  return (
    <div>
      <ImageDetails info={photograph} />
    </div>
  );
};

export default ImageDetailsPage;

export const getStaticProps = async ({ params }) => {
  const host = environment.api_url;

  const { data } = await axios.get(`${host}/photograph/${params.imageId}`);
  const photograph = data;
  return {
    props: {
      photograph: photograph,
    },
  };
};

export const getStaticPaths = async () => {
  const host = process.env.NEXT_PUBLIC_API_HOST;
  const { data } = await axios.get(`${host}/get-all`);
  const photographs = data;
  const paths = photographs.map((photo) => ({
    params: { imageId: photo._id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};
