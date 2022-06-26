import React from "react";
import Image from "next/image";
import lottieImage from "../images/loading.gif";

export default function LoadingModal({ setShowModal }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-50 dark:bg-zinc-700 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              {/* <button
                className="p-1 ml-auto bg-transparent border-0 text-pink-600  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="text-pink-600  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button> */}
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
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
              <h3 className="bg-clip-text text-center font-bold text-pink-600">
                Loading...
              </h3>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
