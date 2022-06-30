import React, { useState } from "react";
import axios from "axios";
import lottieImage from "../images/lottie-loader.gif";
import Image from "next/image";

export default function LoveReact(props) {
  const [likes, setLikes] = useState(props.likes.length);
  const [loading, setLoading] = useState(false);
  const [loved, setLoved] = useState(likes > 0 ? true : false);

  const handleLoveReact = async () => {
    setLoading(true);

    await axios
      .put(`http://localhost:8080/photograph/${props.id}`, {
        likes: loved ? [] : [{ username: "MeRaj Rudba", id: "u-000001" }],
      })
      .then((data) => {
        console.log(data);
        setLoved(!loved);
        setLikes(loved ? likes - 1 : likes + 1);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <span className=" text-gray-800 text-xs font-medium inline-flex items-center rounded mr-2  dark:text-zinc-50 ">
      {loading ? (
        <span>
          <svg
            role="status"
            className="h-6 w-6 animate-spin mr-2 text-rose-600  fill-zinc-50 dark:fill-zinc-800 "
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </span>
      ) : (
        <>
          {loved ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-rose-600 mr-2 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={handleLoveReact}
              s
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-rose-600 mr-2 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={handleLoveReact}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          )}
        </>
      )}

      {likes}
    </span>
  );
}
