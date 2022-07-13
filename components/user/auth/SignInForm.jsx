import React, { useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import validator from "validator";
import SuccessModal from "../../Modals/SuccessModal";
import LoadingModal from "../../Modals/LoadingModal";
import ErrorModal from "../../Modals/ErrorModal";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignInForm(props) {
  const host = process.env.NEXT_PUBLIC_API_HOST;
  const cloudinary_url = process.env.NEXT_PUBLIC_CLOUDINARY;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      if (!result.error) {
        //set auth state
        router.replace("/profile");
      }

      clearForm();
    } catch (error) {
      setErrorModal(true);
      console.log(error);
    }

    // e.preventDefault();
    // setLoading(true);
    // const { error } = await signIn("credentials", {
    //   redirect: false,
    //   email: email,
    //   password: password,
    // });
    // setLoading(false);
    // if (error) {
    //   setErrorModal(true);
    // } else {
    //   setShowModal(true);
    // }
  };

  return (
    <div className="w-full max-w-lg mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-50  dark:bg-zinc-900  shadow-2xl shadow-black rounded px-8 pt-6 pb-8 my-10 "
      >
        {showModal ? (
          <>
            <SuccessModal setShowModal={setShowModal} />
          </>
        ) : null}
        {loading ? (
          <>
            <LoadingModal setShowModal={setLoading} />
          </>
        ) : null}
        {errorModal ? (
          <>
            <ErrorModal setShowModal={setErrorModal} />
          </>
        ) : null}

        <div className="mb-4">
          <label
            className="block  text-slate-700 dark:text-slate-50 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.email ? "border-red-500" : ""
            } rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
          />
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        </div>

        <div className="mb-4">
          <label
            className="block  text-slate-700 dark:text-slate-50 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.password ? "border-red-500" : ""
            } rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="location"
            type="password"
            value={password}
            name="passowrd"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <p className="text-red-500 text-xs italic">{errors.password}</p>
        </div>

        {/* end of form */}
        <div className="flex items-center justify-between">
          <button
            className="text-white bg-gradient-to-br from-pink-700 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-between">
          <p
            onClick={() => {
              props.setHasAccount(false);
            }}
            className="font-bold cursor-pointer hover:text-pink-700"
          >
            I Dont have an account.
          </p>
        </div>
      </form>
    </div>
  );
}
