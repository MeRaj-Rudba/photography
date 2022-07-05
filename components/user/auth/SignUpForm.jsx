import React, { useRef, useState } from "react";
import Image from "next/image";
import validator from "validator";
import SuccessModal from "../../Modals/SuccessModal";
import LoadingModal from "../../Modals/LoadingModal";
import ErrorModal from "../../Modals/ErrorModal";
import axios from "axios";

export default function SignUpForm() {
  const host = process.env.NEXT_PUBLIC_API_HOST;
  const cloudinary_url = process.env.NEXT_PUBLIC_CLOUDINARY;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [displayPicture, setDisplayPicture] = useState(null);

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setUsername("");
    setDisplayPicture(null);
  };
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    displayPicture: "",
  });

  const handleImage = async (event) => {
    setDisplayPicture(event.target.files[0]);
  };

  const handleSubmit = async () => {
    console.log("Precessing...");
    setLoading(true);

    setErrors({
      username: "",
      email: "",
      password: "",
      displayPicture: "",
    });

    let hasError = false;

    if (validator.isEmpty(username)) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        username: "Username can not be empty.",
      }));
      setLoading(false);
    }
    if (!validator.isEmail(email)) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        email: "Must provide a valid email.",
      }));
      setLoading(false);
    }

    if (!displayPicture) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        displayPicture: "You must select a display picture.",
      }));
      setLoading(false);
    }

    if (!validator.isLength(password, { min: 6 })) {
      hasError = true;
      setErrors((prevState) => ({
        ...prevState,
        password: "Password must be 6 character long.",
      }));
      setLoading(false);
    }

    if (!hasError) {
      const formDataImage = new FormData();

      formDataImage.append("file", displayPicture);
      formDataImage.append("upload_preset", "rudba-photography");
      // upload image logic here

      axios
        .post(cloudinary_url, formDataImage)
        // .then((r) => r.json())
        .then((res) => {
          console.log(JSON.stringify(res.data));

          const newUser = {
            name: username,
            email: email,
            password: password,
            displayPicture: res.data,
          };

          axios
            .post(`${host}/sign-up`, newUser)
            // .then((response) => response.json())
            .then((data) => {
              console.log(data);
              console.log("Sign up successfully:", data);

              clearForm();
              setLoading(false);
              setShowModal(true);
            })
            .catch(function (error) {
              console.log(error);
            });
        })

        .catch((err) => {
          console.log(err);
          setErrorModal(true);
          console.log("Error...");
        });
      // upload image logic here
    } else {
      return;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto ">
      <div className="bg-zinc-50  dark:bg-zinc-900  shadow-2xl shadow-black rounded px-8 pt-6 pb-8 my-10 ">
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
            htmlFor="username"
          >
            Username
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.username ? "border-red-500" : ""
            } rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            name="username"
          />
          <p className="text-red-500 text-xs italic">{errors.username}</p>
        </div>

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
            htmlFor="date"
          >
            Display Picture
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.displayPicture ? "border-red-500" : ""
            } rounded w-full py-2 px-3  text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline`}
            id="date"
            // value={image}
            onChange={handleImage}
            type="file"
            name="displayPicture"
            accept="image/*"
            placeholder="Display Picture"
          />
          <p className="text-red-500 text-xs italic">{errors.displayPicture}</p>
          {displayPicture && (
            <div className="my-5">
              <Image
                alt={username || "dp"}
                src={URL.createObjectURL(displayPicture)}
                width={200}
                height={200}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          )}
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
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
